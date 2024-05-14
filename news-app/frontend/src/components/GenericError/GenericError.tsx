import React from "react";
import styled from "styled-components";

export const GenericError: React.FC = () => {
    const onReloadBtnClick = () => {
        window.location.reload();
    };

    return (
        <Main>
            <h2>We had a problem loading this page.</h2>
            <p>Try again shortly.</p>
            <br />
            <Button onClick={onReloadBtnClick}>Reload</Button>
        </Main>
    );
};

const Button = styled.button`
    background: none!important;
    border: none;
    padding: 0!important;
    color: red;
    text-decoration: underline;
    cursor: pointer;
    font-size: 22px;
`

const Main = styled.div`
    text-align: center;
    margin: 16px 0px;
`;