export interface Article {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string;
  readTime: number;
  image: string;
  imageAlt: string;
  featured?: boolean;
}

export interface TinyThought {
  datetime: string;
  quote: string;
}

export const articles: Article[] = [
  {
    slug: 'fleet-management-b2b',
    title: 'Fleet management application for a B2B kinikan',
    description: 'Stop starting from scratch. Access easily adaptable brand guideline templates, slide decks, and social carousels ready for clients.',
    category: 'Design Systems',
    date: 'March 2026',
    readTime: 9,
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80',
    imageAlt: 'Fleet management mobile app',
    featured: true,
  },
  {
    slug: 'ship-presentations-faster',
    title: 'Ship client presentations faster.',
    description: 'Stop starting from scratch. Access easily adaptable brand guideline templates, slide decks, and social carousels ready for clients.',
    category: 'Design Systems',
    date: 'Feb 18, 2026',
    readTime: 9,
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&q=80',
    imageAlt: 'Presentation templates',
  },
  {
    slug: 'documenting-design-tokens',
    title: 'How I document design tokens for dev handoff.',
    description: 'A practical guide to structuring token libraries that developers can actually use without constant back-and-forth.',
    category: 'Design Systems',
    date: 'Jan 30, 2026',
    readTime: 7,
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&q=80',
    imageAlt: 'Design tokens documentation',
  },
  {
    slug: 'figma-variables-workflow',
    title: 'My Figma variables workflow after six months.',
    description: 'Variables changed how I build components. Here is what stuck and what I still struggle with after half a year of daily use.',
    category: 'Craft',
    date: 'Jan 12, 2026',
    readTime: 6,
    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=400&q=80',
    imageAlt: 'Figma variables workflow',
  },
  {
    slug: 'prototyping-edge-cases',
    title: 'Prototyping for edge cases, not the happy path.',
    description: 'Most prototypes show the golden path. The real design work happens in error states, empty states, and loading states.',
    category: 'Craft',
    date: 'Dec 20, 2025',
    readTime: 8,
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&q=80',
    imageAlt: 'Prototyping process on whiteboard',
  },
  {
    slug: 'color-contrast-ceiling',
    title: 'Color contrast ratios are the floor, not the ceiling.',
    description: 'Passing WCAG AA is the minimum. Here is how I approach color decisions with real users in mind, not just audit scores.',
    category: 'Accessibility',
    date: 'Dec 5, 2025',
    readTime: 5,
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&q=80',
    imageAlt: 'Color palette swatches',
  },
  {
    slug: 'inclusive-form-design',
    title: 'Inclusive form design: what I got wrong for years.',
    description: 'Forms are the hardest part of any product to get right for everyone. Here are the patterns I have finally internalized.',
    category: 'Accessibility',
    date: 'Nov 18, 2025',
    readTime: 11,
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&q=80',
    imageAlt: 'Form on a desk',
  },
  {
    slug: 'design-reviews-that-work',
    title: 'Design reviews that actually move projects forward.',
    description: 'Most design reviews are critique sessions that feel good but change nothing. Here is a framework that leads to real decisions.',
    category: 'People & Process',
    date: 'Nov 2, 2025',
    readTime: 7,
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80',
    imageAlt: 'Team design review session',
  },
  {
    slug: 'stakeholder-alignment',
    title: 'Getting stakeholder alignment without losing the design.',
    description: 'The tension between what stakeholders want and what users need is real. Here is how I navigate it without compromising either.',
    category: 'People & Process',
    date: 'Oct 14, 2025',
    readTime: 9,
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&q=80',
    imageAlt: 'Stakeholder presentation',
  },
];

export const tinyThoughts: TinyThought[] = [
  {
    datetime: 'Feb 18, 2026 | 11:42 PM',
    quote: '"A token isn\'t a value. It\'s a promise that the value can change without breaking anything."',
  },
  {
    datetime: 'Feb 12, 2026 | 9:15 AM',
    quote: '"Consistency is not about making everything look the same. It\'s about making everything behave the same way."',
  },
  {
    datetime: 'Jan 29, 2026 | 2:30 PM',
    quote: '"The empty state is the first state. Design it last and you\'re already doing it wrong."',
  },
  {
    datetime: 'Jan 15, 2026 | 10:00 PM',
    quote: '"Annotation explains what. Documentation explains why. Most handoffs have neither."',
  },
  {
    datetime: 'Dec 30, 2025 | 7:45 PM',
    quote: '"Stop designing for the user who knows exactly what they want. Design for the user who is figuring it out."',
  },
  {
    datetime: 'Dec 10, 2025 | 3:20 PM',
    quote: '"A component library without documentation is just a collection of unnamed objects."',
  },
];
