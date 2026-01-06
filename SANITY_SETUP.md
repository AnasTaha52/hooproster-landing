# Sanity CMS Setup Guide

This guide will help you set up Sanity CMS for your landing page content management.

## Prerequisites

1. A Sanity account (sign up at https://www.sanity.io)
2. A Sanity project created in your Sanity account

## Step 1: Get Your Sanity Credentials

1. Go to https://www.sanity.io/manage
2. Select your project (or create a new one)
3. Note down your **Project ID** and **Dataset** name (usually "production")

## Step 2: Configure Environment Variables

1. Create a `.env.local` file in the `hooproster-landing` directory
2. Add the following variables:

```env
VITE_SANITY_PROJECT_ID=your_project_id_here
VITE_SANITY_DATASET=production
```

3. (Optional) If your dataset is private, add a read token:
   ```env
   VITE_SANITY_API_TOKEN=your_read_token_here
   ```

## Step 3: Set Up Sanity Studio

### Option A: Use Sanity Studio (Recommended)

1. Create a new Sanity Studio project:
   ```bash
   npx create-sanity@latest --template clean
   ```
2. When prompted, use the same project ID and dataset
3. In the studio's `schemas` folder, create `landingPage.ts` based on the reference schema in `src/sanity/schemaTypes/landingPage.ts`
4. Import it in your `schemas/index.ts`

### Option B: Use the Sanity CLI

1. Install Sanity CLI globally:
   ```bash
   npm install -g @sanity/cli
   ```
2. Initialize Sanity in your project:
   ```bash
   cd hooproster-landing
   sanity init
   ```
3. Follow the prompts and use the reference schema from `src/sanity/schemaTypes/landingPage.ts`

## Step 4: Create the Landing Page Document

1. Start your Sanity Studio:
   ```bash
   sanity start
   ```
2. Log in to your Sanity Studio (usually at http://localhost:3333)
3. Create a new document of type "Landing Page"
4. Fill in all the fields using the data from `public/site-content.json` as a reference
5. **Publish** the document

## Step 5: Verify the Integration

1. Start your development server:
   ```bash
   npm run dev
   ```
2. The landing page should now load content from Sanity CMS
3. Check the browser console for any errors

## Schema Reference

The schema definition can be found in `src/sanity/schemaTypes/landingPage.ts`. This file contains detailed field definitions that should be replicated in your Sanity Studio schema.

## Migrating Existing Content

To migrate your existing content from `site-content.json`:

1. Open `public/site-content.json`
2. Open your Sanity Studio
3. Manually copy each field from the JSON to the corresponding field in Sanity
4. Pay special attention to:
   - **Stats**: Create 3 stat objects (subscribers, reports, prospects)
   - **Pricing Benefits**: Copy the Pro tier benefits as an array
   - **Features Items**: Ensure icon names match (Search, FileText, Zap)

## Troubleshooting

### Error: "Missing Sanity environment variables"
- Make sure `.env.local` exists and contains `VITE_SANITY_PROJECT_ID` and `VITE_SANITY_DATASET`
- Restart your development server after creating/editing `.env.local`

### Error: "No landing page document found"
- Make sure you've created a "Landing Page" document in Sanity Studio
- Ensure the document is **published** (not just drafted)

### Content not updating
- Check that your changes are published in Sanity Studio
- Clear your browser cache
- Check if CDN is enabled (it may take a few minutes for CDN to update)

## Next Steps

Once set up, you can:
- Edit content directly in Sanity Studio
- Share access with team members
- Use Sanity's preview features
- Set up webhooks for automatic rebuilds

For more information, visit [Sanity Documentation](https://www.sanity.io/docs).

