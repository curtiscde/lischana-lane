import fetch from 'node-fetch';
import { ContentfulResponse } from '../types/ContentfulResponse';
import { getContent } from './getContent';

jest.mock('node-fetch', () => {
  const generateResponse = () => ({
    json: (): ContentfulResponse => ({
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
    }),
  });
  return jest.fn().mockResolvedValue(generateResponse());
});

describe('getContent', () => {
  beforeAll(async () => {
    await getContent({
      spaceId: 'spaceId',
      accessToken: 'accessToken',
    });
  });

  it('calls fetch', () => {
    expect(fetch).toHaveBeenCalledWith('https://cdn.contentful.com/spaces/spaceId/environments/master/entries/?access_token=accessToken');
  });
});
