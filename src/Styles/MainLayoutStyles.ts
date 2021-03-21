import styled from 'styled-components';

export const Default = styled.div``;

export const Warp = styled.div`
    /* background: #f1f1f1; */
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

    &:after {
        content: '';
        display: block;
        clear: both;
    }
`;

export const LeftSideBox = styled.div`
    /* display: none; */
    min-width: 300px;
    @media all and (min-width: 768px) and (max-width: 1024px) {
        float: left;
        width: 15%;
    }

    @media all and (min-width: 1025px) {
        float: left;
        width: 15%;
    }
`;

export const ContentBox = styled.div`
    width: 100%;
    padding: 0.4rem;

    /* @media all and (min-width: 768px) and (max-width: 1024px) {
        float: left;
        width: 85%;
    } */

    @media all and (min-width: 1025px) {
        float: left;
        width: 71%;
    }
`;

export const RightSideBox = styled.div`
    @media all and (min-width: 768px) and (max-width: 1024px) {
        clear: both;
        /* width: 14%; */
    }

    @media all and (min-width: 1025px) {
        float: right;
        width: 14%;
    }
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
