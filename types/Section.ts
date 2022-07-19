export type SectionType = 'heading' | 'single' | 'gallery';

export interface Section {
  title: string;
  menuText: string;
  slug: string;
  description: Array<{
    nodeType: string;
    value: string;
  }>;
  order: number;
  type: SectionType;
  image?: string;
  images?: string[];
}
