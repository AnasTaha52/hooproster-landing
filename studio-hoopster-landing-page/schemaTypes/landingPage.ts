import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'landingPage',
  title: 'Landing Page',
  type: 'document',
  // Make this a singleton document (only one instance allowed)
  __experimental_actions: [
    // 'create',
    'update',
    // 'delete',
    'publish',
  ],
  fields: [
    // Logo / Brand
    defineField({
      name: 'logo',
      title: 'Logo / Brand',
      type: 'object',
      fields: [
        defineField({
          name: 'brandName',
          title: 'Brand Name',
          type: 'string',
          description: "The name of your brand/website (e.g., 'HOOPROSTER')",
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),

    // Hero Section
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        defineField({
          name: 'badge',
          title: 'Badge Text',
          type: 'string',
          description: "Small badge text above headline (e.g., 'Now on Substack')",
        }),
        defineField({
          name: 'title',
          title: 'Main Headline',
          type: 'string',
          description: 'First part of the main headline',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'subtitle',
          title: 'Headline Accent',
          type: 'string',
          description: 'Second part of the headline (accented)',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'description',
          title: 'Subheadline',
          type: 'text',
          description: 'Description text below the headline',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'primaryCTA',
          title: 'Primary CTA Text',
          type: 'string',
          description: 'Text for the primary call-to-action button',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'secondaryCTA',
          title: 'Secondary CTA Text',
          type: 'string',
          description: 'Text for the secondary call-to-action button',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),

    // Stats Section
    defineField({
      name: 'stats',
      title: 'Stats Section',
      type: 'array',
      description: 'Statistics to display - exactly 3 stats required: Subscribers, Reports, and Prospects',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'label',
              title: 'Label',
              type: 'string',
              description: "Label for the stat (e.g., 'Subscribers', 'Reports', 'Prospects')",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'value',
              title: 'Value',
              type: 'string',
              description: "Statistic value (e.g., '500+', '200+', '50+')",
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title: 'label',
              subtitle: 'value',
            },
          },
        },
      ],
      validation: (Rule) => Rule.required().min(3).max(3).warning('Stats section should have exactly 3 items (typically: Subscribers, Reports, Prospects)'),
    }),

    // Features Section
    defineField({
      name: 'features',
      title: 'Features / Competitive Edge',
      type: 'object',
      fields: [
        defineField({
          name: 'sectionTitle',
          title: 'Section Title',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'sectionSubtitle',
          title: 'Section Subtitle',
          type: 'text',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'items',
          title: 'Feature Items',
          type: 'array',
          description: 'Exactly 3 feature items required',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'icon',
                  title: 'Icon Name',
                  type: 'string',
                  description: "Icon name from lucide-react (e.g., 'Search', 'FileText', 'Zap')",
                  options: {
                    list: [
                      {title: 'Search', value: 'Search'},
                      {title: 'FileText', value: 'FileText'},
                      {title: 'Zap', value: 'Zap'},
                    ],
                  },
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: 'title',
                  title: 'Title',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: 'description',
                  title: 'Description',
                  type: 'text',
                  validation: (Rule) => Rule.required(),
                }),
              ],
              preview: {
                select: {
                  title: 'title',
                  subtitle: 'description',
                },
              },
            },
          ],
          validation: (Rule) => Rule.required().min(3).max(3).error('You must have exactly 3 feature items'),
        }),
      ],
    }),

    // Content Preview Section
    defineField({
      name: 'contentPreview',
      title: 'Content Preview / Sample Reports',
      type: 'object',
      fields: [
        defineField({
          name: 'sectionTitle',
          title: 'Section Title',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'sectionSubtitle',
          title: 'Section Subtitle',
          type: 'text',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'viewAllText',
          title: 'View All Button Text',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'reports',
          title: 'Reports',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'title',
                  title: 'Title',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: 'date',
                  title: 'Date',
                  type: 'string',
                  description: "Date string (e.g., 'Jan 3, 2025')",
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: 'category',
                  title: 'Category',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: 'tier',
                  title: 'Tier',
                  type: 'string',
                  options: {
                    list: [
                      {title: 'Free', value: 'FREE'},
                      {title: 'Pro', value: 'PRO'},
                    ],
                  },
                  validation: (Rule) => Rule.required(),
                }),
              ],
              preview: {
                select: {
                  title: 'title',
                  subtitle: 'category',
                },
              },
            },
          ],
          validation: (Rule) => Rule.required().min(1),
        }),
      ],
    }),

    // Pricing Section
    defineField({
      name: 'pricing',
      title: 'Pricing Section',
      type: 'object',
      fields: [
        defineField({
          name: 'sectionTitle',
          title: 'Section Title',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'sectionSubtitle',
          title: 'Section Subtitle',
          type: 'text',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'currency',
          title: 'Currency Symbol',
          type: 'string',
          description: "Currency symbol (e.g., '$')",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'proPrice',
          title: 'Pro Price',
          type: 'string',
          description: "Price for Pro tier (e.g., '15')",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'interval',
          title: 'Billing Interval',
          type: 'string',
          description: "Billing interval (e.g., '/month')",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'benefits',
          title: 'Pro Benefits',
          type: 'array',
          description: 'List of benefits/features for Pro tier',
          of: [{type: 'string'}],
          validation: (Rule) => Rule.required().min(1),
        }),
      ],
    }),

    // Newsletter Section
    defineField({
      name: 'newsletter',
      title: 'Newsletter Section',
      type: 'object',
      fields: [
        defineField({
          name: 'headline',
          title: 'Headline',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'subheadline',
          title: 'Subheadline',
          type: 'text',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'ctaText',
          title: 'CTA Text',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'footnote',
          title: 'Footnote',
          type: 'string',
        }),
      ],
    }),

    // Global Settings
    defineField({
      name: 'global',
      title: 'Global Settings',
      type: 'object',
      fields: [
        defineField({
          name: 'substackUrl',
          title: 'Substack URL',
          type: 'url',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'twitterUrl',
          title: 'Twitter URL',
          type: 'url',
        }),
        defineField({
          name: 'linkedinUrl',
          title: 'LinkedIn URL',
          type: 'url',
        }),
      ],
    }),

    // Footer
    defineField({
      name: 'footer',
      title: 'Footer',
      type: 'object',
      fields: [
        defineField({
          name: 'copyright',
          title: 'Copyright Text',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'poweredBy',
          title: 'Powered By Text',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'poweredByLink',
          title: 'Powered By Link Text',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'navLinks',
          title: 'Navigation Links',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'label',
                  title: 'Label',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: 'href',
                  title: 'Href',
                  type: 'string',
                  description: "Anchor link (e.g., '#features') or 'substack'",
                  validation: (Rule) => Rule.required(),
                }),
              ],
            },
          ],
        }),
      ],
    }),
  ],

  preview: {
    select: {
      title: 'logo.brandName',
      subtitle: 'hero.title',
    },
  },
})

