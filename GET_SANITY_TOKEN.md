# How to Fix 403 Forbidden Error - Get Sanity API Token

You're getting a **403 Forbidden** error because your Sanity dataset requires authentication. You need to get an API token.

## Step 1: Get Your Sanity API Token

1. Go to: **https://www.sanity.io/manage**
2. Select your project: **"Hoopster-Landing-Page"** (or the project with ID `dghj1gwf`)
3. Go to **"API"** section (usually in the left sidebar or top menu)
4. Click on **"Tokens"** or **"API Tokens"**
5. Click **"Add API Token"** or **"Create Token"**
6. Fill in:
   - **Name**: `Landing Page Read Token` (or any name you like)
   - **Permissions**: Select **"Read"** or **"Viewer"** (don't use "Editor" or "Admin" for security)
7. Click **"Save"** or **"Create"**
8. **Copy the token** (it will look like a long string like: `skAbC123...`)
   - ⚠️ **Important**: You can only see this token once! Copy it immediately.

## Step 2: Add Token to .env.local

1. Open `.env.local` file in the `hooproster-landing` folder
2. Add the token:

```env
VITE_SANITY_PROJECT_ID=dghj1gwf
VITE_SANITY_DATASET=production
VITE_SANITY_API_TOKEN=skAbC123...paste-your-token-here
```

**Replace** `skAbC123...paste-your-token-here` with your actual token from Step 1.

3. **Save** the file

## Step 3: Restart Dev Server

**CRITICAL**: After adding the token, you MUST restart your dev server:

1. Stop your current server: Press **Ctrl + C** in the terminal
2. Start it again: `npm run dev`

## Step 4: Test

1. Open your website: `http://localhost:8080`
2. Open browser console (F12)
3. You should no longer see 403 errors
4. If you have a published Landing Page document, it should load!

---

## Alternative: Make Dataset Public (Not Recommended)

If you don't want to use a token, you can make your dataset public:

1. Go to: https://www.sanity.io/manage
2. Select your project
3. Go to **"API"** → **"Datasets"**
4. Find **"production"** dataset
5. Change **"Access"** from "Private" to **"Public"**
6. ⚠️ **Warning**: This makes all your content publicly readable. Only do this if your content is meant to be public.

---

## Troubleshooting

### Still Getting 403 After Adding Token?

- ✅ Make sure token is in `.env.local` (not `.env`)
- ✅ Make sure you restarted the dev server
- ✅ Check token has "Read" permissions
- ✅ Verify token is correct (no extra spaces)

### Can't Find API Tokens Section?

- Look for "API" → "Tokens" in your Sanity project settings
- Or try: https://www.sanity.io/manage/personal/projects/YOUR_PROJECT_ID/api/tokens
- Replace `YOUR_PROJECT_ID` with `dghj1gwf`

### Token Not Working?

- Make sure token has **Read** or **Viewer** permissions
- Try creating a new token
- Check the token is copied correctly (no missing characters)

---

## Security Note

- ✅ **Read tokens** are safe to use in client-side code (they're meant for this)
- ✅ Keep your token in `.env.local` (already in .gitignore)
- ❌ Never commit tokens to git
- ❌ Don't share tokens publicly
