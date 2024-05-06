import React from "react";
import { IArticle } from "common";

export interface ArticleProps {
    articles: IArticle;
}

export const Article: React.FC<ArticleProps> = ({
    articles,
}: ArticleProps) => {
    const { title, createdAt, description } = articles;
    return (
        <div>
            <h1>{title}<span>{createdAt}</span></h1>
            <p>{description}</p>
        </div>
    )
}