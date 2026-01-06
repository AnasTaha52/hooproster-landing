import { createClient, SanityClient } from "@sanity/client";

/**
 * Initialize Sanity client
 * Environment variables are checked at runtime in useSiteContent hook
 * useCdn: false for development to see real-time updates (no CDN caching)
 * 
 * IMPORTANT: If you get 403 Forbidden errors, you need to:
 * 1. Get a read token from https://www.sanity.io/manage
 * 2. Add it to .env.local as VITE_SANITY_API_TOKEN
 * 3. Restart your dev server
 */
const projectId = import.meta.env.VITE_SANITY_PROJECT_ID || "";
const dataset = import.meta.env.VITE_SANITY_DATASET || "";
const token = import.meta.env.VITE_SANITY_API_TOKEN;

export const sanityClient: SanityClient = createClient({
  projectId,
  dataset,
  apiVersion: "2025-01-01",
  useCdn: false, // Disabled for real-time updates in development
  // Token is required for private datasets or when getting 403 errors
  token: token || undefined,
  // Add request tag to help with debugging
  requestTagPrefix: "hooproster-landing",
});

