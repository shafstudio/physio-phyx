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
  {
    id: "chronic-back-pain",
    slug: "chronic-back-pain",
    title: "RECLAIM YOUR COMFORT",
    subtitle: "Chronic Back Pain Management",
    description: "Evidence-based strategies to reduce pain intensity, improve function, and prevent recurrence through comprehensive assessment and targeted treatment.",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCLODAuceZdYPufRmmge3L5vL-lwWuL38j3Hr5wCs3IOTbzBFrXv9YdtRJRVV1kZJOeugPCiWrTyt-X8OxKs-yNxRuVYF8vCOdBzWTc_Ccoa2bNrbiebT-lm8C9OsiS5Qskz7GGEaUuUKFdK5OqVmhihYkPRS0XCjcnxIjFs2jJ8NPgmNQrV9YB6TGXVUfQQrIZLc8VgJLiBWHDP7MBRqEXnya8mCSnuE2qsD3jsqHZ-rJGiiTHZA7IgvC_FJdoaZySaivzMpv4tAA",
    duration: "45 - 60 Min Sessions",
    insurance: true,
    category: "Pain Management",
    whatToExpect: [
      {
        title: "Detailed Assessment",
        description: "Thorough evaluation of your spine, posture, movement patterns, and lifestyle factors contributing to your pain.",
      },
      {
        title: "Pain Education",
        description: "Understanding the science behind chronic pain helps reduce fear and empowers you to take control of your recovery.",
      },
      {
        title: "Manual Therapy",
        description: "Hands-on techniques including soft tissue mobilization and joint manipulation to reduce pain and restore movement.",
      },
      {
        title: "Core Strengthening",
        description: "Targeted exercises to build stability in your deep core muscles, supporting your spine long-term.",
      },
    ],
    pricing: {
      title: "Back Pain Package",
      price: 110,
      duration: "60 Minutes",
      features: [
        "Comprehensive spine assessment",
        "Home exercise program included",
        "Ergonomic workplace evaluation",
      ],
    },
    testimonial: {
      quote: "I've dealt with lower back pain for over 10 years. After just 6 weeks at PhysioPhyx, I'm finally sleeping through the night and can play with my grandkids again. They taught me how to manage my pain, not just mask it.",
      name: "Sarah M.",
      role: "Office Manager",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB_I2a9H_XSSvugtueP17rjcCmWzDFP332TcdvrRWPUL9xz_BG3b8G82-T08_GnTUvynC7SB4jfxo9p3ZXwNAE5evHnObfCJZh_LPdZkOPtrbXKZUHQHau1GSZpu7mlVisSPTuoCkEHlc1mDZSXXbINK5zflaHj5ZYilOh0Mv8ONKyT-PXuXj4kEjiSXf73ZF33c-eqCc9CXAmwH6P3XhSKitFvnQfFomy6QJs5tEEDgzRUvSdpyWafNQU9QJJhOeelbjipyM6L_y0",
    },
    benefits: [
      {
        icon: "healing",
        title: "Pain Reduction",
        description: "Significant decrease in pain intensity through evidence-based manual therapy and therapeutic exercises.",
      },
      {
        icon: "fitness_center",
        title: "Improved Function",
        description: "Regain the ability to perform daily activities without fear of triggering pain episodes.",
      },
      {
        icon: "psychology",
        title: "Long-term Management",
        description: "Learn self-management strategies to prevent flare-ups and maintain your progress independently.",
      },
    ],
    faqs: [
      {
        question: "How long until I see improvement?",
        answer: "Many patients notice some improvement within 2-3 sessions. However, chronic pain that has persisted for months or years typically requires 8-12 weeks of consistent treatment for lasting results.",
      },
      {
        question: "Will I need surgery?",
        answer: "Most cases of chronic back pain can be managed successfully without surgery. We'll work with you to exhaust conservative treatment options first, and will coordinate with your physician if surgical consultation becomes necessary.",
      },
      {
        question: "Can I still exercise with back pain?",
        answer: "Absolutely! In fact, appropriate exercise is one of the most effective treatments for chronic back pain. We'll guide you on which activities to modify and which to continue, plus teach you exercises specifically for your condition.",
      },
    ],
  },
  {
    id: "shoulder-rehab",
    slug: "shoulder-rehab",
    title: "RESTORE FULL RANGE",
    subtitle: "Shoulder Rehabilitation",
    description: "Specialized rotator cuff therapy and shoulder rehabilitation programs to restore strength, mobility, and function whether recovering from injury or surgery.",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuC3UHCrz4-vzPN3u0vKcjYY8qxYX_p9sUb5d_PkisYyMNAfJmDk-FC3eCtBS2oynk8pl0w4y3rgEUG2E_BHkHni6LJCbxImzoPLeBRMJApErNusPL3-jjlJUeaKhfT8BgcPuFf6H8ZNgh0GvFmGXoLynRfLxmFsoqsHgogpt79J7dGHAXTYiXXPbTlARvIkA_cOUwNX50z5C5Y2qsZBSHXXdhqvp0BnpvFTMrwJ-m4_K47nHctqqizzQG23nxCesIKtm8yJlJGXIOM",
    duration: "45 Min Sessions",
    insurance: true,
    category: "Post-Injury",
    whatToExpect: [
      {
        title: "Shoulder Evaluation",
        description: "Comprehensive assessment of shoulder mechanics, rotator cuff strength, and scapular stability.",
      },
      {
        title: "Range of Motion Therapy",
        description: "Gentle mobilization techniques to restore pain-free movement in all directions.",
      },
      {
        title: "Rotator Cuff Strengthening",
        description: "Progressive resistance training targeting the four rotator cuff muscles for optimal shoulder stability.",
      },
      {
        title: "Functional Training",
        description: "Sport or work-specific exercises to ensure your shoulder can handle real-world demands.",
      },
    ],
    pricing: {
      title: "Shoulder Care Program",
      price: 115,
      duration: "45 Minutes",
      features: [
        "Rotator cuff assessment",
        "Personalized exercise videos",
        "Activity modification guidance",
      ],
    },
    testimonial: {
      quote: "After rotator cuff surgery, I couldn't even lift my arm. The therapists at PhysioPhyx were patient and encouraging through every phase. Now I'm back to swimming and even have better form than before my injury!",
      name: "David L.",
      role: "Competitive Swimmer",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB_I2a9H_XSSvugtueP17rjcCmWzDFP332TcdvrRWPUL9xz_BG3b8G82-T08_GnTUvynC7SB4jfxo9p3ZXwNAE5evHnObfCJZh_LPdZkOPtrbXKZUHQHau1GSZpu7mlVisSPTuoCkEHlc1mDZSXXbINK5zflaHj5ZYilOh0Mv8ONKyT-PXuXj4kEjiSXf73ZF33c-eqCc9CXAmwH6P3XhSKitFvnQfFomy6QJs5tEEDgzRUvSdpyWafNQU9QJJhOeelbjipyM6L_y0",
    },
    benefits: [
      {
        icon: "rotate_right",
        title: "Full Range Motion",
        description: "Restore complete overhead reach and rotation without pain or compensation.",
      },
      {
        icon: "sports",
        title: "Return to Activity",
        description: "Safely return to sports, work tasks, and daily activities that require shoulder strength.",
      },
      {
        icon: "verified",
        title: "Injury Prevention",
        description: "Build balanced shoulder strength to prevent re-injury and future problems.",
      },
    ],
    faqs: [
      {
        question: "How soon after surgery can I start physio?",
        answer: "Most patients begin gentle range of motion exercises within days of surgery, with your surgeon's approval. Active strengthening typically begins 6-8 weeks post-op. We'll coordinate directly with your surgeon.",
      },
      {
        question: "What if my shoulder 'clicks' or 'pops'?",
        answer: "Some clicking is normal and harmless. However, if it's accompanied by pain, weakness, or catching sensations, we'll evaluate for underlying issues like labral tears or tendinitis and adjust treatment accordingly.",
      },
      {
        question: "Can I avoid surgery with physio?",
        answer: "Many shoulder conditions, including some rotator cuff tears, respond well to conservative treatment. Studies show that up to 80% of partial rotator cuff tears can be managed successfully with physiotherapy alone.",
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
