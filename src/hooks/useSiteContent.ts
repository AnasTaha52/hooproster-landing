import { useState, useEffect } from "react";
import { sanityClient } from "@/sanity/client";
import { landingPageQuery, transformSanityData } from "@/sanity/queries";

// Fallback to JSON data type
interface SiteContentJSON {
  _documentation: {
    howToEdit: string;
    instructions: string[];
  };
  global: {
    siteName: string;
    substackUrl: string;
    twitterUrl: string;
    linkedinUrl: string;
  };
  hero: {
    badge: string;
    mainHeadline: string;
    mainHeadlineAccent: string;
    subHeadline: string;
    ctaText: string;
    secondaryCtaText: string;
  };
  stats: {
    subscribersCount: string;
    subscribersLabel: string;
    reportsCount: string;
    reportsLabel: string;
    prospectsCount: string;
    prospectsLabel: string;
  };
  features: {
    sectionTitle: string;
    sectionSubtitle: string;
    items: Array<{
      icon: string;
      title: string;
      description: string;
    }>;
  };
  contentPreview: {
    sectionTitle: string;
    sectionSubtitle: string;
    viewAllText: string;
    reports: Array<{
      title: string;
      date: string;
      category: string;
      tier: "PRO" | "FREE";
    }>;
  };
  pricing: {
    sectionTitle: string;
    sectionSubtitle: string;
    currency: string;
    tiers: Array<{
      name: string;
      price: string;
      interval: string;
      description: string;
      features: string[];
      ctaText: string;
      featured: boolean;
      badge?: string;
    }>;
  };
  newsletter: {
    headline: string;
    subheadline: string;
    ctaText: string;
    footnote: string;
  };
  footer: {
    copyright: string;
    poweredBy: string;
    poweredByLink: string;
    navLinks: Array<{
      label: string;
      href: string;
    }>;
  };
}

export interface SiteContent extends SiteContentJSON {}

const useSiteContent = () => {
  const [content, setContent] = useState<SiteContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        // Check if Sanity environment variables are configured
        const projectId = import.meta.env.VITE_SANITY_PROJECT_ID;
        const dataset = import.meta.env.VITE_SANITY_DATASET;

        if (!projectId || !dataset) {
          console.warn(
            "Sanity configuration missing. Falling back to JSON file. Please set VITE_SANITY_PROJECT_ID and VITE_SANITY_DATASET in .env.local"
          );
          // Fallback to JSON file
          return loadFromJSON();
        }

        // Add timeout to prevent hanging
        const timeoutPromise = new Promise((_, reject) => {
          setTimeout(() => reject(new Error("Sanity fetch timeout after 10 seconds")), 10000);
        });

        // Fetch data from Sanity CMS with timeout
        // CDN is disabled in client.ts for real-time updates
        console.log("🔍 Fetching data from Sanity...", {
          projectId: projectId,
          dataset: dataset,
          url: `https://${projectId}.api.sanity.io/v2025-01-01/data/query/${dataset}`,
        });
        
        // First, test if we can connect to Sanity at all
        try {
          const testQuery = `*[_type == "landingPage"] | order(_updatedAt desc) [0...1]`;
          const testResult = await sanityClient.fetch(testQuery);
          console.log("🧪 Test query result:", testResult);
          
          if (!testResult || testResult.length === 0) {
            console.warn("⚠️ No 'landingPage' documents found. Please create one in Sanity Studio.");
            return loadFromJSON();
          }
          
          // Check if document is published (not a draft)
          const isDraft = testResult[0]._id?.startsWith('drafts.');
          if (isDraft) {
            console.warn("⚠️ Found a draft document. Please PUBLISH it in Sanity Studio (click 'Publish' button).");
            return loadFromJSON();
          }
        } catch (testError) {
          console.error("❌ Error testing Sanity connection:", testError);
          console.error("This might be a connection issue. Check your project ID and dataset.");
          return loadFromJSON();
        }
        
        const sanityData = await Promise.race([
          sanityClient.fetch(landingPageQuery),
          timeoutPromise,
        ]) as any;

        console.log("📦 Sanity response:", sanityData);

        if (!sanityData || Object.keys(sanityData).length === 0) {
          console.warn(
            "❌ No landing page document found in Sanity. Please create and PUBLISH a 'landingPage' document in your Sanity Studio."
          );
          // Fallback to JSON file
          return loadFromJSON();
        }

        // Transform Sanity data to match component expectations
        const transformedData = transformSanityData(sanityData);

        if (!transformedData) {
          console.warn("Failed to transform Sanity data. Falling back to JSON file.");
          // Fallback to JSON file
          return loadFromJSON();
        }

        console.log("✅ Successfully loaded content from Sanity!");
        setContent(transformedData);
        setLoading(false);
      } catch (err) {
        console.error("❌ Error fetching content from Sanity:", err);
        console.error("Error details:", {
          message: err instanceof Error ? err.message : "Unknown error",
          stack: err instanceof Error ? err.stack : undefined,
        });
        console.log("Falling back to JSON file...");
        // Fallback to JSON file
        loadFromJSON();
      }
    };

    // Fallback function to load from JSON
    const loadFromJSON = async () => {
      try {
        const response = await fetch("/site-content.json");
        if (!response.ok) {
          throw new Error("Failed to load site content from JSON");
        }
        const data = await response.json() as SiteContent;
        setContent(data);
        setError(
          "⚠️ Using fallback JSON content. " +
          "To use Sanity CMS: 1) Create a 'Landing Page' document in Sanity Studio, 2) Fill in the content, 3) Click 'Publish' (not just Save). " +
          "Check browser console (F12) for detailed error messages."
        );
      } catch (jsonErr) {
        console.error("Error loading JSON fallback:", jsonErr);
        setError(
          jsonErr instanceof Error
            ? jsonErr.message
            : "Failed to load content from both Sanity and JSON"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, []);

  return { content, loading, error };
};

export default useSiteContent;
