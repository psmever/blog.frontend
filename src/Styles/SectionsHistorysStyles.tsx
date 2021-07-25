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

export const TableWrapper = styled.div`
    margin: 10px 70px 70px;
    box-shadow: 0px 35px 50px rgba(0, 0, 0, 0.2);

    @media (max-width: 767px) {
        &:before {
            content: 'Scroll horizontally >';
            display: block;
            text-align: right;
            font-size: 11px;
            color: white;
            padding: 0 0 10px;
        }
    }
`;

export const FlTable = styled.table`
    border-radius: 5px;
    font-size: 12px;
    font-weight: normal;
    border: none;
    border-collapse: collapse;
    width: 100%;
    max-width: 100%;
    white-space: nowrap;
    background-color: white;

    @media (max-width: 767px) {
        display: block;
        width: 100%;
    }
`;

export const FlTableHead = styled.thead`
    @media (max-width: 767px) {
        display: block;
    }
`;

export const FlTableTbody = styled.tbody`
    @media (max-width: 767px) {
        display: block;
        width: auto;
        position: relative;
        overflow-x: auto;
    }
`;

export const FlTableTr = styled.tr`
    &:nth-child(even) {
        background: #f8f8f8;
    }
`;

export const FlTableTd = styled.td`
    text-align: left;
    padding: 8px;
    border-right: 1px solid #f8f8f8;
    font-size: 12px;

    padding: 20px 0.625em 0.625em 0.625em;
    height: 60px;
    vertical-align: middle;
    box-sizing: border-box;
    overflow-x: hidden;
    overflow-y: auto;
    width: 120px;
    font-size: 13px;
    text-overflow: ellipsis;
`;

export const FlTableTbodyTd = styled(FlTableTd)`
    @media (max-width: 767px) {
    }
`;

export const FlTableTbodyTr = styled.tr`
    background: #f8f8f8;

    @media (max-width: 767px) {
        display: table-cell;
        background: none;

        &:nth-child(even) {
            background: transparent;
        }

        &:nth-child(odd) {
            background: none;
        }
    }
`;

export const FlTableTbodyTD = styled.td`
    @media (max-width: 767px) {
    }
`;
