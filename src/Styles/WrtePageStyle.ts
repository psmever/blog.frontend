import styled from 'styled-components';

export const WriteWrapper = styled.div`
    @media (max-width: 991.98px) {
        margin-left: 0;
    }

    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    text-align: left;
    -webkit-font-smoothing: antialiased;
    color: #4f4f4f;
    box-sizing: border-box;
    margin-left: 0.35rem;
    background: #fff;
`;

export const WriteBox = styled.article`
    @media (min-width: 768px) {
        padding: 1rem !important;
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

export const WriteContainer = styled.div`
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    text-align: left;
    -webkit-font-smoothing: antialiased;
    color: #4f4f4f;
    box-sizing: border-box;
    width: 100%;
`;

export const LeftEditorBox = styled.div`
    @media (max-width: 1161px) {
        width: 100%;
    }

    height: 100%;
    width: 50%;
    /* position: fixed; */
    z-index: 1;
    top: 0;
    overflow-x: hidden;
    padding-top: 0rem;
    left: 0;
    background-color: rgb(255, 255, 255);
`;

export const WriteTitleBox = styled.div`
    @media (max-width: 767.98px) {
        width: 100%;
        margin-bottom: 0.5rem;
    }

    @media (min-width: 576px) {
        display: flex;
        flex: 0 0 auto;
        flex-flow: row wrap;
        align-items: center;
    }

    text-align: center !important;
    box-sizing: border-box;
`;

export const TagBox = styled.div`
    @media (max-width: 767.98px) {
        width: 100%;
        margin-bottom: 0.5rem;
    }

    @media (min-width: 576px) {
        display: flex;
        flex: 0 0 auto;
        flex-flow: row wrap;
        align-items: center;
    }

    text-align: left !important;
    box-sizing: border-box;
    margin-bottom: 1.5rem;
    padding: 0.375rem 0.75rem;
`;

export const WriteTitleLabel = styled.label`
    @media (min-width: 576px) {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 0;
    }

    /* position: absolute; */
    width: 100%;
    /* height: 2px; */
    padding: 0;
    margin: -1px;
    /* overflow: hidden; */
    /* clip: rect(0, 0, 0, 0); */
    white-space: nowrap;
    border: 0;
`;

export const WriteTitle = styled.input`
    width: 100%;

    box-sizing: border-box;
    margin: 0;
    font-family: inherit;
    overflow: visible;
    padding: 0.375rem 0.75rem;
    line-height: 1.5;
    color: #5c5c5c;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #9c9c9c;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    padding-top: 0rem;
    padding-bottom: 0rem;
    border-color: #c2c2c2;
    font-size: 1.9rem;

    border: none;
    border-right: 0px;
    border-top: 0px;
    border-left: 0px;
    border-bottom: 0px;

    &:focus {
        outline: none;
    }
`;

export const RightEditorPreviewBox = styled.div`
    @media (max-width: 1161px) {
        display: none;
    }

    /* padding-top: 10rem; */
    /* height: 70%; */
    width: 50%;
    position: fixed;
    z-index: 1;
    top: 4rem;
    overflow-x: hidden;
    padding-top: 20px;
    right: 0;
    background-color: rgb(255, 255, 255);
    padding: 0.375rem 0.75rem;
`;

export const StyledPreviewTitle = styled.h1`
    font-size: 2.5em;
    margin-bottom: 4rem;
    font-weight: 800;
`;

export const RightEditorPreviewContents = styled.h1`
    font-size: 2.5em;
    margin-bottom: 4rem;
    font-weight: 800;
`;
