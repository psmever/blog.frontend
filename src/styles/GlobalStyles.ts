import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
    ${reset}

    * {
        box-sizing: border-box;
    }

    body    {
        background: #f1f1f1;
        font-size: 13px;
        /* background-color: rgba(20,20,20,0.5); */
        font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
    }

    a {
        text-decoration: none;
        color: inherit;
        cursor: pointer;
        line-height: 1.5;
        color: #333;
    }

    ol, ul, li {
        list-style: none;
        list-style-type: none;
    }

    img {
        display: block;
        width: 100%;
        height: 100%;
    }

    input, button {
        background-color: transparent;
    }

    h1, h2, h3, h4, h5, h6, ul, li, p, div {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family:'Maven Pro', sans-serif;
    }


    /* h1 {
        font-size: 25px;
        color: #cc0;
        padding: 10px;
        color: #fff;
    } */

`;

export default GlobalStyles;
