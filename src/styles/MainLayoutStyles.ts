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
    display: flex;
`;

export const SideLine = styled.div`
    margin: 0px;
    /* border: 1px dashed #bcbcbc; */
    height: calc(100vh - 80px);
    /* width: 24rem; */
    border: 2px dotted #f44336;
`;

export const LeftSideBox = styled.div`
    padding: 1px;
    width: 24rem;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
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
`;
