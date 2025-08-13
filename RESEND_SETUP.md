# Quick Setup: Enable Email for Contact Form

Your contact form is ready but needs an API key to send emails. Follow these steps:

## Option 1: Resend (Easiest - 5 minutes)

### Step 1: Get Free API Key
1. Go to https://resend.com/signup
2. Sign up for a free account (no credit card required)
3. Verify your email
4. You'll get an API key that looks like: `re_xxxxxxxxxxxxxxxxxx`

### Step 2: Add to .env.local
Open your `.env.local` file and add your API key:

```env
RESEND_API_KEY=re_your_actual_api_key_here
```

### Step 3: Restart Server
```bash
npm run dev
```

That's it! Your contact form will now send emails to `navyasreechoudhary@gmail.com`

## Option 2: Gmail (If you prefer Gmail)

### Step 1: Get App Password
1. Enable 2FA on your Gmail: https://myaccount.google.com/security
2. Generate app password: https://myaccount.google.com/apppasswords
3. Select "Mail" and generate a 16-character password

### Step 2: Update .env.local
Uncomment and update these lines:

```env
EMAIL_SERVICE=gmail
EMAIL_USER=navyasreechoudhary@gmail.com
EMAIL_PASS=xxxx xxxx xxxx xxxx  # Your app password (remove spaces)
```

### Step 3: Restart Server
```bash
npm run dev
```

## Testing

1. Go to your contact page
2. Submit a test message
3. Check your email inbox (navyasreechoudhary@gmail.com)
4. The sender should receive an auto-reply

## Current Status

✅ Contact form API is fixed and ready
✅ Resend package is installed
❌ API key is missing (RESEND_API_KEY is empty in .env.local)

**Next Step:** Add your Resend API key to `.env.local` and restart the server.

## Why Resend?
- Free tier: 100 emails/day
- No domain verification needed for testing
- Works immediately after signup
- Better deliverability than Gmail SMTP
- Professional email templates