export interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export interface NavigationProps {
  onNavigate: (section: string) => void;
  activeSection: string;
}

export interface HomeProps {
  onNavigate: (section: string) => void;
}

export interface PhotoItem {
  url: string;
  alt: string;
}

export interface EventItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  date: string;
  time: string;
  location: string;
  address: string;
  description: string;
  color: string;
  gradient: string;
  iconBg: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
