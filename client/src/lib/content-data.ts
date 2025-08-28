export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
  content?: string;
  readTime?: string;
}

export interface GuideSection {
  title: string;
  description: string;
  articles: Array<{
    title: string;
    slug: string;
    excerpt: string;
    readTime: string;
  }>;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "hosting-summer-event-austin-heat",
    title: "Hosting a Summer Event in Austin: What You'll Need",
    excerpt: "Essential equipment for beating the Texas heat, from misting fans to shade structures. Plus budget considerations for summer events.",
    category: "SEASONAL GUIDE",
    date: "March 15, 2025",
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    readTime: "8 min read"
  },
  {
    slug: "austin-wedding-rental-costs-150-guests",
    title: "Real Austin Wedding Rental Costs: 150-Guest Reception",
    excerpt: "Complete cost analysis of a typical Austin wedding reception, including hidden fees and money-saving alternatives.",
    category: "COST BREAKDOWN",
    date: "March 10, 2025",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    readTime: "12 min read"
  },
  {
    slug: "costly-mistakes-renting-event-equipment",
    title: "5 Costly Mistakes to Avoid When Renting Event Equipment",
    excerpt: "Learn from common pitfalls that can add hundreds to your rental bill, plus practical tips to avoid them.",
    category: "EXPERT TIPS",
    date: "March 5, 2025",
    image: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    readTime: "6 min read"
  },
  {
    slug: "austin-tent-rental-guide-weather-considerations",
    title: "Austin Tent Rental Guide: Weather and Size Considerations",
    excerpt: "Everything you need to know about tent rentals in Austin's unpredictable weather, from spring storms to summer heat.",
    category: "EQUIPMENT GUIDE",
    date: "February 28, 2025",
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    readTime: "10 min read"
  },
  {
    slug: "corporate-event-rentals-austin-budget-breakdown",
    title: "Corporate Event Rentals in Austin: Complete Budget Breakdown",
    excerpt: "Real costs for corporate events in Austin, from networking receptions to company picnics. What to expect and how to save.",
    category: "BUDGET GUIDE",
    date: "February 20, 2025",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    readTime: "9 min read"
  },
  {
    slug: "austin-venue-rental-restrictions-guide",
    title: "Austin Venue Rental Restrictions: What You Need to Know",
    excerpt: "Navigate venue restrictions for popular Austin event spaces, from parks to private venues. Avoid costly surprises.",
    category: "LOCAL RESOURCES",
    date: "February 15, 2025",
    image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    readTime: "7 min read"
  }
];

export const guideSections: Record<string, GuideSection> = {
  'how-rental-companies-work': {
    title: "How Rental Companies Work",
    description: "Understand the event rental process from start to finish",
    articles: [
      {
        title: "Site Visits & Consultations: What to Expect",
        slug: "site-visits-consultations",
        excerpt: "Learn what happens during rental company site visits, what questions to ask, and how to prepare for an effective consultation.",
        readTime: "6 min read"
      },
      {
        title: "Understanding Rental Contracts, Deposits, and Cancellation Policies",
        slug: "contracts-deposits-cancellation",
        excerpt: "Navigate rental contracts with confidence. Understand deposit requirements, cancellation terms, and what protections you have.",
        readTime: "8 min read"
      },
      {
        title: "Delivery & Setup: What's Included vs Extra Charges",
        slug: "delivery-setup-included-vs-extra",
        excerpt: "Know exactly what's included in delivery and setup services, and what additional services might cost extra.",
        readTime: "5 min read"
      },
      {
        title: "Insurance & Liability: Damage, Weather, and Safety Requirements",
        slug: "insurance-liability-requirements",
        excerpt: "Everything you need to know about insurance requirements, liability coverage, and protecting yourself from unexpected costs.",
        readTime: "7 min read"
      },
      {
        title: "Equipment Quality & Cleanliness Standards",
        slug: "equipment-quality-cleanliness",
        excerpt: "What to expect regarding equipment condition, cleanliness standards, and how to address quality concerns.",
        readTime: "4 min read"
      },
      {
        title: "Customer Service Standards: What Matters and Red Flags",
        slug: "customer-service-red-flags",
        excerpt: "Identify excellent customer service versus warning signs, and know what level of support to expect throughout your rental.",
        readTime: "6 min read"
      }
    ]
  },
  'pricing-budgeting': {
    title: "Pricing & Budgeting",
    description: "Understand fair pricing and create realistic event budgets",
    articles: [
      {
        title: "Austin Pricing Ranges: Tables, Chairs, Tents, and Fans",
        slug: "austin-pricing-ranges-2025",
        excerpt: "Current pricing data for popular rental items in Austin, with seasonal variations and market insights.",
        readTime: "10 min read"
      },
      {
        title: "How to Compare Quotes: What's Included vs Add-Ons",
        slug: "comparing-rental-quotes",
        excerpt: "Learn to evaluate rental quotes fairly by understanding what's included, optional add-ons, and hidden costs.",
        readTime: "7 min read"
      },
      {
        title: "Hidden Fees to Watch For: Delivery Zones, Pickup, and Surcharges",
        slug: "hidden-fees-delivery-surcharges",
        excerpt: "Common hidden fees that can inflate your rental bill, and how to identify them before signing a contract.",
        readTime: "6 min read"
      },
      {
        title: "Example Budgets: Wedding for 100, Backyard Party, Corporate Event",
        slug: "example-event-budgets",
        excerpt: "Real budget breakdowns for different event types, helping you plan realistic rental costs for your occasion.",
        readTime: "12 min read"
      }
    ]
  }
};

export const faqData = [
  {
    question: "Do I need insurance for event rentals?",
    answer: "Most event rental companies require proof of liability insurance, either through your homeowner's policy or a special event policy. Check with your insurance provider about coverage for events on your property. For venues, they often require additional coverage naming them as an additional insured."
  },
  {
    question: "What happens if rental items are damaged?",
    answer: "You're typically responsible for damage beyond normal wear and tear. Rental companies usually have a damage fee schedule in their contracts. Review this carefully before signing and consider event insurance that covers rental equipment damage. Minor scuffs are usually considered normal wear."
  },
  {
    question: "How far in advance should I book event rentals?",
    answer: "For popular dates (weekends, holidays, wedding season), book 2-3 months ahead. For weekday events or off-season, 3-4 weeks is usually sufficient. Austin's busy event season runs March through November, with April, May, October, and November being the most competitive."
  },
  {
    question: "What's typically included in delivery and setup?",
    answer: "Basic delivery and pickup are usually included within a certain radius. Setup services vary by company - some include basic table/chair setup, while others charge extra. Tent setup almost always requires professional installation. Always clarify what's included in your quote versus what costs extra."
  },
  {
    question: "How much should I expect to pay for a deposit?",
    answer: "Most Austin rental companies require 25-50% deposit to secure your date, with the balance due 1-2 weeks before your event. Credit card payments often incur a 3-4% processing fee, while checks or cash may get you a discount. Read the cancellation policy carefully as deposits may be non-refundable."
  },
  {
    question: "Can I cancel or modify my rental order?",
    answer: "Cancellation and modification policies vary by company. Most allow changes up to 1-2 weeks before your event without penalty. Weather-related cancellations may have different terms. Always review the cancellation policy in your contract and consider event insurance for protection."
  },
  {
    question: "What if it rains on my outdoor event?",
    answer: "Weather policies vary by company. Some offer full refunds for severe weather, others may offer rescheduling options. Tent rentals are typically non-refundable as they provide weather protection. Consider event insurance that covers weather-related cancellations."
  },
  {
    question: "How do delivery zones affect pricing?",
    answer: "Most companies include free delivery within a certain radius (usually 15-25 miles from their location). Beyond that, expect delivery charges of $2-5 per mile. Some companies charge flat zone rates. Urban Austin deliveries may include additional city fees or parking permits."
  },
  {
    question: "What's the difference between tent types?",
    answer: "Frame tents are most common and work on any surface - grass, concrete, or decks. Pole tents are more elegant but require grass for staking. Clear-top tents offer views of the sky but cost more. White tents are classic and reflect heat well in Austin summers, while clear-sided options provide better views but less weather protection."
  },
  {
    question: "How should I choose between round and rectangular tables?",
    answer: "Round tables encourage conversation and work well for social events like weddings. Rectangular tables are better for presentations, buffet lines, and maximizing seating in tight spaces. Most events use 60-inch round tables (seats 8) or 8-foot rectangular tables (seats 8-10). Consider your venue layout and event style when deciding."
  },
  {
    question: "Do I need permits for my event?",
    answer: "Permit requirements depend on your location, event size, and tent setup. Austin city events may require special event permits for large gatherings. Tent installations often need permits for structures over certain sizes. Your rental company can usually advise on common requirements, but check with your local municipality for specific rules."
  },
  {
    question: "What should I do if rental items don't arrive or are wrong?",
    answer: "Reputable companies have backup plans for equipment issues. Contact your rental company immediately if items are missing or incorrect. Most have emergency inventory and will work to resolve issues quickly. This is why it's important to choose established companies with good reputations and emergency protocols."
  }
];

export const planningToolsData = {
  tableChairCalculator: [
    { guests: 25, roundTables: "4 (60\" tables)", chairs: 25 },
    { guests: 50, roundTables: "7 (60\" tables)", chairs: 50 },
    { guests: 75, roundTables: "10 (60\" tables)", chairs: 75 },
    { guests: 100, roundTables: "13 (60\" tables)", chairs: 100 },
    { guests: 125, roundTables: "16 (60\" tables)", chairs: 125 },
    { guests: 150, roundTables: "19 (60\" tables)", chairs: 150 },
    { guests: 200, roundTables: "25 (60\" tables)", chairs: 200 }
  ],
  tentSizeGuide: [
    { event: "Cocktail Reception", size: "20×20 tent", guests: "50 guests" },
    { event: "Seated Dinner", size: "20×40 tent", guests: "50 guests" },
    { event: "Dinner + Dance", size: "30×40 tent", guests: "50 guests" },
    { event: "Cocktail Reception", size: "30×30 tent", guests: "100 guests" },
    { event: "Seated Dinner", size: "30×60 tent", guests: "100 guests" },
    { event: "Dinner + Dance", size: "40×60 tent", guests: "100 guests" }
  ],
  danceFloorSizes: [
    { guests: "25-50", size: "12×12 dance floor", percentage: "25% of guests dancing" },
    { guests: "50-75", size: "15×15 dance floor", percentage: "30% of guests dancing" },
    { guests: "75-100", size: "18×18 dance floor", percentage: "35% of guests dancing" },
    { guests: "100-150", size: "20×20 dance floor", percentage: "40% of guests dancing" },
    { guests: "150+", size: "24×24 dance floor", percentage: "45% of guests dancing" }
  ]
};
