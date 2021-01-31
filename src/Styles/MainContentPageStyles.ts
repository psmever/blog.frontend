import styled from 'styled-components';

export const Default = styled.div``;

export const PostCard = styled.div`
    display: flex;
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

    @media screen and (min-width: 640px) {
        flex-direction: row;
        max-width: 700px;
    }
`;

export const PostCardMeta = styled.div`
    position: relative;
    z-index: 0;
    height: 200px;

    @media screen and (min-width: 640px) {
        flex-basis: 40%;
        height: auto;
    }
`;
