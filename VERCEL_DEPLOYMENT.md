# Vercel Deployment Guide for HoopRoster Landing Page

This guide will walk you through deploying your HoopRoster landing page with Sanity CMS to Vercel.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Pre-Deployment Checklist](#pre-deployment-checklist)
3. [Step-by-Step Deployment](#step-by-step-deployment)
4. [Environment Variables Setup](#environment-variables-setup)
5. [Sanity CMS Configuration](#sanity-cms-configuration)
6. [Troubleshooting](#troubleshooting)
7. [Post-Deployment Verification](#post-deployment-verification)

---

## Prerequisites

Before deploying, make sure you have:

- ✅ A Vercel account ([sign up here](https://vercel.com/signup))
- ✅ A Sanity account and project set up ([see SANITY_SETUP.md](./SANITY_SETUP.md))
- ✅ Your Sanity project ID and dataset name
- ✅ Git repository (GitHub, GitLab, or Bitbucket) with your code pushed

---

## Pre-Deployment Checklist

### 1. Verify Your Sanity Content

**IMPORTANT**: Make sure you have published content in Sanity Studio before deploying!

1. Open your Sanity Studio: `http://localhost:3333` (or your studio URL)
2. Navigate to your Landing Page document
3. **Verify it's PUBLISHED** (not just saved as draft)
   - Look for a green "Published" indicator
   - Draft documents won't be accessible in production

### 2. Test Build Locally

Test that your project builds successfully:

```bash
# Install dependencies
npm install

# Build the project
npm run build

# Preview the build
npm run preview
```

If the build fails, fix the errors before deploying.

### 3. Check Environment Variables

Make sure you know these values (you'll need them for Vercel):

- `VITE_SANITY_PROJECT_ID` - Your Sanity project ID
- `VITE_SANITY_DATASET` - Usually "production" or "development"
- `VITE_SANITY_API_TOKEN` - Optional, but recommended for private datasets

---

## Step-by-Step Deployment

### Option A: Deploy via Vercel Dashboard (Recommended for First Time)

1. **Push your code to GitHub/GitLab/Bitbucket**

   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Go to Vercel Dashboard**

   - Visit [https://vercel.com/new](https://vercel.com/new)
   - Click "Import Project"
   - Select your Git provider (GitHub, GitLab, or Bitbucket)
   - Select your repository

3. **Configure Project Settings**

   - **Framework Preset**: Select "Vite" (or it will auto-detect)
   - **Root Directory**: Leave as `.` (root)
   - **Build Command**: `npm run build` (should auto-detect)
   - **Output Directory**: `dist` (should auto-detect)
   - **Install Command**: `npm install` (should auto-detect)

4. **Add Environment Variables** (See [Environment Variables Setup](#environment-variables-setup) below)

5. **Click "Deploy"**
   - Wait for the build to complete
   - Vercel will provide you with a deployment URL

### Option B: Deploy via Vercel CLI

1. **Install Vercel CLI**

   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**

   ```bash
   vercel login
   ```

3. **Deploy**

   ```bash
   # First deployment (will prompt for settings)
   vercel

   # Production deployment
   vercel --prod
   ```

4. **Set Environment Variables** (See [Environment Variables Setup](#environment-variables-setup) below)

---

## Environment Variables Setup

### Required Environment Variables

You **MUST** add these in Vercel Dashboard:

1. **Go to your project in Vercel Dashboard**
2. **Click "Settings" → "Environment Variables"**
3. **Add each variable** (for Production, Preview, and Development):

#### Required Variables:

| Variable Name            | Example Value | Description              |
| ------------------------ | ------------- | ------------------------ |
| `VITE_SANITY_PROJECT_ID` | `dghj1gwf`    | Your Sanity project ID   |
| `VITE_SANITY_DATASET`    | `production`  | Your Sanity dataset name |

#### Optional Variables (but recommended):

| Variable Name           | Example Value | Description                                                            |
| ----------------------- | ------------- | ---------------------------------------------------------------------- |
| `VITE_SANITY_API_TOKEN` | `sk...`       | Sanity read token (needed for private datasets or to avoid 403 errors) |

### How to Get Your Sanity API Token:

1. Go to [https://www.sanity.io/manage](https://www.sanity.io/manage)
2. Select your project
3. Go to **API** → **Tokens**
4. Click **"Add API token"**
5. Name it (e.g., "Vercel Production")
6. Select **"Read"** permissions
7. Copy the token (starts with `sk...`)
8. Add it to Vercel as `VITE_SANITY_API_TOKEN`

### Setting Environment Variables in Vercel:

1. In your Vercel project dashboard
2. Go to **Settings** → **Environment Variables**
3. Click **"Add New"**
4. Enter:
   - **Key**: `VITE_SANITY_PROJECT_ID`
   - **Value**: Your project ID
   - **Environment**: Select all (Production, Preview, Development)
5. Click **"Save"**
6. Repeat for `VITE_SANITY_DATASET` and `VITE_SANITY_API_TOKEN`

**⚠️ Important**: After adding environment variables, you need to **redeploy** your project for changes to take effect!

---

## Sanity CMS Configuration

### 1. CORS Configuration

Your Sanity project needs to allow requests from your Vercel domain:

1. Go to [https://www.sanity.io/manage](https://www.sanity.io/manage)
2. Select your project
3. Go to **API** → **CORS origins**
4. Click **"Add CORS origin"**
5. Add your Vercel domain:
   - **Origin**: `https://your-project.vercel.app`
   - **Allow credentials**: ✅ Checked
   - **Allow requests from**: `*` (or specific domains)

**For custom domain:**

- Also add your custom domain: `https://yourdomain.com`

### 2. Dataset Permissions

- **Public Dataset**: No token needed (but still recommended)
- **Private Dataset**: Token is **required**

To check your dataset permissions:

1. Go to Sanity Manage → Your Project → **Datasets**
2. Check if your dataset shows "Public" or "Private"

---

## Troubleshooting

### Issue: Site loads but shows JSON fallback content

**Symptoms**: Site works but content doesn't come from Sanity

**Solutions**:

1. ✅ Check environment variables are set in Vercel
2. ✅ Verify variables are set for **Production** environment
3. ✅ **Redeploy** after adding environment variables
4. ✅ Check browser console (F12) for errors
5. ✅ Verify Sanity document is **published** (not draft)

### Issue: 403 Forbidden errors

**Symptoms**: Console shows "403 Forbidden" when fetching from Sanity

**Solutions**:

1. ✅ Add `VITE_SANITY_API_TOKEN` environment variable
2. ✅ Verify token has "Read" permissions
3. ✅ Check CORS settings in Sanity (see above)
4. ✅ Verify project ID is correct

### Issue: Build fails on Vercel

**Symptoms**: Deployment fails during build

**Solutions**:

1. ✅ Test build locally first: `npm run build`
2. ✅ Check build logs in Vercel dashboard
3. ✅ Ensure all dependencies are in `package.json`
4. ✅ Check Node.js version (Vercel uses Node 18+ by default)

### Issue: "No landing page document found"

**Symptoms**: Site loads but shows error message

**Solutions**:

1. ✅ Create a Landing Page document in Sanity Studio
2. ✅ **Publish** the document (not just save)
3. ✅ Verify document type matches schema (`landingPage`)
4. ✅ Check dataset name matches environment variable

### Issue: Content not updating after changes

**Solutions**:

1. ✅ Make sure changes are **published** in Sanity
2. ✅ Clear browser cache or hard refresh (`Ctrl + Shift + R`)
3. ✅ Check if CDN caching is enabled (may take a few minutes)
4. ✅ Verify you're checking the correct Vercel deployment URL

### Issue: Environment variables not working

**Solutions**:

1. ✅ Variables must start with `VITE_` to be exposed to client
2. ✅ **Redeploy** after adding/changing environment variables
3. ✅ Verify variables are set for correct environment (Production/Preview)
4. ✅ Check variable names match exactly (case-sensitive)

---

## Post-Deployment Verification

After deployment, verify everything works:

### 1. Check Site Loads

- ✅ Visit your Vercel URL
- ✅ Site should load without errors

### 2. Verify Sanity Content

- ✅ Open browser DevTools (F12)
- ✅ Go to Console tab
- ✅ Look for: `✅ Successfully loaded content from Sanity!`
- ✅ If you see fallback message, check environment variables

### 3. Test Content Updates

1. Make a change in Sanity Studio
2. **Publish** the change
3. Hard refresh your Vercel site (`Ctrl + Shift + R`)
4. Verify changes appear

### 4. Check Network Requests

1. Open DevTools → Network tab
2. Reload page
3. Look for requests to `*.api.sanity.io`
4. Verify they return `200 OK` status

---

## Custom Domain Setup

To use a custom domain:

1. **In Vercel Dashboard**:

   - Go to your project → **Settings** → **Domains**
   - Add your domain
   - Follow DNS configuration instructions

2. **Update Sanity CORS**:

   - Add your custom domain to Sanity CORS origins
   - Format: `https://yourdomain.com`

3. **Redeploy**:
   - Trigger a new deployment after domain setup

---

## Continuous Deployment

Vercel automatically deploys when you push to your main branch:

1. **Push to main branch** → Triggers production deployment
2. **Push to other branches** → Creates preview deployment
3. **Pull requests** → Creates preview deployment for testing

**Pro Tip**: Test changes in preview deployments before merging to main!

---

## Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html#vercel)
- [Sanity Documentation](https://www.sanity.io/docs)
- [Sanity Setup Guide](./SANITY_SETUP.md)
- [Debugging Guide](./DEBUG_SANITY.md)

---

## Quick Reference

### Build Settings (Auto-detected by Vercel)

- **Framework**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`
- **Node Version**: 18.x (default)

### Required Environment Variables

```env
VITE_SANITY_PROJECT_ID=your_project_id
VITE_SANITY_DATASET=production
VITE_SANITY_API_TOKEN=your_read_token  # Optional but recommended
```

### Common Commands

```bash
# Local development
npm run dev

# Build locally
npm run build

# Preview build
npm run preview

# Deploy to Vercel (CLI)
vercel --prod
```

---

## Need Help?

If you're still having issues:

1. Check browser console (F12) for specific error messages
2. Review Vercel build logs in dashboard
3. Verify Sanity Studio has published content
4. Double-check environment variables are set correctly
5. Ensure CORS is configured in Sanity

Good luck with your deployment! 🚀
