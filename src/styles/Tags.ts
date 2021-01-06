import styled from 'styled-components';

export const MainWarpper = styled.div`
    @media (max-width: 991.98px) {
        margin-left: 0;
    }

    line-height: 1.5;
    text-align: left;
    box-sizing: border-box;
    margin-left: 280px;
    background: #fff;
    height: 200px;
    overflow: visible;

    height: 100%;
    /* display: flex; */
    /* flex-direction: row; */
    overflow: hidden;
`;

export const CtaSection = styled.section`
    line-height: 1.5;
    text-align: left;
    box-sizing: border-box;
    display: block;
    padding-top: 3rem !important;
    padding-bottom: 3rem !important;
    background: #fafafa !important;
`;

export const CtaSectionContainer = styled.div`
    max-width: 820px;

    @media screen and (max-width: 1200px) and (min-width: 1200px) {
        /* max-width: 1140px; */
    }

    @media screen and (max-width: 1200px) and (min-width: 992px) {
        /* max-width: 960px; */
    }

    @media screen and (max-width: 992px) and (min-width: 768px) {
        /* max-width: 720px; */
    }

    @media screen and (max-width: 768px) and (min-width: 576px) {
        /* max-width: 540px; */
    }

    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    text-align: center !important;
`;

export const Heading = styled.h2`
    text-align: center !important;
    box-sizing: border-box;
    margin-top: 0;
    margin-bottom: 0.5rem;
    line-height: 1.2;
    color: #292929;
    font-size: 2rem;
    font-weight: bold;
`;

export const Intro = styled.div`
    text-align: center !important;
    box-sizing: border-box;
`;

export const ListSection = styled.section`
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
`;

export const Container = styled.div`
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    text-align: left;
    -webkit-font-smoothing: antialiased;
    color: #4f4f4f;
    box-sizing: border-box;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    max-width: 820px;
`;
