export interface TrailerInterface {
  snippet: Snippet;
}

interface Snippet {
  title: string;
  description: string;
  thumbnails: Thumbnails;
  resourceId: ResourceId;
}
interface Thumbnails {
  standard: Standard;
}
interface Standard {
  height: number;
  url: string;
  width: number;
}
interface ResourceId {
  videoId: string;
}
