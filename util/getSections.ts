import { ContentfulAsset, ContentfulItemSection, ContentfulResponse } from '../types/ContentfulResponse';
import { Section, SectionType } from '../types/Section';

const getImageLink = (assets: ContentfulAsset[], imageId: string): string => {
  const asset = assets.find((a) => a.sys.id === imageId);

  if (asset === undefined) {
    throw new Error(`asset not found: ${imageId}`);
  }

  return `https:${asset.fields.file.url}`;
};

const getDescription = (description: any) => description.content[0].content
  .map((c: any) => ({ nodeType: c.nodeType, value: c.value }))
  .filter((c: any) => c.nodeType === 'text');

const mapSection = (assets: ContentfulAsset[], item: ContentfulItemSection): Section => {
  const {
    fields: {
      title, menuText, description, order, images,
    },
  } = (item as ContentfulItemSection);

  const imageLinks: string[] = images.map((image) => getImageLink(assets, image.sys.id));

  let type: SectionType = 'single';
  if (order === 1 && imageLinks.length === 1) {
    type = 'heading';
  } else if (imageLinks.length > 1) {
    type = 'gallery';
  }

  const sectionMenuText = menuText !== undefined ? menuText : title;

  const section: Section = {
    title,
    type,
    description: getDescription(description),
    order,
    menuText: sectionMenuText,
    slug: encodeURIComponent(sectionMenuText.replaceAll(' ', '-')).toLowerCase(),
  };

  if (imageLinks.length === 1) {
    section.image = imageLinks.at(0);
  } else {
    section.images = imageLinks;
  }

  return section;
};

export const getSections = (
  contentfulResponse: ContentfulResponse,
): Section[] => contentfulResponse.items
  .filter((item) => item.sys.contentType.sys.id === 'section')
  .map((item) => mapSection(contentfulResponse.includes.Asset, item as ContentfulItemSection))
  .sort((a, b) => a.order - b.order);
