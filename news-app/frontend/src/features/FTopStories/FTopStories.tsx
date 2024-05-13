/* eslint-disable */
import React from "react";
import { IArticle } from "../../common";
import { useNavigate } from "react-router-dom";
import { TopStoryItem } from "../../components/TopStoryItem";
import { useGetTopStory } from "../../hooks/useGetTopStories";
import styled from "styled-components";
import { GenericError } from "../../components/GenericError";

export interface IArticleProps {
    type?: string;
}

export const FTopStories: React.FC<IArticleProps> = ({ type }) => {
    const { loading, data, error } = useGetTopStory(type);
    const navigate = useNavigate();

    const handleTrendClick = (id: number) => {
        navigate(`/article/${id}`);
    }

    if (loading) {
        return <>Loading...</>;
    }

    if (error) {
        return <GenericError />
    }

    return (
        <Container>
            <ol>
                {data?.trends.map((article: IArticle, index: number) => (
                    <List key={index}>
                        <TopStoryItem articles={article} onClick={() => handleTrendClick(article.id)} />
                    </List>
                ))}
            </ol>
        </Container>
    );
}

const Container = styled.div`
    margin: 16px 16px;
    padding: 5px;
    border: 0.5px solid black;
    border-radius: 6px;
    box-shadow: 1px 1px 2px gray;
    width: 375px;
    height: 90%;
    position: relative;
`;

const List = styled.li`
    padding: 10px;
`

