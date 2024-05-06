import React from "react";
import { IArticle } from "common";

export interface IArticleItemProps {
    articles: IArticle;
    onClick: (id: number) => void;
}

export const TopStoryItem: React.FC<IArticleItemProps> = ({
    articles,
    onClick
}: IArticleItemProps) => {
    const { title } = articles;

    const handleTopStoryClick = () => {
        onClick(articles.id);
    }

    return (
        <div>
            <h1 onClick={handleTopStoryClick}>{title}</h1>
        </div>
    );
};