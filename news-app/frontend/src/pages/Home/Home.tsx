import React from "react";
import { FArticles } from "../../features/FArticles";
import { FTopStories } from "../../features/FTopStories";
import styled from "styled-components";

export const Home: React.FC = () => {
    return(
        <Main>
            <div>
                <h1>Latest Articles</h1>
                <FArticles limit={5} />
            </div>
            <div>
                <h1>Top Stories</h1>
                <FTopStories />
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