# Deployment Guide for Your Portfolio Website

## Quick Deployment to Vercel (Recommended)

### Step 1: Prepare Your Project
```bash
# Clean build cache
rm -rf .next
rm -rf node_modules/.cache

# Install dependencies fresh
npm install

# Test build locally
npm run build
```

### Step 2: Deploy to Vercel

1. **Install Vercel CLI:**
```bash
npm install -g vercel
```

2. **Deploy:**
```bash
vercel
```

3. **Follow the prompts:**
- Login/signup to Vercel
- Select your project
- Choose production deployment

### Step 3: Connect Your GoDaddy Domain

1. **In Vercel Dashboard:**
   - Go to your project settings
   - Navigate to "Domains"
   - Add your domain (e.g., yourname.com)
   - Vercel will provide DNS records

2. **In GoDaddy:**
   - Login to your GoDaddy account
   - Go to "My Products" → "DNS"
   - Update your DNS records:

   **For Root Domain (yourname.com):**
   - Type: A
   - Name: @
   - Value: 76.76.21.21

   **For WWW (www.yourname.com):**
   - Type: CNAME
   - Name: www
   - Value: cname.vercel-dns.com

3. **Wait for Propagation:**
   - DNS changes take 5-48 hours to propagate
   - Your site will be live at your domain!

## Alternative: Deploy to Netlify

### Step 1: Build for Netlify
```bash
# Add this to package.json scripts
"export": "next build && next export"
```

### Step 2: Deploy
1. Push your code to GitHub
2. Go to [Netlify](https://netlify.com)
3. Connect your GitHub repo
4. Set build command: `npm run build`
5. Set publish directory: `.next`

### Step 3: Domain Setup
Similar to Vercel, update GoDaddy DNS to point to Netlify.

## Environment Variables

Make sure to add these in your deployment platform:

```
OPENAI_API_KEY=your_key_here
NEXT_PUBLIC_SUPABASE_URL=your_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key_here
```

## Pre-Deployment Checklist

- [ ] Remove all console.logs
- [ ] Update meta tags with your domain
- [ ] Test all forms and API routes
- [ ] Optimize images
- [ ] Check mobile responsiveness
- [ ] Update resume PDF
- [ ] Set up error tracking (optional)
- [ ] Configure analytics (optional)

## Troubleshooting

### Build Errors
```bash
# Clear all caches
rm -rf .next
rm -rf node_modules
npm install
npm run build
```

### Image Issues
- Ensure all images are in `/public`
- Use Next.js Image component
- Check image paths are correct

### API Issues
- Verify environment variables are set
- Check API rate limits
- Test endpoints locally first

## Support

Need help? Check:
- [Vercel Docs](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [GoDaddy DNS Help](https://www.godaddy.com/help/manage-dns-680)