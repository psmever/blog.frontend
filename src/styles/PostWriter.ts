import styled from 'styled-components';
import { PublishButtonPropsInterface } from 'commonTypes';

export const MainWrapper = styled.div`

    @media (max-width: 991.98px) {
        margin-left: 0;
    }

    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    text-align: left;
    -webkit-font-smoothing: antialiased;
    color: #4f4f4f;
    box-sizing: border-box;
    /* margin-left: 280px; */
    background: #fff;

`
export const BlogWrite = styled.article`

    @media (min-width: 768px) {
        padding: 1rem !important;
    }

    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    text-align: left;
    -webkit-font-smoothing: antialiased;
    color: #4f4f4f;
    box-sizing: border-box;
    display: block;

`

export const Container = styled.div`

    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    text-align: left;
    -webkit-font-smoothing: antialiased;
    color: #4f4f4f;
    box-sizing: border-box;
    width: 100%;
    /* padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    max-width: 820px; */

`

export const Header = styled.header`

    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    text-align: left;
    -webkit-font-smoothing: antialiased;
    color: #4f4f4f;
    box-sizing: border-box;
    display: block;

`

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

`


export const WriteTitleBox = styled.div`

    @media (max-width: 767.98px) {
        width: 100%;
        margin-bottom: 0.5rem;
    }

    @media (min-width: 576px) {
        display: flex;
        flex: 0 0 auto;
        flex-flow: row wrap;
        align-items: center;
    }

    text-align: center !important;
    box-sizing: border-box;
    margin-bottom: 1.2rem;

`

export const WriteTagBox = styled.div`

    @media (max-width: 767.98px) {
        width: 100%;
        margin-bottom: 0.5rem;
    }

    @media (min-width: 576px) {
        display: flex;
        flex: 0 0 auto;
        flex-flow: row wrap;
        align-items: center;
    }

    text-align: center !important;
    box-sizing: border-box;
    margin-bottom: 1.5rem;

`

export const CategorySelectBox = styled.div`

    @media (max-width: 767.98px) {
        width: 100%;
        margin-bottom: 0.5rem;
    }

    @media (min-width: 576px) {
        display: flex;
        flex: 0 0 auto;
        flex-flow: row wrap;
        align-items: center;
    }

    text-align: center !important;
    box-sizing: border-box;
    margin-bottom: 1.5rem;

`


export const WriteTitleLabel = styled.label`

    @media (min-width: 576px){
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 0;
    }

    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;

`

export const WriteTitle = styled.input`

    @media (min-width: 576px){
        /* display: inline-block;
        width: auto;
        vertical-align: middle; */
    }


    @media (min-width: 768px){
        /* margin-right: 0.25rem !important; */
    }

    width: 100%;


    box-sizing: border-box;
    margin: 0;
    font-family: inherit;
    overflow: visible;
    padding: 0.375rem 0.75rem;
    line-height: 1.5;
    color: #5c5c5c;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #9c9c9c;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    padding-top: 0.875rem;
    padding-bottom: 0.875rem;
    /* height: 4.75rem; */
    border-color: #c2c2c2;
    font-size: 1.9rem;

    border:none;
    border-right:0px;
    border-top:0px;
    border-left:0px;
    border-bottom:0px;
    &:focus {
        outline:none;
    }

`
export const StyledApp = styled.div`
	display: flex;
	width: 100%;

	div {
		flex: 1;
		padding: 8px;
	}
`;




export const StyledEditor = styled.div`
	/* background: #efefef; */
`;

export const StyledEditorTextArea = styled.textarea`
    width: 100%;
    /* padding: 5px; */
    height: calc(100vh - 280px);
    border-radius: 5px;
    border: 1px solid #e2e2e2;
`;



export const StyledPreviewBox = styled.div`
    min-width: 0px;
    flex: 1 1 0%;
    display: flex;
    flex-direction: column;
    position: relative;
    height: calc(100vh - 35px);
    overflow-x:hidden;
    overflow-y:scroll;

`

export const StyledPreviewTitle = styled.h1`
    font-size: 2.5em;
    margin-bottom: 4rem;
    font-weight: 800;
`


export const StyledPreviewC3 = styled.div`
    display: block;
    font-size: 1.125rem;
    color: rgb(34, 36, 38);
    line-height: 1.7;
    letter-spacing: -0.004em;
    word-break: keep-all;
    overflow-wrap: break-word;
`









































export const WriteBody = styled.div`

    @media screen and (min-width: 769px) {
        /* height: calc(100vh - 299px); */
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 768px) {
        /* height: calc(100vh - 183px); */
    }

    @media only screen and (max-device-width: 480px) {
        /* height: calc(100vh - 183px); */
    }

    /* @media (min-width: 576px){
        height: calc(100vh - 225px);
    }

    @media (max-width: 767.98px) {
        height: calc(100vh - 183px);
    } */


    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    text-align: left;
    -webkit-font-smoothing: antialiased;
    color: #4f4f4f;
    box-sizing: border-box;
    /* position: relative; */
    height: calc(100vh - 35px);
    display:block;

`

export const ButtonContainer = styled.div`

    @media (max-width: 767.98px) {
        font-size: 0.5rem;
    }

    @media (max-width: 670.98px) {
            font-size: 0.8rem;
    }

    @media (min-width: 576px) {
        font-size: 0.8rem;
    }
    /* border: 1px solid black; */
    /* display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 3rem;
    grid-auto-flow: row;
    margin-top: 0.2rem; */

    display: grid;
    grid-template-columns: repeat(auto-fit);
    grid-template-rows: repeat(1);
    grid-gap: 1rem;
    grid-auto-flow: dense;
    /* margin-top: 0.4rem; */

`

export const PublishButton = styled.button`
    width: 100%;
    border-radius: 0.8rem;

    background:#5469C9;
    color:#fff;
    border:none;
    position:relative;
    height:3rem;
    font-size:1.6em;
    padding:0 2em;
    cursor:pointer;
    transition:800ms ease all;
    outline:none;

    &:hover {
        background:#fff;
        color:#1AAB8A;
    }

    &:before,&:after{
        content:'';
        position:absolute;
        top:0;
        right:0;
        height:2px;
        width:0;
        background: #5469C9;
        transition:400ms ease all;
    }

    &:after{
        right:inherit;
        top:inherit;
        left:0;
        bottom:0;
    }

    &:hover:before,&:hover:after{
        width:100%;
        transition:800ms ease all;
    }
`
