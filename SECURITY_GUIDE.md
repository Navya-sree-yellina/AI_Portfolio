# 🔐 Security Guide for API Keys

## ⚠️ IMPORTANT: Never Commit API Keys to GitHub

This guide ensures your OpenAI API key and other sensitive credentials remain secure while your repository is public.

## 📋 Quick Security Checklist

- ✅ `.env.local` is in `.gitignore` (already configured)
- ✅ Never commit actual API keys
- ✅ Use environment variables in Vercel
- ✅ Rotate keys if accidentally exposed

## 🛡️ How Your API Keys Are Protected

### 1. Local Development
- API keys are stored in `.env.local` (ignored by git)
- Never tracked or pushed to GitHub
- Only exists on your local machine

### 2. Production (Vercel)
- API keys are stored in Vercel's secure environment variables
- Encrypted at rest and in transit
- Never exposed in client-side code
- Only accessible server-side

## 🚀 Setting Up Environment Variables in Vercel

### Step 1: Go to Vercel Dashboard
1. Visit [vercel.com/dashboard](https://vercel.com/dashboard)
2. Click on your project (`navyasreeyellina` or `AI_Portfolio`)

### Step 2: Add Environment Variables
1. Go to **Settings** → **Environment Variables**
2. Add these variables:

| Variable Name | Value | Environment |
|--------------|-------|-------------|
| `OPENAI_API_KEY` | `sk-proj-...` (your actual key) | Production |
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase URL | Production |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Your Supabase anon key | Production |
| `SUPABASE_SERVICE_KEY` | Your Supabase service key | Production |

3. Click **Save** for each variable

### Step 3: Redeploy
After adding environment variables:
```bash
vercel --prod
# or click "Redeploy" in Vercel dashboard
```

## 🔑 Getting Your API Keys

### OpenAI API Key
1. Go to [platform.openai.com/api-keys](https://platform.openai.com/api-keys)
2. Click "Create new secret key"
3. Copy the key (you won't see it again!)
4. Add to Vercel environment variables

### Supabase Keys
1. Go to [supabase.com/dashboard](https://supabase.com/dashboard)
2. Select your project
3. Go to Settings → API
4. Copy the required keys

## 🔄 If You Accidentally Exposed a Key

If you accidentally committed an API key:

### 1. Immediately Revoke the Key
- **OpenAI**: Go to [platform.openai.com/api-keys](https://platform.openai.com/api-keys) → Delete the exposed key
- **Supabase**: Go to Settings → API → Generate new keys

### 2. Create New Keys
Generate fresh API keys from the respective platforms

### 3. Update Vercel
Update the environment variables in Vercel with new keys

### 4. Remove from Git History (if needed)
```bash
# This permanently removes the file from history
git filter-branch --force --index-filter \
  "git rm --cached --ignore-unmatch .env.local" \
  --prune-empty --tag-name-filter cat -- --all

# Force push (be careful!)
git push origin --force --all
```

## 🏗️ Architecture: How It Works

```
Your Code (GitHub)          Vercel Platform           Live Website
┌─────────────┐           ┌─────────────────┐      ┌──────────────┐
│  No API     │  Deploy   │ Secure Env Vars │      │   AI Chat    │
│   Keys      │ ────────> │ ┌─────────────┐ │ ───> │   Works!     │
│  .env.local │           │ │ OPENAI_KEY  │ │      │              │
│  ignored    │           │ │ (encrypted) │ │      │  navyasree   │
└─────────────┘           │ └─────────────┘ │      │  yellina.com │
                          └─────────────────┘      └──────────────┘
```

## 🔍 Verification Steps

### 1. Check Git Status
```bash
# Ensure .env.local is not tracked
git status
# Should NOT show .env.local

# Check all tracked files
git ls-files | grep env
# Should return nothing or only .env.example
```

### 2. Test Locally
```bash
# Your .env.local should have:
cat .env.local | grep OPENAI_API_KEY
# Should show your key locally

# Run the app
npm run dev
# Chat should work at localhost:3000
```

### 3. Test Production
After deploying with environment variables:
1. Visit your live site
2. Open the AI chat
3. Send a message
4. Should get intelligent responses

## 📝 Best Practices

### DO ✅
- Store keys in `.env.local` for local development
- Use Vercel environment variables for production
- Rotate keys regularly (every 90 days)
- Use different keys for dev/staging/production
- Keep `.env.example` updated with required variables

### DON'T ❌
- Never hardcode API keys in code
- Never commit `.env.local` or `.env`
- Never share keys in Discord/Slack/Email
- Never use the same key across multiple projects
- Never expose keys in client-side code

## 🆘 Troubleshooting

### Chat Not Working in Production?
1. Check Vercel environment variables are set
2. Verify variable names match exactly (case-sensitive)
3. Redeploy after adding variables
4. Check Vercel function logs for errors

### Getting 401 Unauthorized?
- API key might be invalid or revoked
- Check OpenAI account for usage limits
- Ensure key starts with `sk-proj-`

### Environment Variables Not Loading?
```bash
# In Vercel, after adding variables:
vercel env pull .env.local
# This syncs production variables locally
```

## 📞 Support

- **OpenAI Support**: [help.openai.com](https://help.openai.com)
- **Vercel Support**: [vercel.com/support](https://vercel.com/support)
- **Supabase Support**: [supabase.com/support](https://supabase.com/support)

---

Remember: **Security is not optional!** Always protect your API keys. 🔐