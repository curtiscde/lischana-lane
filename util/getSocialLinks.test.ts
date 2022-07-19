import { ContentfulResponse } from '../types/ContentfulResponse';
import { SocialLink } from '../types/SocialLink';
import { getSocialLinks } from './getSocialLinks';

describe('getSocialLinks', () => {
  let socialLinks: SocialLink[];

  beforeAll(() => {
    const contentfulResponse: ContentfulResponse = {
      items: [{
        sys: {
          contentType: {
            sys: {
              id: 'social',
            },
          },
        },
        metadata: {},
        fields: {
          type: 'type',
          icon: 'icon',
          url: 'url',
          order: 1,
        },
      }],
    };

    socialLinks = getSocialLinks(contentfulResponse);
  });

  it('returns social links', () => {
    expect(socialLinks).toEqual([{
      type: 'type',
      icon: 'icon',
      url: 'url',
      order: 1,
    }]);
  });
});
