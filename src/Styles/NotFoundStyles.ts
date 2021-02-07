import styled from 'styled-components';

export const PageBox = styled.div`
    position: relative;
    margin: 4;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: '100vh';
    display: 'flex';
    margin-top: 50%;
    display: block;
    margin: 0 auto;
    text-align: center;
`;

export const NotFoundImageBox = styled.div``;

export const NotFoundImage = styled.img`
    width: 20rem;
    height: auto;
`;

export const NotFoundTextBox = styled.div`
    font-size: 1.5rem;
`;
export const NotFoundButtonBox = styled.div`
    margin: 0;
    position: absolute;
    text-align: center;
    width: 100%;
`;
