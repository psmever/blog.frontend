import styled from 'styled-components';

export const Default = styled.div``;

export const Wrapper = styled.div`
    flex-direction: column;
    margin: 1rem auto;
    box-shadow: 0 3px 7px -1px rgba(0, 0, 0, 0.1);
    margin-bottom: 1.6%;
    background: #fff;
    line-height: 1.4;
    font-family: sans-serif;
    border-radius: 5px;
    overflow: hidden;
`;

export const ProfileBox = styled.div`
    margin-top: 2.2em;
    position: relative;

    &:after {
        width: 100%;
        height: 1px;
        content: ' ';
        display: block;
        margin-top: 1.3em;
        background: #e9eff6;
    }
`;

export const Thumbnail = styled.img`
    width: 124px;
    height: 124px;
    display: flex;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 1.5em;
    border-radius: 80%;
    box-shadow: 0 13px 26px rgba(#000, 0.2), 0 3px 6px rgba(#000, 0.2);
`;

export const Name = styled.h3`
    color: #2d354a;
    font-size: 24px;
    font-weight: 600;
    text-align: center;
`;

export const Title = styled.p`
    color: #7c8097;
    font-size: 0.75em;
    font-weight: 300;
    text-align: center;
    padding-top: 0.5em;
    padding-bottom: 0.7em;
    letter-spacing: 1.5px;
    text-transform: uppercase;
`;

export const Description = styled.p`
    color: #080911;
    font-size: 14px;
    font-weight: 300;
    text-align: center;
    margin-bottom: 1.3em;
`;

export const ContectButton = styled.button`
    color: #fff;
    width: 130px;
    height: 42px;
    outline: none;
    border: none;
    display: block;
    cursor: pointer;
    font-weight: 300;
    margin-left: auto;
    margin-right: auto;
    border-radius: 70px;
    box-shadow: 0 13px 26px rgba(#000, 0.16), 0 3px 6px rgba(#000, 0.16);
    background: linear-gradient(45deg, rgba(87, 29, 146, 1) 0%, rgba(172, 25, 102, 1) 100%);
`;

export const MyIconBox = styled.div`
    display: flex;
    margin-top: 1.2em;
    justify-content: space-between;
`;

export const MyIcon = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`;

export const MyIconButton = styled.button`
    color: #fff;
    width: 60px;
    height: 60px;
    font-size: 28px;
    line-height: 60px;
    text-align: center;
    /* border-radius: 30px; */
    box-shadow: 0 13px 26px rgba(#000, 0.2), 0 3px 6px rgba(#000, 0.2);
`;

export const VersionBox = styled.div`
    flex-direction: column;
    margin: 1rem auto;
    box-shadow: 0 3px 7px -1px rgba(0, 0, 0, 0.1);
    margin-bottom: 1.6%;
    background: #fff;
    line-height: 1.4;
    font-family: sans-serif;
    border-radius: 5px;
    overflow: hidden;
    text-align: center;
    position: relative;

    &:after {
        width: 100%;
        height: 1px;
        content: ' ';
        display: block;
        margin-top: 1.3em;
        background: #e9eff6;
    }
`;
