import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface headerLeftMenuInterface {
    leftMenuView: boolean;
}

interface headerNavItemLinkInterface {
    activeState: boolean;
}

export const Header = styled.header`
    @media (max-width: 991.98px) {
        position: static;
        width: inherit;
        height: auto;
    }

    display: block;
    text-align: center !important;
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    width: 280px;
    background: #5469c9;
    color: #fff;
`;

export const BlogName = styled.h1`
    @media (max-width: 991.98px) {
        width: 100%;
        position: absolute;
        left: 0;
        top: 1.2rem;
    }

    @media (min-width: 992px) {
        padding-top: 1.5rem !important;
    }

    text-align: center !important;
    margin-top: 0;
    line-height: 1.2;
    margin-bottom: 0 !important;
    font-weight: bold;
    font-size: 1.5rem;
    color: #fff;
`;

export const BlogNameLink = styled(Link)`
    text-align: center !important;
    line-height: 1.2;
    font-weight: bold;
    font-size: 1.5rem;
    text-decoration: none;
    background-color: transparent;
    color: #fff;
`;

export const Nav = styled.nav`
    @media (max-width: 991.98px) {
        padding: 1rem;
    }

    text-align: center !important;
    color: #fff;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 1rem;
`;

export const NavbarToggler = styled.button`
    @media (min-width: 992px) {
        display: none;
    }

    margin: 0;
    font-family: inherit;
    overflow: visible;
    text-transform: none;
    -webkit-appearance: button;
    font-size: 1.25rem;
    line-height: 1;
    background-color: transparent;
    cursor: pointer;
    color: rgba(255, 255, 255, 0.5);
    border-radius: 2px;
    opacity: 0.8;
    border: 1px solid rgba(255, 255, 255, 0.8);
    padding: 0.25rem 0.6rem;
`;

export const NavbarTogglerIcon = styled.span`
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    font-family: inherit;
    text-transform: none;
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

export const NavbarCollapse = styled.div<headerLeftMenuInterface>`
    @media (min-width: 992px) {
        display: flex !important;
        flex-basis: auto;
    }

    @media (max-width: 991.98px) {
        display: ${props => {
            if (props.leftMenuView === true) {
                return 'block';
            } else {
                return 'none';
            }
        }};
    }

    text-align: center !important;
    color: #fff;
    flex-basis: 100%;
    flex-grow: 1;
    align-items: center;
    flex-direction: column !important;
`;

export const ProfileSection = styled.div`
    @media (min-width: 992px) {
        padding-top: 0 !important;
    }

    text-align: center !important;
    color: #fff;
    padding-top: 1rem !important;
`;

export const ProfileImage = styled.img`
    text-align: center !important;
    color: #fff;
    vertical-align: middle;
    border-style: none;
    border-radius: 50% !important;
    margin-bottom: 1rem !important;
    margin-right: auto !important;
    margin-left: auto !important;
    max-width: 160px;
`;

export const Bio = styled.div`
    text-align: center !important;
    color: #fff;
    margin-bottom: 1rem !important;
    font-size: 0.875rem;
`;

export const BioLink = styled(Link)`
    text-align: center !important;
    font-size: 0.875rem;
    background-color: transparent;
    color: #fff;
    text-decoration: underline;
`;
export const SocialList = styled.ul`
    text-align: center !important;
    color: #fff;
    margin-top: 0;
    margin-bottom: 1rem;
    padding-left: 0;
    list-style: none;
    padding-top: 1rem !important;
    padding-bottom: 1rem !important;
    margin-right: auto !important;
    margin-left: auto !important;
`;

export const SocialListHr = styled.hr`
    color: #fff;
    box-sizing: content-box;
    height: 0;
    overflow: visible;
`;

export const ListInlineItem = styled.li`
    color: #fff;
    list-style: none;
    display: inline-block;
    margin-right: 0.5rem;
`;

export const SocialListLink = styled.div`
    cursor: pointer;
    list-style: none;
    color: #5469c9;
    text-decoration: none;
    width: 32px;
    height: 32px;
    padding-top: 1px;
    display: inline-block;
    text-align: center;
    border-radius: 50%;
    transition: all 0.4s ease-in-out;
    background-color: #fff;
`;

export const NavbarNav = styled.ul`
    color: #fff;
    margin-top: 0;
    display: flex;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
    flex-direction: column !important;
    text-align: left !important;
`;

export const NavItem = styled.li`
    color: #fff;
    list-style: none;
    font-weight: bold;
`;

export const NavItemLink = styled.div<headerNavItemLinkInterface>`
    cursor: pointer;
    list-style: none;
    font-weight: bold;
    text-decoration: none;
    background-color: transparent;
    display: block;
    padding: 0.5rem 1rem;
    padding-right: 0.5rem;
    padding-left: 0.5rem;
    color: ${props => {
        if (props.activeState === true) {
            return 'rgba(0, 0, 0, 0.5)';
        } else {
            return 'rgba(255, 255, 255, 0.8)';
        }
    }};
`;
export const NavItemLinkTitle = styled.span`
    list-style: none;
    font-weight: bold;
    color: rgba(0, 0, 0, 0.5);
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
`;

export const GetInTouch = styled.div`
    text-align: center !important;
    color: #fff;
    margin-top: 1rem !important;
    margin-bottom: 1rem !important;
`;
export const GetInTouchLink = styled(Link)`
    @media (max-width: 991.98px) {
        width: 100%;
    }

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
`;

export const CopyrightBox = styled.div`
    box-sizing: border-box;
    display: block;
    padding-top: 0.5rem !important;
    padding-bottom: 0.5rem !important;
    text-align: center !important;
    background: #223142 !important;
    color: rgba(255, 255, 255, 0.7);
`;

export const Copyright = styled.small`
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    text-align: center !important;
    color: rgba(255, 255, 255, 0.7);
    box-sizing: border-box;
    font-size: 80%;
    font-weight: 400;
`;

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
`;
