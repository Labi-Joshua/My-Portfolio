// Placeholder data — each field will map 1:1 to a Sanity document field.
// When Sanity is wired in, replace these arrays with GROQ query results.

export interface CaseStudy {
  slug: string;
  title: string;
  tags: string;                     // "Product Design, Prototyping"
  coverImage: string;
  coverAlt: string;
  year: string;
  // Case study detail — sidebar
  role: string;
  technicalSpecs: string[];
  status: string;
  websiteUrl?: string;
  // Hero screenshots shown at top of case study page
  previewImages: { src: string; alt: string }[];
  // Main content sections
  sections: {
    heading: string;
    body: string;
    images?: { src: string; alt: string; caption?: string }[];
  }[];
  testimonial?: {
    quote: string;
    author: string;
    authorRole: string;
    company: string;
  };
}

export interface Experiment {
  category: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  link?: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'fleet-management-kinikan',
    title: 'Fleet management application\nfor a B2B kinikan',
    tags: 'Product Design, Prototyping',
    coverImage: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80',
    coverAlt: 'Fleet management mobile app screens',
    year: '2024',
    role: 'Lead Designer',
    technicalSpecs: ['Accessibility Audit', 'Dev Handoff'],
    status: 'Shipped Q4 2025 (8 Weeks)',
    websiteUrl: 'https://example.com',
    previewImages: [
      { src: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1400&q=80', alt: 'App overview screen' },
      { src: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=1400&q=80', alt: 'App detail screen' },
    ],
    sections: [
      {
        heading: 'Technical Constraints',
        body: 'I translate business rules into user flows to validate system logic and cover all edge cases (success, error, and empty states). I translate business rules into user flows to validate system logic and cover all edge cases.',
        images: [{ src: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=1200&q=80', alt: 'Flow diagram' }],
      },
      {
        heading: 'Architecture & Logic',
        body: 'I translate business rules into user flows to validate system logic and cover all edge cases (success, error, and empty states). I translate business rules into user flows to validate system logic and cover all edge cases.',
        images: [
          { src: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&q=80', alt: 'Architecture diagram' },
          { src: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&q=80', alt: 'Logic breakdown' },
        ],
      },
      {
        heading: 'The Solution',
        body: 'I translate business rules into user flows to validate system logic and cover all edge cases (success, error, and empty states). I translate business rules into user flows to validate system logic.',
      },
      {
        heading: 'Learnings & Retrospective',
        body: 'I translate business rules into user flows to validate system logic and cover all edge cases (success, error, and empty states). I translate business rules into user flows to validate system logic.',
        images: [{ src: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80', alt: 'Final screens' }],
      },
    ],
    testimonial: {
      quote: '"Working with Joshua has been an excellent experience. He contributed to a few projects that demanded quick turnarounds and creative problem-solving. His strong design sense and attention to user experience made him an indispensable asset to our team."',
      author: 'John Doe',
      authorRole: 'Product Designer',
      company: 'Antlers UI',
    },
  },
  {
    slug: 'we-create-the-hype',
    title: 'Fleet management application\nfor a B2B kinikan',
    tags: 'Product Design, Prototyping',
    coverImage: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
    coverAlt: 'Tablet with WE CREATE THE HYPE design',
    year: '2024',
    role: 'Lead Designer',
    technicalSpecs: ['Accessibility Audit', 'Dev Handoff'],
    status: 'Shipped Q4 2025 (8 Weeks)',
    websiteUrl: 'https://example.com',
    previewImages: [
      { src: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1400&q=80', alt: 'Brand homepage' },
    ],
    sections: [
      {
        heading: 'Technical Constraints',
        body: 'I translate business rules into user flows to validate system logic and cover all edge cases (success, error, and empty states).',
        images: [{ src: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=1200&q=80', alt: 'Constraints diagram' }],
      },
      {
        heading: 'Architecture & Logic',
        body: 'I translate business rules into user flows to validate system logic and cover all edge cases (success, error, and empty states).',
      },
      {
        heading: 'The Solution',
        body: 'I translate business rules into user flows to validate system logic and cover all edge cases.',
      },
      {
        heading: 'Learnings & Retrospective',
        body: 'I translate business rules into user flows to validate system logic.',
      },
    ],
  },
];

export const experiments: Experiment[] = [
  {
    category: 'Brand Templates',
    title: 'Ship client presentations faster.',
    description:
      'Stop starting from scratch. Access easily adaptable brand guideline templates, slide decks, and social carousels ready for clients.',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=600&q=80',
    imageAlt: 'Brand templates preview',
  },
  {
    category: 'Legal Docs',
    title: 'Protect your work and assets.',
    description:
      'Access vetted freelance contracts, IP handoff agreements, and founder pacts to prevent messy project dissolutions.',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80',
    imageAlt: 'Legal documents preview',
    link: 'https://example.com',
  },
];
