import React from "react";
import { IArticle } from "../../common";
import { ArticleItem } from "../../components/ArticleItem";
import { useNavigate } from "react-router-dom";
import { useGetArticles } from "../../hooks/useGetArticles";
import { GenericError } from "../../components/GenericError";

export interface IArticleProps {
    type?: string;
    limit?: number;
}

export const FArticles: React.FC<IArticleProps> = ({type, limit}) => {
    const { loading, data, error } = useGetArticles(type, limit);
    const navigate = useNavigate();

    const handleArticleOnClick = (id: number) => {
        navigate('/article/:id');
        console.log('hello: ', id)
    }

    if (!data) {
        console.log(`Data is: ${data}`)
    }

    if (loading) {
        console.log('Loading...')
    }

    if (error) {
        return <GenericError />
    }
    return (
        <div>
            {data?.articles && data.articles.map((article: IArticle) => (
                <div key={article.id}><ArticleItem articles={article} onClick={() => handleArticleOnClick(article.id)} /></div>
            ))}
        </div>
    );
}