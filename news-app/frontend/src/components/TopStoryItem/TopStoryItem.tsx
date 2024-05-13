import React from "react";
import { IArticle } from "../../common";
import styled from "styled-components";

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
            <Heading onClick={handleTopStoryClick}>{title}</Heading>
        </div>
    );
};

const Heading = styled.h3`
    &:hover {
        color: green;
        cursor: pointer;
    }
`;