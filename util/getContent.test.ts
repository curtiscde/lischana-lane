import fetch from 'node-fetch';
import { ContentfulContent } from '../types/ContentfulContent';
import { ContentfulResponse } from '../types/ContentfulResponse';
import { getContent } from './getContent';

const mockDescription = (text: string) => ({
  data: {},
  content: [
    {
      data: {},
      content: [
        {
          data: {},
          marks: [],
          value: text,
          nodeType: 'text',
        },
      ],
      nodeType: 'paragraph',
    },
  ],
  nodeType: 'document',
});

jest.mock('node-fetch', () => {
  const generateResponse = () => ({
    json: (): ContentfulResponse => ({
      items: [
        {
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
        },
        {
          sys: {
            contentType: {
              sys: {
                id: 'section',
              },
            },
          },
          metadata: {},
          fields: {
            title: 'section title',
            order: 1,
            description: mockDescription('section description'),
            images: [{
              sys: {
                id: 'image1',
              },
            }],
          },
        },
      ],
      includes: {
        Asset: [{
          sys: {
            id: 'image1',
          },
          fields: {
            file: {
              url: '//image1.png',
            },
          },
        }],
      },
    }),
  });
  return jest.fn().mockResolvedValue(generateResponse());
});

describe('getContent', () => {
  let content: ContentfulContent;

  beforeAll(async () => {
    content = await getContent({
      spaceId: 'spaceId',
      accessToken: 'accessToken',
    });
  });

  it('calls fetch', () => {
    expect(fetch).toHaveBeenCalledWith('https://cdn.contentful.com/spaces/spaceId/environments/master/entries/?access_token=accessToken');
  });

  it('returns contentful content', () => {
    const expectedContent: ContentfulContent = {
      socialLinks: [{
        type: 'type',
        icon: 'icon',
        url: 'url',
        order: 1,
      }],
      sections: [
        {
          description: [
            {
              nodeType: 'text',
              value: 'section description',
            },
          ],
          image: 'https://image1.png',
          order: 1,
          title: 'section title',
          menuText: 'section title',
          slug: 'section-title',
          type: 'heading',
        },
      ],
    };
    expect(content).toEqual(expectedContent);
  });
});
