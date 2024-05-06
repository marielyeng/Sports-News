import React from "react";
import { IArticle } from "common";
import { ArticleItem } from "components/ArticleItem";
import { useNavigate } from "react-router-dom";
import { TopStoryItem } from "components/TopStoryItem";

export interface IArticleProps {
    type?: string;
}

export const FTopStories: React.FC<IArticleProps> = ({ type }) => {
    const { loading, data, error } = useGetArticles(type);
    const navigate = useNavigate();

    const handleTrendClick = (id: number) => {
        navigate(`/article/${id}`);
    }

    return (
        <div>
            <ol>
            {data.trends.map((articles: IArticle, index: number) => {
               <li key={index}>
                <TopStoryItem articles={article} onClick={() => handleTrendClick(article.id)} />
               </li>
            })}
            </ol>
        </div>
    );
}