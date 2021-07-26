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

export const SectionHistoryWrapper = styled.article`
    display: flex;
    flex-direction: column;
    margin: 1rem auto;
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

export const TitleWrapper = styled.div`
    margin-top: 1rem;
    text-align: center;
`;

export const SectionTitle = styled.h2``;

export const TableWrapper = styled.div`
    // margin: 10px 70px 70px;
    box-shadow: 0px 35px 50px rgba(0, 0, 0, 0.2);
`;

export const HistoryTable = styled.table`
    border-radius: 5px;
    font-size: 12px;
    font-weight: normal;
    border: none;
    border-collapse: collapse;
    width: 100%;
    max-width: 100%;
    white-space: nowrap;
    background-color: white;
`;

export const HistoryTableHead = styled.thead``;

export const HistoryTableTr = styled.tr`
    &:nth-child(even) {
        background: #f8f8f8;
    }
`;

export const HistoryTableTbodyTr = styled(HistoryTableTr)`
    &:hover {
        background-color: #f5f5f5;
    }
`;

export const HistoryTableTh = styled.th`
    text-align: left;
    padding: 8px;
`;

export const HistoryTableTheadTh = styled(HistoryTableTh)`
    color: #ffffff;
    background: #4fc3a1;
    text-align: left;
    border-bottom: 1px solid #505057;

    &:nth-child(odd) {
        color: #ffffff;
        background: #324960;
    }
`;

export const HistoryTableTbody = styled.tbody``;

export const HistoryTableTd = styled.td`
    text-align: left;
    padding: 8px;

    border-right: 1px solid #f8f8f8;
    font-size: 12px;
`;

export const HistoryTableTbodyTd = styled(HistoryTableTd)`
    // display: block;
    text-align: center;
`;
