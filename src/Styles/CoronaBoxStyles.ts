import styled, { css } from 'styled-components';

const handleColorType = (color: `red` | `blue` | `black`) => {
    switch (color) {
        case `red`:
            return '#f56342';
        case `blue`:
            return '#03a9f3';
        default:
            return '#000';
    }
};

export const CoronaTopBox = styled.div`
    position: relative;
    float: center;
    align-items: center;
    width: 100%;
    height: 100%;
    text-align: center;
    display: table;
    padding-top: 1rem;
`;

export const CoronaBoxText = styled.div``;

export const CoronaBoxWrapper = styled.div`
    width: 100%;
    height: 100%;
    padding-top: 1rem;
`;

export const CoronaDetailBox = styled.div`
    width: 90%;
    margin: 10px auto;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
`;

export const CoronaCategoryText = styled.div`
    font-size: 0.8rem;
    color: #aab0c4;
`;

export const CoronaDefcntText = styled.div`
    font-size: 0.8rem;
    color: #aab0c4;
`;

export const CoronaTotalDefcntText = styled.div`
    font-size: 0.1rem;
    color: #aab0c4;
`;

export const CoronaTotalDefcntCount = styled.div`
    color: rgba(172, 25, 102, 1);
    font-size: 0.3rem;
`;

export const CoronaTotalPreviousDefcntCount = styled.div`
    color: rgba(172, 25, 102, 1);
    font-size: 0.3rem;
`;

export const CoronaCategoryCount = styled.div`
    color: rgba(172, 25, 102, 1);
    font-size: 0.8rem;
`;

export const CoronaDefcnCount = styled.div`
    color: rgba(172, 25, 102, 1);
    font-size: 0.8rem;
    color: #eb483f;
`;

export const CoronaPreviousCount = styled.div`
    color: rgba(172, 25, 102, 1);
    font-size: 0.6rem;
`;

export const StatusWrap = styled.div`
    overflow: hidden;
    position: relative;
    border-radius: 8px;
    box-shadow: 0 2px 5px hsl(220deg 2% 71% / 15%);
    margin: 5px 7px 0;
`;

export const ListStatus = styled.ul`
    overflow: hidden;
    padding-top: 6px;
    background-color: #fff;
    list-style: none;
`;

export const StatusDate = styled.ul`
    overflow: hidden;
    padding-top: 6px;
    background-color: #fff;
    list-style: none;
    font-size: 13px;
    font-weight: 600;
    color: #000;
    letter-spacing: -0.06em;
    font-family: SF Pro Display, Apple SD Gothic Neo, Malgun Gothic, '\B9D1\C740 \ACE0\B515', sans-serif;
`;

export const StatusBox = styled.li<{ hasLine: boolean }>`
    overflow: hidden;
    float: left;
    position: relative;
    width: 33%;
    height: 85px;
    text-align: center;
    white-space: nowrap;
    list-style: none;

    ${({ hasLine }) =>
        hasLine === true &&
        css`
            &:before {
                position: absolute;
                left: 0;
                top: 15px;
                bottom: 15px;
                width: 1px;
                background-color: #f0f0f0;
                content: '';
            }
        `}
`;

export const StatusTitle = styled.em`
    display: block;
    padding-top: 8px;
    font-size: 11px;
    color: #41465f;
    letter-spacing: -0.06em;
    font-style: normal;
    font-weight: 400;
`;

export const StatusCount = styled.span<{ color: `red` | `blue` | `black` }>`
    display: block;
    margin-top: 5px;
    font-size: 17px;
    font-weight: 700;
    color: #000;
    letter-spacing: -0.06em;

    color: ${({ color }) => handleColorType(color)};
`;

export const ScreenOut = styled.span`
    position: absolute;
    width: 0;
    height: 0;
    overflow: hidden;
    line-height: 0;
    text-indent: -9999px;
`;

export const ChangeCount = styled.span`
    display: block;
    margin-top: -2px;
    font-size: 12px;
    color: #000;
    letter-spacing: -0.04em;
`;

export const StatusCountDiff = styled.span`
    font-family: SF Pro Display, Apple SD Gothic Neo, Malgun Gothic, '\B9D1\C740 \ACE0\B515', sans-serif;
`;
