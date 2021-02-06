import styled, { css } from 'styled-components';

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
