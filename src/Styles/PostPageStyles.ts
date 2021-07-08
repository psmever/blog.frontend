import styled, { css } from 'styled-components';

interface DefaultAltProps {
    alt: 'true' | 'false';
}

export const PostCardWrapper = styled.div`
    /* width: 90%; */
    /* width: 750px; */
    display: flex;
    display: -webkit-flex;
    display: -ms-flexbox;
    flex-wrap: wrap;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    /* height: 1rem; */
    /* background: #ccc; */

    flex: 0 1 100px;
    -webkit-flex: 0 1 100px;
    -ms-flex: 0 1 100px;
    /* background: darkblue; */
    /* margin: 10px; */
    /* font-size: 20px; */
    /* color: #fff; */
`;

export const PostElementLoadingBox = styled.div`
    padding-top: 1rem;
    padding-bottom: 1rem;
    display: table;
    width: 100%;
    margin-left: 50%;
    margin-right: 50%;
    align-items: center;
`;

export const PostCard = styled.div<DefaultAltProps>`
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

    flex: 1 0 50%;
    box-sizing: border-box;
    margin: 1rem 0.25em;

    &:hover #Details {
        left: 0%;
    }

    &:hover #PostPhoto {
        transform: scale(1.3) rotate(3deg);
    }

    @media all and (min-width: 640px) {
        flex-direction: row;
        max-width: 50%;

        ${({ alt }) =>
            alt === `true` &&
            css`
                flex-direction: row-reverse;
            `}
    }

    @media all and (min-width: 640px) and (max-width: 1024px) {
        /* flex-direction: row; */
        max-width: 100%;
    }

    @media all and (min-width: 1024px) {
        ${({ alt }) =>
            alt === `true`
                ? css`
                      max-width: calc(50% - 1em);
                  `
                : css`
                      max-width: calc(50% - 0em);
                  `}
    }
`;
export const PostCardMeta = styled.div`
    position: relative;
    z-index: 0;
    height: 10rem;
    /* max-height: 20rem; */

    @media screen and (min-width: 640px) {
        flex-basis: 40%;
        height: auto;
    }
`;

export const PostPhoto = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-size: cover;
    background-position: center;
    transition: transform 0.2s;
`;

export const Details = styled.ul<DefaultAltProps>`
    margin: auto;
    padding: 0;
    list-style: none;

    position: absolute;
    top: 0;
    bottom: 0;
    left: -100%;
    margin: auto;
    transition: left 0.2s;
    background: rgba(0, 0, 0, 0.6);
    color: #fff;
    padding: 10px;
    width: 100%;
    font-size: 0.9rem;

    ${({ alt }) =>
        alt &&
        css`
            padding-left: 25px;
        `}
`;

export const PostDetailli = styled.li``;

export const PostAuthor = styled.li`
    &:before {
        font-family: FontAwesome;
        margin-right: 10px;
        content: '';
    }
`;

export const PostDate = styled.li`
    &:before {
        font-family: FontAwesome;
        margin-right: 10px;
        content: '';
    }
`;

export const Tags = styled.li`
    display: inline-block;
`;

export const TagsUList = styled.ul`
    margin: auto;
    padding: 0;
    list-style: none;

    &:before {
        font-family: FontAwesome;
        content: '';
        margin-right: 10px;
    }
`;

export const TagsList = styled.li`
    display: inline-block;
    margin-right: 2px;
    &:first-child {
        margin-left: -4px;
    }
`;

export const DetailList = styled.div`
    -webkit-text-decoration: dotted underline;
    text-decoration: dotted underline;
    cursor: pointer;
`;

export const Description = styled.div<DefaultAltProps>`
    padding: 1rem;
    background: #fff;
    position: relative;
    z-index: 1;

    @media all and (min-width: 640px) {
        flex-basis: 60%;

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

        ${({ alt }) =>
            alt === `true`
                ? css`
                      &:before {
                          left: inherit;
                          right: -10px;
                          transform: skew(3deg);
                      }
                  `
                : css`
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
                  `}
    }
`;

export const DescriptionMainText = styled.h1`
    font-family: Poppins, sans-serif;

    line-height: 1;
    margin: 0;
    font-size: 1.7rem;

    min-height: 3.5rem;
    display: -webkit-box;
    display: -ms-flexbox;
    display: box;
    overflow: hidden;
    vertical-align: top;
    text-overflow: ellipsis;
    word-break: break-all;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
`;
export const DescriptionSubText = styled.h2`
    font-family: Poppins, sans-serif;

    font-size: 1rem;
    font-weight: 500;
    text-transform: uppercase;
    color: #a2a2a2;
    margin-top: 5px;
`;

export const DescriptionContent = styled.p`
    position: relative;
    margin: 1rem 0 0;
    min-height: 3rem;
    max-height: 5rem;

    display: -webkit-box;
    display: -ms-flexbox;
    display: box;
    overflow: hidden;
    vertical-align: top;
    text-overflow: ellipsis;
    word-break: break-all;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;

    &:first-of-type {
        margin-top: 1.25rem;
    }

    &:first-of-type:before {
        content: '';
        position: absolute;
        height: 5px;
        background: #5ad67d;
        width: 35px;
        top: -0.75rem;
        border-radius: 3px;
    }
`;

export const DescriptionReadMore = styled.div`
    position: relative;
    margin: 1rem 0 0;

    text-align: right;

    &:first-of-type {
        margin-top: 1.25rem;
    }

    &:first-of-type:before {
        content: '';
        position: absolute;
        height: 5px;
        background: #5ad67d;
        width: 35px;
        top: -0.75rem;
        border-radius: 3px;
    }
`;

export const DescriptionReadMoreList = styled.div`
    color: #5ad67d;
    display: inline-block;
    position: relative;
    cursor: pointer;
    word-break: nowrap;

    &:after {
        content: '';
        font-family: FontAwesome;
        margin-left: -1px;
        opacity: 0;
        vertical-align: middle;
        transition: margin 0.3s, opacity 0.3s;
    }

    &:hover:after {
        margin-left: 5px;
        opacity: 1;
    }
`;
