# Deployment Instructions for navyasreeyellina.com

## Step 1: Deploy to Vercel (5 minutes)

### Option A: Using Vercel CLI (Recommended)
```bash
# 1. Install Vercel CLI if you haven't
npm install -g vercel

# 2. From your project directory, run:
vercel

# 3. Answer the prompts:
# - Set up and deploy? Yes
# - Which scope? (Select your account)
# - Link to existing project? No
# - Project name? navyasreeyellina
# - In which directory? ./
# - Want to override settings? No
```

### Option B: Using GitHub
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Click "Deploy"

## Step 2: Add Your Domain to Vercel

1. Go to your project in Vercel Dashboard
2. Click on "Settings" → "Domains"
3. Add these domains:
   - `navyasreeyellina.com`
   - `www.navyasreeyellina.com`
4. Vercel will show you DNS records to add

## Step 3: Configure GoDaddy DNS

### Login to GoDaddy:
1. Go to [godaddy.com](https://godaddy.com)
2. Sign in to your account
3. Click "My Products"
4. Find `navyasreeyellina.com` and click "DNS"

### Remove Existing Records:
Delete any existing A, AAAA, or CNAME records for @ and www

### Add New DNS Records:

#### For navyasreeyellina.com (root domain):
| Type | Name | Value | TTL |
|------|------|-------|-----|
| A | @ | 76.76.21.21 | 600 |

#### For www.navyasreeyellina.com:
| Type | Name | Value | TTL |
|------|------|-------|-----|
| CNAME | www | cname.vercel-dns.com | 600 |

### Alternative: Use Vercel's Nameservers (Faster)
Instead of individual records, you can change nameservers:
1. In GoDaddy, go to "Nameservers"
2. Choose "Custom"
3. Add Vercel's nameservers:
   - ns1.vercel-dns.com
   - ns2.vercel-dns.com

## Step 4: Add Environment Variables in Vercel

1. In Vercel Dashboard → Settings → Environment Variables
2. Add these variables:

```
OPENAI_API_KEY=your_openai_key_here
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Step 5: Verify Deployment

### Check DNS Propagation:
- Visit [dnschecker.org](https://dnschecker.org)
- Enter `navyasreeyellina.com`
- Check if it points to Vercel's IP

### Timeline:
- Vercel deployment: Immediate
- DNS propagation: 5 minutes to 48 hours (usually within 1 hour)

## Your Live URLs:
Once deployed and DNS is propagated:
- ✅ https://navyasreeyellina.com
- ✅ https://www.navyasreeyellina.com
- ✅ Automatic HTTPS/SSL certificate
- ✅ Global CDN for fast loading

## Quick Commands Reference:

```bash
# Deploy to production
vercel --prod

# Check deployment status
vercel ls

# View logs
vercel logs

# Redeploy
vercel --force
```

## Troubleshooting:

### If site doesn't load after 1 hour:
1. Clear browser cache
2. Try incognito mode
3. Check DNS settings in GoDaddy
4. Verify domain in Vercel shows "Valid Configuration"

### If build fails:
```bash
# Clean and rebuild
rm -rf .next node_modules
npm install
npm run build
vercel --prod
```

## Support Contacts:
- Vercel Support: support@vercel.com
- GoDaddy Support: 1-480-505-8877
- DNS Issues: Check status at vercel.com/status

## Next Steps After Deployment:
1. ✅ Test all pages and features
2. ✅ Submit to Google Search Console
3. ✅ Set up Google Analytics (optional)
4. ✅ Add sitemap.xml for SEO
5. ✅ Share your new website! 🎉

---

Your website will be live at **navyasreeyellina.com** within an hour! 🚀