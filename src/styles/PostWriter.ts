import styled from 'styled-components';

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
        padding: 3rem !important;
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
        /* margin-bottom: 0; */
    }

    text-align: center !important;
    box-sizing: border-box;
    margin-bottom: 1.2rem;

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
    height: 4.75rem;
    border-color: #c2c2c2;
    font-size: 1.9rem;

`


export const WriteBody = styled.div`

    @media (max-width: 991.98px) {
        height: calc(100vh - 200px - 56px);
    }


    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    text-align: left;
    -webkit-font-smoothing: antialiased;
    color: #4f4f4f;
    box-sizing: border-box;
    /* position: relative; */
    height: calc(100vh - 150px - 34px);
    display:block;

`


