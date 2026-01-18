export interface ServiceDetail {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  duration: string;
  insurance: boolean;
  category: string;
  whatToExpect: {
    title: string;
    description: string;
  }[];
  pricing: {
    title: string;
    price: number;
    duration: string;
    features: string[];
  };
  testimonial: {
    quote: string;
    name: string;
    role: string;
    image: string;
  };
  benefits: {
    icon: string;
    title: string;
    description: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const SERVICES: ServiceDetail[] = [
  {
    id: "sports-injury",
    slug: "sports-injury-acl",
    title: "RESTORE YOUR PERFORMANCE",
    subtitle: "Sports Injury & ACL Rehabilitation",
    description: "Our specialized sports injury rehabilitation program is designed to get you back in the game safely and effectively. We analyze root causes to prevent recurrence.",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDvQ5svppOwVWS1fJOPIfAjxCkWInGl2qTdh5xB8DQhgO-eXXMxBdtEIhpL1WMnV9w9H5_8zruBANXVQUcOuX06V8YzjcZ82_LHxcNZ2W85T7pTmh3cqJiSgG6QTWqk5rgFlZ4PzDmwyjS47hH_tR5zwGRzidjJ50jhO89gatVsVHcPewMJmipTr-wCLy_2OAG9UNzfQyLWYg58KeKOr_atHF-ncD1ambEcFbOgNjNg2cXTJssQRcAYo-SZOU9T_Q6H7BCmz3nMXn8",
    duration: "45 - 60 Min Sessions",
    insurance: true,
    category: "Post-Injury",
    whatToExpect: [
      {
        title: "Root Cause Analysis",
        description: "Comprehensive initial assessment to identify not just the injury, but why it happened.",
      },
      {
        title: "Personalized Roadmap",
        description: "Tailored recovery plan specific to your sport and position requirements.",
      },
      {
        title: "Manual Therapy",
        description: "Hands-on mobilization to reduce pain and improve joint function immediately.",
      },
      {
        title: "Strength Conditioning",
        description: "Progressive loading exercises to rebuild muscle resilience safely.",
      },
    ],
    pricing: {
      title: "Initial Assessment",
      price: 120,
      duration: "60 Minutes",
      features: [
        "1-on-1 with Specialist",
        "Direct Insurance Billing",
        "Free cancellation up to 24 hours",
      ],
    },
    testimonial: {
      quote: "After tearing my ACL, I thought my soccer days were over. The team at PhysioPhyx didn't just rehab my knee; they built me back stronger than before. I'm playing pain-free for the first time in years.",
      name: "Michael T.",
      role: "Professional Soccer Player",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB_I2a9H_XSSvugtueP17rjcCmWzDFP332TcdvrRWPUL9xz_BG3b8G82-T08_GnTUvynC7SB4jfxo9p3ZXwNAE5evHnObfCJZh_LPdZkOPtrbXKZUHQHau1GSZpu7mlVisSPTuoCkEHlc1mDZSXXbINK5zflaHj5ZYilOh0Mv8ONKyT-PXuXj4kEjiSXf73ZF33c-eqCc9CXAmwH6P3XhSKitFvnQfFomy6QJs5tEEDgzRUvSdpyWafNQU9QJJhOeelbjipyM6L_y0",
    },
    benefits: [
      {
        icon: "bolt",
        title: "Pain Relief",
        description: "Immediate reduction in acute pain through targeted modalities and manual techniques.",
      },
      {
        icon: "directions_run",
        title: "Mobility",
        description: "Restore full range of motion to ensure you move fluidly without compensation patterns.",
      },
      {
        icon: "shield",
        title: "Prevention",
        description: "Learn proper mechanics and warm-up routines to prevent future injuries.",
      },
    ],
    faqs: [
      {
        question: "Do I need a doctor's referral?",
        answer: "In most cases, you do not need a referral to see a physiotherapist. However, some insurance plans may require one for reimbursement. We recommend checking with your provider.",
      },
      {
        question: "How long is each session?",
        answer: "Initial assessments are typically 60 minutes to allow for a thorough examination. Follow-up treatment sessions are usually 45 minutes.",
      },
      {
        question: "What should I wear?",
        answer: "Please wear comfortable clothing that allows easy movement and access to the injured area (e.g., shorts for a knee injury, tank top for shoulder).",
      },
    ],
  },
  {
    id: "geriatric-mobility",
    slug: "geriatric-mobility",
    title: "ENHANCE YOUR INDEPENDENCE",
    subtitle: "Geriatric Mobility",
    description: "Programs focused on balance, fall prevention, and maintaining independence for senior patients. Gentle, effective approaches to keep you active.",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBghBeWfgrj2ow_57nsHt8rJVo9fUcdRX5mmLKHuza3UrEPwOwMJIo1J8qco2B2CwKEDbTVQqYI5mIYaPhp8h7RvbGeshYEasf64SCQ1j5YoXohX9yyST1_cs0j7G6KEkOYD7bOW7TE8LevbBWArYkdfxNxA0jcFK6dxtjQ4dRJ73A20sA5IVURr1xOvkiJ_RRrBxl9jvQYKg3VkXOt1BjglNkBj033V2rx32el0gIXel9FXvIfBfGLmL2Wd9vDwzZ3jC-TRqQDz9U",
    duration: "30 - 45 Min Sessions",
    insurance: true,
    category: "Mobility",
    whatToExpect: [
      {
        title: "Balance Assessment",
        description: "Comprehensive evaluation of balance and fall risk factors.",
      },
      {
        title: "Strength Training",
        description: "Gentle exercises to improve muscle strength and stability.",
      },
      {
        title: "Gait Training",
        description: "Walking technique improvement for safer, more confident movement.",
      },
      {
        title: "Home Safety",
        description: "Practical advice for making your home safer and preventing falls.",
      },
    ],
    pricing: {
      title: "Senior Care Package",
      price: 95,
      duration: "45 Minutes",
      features: [
        "Gentle, age-appropriate exercises",
        "Home exercise program included",
        "Family education session",
      ],
    },
    testimonial: {
      quote: "The balance exercises have given me so much confidence. I can walk my dog again without fear of falling. The therapist was so patient and understanding.",
      name: "Margaret S.",
      role: "Retired Teacher",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB_I2a9H_XSSvugtueP17rjcCmWzDFP332TcdvrRWPUL9xz_BG3b8G82-T08_GnTUvynC7SB4jfxo9p3ZXwNAE5evHnObfCJZh_LPdZkOPtrbXKZUHQHau1GSZpu7mlVisSPTuoCkEHlc1mDZSXXbINK5zflaHj5ZYilOh0Mv8ONKyT-PXuXj4kEjiSXf73ZF33c-eqCc9CXAmwH6P3XhSKitFvnQfFomy6QJs5tEEDgzRUvSdpyWafNQU9QJJhOeelbjipyM6L_y0",
    },
    benefits: [
      {
        icon: "accessibility",
        title: "Better Balance",
        description: "Improved stability and confidence in daily activities.",
      },
      {
        icon: "health_and_safety",
        title: "Fall Prevention",
        description: "Reduced risk of falls through targeted interventions.",
      },
      {
        icon: "elderly",
        title: "Independence",
        description: "Maintain your ability to live independently for longer.",
      },
    ],
    faqs: [
      {
        question: "Is this program suitable for all seniors?",
        answer: "Yes! We customize each program to match your current fitness level and health conditions. Whether you're very active or have mobility challenges, we can help.",
      },
      {
        question: "Will Medicare cover these sessions?",
        answer: "Many Medicare plans do cover physiotherapy sessions. We can help verify your coverage and handle the billing directly.",
      },
      {
        question: "Can family members attend sessions?",
        answer: "Absolutely! We encourage family involvement. Having a family member present helps reinforce exercises at home and provides additional support.",
      },
    ],
  },
];

// Helper function to get service by slug
export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return SERVICES.find((service) => service.slug === slug);
}

// Helper function to get all service slugs (for static generation)
export function getAllServiceSlugs(): string[] {
  return SERVICES.map((service) => service.slug);
}
