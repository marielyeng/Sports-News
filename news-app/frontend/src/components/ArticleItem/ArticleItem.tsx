import React from "react";
import { IArticle } from "../../common";
import styled from "styled-components";

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
            <div>
                <Heading> {title} </Heading>
                <p>DATE: {createdAt}</p>
            </div>
            <p> {description} </p>
        </div>
    );
};

const Heading = styled.h2`
    &:hover {
        text-decoration: underline;
        color: green;
        cursor: pointer;
    }
`;