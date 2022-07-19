interface ContentfulItem {
  metadata: any;
}

export interface ContentfulItemSocial extends ContentfulItem {
  sys: {
    contentType: {
      sys: {
        id: 'social';
      }
    }
  };
  fields: {
    type: string;
    order: number;
    icon: string;
    url: string;
  };
}

export interface ContentfulItemSection extends ContentfulItem {
  sys: {
    contentType: {
      sys: {
        id: 'section';
      }
    }
  };
  fields: {
    title: string;
    menuText?: string;
    order: number;
    description: any;
    images: Array<{
      sys: {
        id: string;
      }
    }>;
  };
}

export interface ContentfulAsset {
  sys: {
    id: string;
  }
  fields: {
    file: {
      url: string;
    }
  }
}
export interface ContentfulResponse {
  items: Array<ContentfulItemSocial | ContentfulItemSection>;
  includes: {
    Asset: ContentfulAsset[];
  }
}
