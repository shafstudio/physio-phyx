export interface NavLink {
  href: string;
  label: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface HelpCard {
  title: string;
  description: string;
  category: string;
  image: string;
}

export interface Service {
  icon: string;
  title: string;
  description: string;
}

export interface ProcessStep {
  icon: string;
  title: string;
  description: string;
  step: number;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  image: string;
}

export interface ContactInfo {
  icon: string;
  title: string;
  content: string | string[];
}
