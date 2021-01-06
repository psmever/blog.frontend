import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { HeartIcon } from 'styles/StyledIcons';
import {
    Header,
    BlogName,
    BlogNameLink,
    Nav,
    NavbarToggler,
    NavbarTogglerIcon,
    NavbarCollapse,
    ProfileSection,
    ProfileImage,
    Bio,
    SocialList,
    ListInlineItem,
    SocialListLink,
    SocialListHr,
    NavbarNav,
    NavItem,
    NavItemLink,
    NavItemLinkTitle,
    GetInTouch,
    GetInTouchLink,
    CopyrightBox,
    Copyright,
} from 'styles/Header';
import { FacebookIcon, GithubIcon, HomeIcon, AboutIcon } from 'styles/StyledIcons';
import * as Helper from 'lib/Helper';
import { useHistory } from 'react-router-dom';
import { RootState } from 'modules';

export default function HeaderComponent() {
    const nowPathname = useSelector((state: RootState) => state.router.location.pathname);
    const history = useHistory();
    const [leftMenuHide, setLeftMenuHide] = useState<boolean>(false);
    const localstorage = Helper.getLocalToken();

    // 왼쪽 깃헙 아이콘
    const handleClickGithubIcon = () => {
        window.open('https://github.com/psmever', '_blank', 'noopener,noreferrer');
    };

    // 왼쪽 페이스 북 아이콘.
    const handleClickSocialicon = () => {
        window.open('https://www.facebook.com/park.sungmin.925', '_blank', 'noopener,noreferrer');
    };

    // 어바웃 메뉴 클릭.
    const handleClickAboutMeLink = () => {
        history.push({
            pathname: process.env.PUBLIC_URL + `/pages/about`,
        });
    };

    // 홈 메뉴 클릭.
    const handleClickHomeLink = () => {
        history.push({
            pathname: process.env.PUBLIC_URL + `/`,
        });
    };

    // 글쓰기 메뉴 클릭.
    const handleClickWritePageLink = () => {
        history.push({
            pathname: process.env.PUBLIC_URL + `/admin/write`,
        });
    };

    // 상단 메뉴 버튼
    const handleClickNavbarMiniButton = () => {
        if (leftMenuHide === true) {
            setLeftMenuHide(false);
        } else {
            setLeftMenuHide(true);
        }
    };

    const handleClickTagLink = () => {
        history.push({
            pathname: process.env.PUBLIC_URL + `/pages/tags`,
        });
    };

    // 라우터 변경시 메뉴 닫기.
    useEffect(() => {
        setLeftMenuHide(false);
    }, [nowPathname]);

    return (
        <>
            <Header>
                <BlogName>
                    <BlogNameLink to="/">psmever's Blog</BlogNameLink>
                </BlogName>
                <Nav>
                    <NavbarToggler
                        type="button"
                        data-toggle="collapse"
                        data-target="#navigation"
                        aria-controls="navigation"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        onClick={handleClickNavbarMiniButton}
                    >
                        <NavbarTogglerIcon></NavbarTogglerIcon>
                    </NavbarToggler>

                    <NavbarCollapse leftMenuView={leftMenuHide}>
                        <ProfileSection>
                            <ProfileImage src={process.env.REACT_APP_MEDIA_URL + '/assets/blog/images/main_php.svg'} />

                            <Bio>
                                안녕 하세요.
                                <br />
                                <br />
                                PHP 를 좋아해서 PHP 개발을 하고 있는
                                <br />
                                <br /> 박성민 입니다.
                                <br />
                                <br /> 즐거운 하루 보내세요 ^^;;
                                <br />
                            </Bio>
                            <SocialList>
                                <ListInlineItem>
                                    <SocialListLink onClick={handleClickSocialicon}>
                                        <FacebookIcon />
                                    </SocialListLink>
                                </ListInlineItem>
                                <ListInlineItem>
                                    <SocialListLink onClick={handleClickGithubIcon}>
                                        <GithubIcon />
                                    </SocialListLink>
                                </ListInlineItem>
                            </SocialList>
                            <SocialListHr />
                        </ProfileSection>

                        <NavbarNav>
                            <NavItem>
                                <NavItemLink activeState={nowPathname === '/' && true} onClick={handleClickHomeLink}>
                                    <HomeIcon /> Home <NavItemLinkTitle>(current)</NavItemLinkTitle>
                                </NavItemLink>
                            </NavItem>
                            <NavItem>
                                <NavItemLink
                                    activeState={nowPathname === '/pages/tags' && true}
                                    onClick={handleClickTagLink}
                                >
                                    <AboutIcon /> Tag
                                </NavItemLink>
                            </NavItem>

                            <NavItem>
                                <NavItemLink
                                    activeState={nowPathname === '/pages/about' && true}
                                    onClick={handleClickAboutMeLink}
                                >
                                    <AboutIcon /> 민군은
                                </NavItemLink>
                            </NavItem>

                            {localstorage.login_state === true && (
                                <NavItem>
                                    <NavItemLink activeState={false} onClick={handleClickWritePageLink}>
                                        <AboutIcon /> Write
                                    </NavItemLink>
                                </NavItem>
                            )}
                        </NavbarNav>

                        <GetInTouch>
                            {localstorage.login_state === true ? (
                                <GetInTouchLink to={process.env.PUBLIC_URL + '/admin/logout'}>로그아웃</GetInTouchLink>
                            ) : (
                                <GetInTouchLink to={process.env.PUBLIC_URL + '/admin/login'}>로그인</GetInTouchLink>
                            )}
                        </GetInTouch>
                    </NavbarCollapse>
                </Nav>
                <CopyrightBox>
                    {/* <!-- */}
                    {/* This template is free as long as you keep the footer attribution link. If you'd like to use the template without the attribution link, you can buy the commercial license via our website: themes.3rdwavemedia.com Thank you for your support. :) */}
                    {/* --> */}
                    <Copyright>
                        <HeartIcon /> Made in <Link to="/">@psmever</Link> <br /> Version:{' '}
                        {process.env.REACT_APP_VERSION}
                    </Copyright>
                </CopyrightBox>
            </Header>
        </>
    );
}
