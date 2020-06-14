import styled from 'styled-components';
import { Link } from "react-router-dom";

export const Footer = styled.footer`
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    display: block;
    padding-top: 0.5rem !important;
    padding-bottom: 0.5rem !important;
    text-align: center !important;
    background: #223142 !important;
    color: rgba(255, 255, 255, 0.7);
`
export const Copyright = styled.small`
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    text-align: center !important;
    color: rgba(255, 255, 255, 0.7);
    box-sizing: border-box;
    font-size: 80%;
    font-weight: 400;
`

export const CopyrightLink = styled(Link)`
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    text-align: center !important;
    font-size: 80%;
    font-weight: 400;
    box-sizing: border-box;
    text-decoration: none;
    background-color: transparent;
    color: #fff;
`