import { Section } from './Section';
import { SocialLink } from './SocialLink';

export interface ContentfulContent {
  socialLinks: SocialLink[];
  sections: Section[];
}
