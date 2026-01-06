# ✅ Git Security Checklist

Before pushing to GitHub, verify these items:

## ✅ Protected (Not Committed)

Run this command to verify sensitive files are ignored:

```bash
git check-ignore .env.local node_modules dist
```

**Expected output:** Should list all three files, confirming they're ignored.

## ✅ What's Safe to Commit

- ✅ All source code (`src/` folder)
- ✅ Configuration files (package.json, vite.config.ts, etc.)
- ✅ Documentation files (`.md` files)
- ✅ Sanity Studio configuration (contains public project ID only)
- ✅ `.env.example` (template file, no real secrets)

## ❌ What's Protected (Never Commit)

- ❌ `.env.local` (contains API token)
- ❌ `node_modules/` (dependencies)
- ❌ `dist/` (build output)
- ❌ Any file with real API keys or tokens

## 🔍 Final Check Before Push

```bash
# 1. Check what files will be committed
git status

# 2. Verify .env.local is NOT in the list
# Should NOT see:
# - .env.local
# - node_modules/
# - dist/

# 3. Double-check sensitive files are ignored
git check-ignore .env.local
# Should output: .env.local ✅

# 4. If everything looks good, proceed:
git add .
git commit -m "Your commit message"
git push
```

## ⚠️ Important Notes

1. **Project ID is Public**: The project ID `dghj1gwf` in Sanity config files is OK to commit - project IDs are public information, not secrets.

2. **API Token is Secret**: Only the API token in `.env.local` is sensitive - and it's properly ignored.

3. **Environment Variables**: All `.env*` files are protected by `.gitignore`.

---

**You're safe to push!** ✅ All sensitive information is properly protected.

