import styled from 'styled-components';

export const Default = styled.div``;

export const Card = styled.div`
    display: none;

    &:hover {
        /* color: #5ad67d; */
    }

    @media screen and (min-width: 1024px) {
        flex-direction: column;
        margin: 1rem auto;
        box-shadow: 0 3px 7px -1px rgba(0, 0, 0, 0.1);
        margin-bottom: 1.6%;
        background: #fff;
        line-height: 1.4;
        font-family: sans-serif;
        border-radius: 5px;
        overflow: hidden;
        z-index: 0;
        width: 100%;
        display: flex;
        flex-direction: row;
        max-width: 700px;
    }
`;

export const Description = styled.div`
    padding: 1rem;
    background: #fff;
    position: relative;
    z-index: 1;

    @media screen and (min-width: 640px) {
        /* flex-basis: 60%; */

        &:before {
            transform: skewX(-3deg);
            content: '';
            background: #fff;
            width: 30px;
            position: absolute;
            left: -10px;
            top: 0;
            bottom: 0;
            z-index: -1;
        }
    }
`;

export const Title = styled.h1`
    font-family: Poppins, sans-serif;
    line-height: 1;
    margin: 0;
    font-size: 1.7rem;
`;

export const Tag = styled.h2`
    font-family: Poppins, sans-serif;
    font-size: 1rem;
    font-weight: 300;
    text-transform: uppercase;
    color: #a2a2a2;
    margin-top: 5px;
`;

export const Contents = styled.p`
    position: relative;
    margin: 1rem 0 0;
`;
