import { ContentfulItemSocial, ContentfulResponse } from '../types/ContentfulResponse';

export const getSocialLinks = (
  contentfulResponse: ContentfulResponse,
) => contentfulResponse.items
  .filter((item) => item.sys.contentType.sys.id === 'social')
  .map((item) => {
    const {
      fields: {
        icon, type, order, url,
      },
    } = (item as ContentfulItemSocial);

    return {
      icon,
      type,
      order,
      url,
    };
  })
  .sort((a, b) => a.order - b.order);
