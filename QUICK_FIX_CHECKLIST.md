# Quick Fix Checklist - Get Sanity Working

Your page is loading from JSON because Sanity isn't finding a published document. Follow these steps **in order**:

## ✅ Step 1: Open Browser Console

1. Open your website: `http://localhost:8080`
2. Press **F12** to open DevTools
3. Click the **Console** tab
4. Refresh the page (F5)

**Look for these messages:**
- 🔍 Fetching data from Sanity...
- 🧪 Test query result: ...
- ❌ No 'landingPage' documents found ← **This means you need to create a document**

## ✅ Step 2: Open Sanity Studio

1. Open: `http://localhost:3333`
2. Make sure you're logged in
3. Click "Content" in the left sidebar
4. Click "Landing Page"

## ✅ Step 3: Create the Document

### If you see "No documents of this type":

1. **Click the "+" button** (plus icon) in the main area
2. A form will open with all fields

### Fill in **MINIMUM REQUIRED** fields to test:

**Logo / Brand:**
- Brand Name: `HOOPROSTER`

**Hero Section:**
- Main Headline: `Elite Basketball Scouting.`
- Headline Accent: `Delivered to Your Inbox.`
- Subheadline: `The professional data and evaluation tools used by scouts.`
- Primary CTA Text: `Get Started`
- Secondary CTA Text: `Learn More`

**Stats Section:**
- Click "Add item" button **3 times**
- Fill in 3 stats:
  1. Label: `Subscribers`, Value: `500+`
  2. Label: `Reports`, Value: `200+`
  3. Label: `Prospects`, Value: `50+`

**Global Settings:**
- Substack URL: `https://hooproster.substack.com`

**Footer:**
- Copyright Text: `Hooproster. All rights reserved.`
- Powered By Text: `Powered by`
- Powered By Link Text: `Substack`

## ✅ Step 4: PUBLISH (CRITICAL!)

1. Scroll to the **top right** of the Sanity Studio
2. Look for the **"Publish"** button
3. Click **"Publish"** (NOT "Save" or "Save draft")
4. Wait for confirmation - you should see:
   - ✅ Green "Published" indicator
   - ✅ "Last published: [timestamp]"

**IMPORTANT:** Draft documents won't show on your website! You MUST click "Publish".

## ✅ Step 5: Restart Dev Server

1. Go back to your terminal
2. Stop the React dev server: Press **Ctrl + C**
3. Start it again: `npm run dev`

## ✅ Step 6: Refresh Website

1. Go to: `http://localhost:8080`
2. **Hard refresh**: `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)
3. Check console (F12) - you should now see:
   - ✅ `✅ Successfully loaded content from Sanity!`

## ✅ Step 7: Verify It Works

Your website should now show:
- ✅ Content from Sanity (not JSON)
- ✅ No error banner at the top
- ✅ Console shows success messages

---

## ❌ If It Still Doesn't Work:

### Check 1: Document Status
- In Sanity Studio, open your Landing Page document
- Check if it shows **"Published"** status (green dot/indicator)
- If it says "Draft", click "Publish" again

### Check 2: Console Errors
- Open browser console (F12)
- Look for error messages
- Share the error messages

### Check 3: Environment Variables
- Verify `.env.local` file exists
- Contains:
  ```env
  VITE_SANITY_PROJECT_ID=dghj1gwf
  VITE_SANITY_DATASET=production
  ```
- **Restart dev server** after editing `.env.local`

### Check 4: Sanity Studio Connection
- Is Sanity Studio running? (`http://localhost:3333`)
- Can you see and edit documents there?
- Is the project ID correct? (Check top-left of Sanity Studio)

---

## Quick Test:

1. In Sanity, change Brand Name to: `TEST123`
2. Click **"Publish"**
3. Restart dev server
4. Hard refresh website
5. Should show "TEST123" in the header

If it shows "TEST123", Sanity is working! ✅

