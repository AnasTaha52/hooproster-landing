# Development Setup Guide

This guide explains how to run both your React app and Sanity Studio simultaneously for real-time content editing.

## Quick Start

Run both servers at once:
```bash
npm run dev:all
```

This will start:
- **React App** on `http://localhost:8080` (your landing page)
- **Sanity Studio** on `http://localhost:3333` (content editor)

## Individual Commands

If you prefer to run them separately in different terminal windows:

### Terminal 1 - React App
```bash
npm run dev
```
Opens at: `http://localhost:8080`

### Terminal 2 - Sanity Studio
```bash
npm run dev:studio
```
Opens at: `http://localhost:3333`

## Workflow for Content Editing

1. **Start both servers**: `npm run dev:all`

2. **Open two browser tabs**:
   - Tab 1: `http://localhost:8080` - Your landing page
   - Tab 2: `http://localhost:3333` - Sanity Studio

3. **Edit content in Sanity Studio**:
   - Make changes to your Landing Page document
   - Click "Publish" to save changes

4. **See changes immediately**:
   - Refresh the landing page tab (`http://localhost:8080`)
   - Your changes should appear instantly

## Important Notes

### First Time Setup

Before running, make sure:
1. ✅ `.env.local` file exists with your Sanity credentials:
   ```env
   VITE_SANITY_PROJECT_ID=your_project_id
   VITE_SANITY_DATASET=production
   ```

2. ✅ You've created a Landing Page document in Sanity Studio
3. ✅ The document is **published** (not just a draft)

### Content Updates

- Changes in Sanity Studio are saved as drafts first
- **You must click "Publish"** for changes to appear on your site
- After publishing, refresh your landing page to see updates
- If using CDN (enabled by default), there may be a slight delay (usually seconds)

### Port Configuration

- **React App**: Port 8080 (configured in `vite.config.ts`)
- **Sanity Studio**: Port 3333 (default Sanity port)

If these ports are already in use, you'll need to:
- Change Vite port in `vite.config.ts` (for React app)
- Change Sanity port with: `cd studio-hoopster-landing-page && npm run dev -- --port 3334` (or another port)

## Troubleshooting

### "Missing Sanity environment variables"
- Check that `.env.local` exists in the `hooproster-landing` directory
- Restart the dev server after creating/editing `.env.local`

### "No landing page document found"
- Open Sanity Studio (`http://localhost:3333`)
- Create a new "Landing Page" document
- Fill in the content and **publish** it

### Content not updating after publishing
- Hard refresh your browser (Ctrl+Shift+R or Cmd+Shift+R)
- Clear browser cache
- Check browser console for errors
- Verify the document is published (not just a draft)

### Port already in use
- Kill the process using the port, or
- Change the port in the respective config files

## Tips

- Keep both tabs open side-by-side for the best editing experience
- Use browser DevTools to debug any content loading issues
- Check the browser console on the landing page for Sanity fetch errors
- Sanity Studio has its own console - check there for schema/validation errors

