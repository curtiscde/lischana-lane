import fetch from 'node-fetch';
import { ContentfulResponse } from '../types/ContentfulResponse';
import { SocialLink } from '../types/SocialLink';

interface GetContentProps {
  spaceId: string;
  accessToken: string;
}

export const getContent = async (
  { spaceId, accessToken }: GetContentProps,
): Promise<SocialLink[]> => {
  const res = await fetch(`https://cdn.contentful.com/spaces/${spaceId}/environments/master/entries/?access_token=${accessToken}`);

  const socialLinks: SocialLink[] = (await res.json() as ContentfulResponse).items
    .filter((item) => item.sys.contentType.sys.id === 'social')
    .map((item) => ({
      icon: item.fields.icon,
      type: item.fields.type,
      order: item.fields.order,
      url: item.fields.url,
    }))
    .sort((a, b) => a.order - b.order);

  return socialLinks;
};
