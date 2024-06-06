import React from "react";
import styled from "styled-components";

export const AboutUs: React.FC = () => {
    return (
        <>
            <Heading>About The App</Heading>
            <Main>This app is created as a practice program. Showcasing the use of Typescript, GraphQL, and ReactJs.</Main>
        </>
    )
};

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