export type Language = 'en' | 'ar';

export interface Navigation {
  home: string;
  about: string;
  career: string;
  skills: string;
  credentials: string;
  documents: string;
  videos: string;
  contact: string;
}

export interface HeroContent {
  name: string;
  title: string;
  location: string;
  phone: string;
  email: string;
  website: string;
  socials: {
    twitter: string;
    instagram: string;
    facebook: string;
    whatsapp: string;
  };
}

export interface AboutContent {
  title: string;
  points: string[];
}

export interface SkillsContent {
  title: string;
  items: string[];
}

export interface ListSectionData {
  title: string;
  points: string[];
}

export interface CredentialsContent {
  title: string;
  qualifications: ListSectionData;
  certificates: ListSectionData;
  training: ListSectionData;
}

export interface CareerItemData {
  year: string;
  role: string;
  team: string;
  description?: string;
  image: string;
}

export interface CareerSectionData {
  title: string;
  items: CareerItemData[];
}

export interface CareerContent {
  title: string;
  coachCareer: CareerSectionData;
  playerCareer: CareerSectionData;
}

export interface DocumentFile {
  title: string;
  url: string;
  view: string;
  download: string;
}

export interface DocumentsContent {
  title: string;
  file: DocumentFile;
}

export interface Video {
  id: string;
  title: string;
  thumbnailUrl: string;
  videoUrl: string;
}

export interface VideosContent {
  title: string;
  items: Video[];
}

export interface FormFields {
  name: string;
  email: string;
  subject: string;
  message: string;
  submit: string;
}

export interface ContactContent {
  title: string;
  form: FormFields;
}

export interface Content {
  navigation: Navigation;
  motto: string;
  hero: HeroContent;
  about: AboutContent;
  skills: SkillsContent;
  credentials: CredentialsContent;
  career: CareerContent;
  documents: DocumentsContent;
  videos: VideosContent;
  contact: ContactContent;
}

export interface CvData {
  galleryImages: string[];
  en: Content;
  ar: Content;
}