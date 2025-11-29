export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  detailedDescription: string;
  features: string[];
  technologies?: string[];
  processSteps?: string[];
  pricing?: string;
  timeline?: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  url: string;
  comingSoon?: boolean;
}