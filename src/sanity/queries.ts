import groq from "groq";
import type { SiteContent } from "@/hooks/useSiteContent";

/**
 * GROQ query to fetch the landing page document from Sanity
 * This query fetches all fields needed for the landing page
 */
export const landingPageQuery = groq`
  *[_type == "landingPage" && !(_id in path("drafts.**"))][0] {
    logo {
      brandName
    },
    hero {
      badge,
      title,
      subtitle,
      description,
      primaryCTA,
      secondaryCTA
    },
    stats[] {
      label,
      value
    },
    features {
      sectionTitle,
      sectionSubtitle,
      items[] {
        icon,
        title,
        description
      }
    },
    contentPreview {
      sectionTitle,
      sectionSubtitle,
      viewAllText,
      reports[] {
        title,
        date,
        category,
        tier
      }
    },
    pricing {
      sectionTitle,
      sectionSubtitle,
      currency,
      proPrice,
      interval,
      benefits
    },
    newsletter {
      headline,
      subheadline,
      ctaText,
      footnote
    },
    global {
      substackUrl,
      twitterUrl,
      linkedinUrl
    },
    footer {
      copyright,
      poweredBy,
      poweredByLink,
      navLinks[] {
        label,
        href
      }
    }
  }
`;

/**
 * Transforms Sanity document into the format expected by components
 */
export function transformSanityData(sanityData: any): SiteContent | null {
  if (!sanityData) return null;

  // Transform stats array to match expected format
  const stats = sanityData.stats?.reduce(
    (acc: any, stat: any, index: number) => {
      if (index === 0) {
        acc.subscribersCount = stat.value;
        acc.subscribersLabel = stat.label;
      } else if (index === 1) {
        acc.reportsCount = stat.value;
        acc.reportsLabel = stat.label;
      } else if (index === 2) {
        acc.prospectsCount = stat.value;
        acc.prospectsLabel = stat.label;
      }
      return acc;
    },
    {}
  ) || {
    subscribersCount: "",
    subscribersLabel: "",
    reportsCount: "",
    reportsLabel: "",
    prospectsCount: "",
    prospectsLabel: "",
  };

  // Transform pricing to match expected format (with Free and Pro tiers)
  const pricingTiers = [
    {
      name: "Free",
      price: "0",
      interval: "",
      description: "Get started with weekly insights",
      features: [
        "Weekly roundup newsletter",
        "Public player previews",
        "Community access",
      ],
      ctaText: "Subscribe Free",
      featured: false,
    },
    {
      name: "Pro",
      price: sanityData.pricing?.proPrice || "15",
      interval: sanityData.pricing?.interval || "/month",
      description: "Full access to all scouting content",
      features: sanityData.pricing?.benefits || [],
      ctaText: "Get Pro Access",
      featured: true,
      badge: "MOST POPULAR",
    },
  ];

  return {
    _documentation: {
      howToEdit: "Content is managed in Sanity CMS",
      instructions: [
        "1. Log in to your Sanity Studio",
        "2. Edit the Landing Page document",
        "3. Publish your changes",
        "4. Refresh your website to see updates",
      ],
    },
    global: {
      siteName: sanityData.logo?.brandName || "HOOPROSTER",
      substackUrl: sanityData.global?.substackUrl || "",
      twitterUrl: sanityData.global?.twitterUrl || "",
      linkedinUrl: sanityData.global?.linkedinUrl || "",
    },
    hero: {
      badge: sanityData.hero?.badge || "",
      mainHeadline: sanityData.hero?.title || "",
      mainHeadlineAccent: sanityData.hero?.subtitle || "",
      subHeadline: sanityData.hero?.description || "",
      ctaText: sanityData.hero?.primaryCTA || "",
      secondaryCtaText: sanityData.hero?.secondaryCTA || "",
    },
    stats,
    features: {
      sectionTitle: sanityData.features?.sectionTitle || "",
      sectionSubtitle: sanityData.features?.sectionSubtitle || "",
      items: sanityData.features?.items || [],
    },
    contentPreview: {
      sectionTitle: sanityData.contentPreview?.sectionTitle || "",
      sectionSubtitle: sanityData.contentPreview?.sectionSubtitle || "",
      viewAllText: sanityData.contentPreview?.viewAllText || "",
      reports: sanityData.contentPreview?.reports || [],
    },
    pricing: {
      sectionTitle: sanityData.pricing?.sectionTitle || "",
      sectionSubtitle: sanityData.pricing?.sectionSubtitle || "",
      currency: sanityData.pricing?.currency || "$",
      tiers: pricingTiers,
    },
    newsletter: {
      headline: sanityData.newsletter?.headline || "",
      subheadline: sanityData.newsletter?.subheadline || "",
      ctaText: sanityData.newsletter?.ctaText || "",
      footnote: sanityData.newsletter?.footnote || "",
    },
    footer: {
      copyright: sanityData.footer?.copyright || "",
      poweredBy: sanityData.footer?.poweredBy || "",
      poweredByLink: sanityData.footer?.poweredByLink || "",
      navLinks: sanityData.footer?.navLinks || [],
    },
  };
}

