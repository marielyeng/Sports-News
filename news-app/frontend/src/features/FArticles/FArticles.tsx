import React from "react";
import { IArticle } from "common";
import { ArticleItem } from "components/ArticleItem";
import { useNavigate } from "react-router-dom";
import { useGetArticles } from "hooks/useGetArticles";

export interface IArticleProps {
    type?: string;
    limit?: number;
}

export const FArticles: React.FC<IArticleProps> = ({type, limit}) => {
    const { loading, data, error } = useGetArticles(type, limit);
    const navigate = useNavigate();

    return (
        <div>
            {data.articles.map((articles: IArticle) => {
                return <div><ArticleItem key={articles.id} articles={articles} onClick={() => handleArticleOnClick(articles?.id)}/></div>
            })}
        </div>
    );
}