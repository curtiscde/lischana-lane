import { ContentfulResponse } from '../types/ContentfulResponse';
import { Section } from '../types/Section';
import { getSections } from './getSections';

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

const mockAsset = (id: string) => ({
  sys: {
    id,
  },
  fields: {
    file: {
      url: `//${id}.png`,
    },
  },
});

describe('getSections', () => {
  let sections: Section[];

  beforeAll(() => {
    const contentfulResponse: ContentfulResponse = {
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
            title: 'heading title',
            menuText: 'heading menu text',
            order: 1,
            description: {
              ...mockDescription('heading description'),
            },
            images: [{
              sys: {
                id: 'image1',
              },
            }],
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
            title: 'section 2 title',
            order: 2,
            description: {
              ...mockDescription('section 2 description'),
            },
            images: [{
              sys: {
                id: 'image2',
              },
            }],
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
            title: 'section 3 title',
            order: 3,
            description: {
              ...mockDescription('section 3 description'),
            },
            images: [{
              sys: {
                id: 'image3',
              },
            }],
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
            title: 'Gallery title',
            order: 4,
            description: {
              ...mockDescription('gallery description'),
            },
            images: [{
              sys: {
                id: 'image4',
              },
            }, {
              sys: {
                id: 'image5',
              },
            }, {
              sys: {
                id: 'image6',
              },
            }, {
              sys: {
                id: 'image7',
              },
            }],
          },
        },
      ],
      includes: {
        Asset: [
          { ...mockAsset('image1') },
          { ...mockAsset('image2') },
          { ...mockAsset('image3') },
          { ...mockAsset('image4') },
          { ...mockAsset('image5') },
          { ...mockAsset('image6') },
          { ...mockAsset('image7') },
        ],
      },
    };

    sections = getSections(contentfulResponse);
  });

  it('returns social links', () => {
    const expectedSections: Section[] = [
      {
        title: 'heading title',
        menuText: 'heading menu text',
        slug: 'heading-menu-text',
        description: [{
          nodeType: 'text',
          value: 'heading description',
        }],
        image: 'https://image1.png',
        order: 1,
        type: 'heading',
      },
      {
        title: 'section 2 title',
        menuText: 'section 2 title',
        slug: 'section-2-title',
        description: [{
          nodeType: 'text',
          value: 'section 2 description',
        }],
        image: 'https://image2.png',
        order: 2,
        type: 'single',
      },
      {
        title: 'section 3 title',
        menuText: 'section 3 title',
        slug: 'section-3-title',
        description: [{
          nodeType: 'text',
          value: 'section 3 description',
        }],
        image: 'https://image3.png',
        order: 3,
        type: 'single',
      },
      {
        title: 'Gallery title',
        menuText: 'Gallery title',
        slug: 'gallery-title',
        description: [{
          nodeType: 'text',
          value: 'gallery description',
        }],
        images: [
          'https://image4.png',
          'https://image5.png',
          'https://image6.png',
          'https://image7.png',
        ],
        order: 4,
        type: 'gallery',
      },
    ];
    expect(sections).toEqual(expectedSections);
  });
});
