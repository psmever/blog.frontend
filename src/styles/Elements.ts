import styled from 'styled-components';
import { PublishButtonPropsInterface } from 'commonTypes';

export const MainWrapper = styled.div`
    @media (max-width: 991.98px) {
        margin-left: 0;
    }

    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    text-align: left;
    -webkit-font-smoothing: antialiased;
    color: #4f4f4f;
    box-sizing: border-box;
    margin-left: 280px;
    background: #fff;
`;

export const ButtonLoadingStyled = styled.div`
    text-align: center;
    display: flex;
    justify-content: center;
    vertical-align: middle;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const ButtonLoadingBox = styled.div<PublishButtonPropsInterface>`
    margin-left: 0.1rem;
`;
