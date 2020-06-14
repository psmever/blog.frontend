import styled from 'styled-components';
import { Link } from "react-router-dom";

export const Header = styled.header`
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    display: block;
    text-align: center !important;
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    width: 280px;
    background: #5469C9;
    color: #fff;
`

export const BlogName = styled.h1`
    -webkit-font-smoothing: antialiased;
    text-align: center !important;
    box-sizing: border-box;
    margin-top: 0;
    line-height: 1.2;
    margin-bottom: 0 !important;
    padding-top: 1.5rem !important;
    font-weight: bold;
    font-size: 1.5rem;
    color: #fff;
`

export const BlogNameLink = styled(Link)`
    -webkit-font-smoothing: antialiased;
    text-align: center !important;
    line-height: 1.2;
    font-weight: bold;
    font-size: 1.5rem;
    box-sizing: border-box;
    text-decoration: none;
    background-color: transparent;
    color: #fff;
`

export const Nav = styled.nav`
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    text-align: center !important;
    color: #fff;
    box-sizing: border-box;
    position: relative;
    display: flex;
    align-items: center;
    flex-flow: row nowrap;
    justify-content: flex-start;
    padding: 2rem 1rem;
`

export const NavbarToggler = styled.button`
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    margin: 0;
    font-family: inherit;
    overflow: visible;
    text-transform: none;
    -webkit-appearance: button;
    font-size: 1.25rem;
    line-height: 1;
    background-color: transparent;
    cursor: pointer;
    display: none;
    color: rgba(255, 255, 255, 0.5);
    border-radius: 2px;
    opacity: 0.8;
    border: 1px solid rgba(255, 255, 255, 0.8);
    padding: 0.25rem 0.6rem;
`

export const NavbarTogglerIcon = styled.span`
    -webkit-font-smoothing: antialiased;
    font-family: inherit;
    text-transform: none;
    font-size: 1.25rem;
    line-height: 1;
    cursor: pointer;
    color: rgba(255, 255, 255, 0.5);
    box-sizing: border-box;
    display: inline-block;
    width: 1.5em;
    height: 1.5em;
    vertical-align: middle;
    content: "";
    background: no-repeat center center;
    background-size: 100% 100%;
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(256,256,256, 1)' stroke-width='3' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");
`

export const NavbarCollapse = styled.div`
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    text-align: center !important;
    color: #fff;
    box-sizing: border-box;
    flex-grow: 1;
    align-items: center;
    flex-direction: column !important;
    display: flex !important;
    flex-basis: auto;
`

export const ProfileSection = styled.div`
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    text-align: center !important;
    color: #fff;
    box-sizing: border-box;
    padding-top: 0 !important;
`

export const ProfileImage = styled.img`
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    text-align: center !important;
    color: #fff;
    box-sizing: border-box;
    vertical-align: middle;
    border-style: none;
    border-radius: 50% !important;
    margin-bottom: 1rem !important;
    margin-right: auto !important;
    margin-left: auto !important;
    max-width: 160px;
`

export const Bio = styled.div`
    font-weight: 400;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    text-align: center !important;
    color: #fff;
    box-sizing: border-box;
    margin-bottom: 1rem !important;
    font-size: 0.875rem;
`

export const BioLink = styled(Link)`
    font-weight: 400;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    text-align: center !important;
    font-size: 0.875rem;
    box-sizing: border-box;
    background-color: transparent;
    color: #fff;
    text-decoration: underline;
`
export const SocialList = styled.ul`
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    text-align: center !important;
    color: #fff;
    box-sizing: border-box;
    margin-top: 0;
    margin-bottom: 1rem;
    padding-left: 0;
    list-style: none;
    padding-top: 1rem !important;
    padding-bottom: 1rem !important;
    margin-right: auto !important;
    margin-left: auto !important;
`

export const ListInlineItem = styled.li`
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    color: #fff;
    list-style: none;
    box-sizing: border-box;
    display: inline-block;
    margin-right: 0.5rem;
`

export const SocialListLink = styled(Link)`
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    list-style: none;
    box-sizing: border-box;
    color: #5469C9;
    text-decoration: none;
    width: 32px;
    height: 32px;
    padding-top: 5px;
    display: inline-block;
    text-align: center;
    border-radius: 50%;
    transition: all 0.4s ease-in-out;
    background-color: #fff;
`

export const NavbarNav = styled.ul`
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    color: #fff;
    box-sizing: border-box;
    margin-top: 0;
    display: flex;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
    flex-direction: column !important;
    text-align: left !important;
`

export const NavItem = styled.li`
    font-size: 1rem;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    color: #fff;
    list-style: none;
    box-sizing: border-box;
    font-weight: bold;
`

export const NavItemLinkActive = styled(Link)`
    font-size: 1rem;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    list-style: none;
    font-weight: bold;
    box-sizing: border-box;
    text-decoration: none;
    background-color: transparent;
    display: block;
    padding: 0.5rem 1rem;
    padding-right: 0.5rem;
    padding-left: 0.5rem;
    color: rgba(0, 0, 0, 0.5);
`

export const NavItemLink = styled(Link)`
    font-size: 1rem;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    list-style: none;
    font-weight: bold;
    box-sizing: border-box;
    text-decoration: none;
    background-color: transparent;
    display: block;
    padding: 0.5rem 1rem;
    padding-right: 0.5rem;
    padding-left: 0.5rem;
    color: rgba(255, 255, 255, 0.8);

`

export const NavItemLinkTitle = styled.span`
    font-size: 1rem;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    list-style: none;
    font-weight: bold;
    color: rgba(0, 0, 0, 0.5);
    box-sizing: border-box;
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
`

export const GetInTouch = styled.div`
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    text-align: center !important;
    color: #fff;
    box-sizing: border-box;
    margin-top: 1rem !important;
    margin-bottom: 1rem !important;
`
export const GetInTouchLink = styled(Link)`
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    text-decoration: none;
    display: inline-block;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    user-select: none;
    border: 1px solid transparent;
    line-height: 1.5;
    border-radius: 0.25rem;
    font-weight: bold;
    padding: 0.375rem 1rem;
    height: 2.75rem;
    transition: all 0.4s ease-in-out;
    color: #fff;
    background: rgba(0, 0, 0, 0.3);
    border-color: transparent;
    font-size: 1rem;
    padding-top: 0.5rem;
`