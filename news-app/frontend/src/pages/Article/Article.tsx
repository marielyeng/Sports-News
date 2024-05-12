import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useGetArticle } from "../../hooks/useGetArticle";
import { Article } from "../../components/Article";
import { IArticle } from "../../common";

export const ArticlePage: React.FC = () => {
    const { id } = useParams<{id: string}>();
    const { loading, data, error } = useGetArticle(Number(id));

    if (loading) return <>Loading...</>;
    if (error) return <>Error: {error.message}</>

    const article = data?.article;

    return (
        <div>
            <h1>Article</h1>
            <div>
                {article?.map((article: IArticle) => (
                    <Article key={article.id} articles={article} />
                ))}
            </div>
        </div>
    )
}