# HoopRoster Landing Page

A modern, feature-rich landing page for HoopRoster built with React, Vite, and Sanity CMS. This project includes a fully responsive design with content management capabilities powered by Sanity.

## Table of Contents

- [Quick Start](#quick-start)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation & Setup](#installation--setup)
- [Development Workflow](#development-workflow)
- [Deployment](#deployment)
- [Helpful Guides](#helpful-guides)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)

---

## Quick Start

### For Local Development (Fastest Way)

```bash
# 1. Clone the repository
git clone <YOUR_GIT_URL>
cd hooproster-landing

# 2. Install dependencies
npm install

# 3. Set up environment variables (see Installation section)
# Create .env.local file with your Sanity credentials

# 4. Run both the app and Sanity Studio
npm run dev:all

# Opens:
# - App: http://localhost:8080
# - Sanity Studio: http://localhost:3333
```

### Alternative Development Methods

**Edit directly in GitHub:**

- Navigate to any file
- Click the "Edit" button (pencil icon) at the top right
- Make your changes and commit

**Use GitHub Codespaces:**

- Go to your repository main page
- Click "Code" (green button) → "Codespaces" tab → "New codespace"
- Edit files and commit changes directly

---

## Tech Stack

This project uses modern, industry-standard technologies:

| Technology       | Purpose                                        |
| ---------------- | ---------------------------------------------- |
| **Vite**         | Lightning-fast build tool and dev server       |
| **React 19**     | UI library for building interactive components |
| **TypeScript**   | Type-safe JavaScript for better code quality   |
| **Tailwind CSS** | Utility-first CSS framework for styling        |
| **shadcn/ui**    | High-quality, customizable React components    |
| **Sanity CMS**   | Headless CMS for content management            |
| **React Query**  | Server state management and data fetching      |
| **Supabase**     | Optional: Backend services (auth, database)    |

---

## Project Structure

```
hooproster-landing/
├── src/
│   ├── components/
│   │   ├── landing/          # Main landing page sections
│   │   │   ├── Hero.tsx
│   │   │   ├── Header.tsx
│   │   │   ├── CompetitiveEdge.tsx
│   │   │   ├── Pricing.tsx
│   │   │   ├── Newsletter.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── ...
│   │   └── ui/               # Reusable UI components (shadcn)
│   ├── pages/                # Page components
│   ├── hooks/                # Custom React hooks
│   ├── lib/                  # Utility functions
│   ├── sanity/               # Sanity configuration & queries
│   │   ├── client.ts         # Sanity client setup
│   │   ├── queries.ts        # GROQ queries
│   │   └── schemaTypes/      # Sanity schema definitions
│   ├── integrations/         # Third-party integrations (Supabase, etc.)
│   ├── App.tsx               # Main app component
│   └── main.tsx              # App entry point
├── public/                   # Static assets
├── studio-hoopster-landing-page/  # Sanity Studio (separate project)
├── package.json
├── vite.config.ts
├── tsconfig.json
└── tailwind.config.ts
```

---

## Prerequisites

Before you begin, ensure you have the following installed:

### Required

- **Node.js** (v18+ recommended) - [Install with nvm](https://github.com/nvm-sh/nvm)
- **npm** (v9+) - Comes with Node.js
- **Git** - For version control
- **A Sanity account** - [Sign up free](https://www.sanity.io)

### Optional

- A code editor (VS Code recommended)
- GitHub/GitLab account for repository hosting
- Vercel account for deployment

---

## Installation & Setup

### Step 1: Clone & Install

```bash
# Clone the repository
git clone <YOUR_GIT_URL>
cd hooproster-landing

# Install all dependencies
npm install

# This also installs dependencies for the Sanity Studio
# (studio-hoopster-landing-page folder)
```

### Step 2: Set Up Sanity CMS

#### Option A: Quick Setup (Using Existing Sanity Project)

If you already have a Sanity project set up:

1. **Get your Sanity credentials:**
   - Go to [https://www.sanity.io/manage](https://www.sanity.io/manage)
   - Select your project
   - Copy your **Project ID** and note your **Dataset** (usually "production")

2. **Create `.env.local` file in the project root:**

   ```env
   VITE_SANITY_PROJECT_ID=your_project_id_here
   VITE_SANITY_DATASET=production
   ```

   Optional (for private datasets):

   ```env
   VITE_SANITY_API_TOKEN=your_read_token_here
   ```

3. **Verify the setup:**
   ```bash
   npm run dev
   ```
   If you see no errors, you're ready!

#### Option B: Complete Setup (New Sanity Project)

If you're setting up Sanity for the first time, follow [SANITY_SETUP.md](./SANITY_SETUP.md) for detailed instructions.

### Step 3: Create Initial Content (First Time Only)

When you first run the app, you need to create a Landing Page document in Sanity:

1. **Start Sanity Studio:**

   ```bash
   npm run dev:studio
   ```

2. **Open** http://localhost:3333 in your browser

3. **Create a Landing Page document:**
   - Click the **"+"** button next to "Landing Page" in the sidebar
   - Fill in all required fields (see [FIRST_TIME_SETUP.md](./FIRST_TIME_SETUP.md) for detailed field reference)
   - Click **"Publish"** to save

4. **Your landing page is now live!**

---

## Development Workflow

### Run Everything at Once

```bash
npm run dev:all
```

Opens:

- **React App:** http://localhost:8080 (your landing page)
- **Sanity Studio:** http://localhost:3333 (content editor)

### Run Separately (If Preferred)

**Terminal 1 - Landing Page:**

```bash
npm run dev
# Opens at http://localhost:8080
```

**Terminal 2 - Sanity Studio:**

```bash
npm run dev:studio
# Opens at http://localhost:3333
```

### Editing Content

1. Make changes in Sanity Studio (http://localhost:3333)
2. Click **"Publish"** to save changes
3. Refresh the landing page (http://localhost:8080) to see updates

### Available Commands

```bash
npm run dev          # Start React app dev server
npm run dev:studio   # Start Sanity Studio dev server
npm run dev:all      # Start both simultaneously
npm run build        # Build for production
npm run build:dev    # Build in development mode
npm run lint         # Run ESLint to check code quality
npm run preview      # Preview production build locally
```

### Code Quality

Before committing code:

```bash
npm run lint         # Check for linting errors
```

---

## Deployment

### Deploy to Vercel (Recommended)

The project is pre-configured for Vercel deployment:

1. **Push your code to GitHub**

   ```bash
   git push origin main
   ```

2. **Go to [Vercel Dashboard](https://vercel.com/new)**

3. **Import your repository**
   - Select your Git provider (GitHub, GitLab, Bitbucket)
   - Choose your repository

4. **Add Environment Variables**

   ```
   VITE_SANITY_PROJECT_ID=your_project_id
   VITE_SANITY_DATASET=production
   ```

5. **Click "Deploy"**

**For detailed deployment instructions with troubleshooting, see [VERCEL_DEPLOYMENT.md](./VERCEL_DEPLOYMENT.md)**

### Environment Variables for Production

| Variable                 | Value                                                  |
| ------------------------ | ------------------------------------------------------ |
| `VITE_SANITY_PROJECT_ID` | Your Sanity project ID                                 |
| `VITE_SANITY_DATASET`    | Your dataset name (usually "production")               |
| `VITE_SANITY_API_TOKEN`  | (Optional) Your Sanity read token for private datasets |

---

## Helpful Guides

Detailed documentation for specific tasks:

| Guide                                          | Purpose                                        |
| ---------------------------------------------- | ---------------------------------------------- |
| [SANITY_SETUP.md](./SANITY_SETUP.md)           | Complete Sanity CMS setup instructions         |
| [FIRST_TIME_SETUP.md](./FIRST_TIME_SETUP.md)   | How to create your first Landing Page document |
| [DEV_SETUP.md](./DEV_SETUP.md)                 | Development workflow and running both servers  |
| [VERCEL_DEPLOYMENT.md](./VERCEL_DEPLOYMENT.md) | Step-by-step Vercel deployment guide           |
| [DEBUG_SANITY.md](./DEBUG_SANITY.md)           | Troubleshooting Sanity connection issues       |
| [TROUBLESHOOTING.md](./TROUBLESHOOTING.md)     | General troubleshooting for common issues      |
| [GET_SANITY_TOKEN.md](./GET_SANITY_TOKEN.md)   | How to create Sanity API tokens                |

---

## Troubleshooting

### "Cannot find module" or Package Errors

```bash
# Clear node_modules and reinstall
rm -rf node_modules
npm install
```

### Sanity Credentials Error

```
Error: Missing Sanity project ID
```

**Solution:**

1. Check that `.env.local` exists in the project root (not in `src/` folder)
2. Verify the contents:
   ```env
   VITE_SANITY_PROJECT_ID=your_actual_project_id
   VITE_SANITY_DATASET=production
   ```
3. Restart the dev server: `npm run dev`

### Port Already in Use

```
Error: Port 8080 is already in use
```

**Solution for React app:**

- The port is set in `vite.config.ts` - change it and restart

**Solution for Sanity Studio:**

```bash
cd studio-hoopster-landing-page
npm run dev -- --port 3334
```

### Changes Not Appearing on Site

1. **Check if content is published** in Sanity Studio
   - Look for a green "Published" indicator
   - Draft documents won't appear on your site

2. **Clear browser cache**
   - Press `Ctrl+Shift+Delete` (Windows) or `Cmd+Shift+Delete` (Mac)
   - Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)

3. **Restart dev server**
   ```bash
   npm run dev
   ```

### More Detailed Troubleshooting

See [TROUBLESHOOTING.md](./TROUBLESHOOTING.md) for additional solutions.

---

## Contributing

### Making Changes

1. **Create a new branch:**

   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes and test locally:**

   ```bash
   npm run dev:all
   ```

3. **Check code quality:**

   ```bash
   npm run lint
   ```

4. **Commit your changes:**

   ```bash
   git add .
   git commit -m "Add your meaningful commit message"
   ```

5. **Push and create a Pull Request:**
   ```bash
   git push origin feature/your-feature-name
   ```

---

## Support & Resources

### Documentation

- [Vite Docs](https://vitejs.dev/)
- [React Docs](https://react.dev/)
- [Sanity Docs](https://www.sanity.io/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [shadcn/ui Components](https://ui.shadcn.com/)

### Community

- Sanity Community Slack
- React Community Discord
- GitHub Issues in this repository

---

## License

This project is private. All rights reserved.

---

**Last Updated:** January 2026

For the latest information and updates, check our [GitHub repository](https://github.com/AnasTaha52/hooproster-landing).
