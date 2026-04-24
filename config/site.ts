export const siteConfig = {
  name: "Trinity",
  tagline: "Automate your conversational commerce.",
  shortDescription: "Trinity is a business automation platform that turns your WhatsApp and Instagram into an intelligent sales assistant.",
  longDescription: "Connect your WhatsApp and Instagram accounts, ingest your product catalog, and let Trinity's AI bot handle customer queries, support, and sales 24/7. Save time, increase conversions, and reduce support load with our advanced conversational automation.",
  url: "https://trinity-demo.com",
  logoText: "TRINITY",
  logoUrl: "/Trinity/logo.png",
  brandColors: {
    primary: "#0ea5e9", // Tailwind sky-500
    accent: "#8b5cf6", // Tailwind violet-500
    dark: "#09090b", // Tailwind zinc-950
  },
  contact: {
    email: "theaiemperor@gmail.com",
    phone: "+91 7734865267",
  },
  social: {
    twitter: "https://twitter.com/trinity",
    instagram: "https://instagram.com/trinity",
    linkedin: "https://linkedin.com/company/trinity",
  },
  ctaLabels: {
    primary: "Book a Demo",
    secondary: "Explore Use Cases",
  },
  hero: {
    headline: "The AI Sales Assistant for WhatsApp & Instagram",
    subheadline: "Automate customer conversations, answer product queries, and drive sales 24/7. Connect your business in minutes.",
  },
  features: [
    {
      id: "ai-assistant",
      title: "AI Conversation Assistant",
      description: "An intelligent bot that behaves like your best sales rep, understanding context and intent.",
      icon: "Robot"
    },
    {
      id: "knowledge-base",
      title: "Product Knowledge Ingestion",
      description: "Easily upload your product catalog, pricing, and FAQs. The bot learns everything instantly.",
      icon: "Database"
    },
    {
      id: "whatsapp-auto",
      title: "WhatsApp Automation",
      description: "Engage customers directly where they already spend their time.",
      icon: "BrandWhatsapp"
    },
    {
      id: "ig-auto",
      title: "Instagram Automation",
      description: "Turn casual DMs and story replies into qualified leads and sales.",
      icon: "BrandInstagram"
    },
    {
      id: "dashboard",
      title: "Business Dashboard",
      description: "A centralized hub to monitor conversations, track metrics, and manage bot knowledge.",
      icon: "LayoutDashboard"
    },
    {
      id: "routing",
      title: "Smart Response Routing",
      description: "Automatically route complex issues to human agents when necessary.",
      icon: "Route"
    },
    {
      id: "lead-capture",
      title: "Lead Capture",
      description: "Automatically collect contact info and qualify leads during conversations.",
      icon: "Magnet"
    },
    {
      id: "scheduled-outreach",
      title: "Scheduled Outreach",
      description: "Set up automated reminders and follow-ups to re-engage past customers.",
      icon: "CalendarTime"
    }
  ],
  useCases: [
    {
      id: "product-questions",
      title: "Product Questions",
      description: "Instantly answer queries about materials, sizing, compatibility, and usage.",
      category: "Sales"
    },
    {
      id: "pricing-questions",
      title: "Pricing & Quotes",
      description: "Provide accurate pricing and custom quotes based on customer needs.",
      category: "Sales"
    },
    {
      id: "availability",
      title: "Availability Checks",
      description: "Confirm stock levels and provide alternatives if items are out of stock.",
      category: "Sales"
    },
    {
      id: "support-faq",
      title: "Support & FAQs",
      description: "Handle shipping policies, return procedures, and common issues automatically.",
      category: "Support"
    },
    {
      id: "lead-qualification",
      title: "Lead Qualification",
      description: "Ask qualifying questions before routing high-value prospects to a human.",
      category: "Sales"
    },
    {
      id: "abandoned-recovery",
      title: "Abandoned Conversation Recovery",
      description: "Follow up with users who stopped responding during a high-intent flow.",
      category: "Marketing"
    },
    {
      id: "reminders",
      title: "Automated Reminders",
      description: "Send scheduled reminders for upcoming appointments, events, or expiring offers.",
      category: "Marketing"
    },
    {
      id: "influencer-expansion",
      title: "Influencer Fan Engagement (Future)",
      description: "Scale interactions with followers, answer common questions, and share exclusive links.",
      category: "Expansion"
    }
  ],
  workflowSteps: [
    {
      step: 1,
      title: "Connect Accounts",
      description: "Link your existing WhatsApp Business and Instagram professional accounts securely.",
    },
    {
      step: 2,
      title: "Add Knowledge",
      description: "Upload your products, pricing, policies, and brand guidelines.",
    },
    {
      step: 3,
      title: "Go Live",
      description: "Turn on the AI. It instantly starts answering queries and capturing leads.",
    },
    {
      step: 4,
      title: "Monitor & Optimize",
      description: "Review conversation logs and refine the bot's knowledge base over time.",
    }
  ],
  testimonials: [
    {
      quote: "Trinity transformed how we handle Instagram DMs. We went from a 12-hour response time to instant replies.",
      author: "Sarah J.",
      role: "E-commerce Founder"
    },
    {
      quote: "Our support load dropped by 70% while our WhatsApp conversions doubled. Incredible ROI.",
      author: "Mark T.",
      role: "Operations Director"
    }
  ],
  faqs: [
    {
      question: "What is Trinity?",
      answer: "Trinity is a conversational automation platform that uses AI to handle customer interactions on WhatsApp and Instagram, acting as a 24/7 digital sales and support assistant."
    },
    {
      question: "Who is Trinity for?",
      answer: "Currently, Trinity is built for businesses (e-commerce, services, retail) looking to scale their customer interactions. In the future, we will expand to support influencers and creators."
    },
    {
      question: "How does the AI know about my products?",
      answer: "You can easily upload your product catalog, website URLs, or raw text documents. Trinity securely ingests this data to provide accurate, business-specific answers."
    },
    {
      question: "Is this demo real?",
      answer: "This website is a conceptual demo designed for investors and strategic partners to illustrate the value, workflow, and vision of Trinity."
    },
    {
      question: "Can I request a real pilot?",
      answer: "Yes! Please use the 'Book a Demo' form to get in touch with our team regarding early access and pilot programs."
    }
  ],
  legal: {
    companyName: "Trinity Automation Inc.",
    address: "123 Innovation Drive, Tech City, TC 90210",
  },
  demoFormLabels: {
    title: "Experience Trinity",
    subtitle: "Schedule a walkthrough of our platform and see how we can automate your conversational commerce.",
    successMessage: "Thank you! Your request has been received. We will be in touch shortly. (Demo Note: This was a simulated submission).",
  },
  footerLinks: [
    { label: "Home", href: "/" },
    { label: "How it Works", href: "/how-it-works" },
    { label: "Use Cases", href: "/use-cases" },
    { label: "Features", href: "/features" },
    { label: "Security", href: "/security" },
    { label: "FAQ", href: "/faq" },
    { label: "Legal", href: "/legal" },
  ]
};
