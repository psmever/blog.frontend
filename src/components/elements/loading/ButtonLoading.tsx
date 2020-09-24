import React from 'react';
import { css } from "@emotion/core";
import PulseLoader from "react-spinners/PulseLoader";

import {
    ButtonLoadingStyled
} from "styles/Elements";

const override = css`
    width: 100%;
    padding: 15% 0 0 0;
    display: block;
    border-color: red;
`;

// https://github.com/davidhu2000/react-spinners
export default function ButtonLoading() {
    return (
        <ButtonLoadingStyled>
            <PulseLoader
                css={override}
                size={10}
                color={"#123abc"}
                loading={true}
            />
        </ButtonLoadingStyled>
    );
}