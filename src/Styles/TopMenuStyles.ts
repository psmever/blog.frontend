import styled from 'styled-components';
import { LayouTypes } from 'CommonTypes';

export interface MenuActive {
    Active: 'true' | 'false';
}

export const Default = styled.div``;

export const Navi = styled.nav<LayouTypes>`
    background: ${({ layoutColor }) => {
        if (layoutColor === 'main') {
            return `#5eaeff`;
        } else if (layoutColor === 'view') {
            return `#fff`;
        }
    }};

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

    @media screen and (max-width: 952px) {
        display: block;
    }
`;

export const MenuIcon = styled.div`
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 1.25rem;
    line-height: 1;
    cursor: pointer;
    color: rgba(255, 255, 255, 0.5);
    display: inline-block;
    width: 1.5em;
    height: 1.5em;
    vertical-align: middle;
    content: '';
    background: no-repeat center center;
    background-size: 100% 100%;
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(256,256,256, 1)' stroke-width='3' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");
`;

export const LogoText = styled.label<LayouTypes>`
    color: ${({ layoutColor }) => {
        if (layoutColor === 'main') {
            return `white`;
        } else if (layoutColor === 'view') {
            return `#5eaeff`;
        }
    }};

    font-size: 35px;
    line-height: 80px;
    padding: 0 100px;
    font-weight: bold;
    cursor: pointer;

    @media screen and (max-width: 952px) {
        font-size: 30px;
        padding-left: 50px;
    }
`;

export const MenuUList = styled.ul`
    float: right;
    margin-right: 20px;
    line-height: 80px;
    margin: 0 5px;

    @media screen and (max-width: 952px) {
        /* left: 0; */ // 메뉴 티어 나옴.
        position: fixed;
        width: 100%;
        height: 100vh;
        background: #2c3e50;
        top: 80px;
        left: -100%;
        text-align: center;
        transition: all 0.5s;
        margin: 0 0;
    }
`;

export const MenuElement = styled.li`
    line-height: 1.2rem;
    margin: 0 5px;

    @media screen and (max-width: 858px) {
        /* margin: 50px 0; */
        /* line-height: 30px; */
    }

    @media screen and (min-width: 952px) {
        display: inline-block;
    }
`;

export const MenuLink = styled.div<LayouTypes>`
    color: ${({ layoutColor }) => {
        if (layoutColor === 'main') {
            return `white`;
        } else if (layoutColor === 'view') {
            return `#5eaeff`;
        }
    }};

    font-size: 17px;
    padding: 7px 13px;
    border-radius: 3px;
    text-transform: uppercase;
    cursor: pointer;
    background: ${({ layoutColor, menuActive }) => {
        if (layoutColor === 'main') {
            if (menuActive === 'true') {
                return `#1b9bff`;
            }
        } else if (layoutColor === 'view') {
            if (menuActive === 'true') {
                return `#f1f1f1`;
            }
        }
    }};

    /* &:active */
    &:hover {
        /* background: #1b9bff; */
        background: ${({ layoutColor }) => {
            if (layoutColor === 'main') {
                return `#1b9bff`;
            } else if (layoutColor === 'view') {
                return `#f1f1f1`;
            }
        }};
        transition: 0.5s;
    }

    @media screen and (max-width: 952px) {
        font-size: 16px;
    }

    @media screen and (max-width: 858px) {
        font-size: 20px;
    }
`;
