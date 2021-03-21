import styled, { css, keyframes } from 'styled-components';

interface loadingProps {
    loading: string;
}

// export const LoginButtonStyle =
export const LoginButtonStyle = styled.button<loadingProps>`
    @media (max-width: 767.98px) {
        width: 100%;
    }
    box-sizing: border-box;
    margin-bottom: 0;
    text-align: center;
    /* vertical-align: middle; */
    cursor: pointer;
    padding: 9px 14px;
    font-size: 15px;
    line-height: normal;
    border-radius: 5px;
    color: #ffffff;
    background-color: #4a77d4;
    background-image: -webkit-linear-gradient(top, #6eb6de, #4a77d4);
    background-repeat: repeat-x;
    border: 1px solid #3762bc;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.4);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.5);
    width: 100%;
    display: block;

    ${({ loading }) =>
        loading
            ? css`
                  cursor: wait;
              `
            : css`
                  cursor: default;
              `}
`;

export const LoginButtonBox = styled.div`
    display: inline block;
`;
export const LoginLoadingBox = styled.div<loadingProps>`
    padding-top: 0.25rem;
    width: 50%;
    float: left;
    display: none;

    ${({ loading }) =>
        loading === 'true'
            ? css`
                  display: block;
              `
            : css`
                  display: none;
              `}
`;

export const LoginTextBox = styled.div<loadingProps>`
    text-align: center;
    padding-top: 0.35rem;
    float: left;

    ${({ loading }) =>
        loading === 'true'
            ? css`
                  width: 50%;
              `
            : css`
                  width: 100%;
              `}
`;

export const GoHomeButtonStyle = styled.button`
    box-sizing: border-box;
    margin-bottom: 0;
    text-align: center;
    cursor: pointer;
    padding: 9px 14px;
    font-size: 15px;
    line-height: normal;
    border-radius: 5px;
    color: #ffffff;
    background-color: #4a77d4;
    background-image: -webkit-linear-gradient(top, #6eb6de, #4a77d4);
    background-repeat: repeat-x;
    border: 1px solid #3762bc;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.4);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.5);
    width: 30%;
    display: block;
    margin: 1rem auto;

    @media (max-width: 767.98px) {
        width: 100%;
    }
`;

export const FooterLoginButtonWarp = styled.div`
    /* position: absolute; */
    text-align: center;
`;

export const ButtonDefaultWarp = styled.div`
    /* position: absolute; */
    text-align: center;
`;

export const FooterLoginButtonMain = styled.div`
    -webkit-transition: all 200ms cubic-bezier(0.39, 0.5, 0.15, 1.36);
    -moz-transition: all 200ms cubic-bezier(0.39, 0.5, 0.15, 1.36);
    -ms-transition: all 200ms cubic-bezier(0.39, 0.5, 0.15, 1.36);
    -o-transition: all 200ms cubic-bezier(0.39, 0.5, 0.15, 1.36);
    transition: all 200ms cubic-bezier(0.39, 0.5, 0.15, 1.36);
    display: block;
    margin: 1px auto;
    max-width: 180px;
    text-decoration: none;
    border-radius: 4px;
    padding: 2px 8px 10px 12px;

    color: rgba(30, 22, 54, 0.6);
    /* box-shadow: rgba(30, 22, 54, 0.4) 0 0px 0px 1px inset; */

    &:hover {
        color: rgba(255, 255, 255, 0.85);
        box-shadow: rgba(30, 22, 54, 0.7) 0 0px 0px 40px inset;
    }
`;

export const DefaultButtonBox = styled.div`
    -webkit-transition: all 200ms cubic-bezier(0.39, 0.5, 0.15, 1.36);
    -moz-transition: all 200ms cubic-bezier(0.39, 0.5, 0.15, 1.36);
    -ms-transition: all 200ms cubic-bezier(0.39, 0.5, 0.15, 1.36);
    -o-transition: all 200ms cubic-bezier(0.39, 0.5, 0.15, 1.36);
    transition: all 200ms cubic-bezier(0.39, 0.5, 0.15, 1.36);
    display: block;
    margin: 0px auto;
    max-width: 180px;
    text-decoration: none;
    border-radius: 4px;
    padding: 0.225rem 0.425rem 0.225rem 0.425rem;

    color: rgba(30, 22, 54, 0.6);
    /* box-shadow: rgba(30, 22, 54, 0.4) 0 0px 0px 1px inset; */

    &:hover {
        color: rgba(255, 255, 255, 0.85);
        box-shadow: rgba(30, 22, 54, 0.7) 0 0px 0px 40px inset;
    }
`;

export const FooterLogoutButtonWarp = styled.div`
    /* position: absolute; */
    text-align: center;
`;

export const FooterLogoutButtonMain = styled.div`
    -webkit-transition: all 200ms cubic-bezier(0.39, 0.5, 0.15, 1.36);
    -moz-transition: all 200ms cubic-bezier(0.39, 0.5, 0.15, 1.36);
    -ms-transition: all 200ms cubic-bezier(0.39, 0.5, 0.15, 1.36);
    -o-transition: all 200ms cubic-bezier(0.39, 0.5, 0.15, 1.36);
    transition: all 200ms cubic-bezier(0.39, 0.5, 0.15, 1.36);
    display: block;
    margin: 1px auto;
    max-width: 180px;
    text-decoration: none;
    border-radius: 4px;
    padding: 2px 8px 10px 12px;

    color: rgba(30, 22, 54, 0.6);
    /* box-shadow: rgba(30, 22, 54, 0.4) 0 0px 0px 1px inset; */

    &:hover {
        color: rgba(255, 255, 255, 0.85);
        box-shadow: rgba(30, 22, 54, 0.7) 0 0px 0px 40px inset;
    }
`;

const keyFrameRotate = keyframes`
    0% {
      transform: rotate(0deg) translate3d(0, 0, 0);
    }
    25% {
      transform: rotate(3deg) translate3d(0, 0, 0);
    }
    50% {
      transform: rotate(-3deg) translate3d(0, 0, 0);
    }
    75% {
      transform: rotate(1deg) translate3d(0, 0, 0);
    }
    100% {
      transform: rotate(0deg) translate3d(0, 0, 0);
    }
`;

const keyFrameStorm = keyframes`
    0% {
      transform: translate3d(0, 0, 0) translateZ(0);
    }
    25% {
      transform: translate3d(4px, 0, 0) translateZ(0);
    }
    50% {
      transform: translate3d(-3px, 0, 0) translateZ(0);
    }
    75% {
      transform: translate3d(2px, 0, 0) translateZ(0);
    }
    100% {
      transform: translate3d(0, 0, 0) translateZ(0);
    }
`;

export const EdittorActionButton = styled.button`
    position: relative;
    outline: none;
    text-decoration: none;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    text-transform: uppercase;
    height: 2rem;
    width: 110px;
    opacity: 1;
    background-color: #ffffff;
    border: 1px solid rgba(22, 76, 167, 0.6);

    &:hover {
        animation: ${keyFrameRotate} 0.7s ease-in-out both;
    }
`;

export const EdittorActionButtonSpan = styled.span`
    color: #164ca7;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.7px;

    &:hover span {
        animation: ${keyFrameStorm} 0.7s ease-in-out both;
        animation-delay: 0.06s;
    }
`;
