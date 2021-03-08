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
    box-shadow: 0 3px 7px -1px rgba(0, 0, 0, 0.1);
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

export const Header = styled.article`
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    text-align: left;
    -webkit-font-smoothing: antialiased;
    color: #4f4f4f;
    box-sizing: border-box;
    display: block;
`;

export const HeaderTitle = styled.h2`
    text-align: left;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    margin-top: 0;
    line-height: 1.2;
    color: #292929;
    margin-bottom: 0.5rem !important;
    font-weight: bold;
    font-size: 2rem;
`;
