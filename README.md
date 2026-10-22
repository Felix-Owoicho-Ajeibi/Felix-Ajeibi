# Felix Owoicho Ajeibi — Personal Portfolio Website

A conversion-focused personal portfolio website for **Felix Owoicho Ajeibi**, multidisciplinary digital professional specializing in web design, brand growth, financial market analysis, and AI automation.

Designed with a consistent visual identity adhering to strict aesthetic restraint: Navy blue (`#0B1F3A`), Orange accent (`#FF8A00`), crisp neutrals, high typography contrast (`Space Grotesk` + `Inter`), and zero generic "AI template" bloat.

---

## 🚀 Key Features

1. **Instant Clarity & 5-Second Offer**: Clear headline, verified 6+ years experience, and immediate routes to view projects or hire Felix.
2. **Verified Project Portfolio**:
   - **EVAXin International** (E-Commerce Storefront)
   - **EMB Trade Logistics Nigeria Limited** (Corporate Logistics Portal)
   - **Alimentos Batavia Limited** (Agribusiness & Food Processing Portal)
   - **Market Structure & Price Action Journal** (Financial Market Technical Studies)
   - **Automated Lead Triage & Social Pipeline** (AI Automation Workflow)
3. **Four Core Services with Direct Form Hand-Off**:
   - Web Design & Development
   - Social Media Management
   - Financial Market Analysis (with educational disclaimer)
   - AI Automation
4. **4-Phase Delivery Process**: Discover → Plan → Build → Deliver.
5. **Toolkit & Software**: Categorized into 4 clean groups without arbitrary or fake percentages.
6. **Curriculum Vitae Viewer**: Interactive, printable/exportable CV modal detailing verified timeline and competencies.
7. **Contact Experience**:
   - Validated fields (Name, Email, Service Needed dropdown, Message).
   - Honeypot anti-spam trap.
   - Dual-path submission: optional remote endpoint (`VITE_FORMSPREE_ENDPOINT`) or zero-loss WhatsApp / Email client hand-off.
   - Verified WhatsApp direct channel: `https://wa.me/2348157357758` with pre-encoded project message.
8. **Floating WhatsApp Button**: Accessible, unobtrusive fixed button for mobile and desktop inquiries.
9. **Accessible Dark / Light Mode**: System preference detection, persistent `localStorage` preference, and no-flash theme script in `<head>`.
10. **Ready for Vercel**: Configured with `vercel.json` for single-page application routing.

---

## 🛠 Tech Stack

- **Framework**: React 19 SPA with TypeScript
- **Bundler & Dev Server**: Vite 8
- **Styling**: Tailwind CSS v4 with custom tokens and typography pairing
- **Icons**: Lucide React
- **Fonts**: Space Grotesk (Headings: 600, 700) & Inter (UI/Body: 400, 500, 600) via Google Fonts

---

## 📦 Local Development

### 1. Prerequisites
- Node.js 18+ or 20+
- npm, yarn, pnpm, or bun

### 2. Installation
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
The application will start at `http://localhost:3000`.

### 4. Build for Production
```bash
npm run build
```
Compiled assets will be output to the `dist/` directory.

### 5. Preview Production Build
```bash
npm run preview
```

---

## 🚢 Vercel Deployment Instructions

This repository is optimized for deployment on **Vercel** with zero backend server dependencies.

### Option A: Deploy via GitHub (Recommended)
1. Push this repository to your GitHub account (`https://github.com/your-username/felix-ajeibi-portfolio`).
2. Log in to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Vercel will automatically detect **Vite**:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
5. *(Optional)* Under **Environment Variables**, add:
   - `VITE_FORMSPREE_ENDPOINT`: Your Formspree or Web3Forms form endpoint URL.
6. Click **Deploy**. Your portfolio will be live in seconds.

### Option B: Deploy via Vercel CLI
```bash
npm i -g vercel
vercel login
vercel --prod
```

### Static SPA Routing
The included `vercel.json` automatically ensures all client-side paths route through `index.html`:
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "cleanUrls": true,
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### ⚠️ How to Fix "404 NOT_FOUND: This page doesn't exist" on Vercel
If you see the black Vercel `404 NOT_FOUND` page after deploying, follow these 3 quick steps in your **Vercel Dashboard**:

1. **Verify Framework Preset**:
   - Go to your Project in [Vercel](https://vercel.com) → **Settings** → **General**.
   - Under **Build & Development Settings**, make sure:
     - **Framework Preset**: Select `Vite` (Do NOT select `Next.js` or `Other`).
     - **Build Command**: `npm run build`
     - **Output Directory**: `dist`
   - Click **Save**.

2. **Check the Root Directory**:
   - If your project was pushed inside a subfolder in your GitHub repository, in **Settings** → **General** → **Root Directory**, click **Edit** and choose that folder, then save.

3. **Trigger a Fresh Redeployment**:
   - Go to the **Deployments** tab in Vercel.
   - Click the three dots (`...`) on the right of the latest deployment.
   - Select **Redeploy** (ensure "Use existing Build Cache" is unchecked).
   - Your website will immediately load your full portfolio!

---

## 🔐 Environment Variables

Copy `.env.example` to `.env` if using a remote form service:

| Variable | Description | Default / Example |
| :--- | :--- | :--- |
| `VITE_FORMSPREE_ENDPOINT` | Form submission endpoint for email notifications | `https://formspree.io/f/your_form_id` |
| `APP_URL` | Canonical domain for the deployed portfolio | `https://felix-ajeibi.vercel.app` |

*Note: In Vite, all browser-accessible environment variables must start with the prefix `VITE_`.*

---

## 📋 Pre-Launch Checklist (Assets, Profiles & Verification)

Before pointing your production domain to the portfolio, ensure you have reviewed or supplied the following:

- [x] **Brand Palette**: Configured (`#0B1F3A` Navy, `#FF8A00` Orange, `#FFFFFF` White, `#102944` Dark Surface).
- [x] **Headings & Body Typography**: Configured with `Space Grotesk` & `Inter`.
- [x] **WhatsApp Direct Link**: Configured to `+234 815 735 7758` (`wa.me/2348157357758`).
- [x] **Primary Email**: Configured to `nexaprodigitalbusinesssolution@gmail.com`.
- [ ] **Social Profiles**: Check and verify your LinkedIn, GitHub, Facebook, and Instagram URLs in `src/data/portfolioData.ts` to ensure handles match your active profiles.
- [ ] **Custom Domain**: In Vercel Project Settings > Domains, attach your custom domain (e.g. `felixajeibi.com`).
- [ ] **Form Backend**: If you want automated email inbox forwarding without WhatsApp hand-off, create a free form endpoint at [Formspree.io](https://formspree.io) or [Web3Forms.com](https://web3forms.com) and set `VITE_FORMSPREE_ENDPOINT` in your Vercel settings.
- [x] **Personal Photos & Direct Upload**: You can click the **"Upload My Photo"** button directly on the website in the Hero or About section to upload your exact photo file (`My photo.png`, JPG, WEBP) from your device. It is stored securely in IndexedDB and persists across reloads. You can also replace files in `src/assets/images/` or `src/data/assets.ts`.

---

## 📄 License
© Felix Owoicho Ajeibi. All rights reserved.
