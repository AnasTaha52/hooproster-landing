# Welcome to HoopRoster - Substack Project

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS
- Sanity CMS (for content management)
- Supabase (optional)

## Deployment

### Deploy to Vercel

This project is configured for deployment on Vercel with Sanity CMS integration.

**📖 For detailed deployment instructions, see [VERCEL_DEPLOYMENT.md](./VERCEL_DEPLOYMENT.md)**

**Quick Steps:**
1. Push your code to GitHub/GitLab/Bitbucket
2. Import project in [Vercel Dashboard](https://vercel.com/new)
3. Add environment variables (see deployment guide)
4. Deploy!

**Required Environment Variables:**
- `VITE_SANITY_PROJECT_ID` - Your Sanity project ID
- `VITE_SANITY_DATASET` - Your Sanity dataset name (usually "production")
- `VITE_SANITY_API_TOKEN` - Optional but recommended (Sanity read token)

## Setup Guides

- **[SANITY_SETUP.md](./SANITY_SETUP.md)** - How to set up Sanity CMS
- **[VERCEL_DEPLOYMENT.md](./VERCEL_DEPLOYMENT.md)** - Complete Vercel deployment guide
- **[DEBUG_SANITY.md](./DEBUG_SANITY.md)** - Troubleshooting Sanity connection issues
