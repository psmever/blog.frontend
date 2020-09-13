import React from 'react';
import { css } from "@emotion/core";
import HashLoader from "react-spinners/HashLoader";

const override = css`
    margin-top: 50%;
    display: block;
    margin: 0 auto;
    text-align: center;
    border-color: red;
`;

export default function BodyLoading() {
    return (
        <div className="sweet-loading">
            <HashLoader
                css={override}
                size={50}
                color={"#123abc"}
                loading={true}
            />
      </div>
    );
}