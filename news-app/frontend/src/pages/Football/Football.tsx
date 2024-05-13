import React from "react";
import { FArticles } from '../../features/FArticles';
import { FTopStories } from "../../features/FTopStories";
import styled from "styled-components";

export const Football: React.FC = () => {
    return (
        <Main>
            <div>
                <h1>Football</h1>
                <FArticles type="football" limit={3} />
            </div>
            <div>
                <h1>Top Stories</h1>
                <FTopStories type="football" />
            </div>
        </Main>
    )
};

const Main = styled.div`
    max-width: 100%;
    margin: 32px;
    display: flex;
    justify-content: space-evenly;
    padding: 10px;
`;