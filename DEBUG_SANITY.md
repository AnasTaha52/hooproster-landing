# Debug Sanity Connection

If your content is loading from JSON instead of Sanity, follow these steps:

## Step 1: Check Browser Console

1. Open your website: `http://localhost:8080`
2. Open Browser DevTools: Press `F12` or Right-click → Inspect
3. Go to the **Console** tab
4. Look for these messages:

### ✅ Success Messages:
- `🔍 Fetching data from Sanity...`
- `📦 Sanity response: {...}`
- `✅ Successfully loaded content from Sanity!`

### ❌ Error Messages:
- `❌ No landing page document found in Sanity`
- `❌ Error fetching content from Sanity:`

## Step 2: Verify Your Document in Sanity

1. Open Sanity Studio: `http://localhost:3333`
2. Go to "Content" → "Landing Page"
3. Check if you see a document:
   - ✅ **If you see a document**: Check if it has a **green dot** or "Published" status
   - ❌ **If you see "No documents"**: You need to create one first

## Step 3: Create and Publish Document

### If No Document Exists:
1. Click the **"+"** button to create a new Landing Page
2. Fill in at minimum:
   - Logo → Brand Name: `HOOPROSTER`
   - Hero → Main Headline: `Test`
   - Global → Substack URL: `https://hooproster.substack.com`
   - Stats → Add 3 items (any labels/values)
3. Click **"Publish"** button (top right)
4. Wait for "Published" status (green indicator)

### If Document Exists But Not Published:
1. Open the document
2. Look for **"Publish"** button in top right
3. Click it
4. Wait for "Published" status

## Step 4: Check Environment Variables

Verify `.env.local` exists in `hooproster-landing/` folder:

```env
VITE_SANITY_PROJECT_ID=dghj1gwf
VITE_SANITY_DATASET=production
```

**Important**: After creating/editing `.env.local`:
- **Restart your dev server** (stop with Ctrl+C, then `npm run dev` again)

## Step 5: Test the Connection

1. After publishing in Sanity:
2. **Restart your React dev server** (stop and start again)
3. **Hard refresh** your website: `Ctrl + Shift + R`
4. Check console for success messages

## Common Issues:

### Issue: "No landing page document found"
**Solution**: Create a document in Sanity Studio and **publish it**

### Issue: Document exists but still loading JSON
**Solution**: 
- Make sure you clicked **"Publish"** not just "Save"
- Restart dev server after publishing
- Hard refresh browser (`Ctrl + Shift + R`)

### Issue: Environment variables not loading
**Solution**:
- Check `.env.local` file exists
- Restart dev server (Vite needs restart to load env vars)
- Check console for project ID/dataset in logs

### Issue: CORS or Network Errors
**Solution**:
- Check if Sanity Studio is running on `localhost:3333`
- Verify project ID matches in `.env.local` and Sanity Studio
- Check browser Network tab for failed requests

## Quick Test:

1. **Create minimal document in Sanity**:
   - Brand Name: `TEST`
   - Publish it
   
2. **Check website**:
   - Should show "TEST" instead of "HOOPROSTER"
   - If not, check console for errors

## Still Not Working?

1. Check browser console (F12) for **exact error messages**
2. Share the console error with the developer
3. Verify project ID in `.env.local` matches your Sanity project

