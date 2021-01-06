import React from 'react';
import { css } from '@emotion/core';
import PulseLoader from 'react-spinners/PulseLoader';

const override = css`
    display: block;
    margin: 0 auto;
    text-align: center;
    border-color: red;
    padding-top: 1.5rem;
`;

export default function PageLoginButtonLoading() {
    return (
        <div className="sweet-loading">
            <PulseLoader css={override} size={10} color={'cadetblue'} loading={true} />
        </div>
    );
}
