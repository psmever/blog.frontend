import styled from 'styled-components';

export const Default = styled.div``;

export const Navi = styled.nav`
    background: #0082e6;
    height: 80px;
    width: 100%;
`;

export const NaviInput = styled.input`
    display: none;
`;

export const MenuLabel = styled.label`
    font-size: 30px;
    color: white;
    float: right;
    line-height: 80px;
    margin-right: 40px;
    cursor: pointer;
    display: none;

    @media (max-width: 858px) {
        display: block;
    }
`;

export const LogoText = styled.label`
    color: white;
    font-size: 35px;
    line-height: 80px;
    padding: 0 100px;
    font-weight: bold;

    @media (max-width: 952px) {
        font-size: 30px;
        padding-left: 50px;
    }
`;

export const MenuUList = styled.ul`
    float: right;
    margin-right: 20px;

    @media (max-width: 858px) {
        position: fixed;
        width: 100%;
        height: 100vh;
        background: #2c3e50;
        top: 80px;
        left: -100%;
        text-align: center;
        transition: all 0.5s;
    }
`;

export const MenuElement = styled.li`
    display: inline-block;
    line-height: 80px;
    margin: 0 5px;

    @media (max-width: 858px) {
        display: block;
        margin: 50px 0;
        line-height: 30px;
    }
`;

export const MenuLink = styled.a`
    color: white;
    font-size: 17px;
    padding: 7px 13px;
    border-radius: 3px;
    text-transform: uppercase;

    /* &:active */
    &:hover {
        background: #1b9bff;
        transition: 0.5s;
    }

    @media (max-width: 858px) {
        &:hover {
            background: none;
            color: #0082e6;
        }
    }
`;
