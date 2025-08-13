# Email Setup Guide for Contact Form

Your contact form is not working because the email configuration is not set up. Follow these steps to enable email sending:

## Option 1: Gmail with App Password (Recommended)

### Step 1: Enable 2-Factor Authentication on Gmail
1. Go to your Google Account settings: https://myaccount.google.com/
2. Click on "Security"
3. Under "Signing in to Google", enable "2-Step Verification"

### Step 2: Generate App Password
1. Go to: https://myaccount.google.com/apppasswords
2. Select "Mail" from the dropdown
3. Select "Other" and name it "Portfolio Contact Form"
4. Click "Generate"
5. Copy the 16-character password (it will look like: xxxx xxxx xxxx xxxx)

### Step 3: Update .env.local
Uncomment and update these lines in your `.env.local` file:

```env
# Option 2: Gmail with App Password
EMAIL_SERVICE=gmail
EMAIL_USER=navyasreechoudhary@gmail.com
EMAIL_PASS=your-16-character-app-password-here
```

Replace `your-16-character-app-password-here` with the password you generated (remove spaces).

## Option 2: Using Resend (Alternative)

1. Sign up for free at https://resend.com
2. Get your API key
3. Update `.env.local`:

```env
RESEND_API_KEY=your-resend-api-key-here
```

## Testing the Contact Form

After setting up:

1. Restart your development server:
   ```bash
   npm run dev
   ```

2. Go to your contact page and submit a test message

3. Check your email (navyasreechoudhary@gmail.com) for the submission

4. The sender should also receive an auto-reply

## Troubleshooting

If emails are not being sent:

1. Check the console logs in your terminal for error messages
2. Make sure your Gmail account has "Less secure app access" enabled (if not using app password)
3. Verify the email credentials are correct
4. Check your spam folder

## Security Note

- Never commit your `.env.local` file to git
- The `.gitignore` file already excludes it
- Keep your app password secure

## Current Status

The contact form API has been updated to:
- Remove Supabase dependency (was causing errors)
- Use only email for contact submissions
- Log submissions to console as fallback
- Send auto-reply to users
- Add proper error handling

Once you add the email configuration, the contact form will start working immediately!