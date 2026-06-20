# RV Towing Calculator

A professional RV towing calculator website to help users calculate towing parameters safely and smartly.

## Features

- **5 Core Calculators**: Towing Capacity, GVWR, GCWR, Tongue Weight, Payload
- **Safety Visualization**: Red/Yellow/Green indicators for instant safety assessment
- **SEO Optimized**: Structured data, sitemap, robots.txt
- **Security First**: HTTP security headers, HTTPS enforcement

## Tech Stack

- **Framework**: Next.js (App Router)
- **Frontend**: React + TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel
- **Analytics**: Google Analytics (optional)

## Quick Start

### Prerequisites

- Node.js 22+
- npm

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Visit http://localhost:3000
```

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
rv-towing-calculator/
├── src/
│   ├── app/              # Next.js App Router
│   ├── components/       # React components
│   ├── data/            # Static data
│   └── lib/             # Utility functions
├── public/              # Static assets
│   ├── robots.txt       # SEO crawler rules
│   └── sitemap.xml     # Site map
├── .env.example         # Environment variables template
├── .gitignore           # Git ignore rules
├── next.config.js       # Next.js configuration
├── package.json         # Project dependencies
├── tailwind.config.ts   # Tailwind CSS configuration
└── vercel.json          # Vercel deployment configuration
```

## Environment Variables

Copy `.env.example` to `.env.local` and fill in real values:

```bash
cp .env.example .env.local
```

Required variables:
- `NEXT_PUBLIC_GA_ID` - Google Analytics ID (optional)
- `NEXT_PUBLIC_ADSENSE_ID` - Google AdSense ID (optional)

## Deployment

This project is configured for Vercel deployment.

### One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Zhou-Xiaoyong/rv-towing-calculator)

### Manual Deployment

1. Push code to GitHub
2. Import project in Vercel Dashboard
3. Configure environment variables
4. Deploy

For detailed deployment steps, see: https://vercel.com/docs/deployments/overview

## Security

This project includes the following security measures:

### 1. HTTP Security Headers

Configured in `vercel.json`:
- `X-Content-Type-Options: nosniff` - Prevent MIME type sniffing
- `X-Frame-Options: DENY` - Prevent clickjacking
- `X-XSS-Protection: 1; mode=block` - Enable XSS filter
- `Referrer-Policy: strict-origin-when-cross-origin` - Control Referer leakage
- `Permissions-Policy` - Disable unnecessary browser permissions

### 2. HTTPS Enforcement

Vercel automatically provides and renews SSL certificates (Let's Encrypt).

### 3. Next.js Security Configuration

In `next.config.js`:
- Remove `X-Powered-By` header
- Configure image domain whitelist
- Enable React Strict Mode

### 4. Environment Variable Protection

- Sensitive information stored in `.env*.local` files (excluded from Git)
- Use `.env.example` as template

## Verification

After deployment, verify security configuration:

1. **SSL/HTTPS Test**
   - https://www.ssllabs.com/ssltest/
   - Target: Grade A or higher

2. **Security Headers Test**
   - https://securityheaders.com
   - Target: All headers show green

3. **Mozilla Observatory**
   - https://observatory.mozilla.org
   - Comprehensive security rating

## License

MIT

## Support

- **Vercel Docs**: https://vercel.com/docs
- **Next.js Docs**: https://nextjs.org/docs
- **Issues**: Submit an issue in the GitHub repository

---

**Built with ❤️ using Next.js + TypeScript + Tailwind CSS**
