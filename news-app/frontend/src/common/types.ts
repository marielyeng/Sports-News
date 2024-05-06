export interface ArticleSlice {
    articles: IArticle[];
}

export interface IArticle {
    id: number;
    type: string;
    title: string;
    description: string;
    createdAt: string;
}