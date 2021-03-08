import styled from 'styled-components';

export const Default = styled.div``;

export const Warp = styled.div`
    /* width: 100%;
    height: 100vh;
    min-height: 100vh;
    background: white; */

    @media all and (min-width: 1025px) {
        /* max-width: 1280px; */
        /* max-width: 1280px; */
        margin: 0 auto;
    }
`;

export const Header = styled.header``;

export const Container = styled.div`
    min-height: 100%;
    position: relative;
    padding-bottom: 100px;

    width: 75%;
    height: 100%;
    margin: 0 auto;

    &:after {
        content: '';
        display: block;
        clear: both;
    }
`;

export const ContentBox = styled.div`
    /* width: 85%; */
    padding: 0.4rem;

    /* @media all and (min-width: 768px) and (max-width: 1024px) {
        float: left;
        width: 85%;
    } */
`;

export const FooterBox = styled.footer`
    width: 100%;
    height: 2rem;
    position: fixed;
    bottom: 0;
    background: #5eaeff;
    text-align: center;
    color: white;
    flex: center;
    line-height: 2rem;
`;
