import styled from 'styled-components';

export const SearchWrapper = styled.div`
    display: flex;
    display: -webkit-flex;
    display: -ms-flexbox;
    flex-wrap: wrap;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;

    flex: 0 1 100px;
    -webkit-flex: 0 1 100px;
    -ms-flex: 0 1 100px;
`;

export const SearchMainBoxStyle = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1rem auto;
    margin-bottom: 1.6%;
    background: white;
    line-height: 1.4;
    font-family: sans-serif;
    border-radius: 5px;
    overflow: hidden;
    z-index: 0;

    flex: 1 0 50%;
    box-sizing: border-box;
    margin: 1rem 0.25em;
`;

export const SearchTopBox = styled.div`
    color: #4f4f4f;
    box-sizing: border-box;
    display: block;
`;

export const SearchBoxStyle = styled.div`
    display: table;
    width: 60%;
    margin-left: auto;
    margin-right: auto;
`;

export const SearchContainer = styled.div`
    padding-top: 64px;
    width: 100%;
`;

export const SearchTitle = styled.div`
    font-size: 22px;
    font-weight: 900;
    text-align: center;
    color: #5eaeff;
`;

export const SearchInput = styled.input`
    width: 100%;
    padding: 12px 24px;

    background-color: transparent;
    transition: transform 250ms ease-in-out;
    font-size: 14px;
    line-height: 18px;

    color: #575756;
    background-color: transparent;
    /*         background-image: url(http://mihaeltomic.com/codepen/input-search/ic_search_black_24px.svg); */

    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-size: 18px 18px;
    background-position: 95% center;
    border-radius: 50px;
    border: 1px solid #575756;
    transition: all 250ms ease-in-out;
    backface-visibility: hidden;
    transform-style: preserve-3d;

    &::placeholder {
        color: color(#575756 a(0.8));
        text-transform: uppercase;
        letter-spacing: 1.5px;
    }

    &:hover,
    &:focus {
        padding: 12px 0;
        outline: 0;
        border: 1px solid transparent;
        border-bottom: 1px solid #575756;
        border-radius: 0;
        background-position: 100% center;
    }
`;

export const CreditsContainer = styled.div`
    margin-top: 24px;
`;

export const CreditsText = styled.div`
    text-align: center;
    font-size: 13px;
    line-height: 18px;
`;

export const CreditsLink = styled.div`
    color: #ff8b88;
    text-decoration: none;
    transition: color 250ms ease-in;

    &:hover {
        color: color(#ff8b88 blackness(+25%));
    }

    &:focus {
        color: color(#ff8b88 blackness(+25%));
    }
`;

export const TagsLink = styled.div`
    color: #ff8b88;
    text-decoration: none;
    transition: color 250ms ease-in;
    font-size: 4rem;
    line-height: 4rem;

    &:hover {
        color: color(#ff8b88 blackness(+25%));
    }

    &:focus {
        color: color(#ff8b88 blackness(+25%));
    }
`;

export const SearchListBoxStyle = styled.div`
    /* padding-top: 10rem; */
    /* height: 70%; */
    height: 100%;
    width: 100%;
    /* position: fixed; */
    z-index: 1;
    top: 0rem;
    overflow-x: hidden;
    padding-top: 20px;
    right: 0;
    background-color: rgb(255, 255, 255);
    padding: 0.375rem 0.75rem;
    align-items: center;
`;

export const SearchListContainer = styled.div`
    align-items: center;
    width: 100%;
`;

export const SearchListCard = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1rem auto;
    box-shadow: 0 3px 7px -1px rgba(#000, 0.1);
    margin-bottom: 1.6%;
    background: #fff;
    line-height: 1.4;
    font-family: sans-serif;
    border-radius: 5px;
    overflow: hidden;
    z-index: 0;
    border: 1px solid rgb(100 150 200 / 50%);
`;

export const SearchLoadingCard = styled.div`
    padding-top: 3rem;
    display: table;
    /* width: 100%; */
    margin-left: auto;
    margin-right: auto;
`;

export const SearchListDescription = styled.div`
    padding: 1rem;
    background: #fff;
    position: relative;
    z-index: 1;
    cursor: pointer;
`;

export const SearchItemTitle = styled.h1`
    font-family: Poppins, sans-serif;

    line-height: 1;
    margin: 0;
    font-size: 1.7rem;
`;

export const SearchItemTag = styled.h2`
    font-size: 0.876rem;
    font-weight: 300;
    text-transform: uppercase;
    color: #2778c4;
    margin-top: 5px;
`;

export const SearchItemContent = styled.p`
    position: relative;
    margin: 1rem 0 0;

    &:first-of-type {
        margin-top: 1.25rem;

        &:before {
            content: '';
            position: absolute;
            height: 5px;
            background: #5ad67d;
            width: 35px;
            top: -0.75rem;
            border-radius: 3px;
        }
    }
`;
