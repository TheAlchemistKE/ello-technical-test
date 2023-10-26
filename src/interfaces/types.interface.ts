export interface Token {
  value: string;
  position: [number, number];
}

export interface Page {
  pageIndex: number;
  content: string;
  tokens: Token[];
}

export interface NewPage {
  index: number;
  value: string;
  tokens: Token[];
}

export interface NewBook {
  id: number;
  pages: ContentInfo[];
}

export interface PageItem {
  value: string;
  position: [number, number];
}

export interface ContentInfo {
  index: number | null;
  token: string | null;
  content: string;
  isTappable: boolean;
}

export interface CombinedContent {
  index: number | null;
  token: string | null;
  content: string;
  isTappable: boolean;
}

export interface Book {
  id: number;
  title: string;
  author: string;
  pages: Page[];
}

export interface TransformedWord {
  index: number | null;
  token: string | null;
  content: string;
  isTappable: boolean;
}
