export type PostID = number;

type StrapiBase = {
  id: PostID;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string | null;
};

export type PostAuthor = StrapiBase & {
  name: string;
};

export type PostCategory = StrapiBase & {
  name: string;
};

export type PostCoverFormat = {
  url: string;
  width: number;
  height: number;
};

export type PostCover = {
  id: PostID;
  documentId: string;
  url: string;
  alternativeText: string | null;
  width: number | null;
  height: number | null;
  formats: {
    thumbnail?: PostCoverFormat;
    small?: PostCoverFormat;
    medium?: PostCoverFormat;
    large?: PostCoverFormat;
  } | null;
};

export type PostData = StrapiBase & {
  title: string; // vale após marcar como Required no Strapi
  slug: string;
  content: string; // markdown; vale após preencher e marcar como Required
  cover: PostCover;
  author?: PostAuthor | null;
  category?: PostCategory | null;
};

export type StrapiList<T> = {
  data: T[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
};
