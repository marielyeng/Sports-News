import React from "react";
import styled from "styled-components";

export const GenericError: React.FC = () => {
    const onReloadBtnClick = () => {
        window.location.reload();
    };

    return (
        <div>
            <h2>We had a problem loading this page.</h2>
            <p>Try again shortly.</p>
            <br />
            <Button onClick={onReloadBtnClick}>Reload</Button>
        </div>
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