import React from 'react';
import { css } from "@emotion/core";
import PulseLoader from "react-spinners/PulseLoader";

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;

// https://github.com/davidhu2000/react-spinners
export default function DefaultLoading() {
    return (
        <div className="sweet-loading">
            <PulseLoader
                css={override}
                size={10}
                color={"#123abc"}
                loading={true}
            />
        </div>
    );
}