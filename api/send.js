// Vercel serverless function: receives the contact form and emails it with Resend.
// Environment variables (Vercel > Project > Settings > Environment Variables):
//   RESEND_API_KEY   your Resend API key
//   MAIL_FROM        verified sender, e.g.  A&AI StratEdge Website <website@aandaistratedge.com>
//   MAIL_TO          inbox that receives enquiries, e.g.  contactus@aandaistratedge.com
// Optional:
//   ALLOWED_ORIGINS  comma-separated list of site origins allowed to call this function
const { Resend } = require('resend');

const DEFAULT_ORIGINS = [
  'https://aaistratedgeconsulting.me',
  'http://aaistratedgeconsulting.me',
  'https://www.aaistratedgeconsulting.me',
  'http://localhost:8000',
];

const esc = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const clean = (v, max) => String(v == null ? '' : v).replace(/\r/g, '').trim().slice(0, max);
const oneLine = (v) => String(v).replace(/[\r\n]+/g, ' ');

module.exports = async (req, res) => {
  const allowed = (process.env.ALLOWED_ORIGINS ? process.env.ALLOWED_ORIGINS.split(',') : DEFAULT_ORIGINS).map((o) => o.trim());
  const origin = req.headers.origin;
  // Calls from the site's own domain (e.g. your *.vercel.app or custom domain) are always allowed
  const sameOrigin = origin && req.headers.host && origin.replace(/^https?:\/\//, '') === req.headers.host;
  if (sameOrigin && !allowed.includes(origin)) allowed.push(origin);
  if (origin && allowed.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Vary', 'Origin');
  }
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') return res.status(405).json({ success: false, message: 'Method not allowed' });
  if (origin && !allowed.includes(origin)) return res.status(403).json({ success: false, message: 'Origin not allowed' });

  let body = req.body || {};
  if (typeof body === 'string') {
    try { body = JSON.parse(body); } catch (e) { body = {}; }
  }

  const name = clean(body.name, 100);
  const email = clean(body.email, 150);
  const phone = clean(body.phone, 40);
  const service = clean(body.service, 100);
  const message = clean(body.message, 3000);

  if (!name || !email) return res.status(400).json({ success: false, message: 'Name and email are required' });
  if (!/^[^\s@,;<>]+@[^\s@,;<>]+\.[^\s@,;<>]+$/.test(email)) {
    return res.status(400).json({ success: false, message: 'Invalid email' });
  }

  const { RESEND_API_KEY, MAIL_FROM, MAIL_TO } = process.env;
  if (!RESEND_API_KEY || !MAIL_FROM || !MAIL_TO) {
    console.error('Missing RESEND_API_KEY / MAIL_FROM / MAIL_TO environment variables');
    return res.status(500).json({ success: false, message: 'Server is not configured' });
  }

  try {
    const resend = new Resend(RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: MAIL_FROM,
      to: MAIL_TO,
      replyTo: email, // pressing Reply answers the visitor
      subject: `Enquiry from ${oneLine(name)}${service ? ' - ' + oneLine(service) : ''}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone/WhatsApp: ${phone || '-'}\nInterested in: ${service || '-'}\n\nMessage:\n${message || '-'}`,
      html:
        `<table cellpadding="6" style="font-family:Arial,sans-serif;font-size:14px">` +
        `<tr><td><b>Name</b></td><td>${esc(name)}</td></tr>` +
        `<tr><td><b>Email</b></td><td>${esc(email)}</td></tr>` +
        `<tr><td><b>Phone/WhatsApp</b></td><td>${esc(phone || '-')}</td></tr>` +
        `<tr><td><b>Interested in</b></td><td>${esc(service || '-')}</td></tr>` +
        `<tr><td valign="top"><b>Message</b></td><td>${esc(message || '-').replace(/\n/g, '<br>')}</td></tr></table>`,
    });
    if (error) {
      console.error('Resend error:', error);
      return res.status(502).json({ success: false, message: 'Could not send email' });
    }
    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('send failed:', err && err.message);
    return res.status(500).json({ success: false, message: 'Could not send email' });
  }
};
