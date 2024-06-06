import React from "react";
import { useParams } from "react-router-dom";
import { useGetArticle } from "../../hooks/useGetArticle";
import { Article } from "../../components/Article";
import { GenericError } from "../../components/GenericError";
import styled from "styled-components";

export const ArticlePage: React.FC = () => {
    const { id } = useParams<{id: string}>();
    const { loading, data, error } = useGetArticle(Number(id));
    if (loading) return <>Loading...</>;
    if (error) return <GenericError />

    const article = data?.article;

    return (
        <div>
            <Heading>Article</Heading>
            <Main>
                {article && (
                    <Article key={article.id} articles={article} />
                )}
            </Main>
        </div>
    )
}

const Heading = styled.h1`
    margin: 16px 16px;
`;

const Main = styled.div`
    margin: 16px 16px;
    padding: 5px;
    border: 0.5px solid black;
    border-radius: 6px;
    padding: 12px;
`;