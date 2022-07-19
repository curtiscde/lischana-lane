import fetch from 'node-fetch';
import { ContentfulContent } from '../types/ContentfulContent';
import { ContentfulResponse } from '../types/ContentfulResponse';
import { Section } from '../types/Section';
import { SocialLink } from '../types/SocialLink';
import { getSections } from './getSections';
import { getSocialLinks } from './getSocialLinks';

interface GetContentProps {
  spaceId: string;
  accessToken: string;
}

export const getContent = async (
  { spaceId, accessToken }: GetContentProps,
): Promise<ContentfulContent> => {
  const res = await fetch(`https://cdn.contentful.com/spaces/${spaceId}/environments/master/entries/?access_token=${accessToken}`);

  const contentfulResponse: ContentfulResponse = await res.json() as ContentfulResponse;
  const socialLinks: SocialLink[] = getSocialLinks(contentfulResponse);
  const sections: Section[] = getSections(contentfulResponse);

  return { socialLinks, sections };
};
