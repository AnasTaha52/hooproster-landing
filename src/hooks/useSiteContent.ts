import { useState, useEffect } from "react";

export interface SiteContent {
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

const useSiteContent = () => {
  const [content, setContent] = useState<SiteContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch("/site-content.json");
        if (!response.ok) {
          throw new Error("Failed to load site content");
        }
        const data = await response.json();
        setContent(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, []);

  return { content, loading, error };
};

export default useSiteContent;
