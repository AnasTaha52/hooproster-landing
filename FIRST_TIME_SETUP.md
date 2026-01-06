# First Time Setup - Creating Your Landing Page Document

You're seeing "No documents of this type" because you haven't created a Landing Page document yet. Follow these steps:

## Step 1: Create the Landing Page Document

1. **Click the "+" button** (plus icon) next to the "Landing Page" header in the main content area
   - OR click the "+" icon in the top bar next to the project name
2. This will create a new "Landing Page" document

## Step 2: Fill in the Content

A form will appear with all the fields. Fill them in using your `site-content.json` as reference.

### Quick Start - Fill These Essential Fields First:

1. **Logo / Brand**

   - Brand Name: `HOOPROSTER`

2. **Hero Section**

   - Badge Text: `Now on Substack`
   - Main Headline: `Elite Basketball Scouting.`
   - Headline Accent: `Delivered to Your Inbox.`
   - Subheadline: `The professional data and evaluation tools used by scouts, now available for everyone via Substack.`
   - Primary CTA Text: `Get Started`
   - Secondary CTA Text: `Learn More`

3. **Stats Section** (Click "Add item" 3 times to add 3 stats)

   **First Stat:**

   - Label: `Subscribers`
   - Value: `500+`

   **Second Stat:**

   - Label: `Reports`
   - Value: `200+`

   **Third Stat:**

   - Label: `Prospects`
   - Value: `50+`

4. **Features Section**

   - Section Title: `The Competitive Edge`
   - Section Subtitle: `Why scouts, analysts, and basketball enthusiasts choose Hooproster over traditional scouting services.`

   **Feature Items** (Click "Add item" 3 times):

   **First Feature:**

   - Icon: `Search`
   - Title: `Deep Talent Discovery`
   - Description: `Uncover hidden gems before they hit the mainstream radar. Our scouting network spans from high school to international leagues.`

   **Second Feature:**

   - Icon: `FileText`
   - Title: `Detailed Player Reports`
   - Description: `Comprehensive breakdowns with advanced metrics, video analysis, and projection models that go beyond surface-level stats.`

   **Third Feature:**

   - Icon: `Zap`
   - Title: `Instant Inbox Delivery`
   - Description: `Get actionable scouting intel delivered directly to you the moment reports drop. No login required, just open and read.`

5. **Global Settings**

   - Substack URL: `https://hooproster.substack.com`
   - Twitter URL: `https://twitter.com`
   - LinkedIn URL: `https://linkedin.com`

6. **Footer**

   - Copyright Text: `Hooproster. All rights reserved.`
   - Powered By Text: `Powered by`
   - Powered By Link Text: `Substack`

   **Navigation Links** (Click "Add item" 3 times):

   - Label: `Features`, Href: `#features`
   - Label: `Pricing`, Href: `#pricing`
   - Label: `Subscribe`, Href: `substack`

7. **Pricing Section**

   - Section Title: `Simple, Transparent Pricing`
   - Section Subtitle: `Start free and upgrade when you're ready for full access.`
   - Currency Symbol: `$`
   - Pro Price: `15`
   - Billing Interval: `/month`
   - Pro Benefits (Click "Add item" 6 times):
     - `Everything in Free`
     - `Full player database`
     - `Video breakdowns`
     - `Exclusive scouting reports`
     - `Direct scout access`
     - `Early draft rankings`

8. **Newsletter Section**

   - Headline: `Join 500+ Scouts & Analysts`
   - Subheadline: `Get professional scouting reports delivered to your inbox. Start with our free weekly roundup.`
   - CTA Text: `Subscribe on Substack`
   - Footnote: `Free to subscribe. Upgrade anytime.`

9. **Content Preview Section**

   - Section Title: `Sample Reports`
   - Section Subtitle: `A preview of the scouting intel available to Pro subscribers.`
   - View All Button Text: `View All Reports`

   **Reports** (Click "Add item" 5 times):

   - Title: `NBA Draft 2026: Top 10 Prospects Deep Dive`, Date: `Jan 3, 2025`, Category: `Draft Coverage`, Tier: `PRO`
   - Title: `G-League Ignite: Rising Stars to Watch`, Date: `Dec 28, 2024`, Category: `Scouting Report`, Tier: `PRO`
   - Title: `International Prospects: European Tour Report`, Date: `Dec 22, 2024`, Category: `International`, Tier: `PRO`
   - Title: `Weekly Roundup: Stock Risers & Fallers`, Date: `Dec 20, 2024`, Category: `Analysis`, Tier: `FREE`
   - Title: `Cooper Flagg: The #1 Pick Breakdown`, Date: `Dec 15, 2024`, Category: `Player Spotlight`, Tier: `PRO`

## Step 3: Publish the Document

1. Once you've filled in the fields, look for the **"Publish"** button (usually in the top right)
2. Click **"Publish"** (NOT just "Save")
   - You should see the document status change to "Published" (green dot)
   - Draft saves won't show on your website!

## Step 4: See Changes on Your Website

1. Open your website in another browser tab: `http://localhost:8080`
2. **Refresh the page** (F5)
3. Your content should now appear!

### If changes don't appear:

1. **Hard Refresh**: `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)
2. Check that you clicked **"Publish"** not just "Save"
3. Verify the document shows "Published" status (green indicator)
4. Check browser console (F12) for any errors

## Quick Tips:

- ✅ **Always click "Publish"** - drafts don't show on the website
- ✅ **Refresh your website** after publishing to see changes
- ✅ You can leave some fields empty and fill them later
- ⚠️ **Stats must have exactly 3 items** - you'll see a warning if not
- ⚠️ **Features must have exactly 3 items** - you'll see a warning if not

## Need Help?

- See `SANITY_CONTENT_GUIDE.md` for complete field-by-field reference
- See `TROUBLESHOOTING.md` if you encounter issues
