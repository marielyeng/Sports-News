import React from "react";
import { IArticle } from "common";

export interface IArticleItemProps {
    articles: IArticle;
    onClick: (id: number) => any;
}

export const ArticleItem: React.FC<IArticleItemProps> = ({
    articles,
    onClick
}: IArticleItemProps) => {
    const { title, createdAt, description } = articles;

    const handleArticleOnClick = () => {
        onClick(articles.id);
    }

    return (
        <div onClick={handleArticleOnClick}>
            <h1>{title}<span>{createdAt}</span></h1>
            <p>{description}</p>
        </div>
    );
};