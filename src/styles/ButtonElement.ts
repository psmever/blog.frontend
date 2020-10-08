import styled, { keyframes } from 'styled-components';

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
`

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
`

export const Button = styled.button`

    position: relative;
    outline: none;
    text-decoration: none;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    text-transform: uppercase;
    height: 30px;
    width: 110px;
    opacity: 1;
    background-color: #ffffff;
    border: 1px solid rgba(22, 76, 167, 0.6);

    &:hover {
        animation: ${keyFrameRotate} 0.7s ease-in-out both;
    }

`

export const ButtonSpan = styled.span`

    color: #164ca7;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.7px;

    &:hover span {
        animation: ${keyFrameStorm} 0.7s ease-in-out both;
        animation-delay: 0.06s;
    }

`