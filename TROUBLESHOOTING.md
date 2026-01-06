# Troubleshooting Guide

## Issue 1: Changes in Sanity Not Reflecting on Website

### Solution Applied:
1. **CDN Disabled**: Changed `useCdn: false` in `src/sanity/client.ts` for real-time updates
2. **No Caching**: Data is fetched fresh on every page load

### How to See Changes:
1. **Publish in Sanity**: After making changes, click **"Publish"** (not just "Save")
2. **Refresh Browser**: Refresh your website page (F5 or Ctrl+R)
3. **Hard Refresh**: If changes still don't appear, do a hard refresh:
   - **Windows/Linux**: `Ctrl + Shift + R` or `Ctrl + F5`
   - **Mac**: `Cmd + Shift + R`

### If Changes Still Don't Appear:
1. Check browser console (F12) for any errors
2. Verify you clicked "Publish" not just "Save" in Sanity
3. Clear browser cache completely
4. Check if `.env.local` has correct Sanity credentials

---

## Issue 2: Validation Errors When Changing Other Fields

### Problem:
When changing fields like "Brand Name", you get validation errors about Stats requiring exactly 3 items.

### Solution Applied:
Changed validation from `error()` to `warning()` - warnings don't block saving/publishing, they just alert you.

### What This Means:
- ✅ You can now change Brand Name, Hero content, etc. even if Stats validation shows a warning
- ⚠️ You'll see a warning (yellow) instead of an error (red) if Stats doesn't have exactly 3 items
- 📝 The warning is informational - it won't prevent you from publishing

### Best Practice:
- Fix the Stats section when you're ready (add/edit to have exactly 3 items)
- But you can publish other changes without being blocked

---

## Quick Fixes

### Force Fresh Data:
1. Stop your dev server (Ctrl+C)
2. Clear browser cache
3. Restart dev server: `npm run dev`
4. Hard refresh browser (Ctrl+Shift+R)

### Verify Sanity Connection:
1. Check `.env.local` file exists with:
   ```env
   VITE_SANITY_PROJECT_ID=your_project_id
   VITE_SANITY_DATASET=production
   ```
2. Restart dev server after editing `.env.local`

### Check If Data is Loading:
1. Open browser console (F12)
2. Look for:
   - ✅ "Fetched from Sanity" messages (if working)
   - ❌ "Falling back to JSON" messages (if Sanity fails)
   - ❌ Error messages

---

## Still Having Issues?

1. **Check Sanity Studio**: Make sure document is published (green dot = published)
2. **Check Network Tab**: Open browser DevTools → Network tab → Look for Sanity API calls
3. **Verify Project ID**: Ensure project ID in `.env.local` matches your Sanity project
4. **Check Dataset**: Ensure dataset name is correct (usually "production")

