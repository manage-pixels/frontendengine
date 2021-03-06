require('dotenv').config()

module.exports = {
  hello: process.env.HELLO || 'Hello not set, but hi, anyway 👋',
  node_env: process.env.NODE_ENV || null,
  site_map_url: process.env.SITE_MAP_URL || 'https//site.com',
  contact_email: process.env.CONTACT_EMAIL || 'site@amce.inc',
  contact_success: process.env.CONTACT_SUCCESS || '/thank-you',
  developer_mode: process.env.DEVELOPER_MODE || true,
  form_provider: process.env.FORM_PROVIDER || null
}
