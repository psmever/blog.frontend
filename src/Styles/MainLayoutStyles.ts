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

    @media all and (min-width: 982px) {
        /* float: left; */
        width: 100%;
        padding-right: 10px;
        padding-left: 10px;
    }

    @media all and (min-width: 983px) and (max-width: 1024px) {
        float: left;
        width: 10%;
    }

    @media all and (min-width: 1025px) {
        float: left;
        width: 15%;
    }
`;

export const ContentBox = styled.div`
    width: 100%;
    padding: 0.4rem;

    /* @media all and (max-width: 1024px) {
        float: right;
        width: 85%;
    }

    @media all and (min-width: 1025px) {
        float: left;
        width: 78%;
    } */

    @media (min-width: 1775px) {
        /* float: left; */
        /* width: 71%; */
    }

    @media (min-width: 1777px) {
        float: left;
        width: 71%;
    }

    @media (min-width: 1999px) {
        float: left;
        width: 72%;
    }
`;

export const RightSideBox = styled.div`
    min-width: 13%;
    width: 100%;
    padding: 0.4rem;

    @media (min-width: 1775px) {
        align-items: center;
    }

    @media (min-width: 1777px) {
        float: right;
        width: 13%;
    }

    @media all and (max-width: 1024px) {
        /* float: ; */
        /* width: 85%; */
    }

    @media all and (min-width: 1025px) {
        /* float: left; */
        /* width: 78%; */
    }

    /* @media all and (max-width: 768px) { */
    /* display: block; */
    /* clear: both;
        width: 14%; */
    /* } */

    /* @media all and (max-width: 1024px) { */
    /* align-items: center; */
    /* float: center; */
    /* clear: both; */
    /* width: 90%; */
    /* padding-left: 50%; */
    /* margin-left: auto; */
    /* margin-right: auto; */
    /* } */

    /* @media all and (min-width: 1025px) { */
    /* float: right; */
    /* width: 14%; */
    /* } */
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
