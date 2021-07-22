import styled from 'styled-components';

export const MainWrapper = styled.div`
    /* width: 100%; */
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

export const PostDetailBox = styled.article`
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

export const PostBoxWarpper = styled.div``;

export const Header = styled.article`
    color: #4f4f4f;
    box-sizing: border-box;
    display: block;
`;

export const HeaderTitle = styled.h2`
    box-sizing: border-box;
    margin-top: 0;
    line-height: 1.2;
    color: #292929;
    margin-bottom: 0.5rem !important;
    font-weight: bold;
    font-size: 2rem;
`;

export const HeaderMeta = styled.div`
    box-sizing: border-box;
    margin-bottom: 1rem !important;
    color: #8f8f8f;
    font-size: 0.8125rem;
`;

export const HeaderDate = styled.span`
    font-weight: 400;
    line-height: 1.5;
    text-align: left;
    -webkit-font-smoothing: antialiased;
    color: #8f8f8f;
    font-size: 0.8125rem;
    box-sizing: border-box;
    display: inline-block;
`;

export const ModifyButton = styled.span`
    cursor: pointer;
    float: right;
    padding-right: 1rem;
    display: block;
`;

export const PostTag = styled.div`
    color: #4f4f4f;
    box-sizing: border-box;
    display: block;
`;

export const PostTagMeta = styled.div`
    box-sizing: border-box;
    margin-bottom: 1rem !important;
    color: #8f8f8f;
    font-size: 0.8125rem;
`;

export const PostTags = styled.ul`
    list-style: none;
    margin: 0;
    overflow: hidden;
    padding: 0;
`;
export const PostTagsItems = styled.li`
    float: left;
`;
export const PostTagsItem = styled.div`
    background: #eeeeee;
    border-radius: 3px 0 0 3px;
    color: #5469c9;
    display: inline-block;
    height: 26px;
    line-height: 26px;
    padding: 0 20px 0 23px;
    position: relative;
    margin: 0 10px 10px 0;
    text-decoration: none;
    transition: color 0.2s;
    cursor: pointer;

    &:before {
        background: #fff;
        border-radius: 10px;
        box-shadow: inset 0 1px rgba(0, 0, 0, 0.25);
        content: '';
        height: 6px;
        left: 10px;
        position: absolute;
        width: 6px;
        top: 10px;
    }

    &:after {
        background: #fff;
        border-bottom: 13px solid transparent;
        border-left: 10px solid #eee;
        border-top: 13px solid transparent;
        content: '';
        position: absolute;
        right: 0;
        top: 0;
    }

    &:hover {
        background-color: #e0dede;
        /* color: white; */
    }

    &:hover::after {
        border-left-color: #e0dede;
    }
`;

export const HistoryBoxWarpper = styled.div``;

export const HistoryContainer = styled.div`
    // border: 1px solid black;

    // position: absolute;
    // top: 0;
    // right: 0;
    // bottom: 0;
    // left: 0;
    margin: auto;

    display: grid;
    place-items: left;
    // background-color: #128cfc;
`;

export const HistoryItems = styled.div`
    width: 300px;
    background: #fffffe;
    box-shadow: 0 3px 6px rgba(black, 0.16), 0 3px 6px rgba(black, 0.23);
    border-top: 10px solid 0b5aa2;
`;

export const HistoryItemsHead = styled.div`
    p {
        padding: 5px 20px;
        margin: 10px;
        color: #0b5aa2;
        font-weight: bold;
        font-size: 20px;
    }

    hr {
        width: 20%;
        margin: 0px 30px;
        border: 1px solid #0b5aa2;
    }
`;

export const HistoryItemsBody = styled.div`
    padding: 10px;
    margin: 10px;
    display: grid;
    grid-gap: 10px;
`;

export const ItemsBodyContent = styled.div`
    padding: 10px;
    padding-right: 0px;
    display: grid;
    grid-template-columns: 10fr 1fr;
    // background-color: lightblue;
    font-size: 13px;
    grid-gap: 10px;
    border: 1px solid transparent;
    cursor: pointer;

    & hover {
        border-radius: 15px;
        border: 1px solid #0b5aa2;
    }

    i {
        align-self: center;
        font-size: 15px;
        color: #0b5aa2;
        font-weight: bold;
        animation: icon 1.5s infinite forwards;
    }
`;
