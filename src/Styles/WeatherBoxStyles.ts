import styled from 'styled-components';

export const WeatherBox = styled.div`
    position: relative;
    float: left;
    height: 100%;
    display: flex;
    align-items: center;
    width: 100%;
`;

export const WeatherTopBox = styled.div`
    position: relative;
    float: center;
    align-items: center;
    width: 100%;
    height: 100%;
    text-align: center;
    display: table;
    padding-top: 1rem;
`;

export const WeatherTimeText = styled.div``;

export const WeatherCenterBox = styled.div`
    position: relative;
    float: left;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
`;

export const WeatherImageBox = styled.div`
    position: relative;
    width: 50%;
    float: left;
    display: table;
    height: 3rem;
    margin-left: 1.5rem;
    margin-top: 0.3rem;
`;

export const WeatherTextBox = styled.div`
    position: relative;
    width: 100%;
    float: left;
    display: table;
    align-items: right;
`;

export const WatherImage = styled.img`
    display: inline-block;
    width: 28px;
    height: 30px;
`;

export const WatherText = styled.div`
    /* display: inline-block; */
    font-size: 1.56rem;
    /* padding-right: 4rem; */
`;

export const WeatherFooterBox = styled.div`
    padding-top: 1rem;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
`;

export const WeatherDetailTitleText = styled.div`
    /* float: left; */
    /* width: 30%; */
    /* box-sizing: border-box; */
`;

export const WeatherDetailText = styled.div`
    /* margin: 0.25rem; */
    /* width: 50%; */
    /* text-align: left; */
    /* color: rgba(172, 25, 102, 1); */
    /* text-decoration: none; */
`;
