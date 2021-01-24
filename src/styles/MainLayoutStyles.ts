import styled from 'styled-components';

export const Default = styled.div``;

export const MainContainer = styled.div`
    display: 'flex';
    flex-direction: 'column';
`;

export const MainHeaderBox = styled.div`
    background-color: #f1f1f1;
    padding: 1px;
`;

export const MainWrapper = styled.div`
    display: -webkit-flex;
    width: 100%;
    display: flex;

    @media screen and (mix-width: 952px) {
    }
`;

export const SideLine = styled.div`
    margin: 0px;
    height: calc(100vh - 80px);
    border: 2px dotted #f44336;
`;

export const LeftSideBox = styled.div`
    padding: 1px;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    height: calc(100vh - 80px);
    border: 2px dotted #f44336;
    min-width: 20rem;
    max-width: 25rem;

    @media screen and (max-width: 952px) {
        display: none;
    }
`;

export const MainPageBox = styled.div`
    -webkit-flex: 2;
    -ms-flex: 2;
    flex: 2;
`;

export const RightSideBox = styled.div`
    padding: 1px;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    min-width: 10rem;
    max-width: 15rem;

    @media screen and (max-width: 1280px) {
        display: none;
    }
`;
