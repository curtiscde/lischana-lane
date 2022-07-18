interface ContentTypeSocial {
  type: string;
  order: number;
  icon: string;
  url: string;
}

interface ContentfulItem {
  metadata: any;
  sys: {
    contentType: {
      sys: {
        id: string;
      }
    }
  };
  fields: ContentTypeSocial;
}

export interface ContentfulResponse {
  items: ContentfulItem[];
}
