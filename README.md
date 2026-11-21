# Connect: Bulk Email, SMS & WhatsApp Sender

A simple, self-hosted tool for businesses to send bulk Email, SMS and WhatsApp campaigns with templates and stats.

## Features

- Import contacts (CSV) and organise them into lists
- Reusable templates with variables: `{{name}}`, `{{organization}}`, `{{city}}`
- Email via any SMTP server
- SMS via MSG91
- WhatsApp via the official WhatsApp Cloud API
- Campaign stats: sent, failed, opened, clicked, unsubscribed
- One-click unsubscribe, bounce handling and per-hour rate limits
- Multiple brands/projects in one dashboard

## Tech Stack

Next.js, Payload CMS, PostgreSQL

## Setup

1. Clone the repo
2. `cp .env.example .env` and fill in your values
3. `npm install`
4. `npx payload migrate`
5. `npm run dev`

## Sending

Messages are sent by a scheduler. Call this URL every minute (for example with cron):

`GET /api/tick?k=YOUR_TICK_KEY`

## Responsible Use

- Only message people who have agreed to hear from you.
- Use the official WhatsApp Business API. Unofficial methods can get numbers banned.
- In India, business SMS needs DLT registration.
- Follow anti-spam laws in your country.

## License

MIT
