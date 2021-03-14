interface Images {
  url: string;
  cover: boolean;
}

interface Meta {
  author: string;
  authorProfilePicture: string;
}

export interface PostInterface {
  title: string;
  content: string;
  images: Images[];
  meta: Meta;
}

export interface PostUpdateInterface {
  title?: string;
  content?: string;
  images?: Images[];
  meta?: Meta;
}
