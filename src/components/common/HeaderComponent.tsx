import React, { useEffect } from 'react';
import * as HeaderStyleComponent from "styles/Header";
import * as StyledIcons from 'styles/StyledIcons';
import * as Helper from 'lib/Helper';

export default function HeaderComponent() {

    const localstorage = Helper.getLocalToken();

    const handleClickGithubIcon = () => {
        console.debug('handleClickGithubIcon');
        // window.open('https://github.com/psmever','_blank','height=250,width=250');
        window.open('https://github.com/psmever', '_blank', 'noopener,noreferrer');
    }

    const handleClickSocialicon = () => {
        console.debug('handleClickGithubIcon');
        window.open('https://www.facebook.com/park.sungmin.925', '_blank', 'noopener,noreferrer');
    }

    const handleClickNavbarMiniButton = () => {
        console.debug('handleClickNavbarMiniButton');
    }

    return (
        <>
            <HeaderStyleComponent.Header>
                <HeaderStyleComponent.BlogName><HeaderStyleComponent.BlogNameLink to="/">psmever's Blog</HeaderStyleComponent.BlogNameLink></HeaderStyleComponent.BlogName>
                <HeaderStyleComponent.Nav>
                    <HeaderStyleComponent.NavbarToggler type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation" onClick={handleClickNavbarMiniButton}>
                        <HeaderStyleComponent.NavbarTogglerIcon></HeaderStyleComponent.NavbarTogglerIcon>
                    </HeaderStyleComponent.NavbarToggler>

                    <HeaderStyleComponent.NavbarCollapse>
                        <HeaderStyleComponent.ProfileSection>
                            <HeaderStyleComponent.ProfileImage src="/assets/images/main_php.svg"/>

                            <HeaderStyleComponent.Bio>안녕 하세요.<br />< br/>PHP 를 좋아해서 PHP 개발을 하고 있는< br/>< br/> 박성민 입니다.< br/>< br/> 즐거운 하루 보내세요 ^^;;<br /></HeaderStyleComponent.Bio>
                            <HeaderStyleComponent.SocialList>
                                <HeaderStyleComponent.ListInlineItem>
                                    <HeaderStyleComponent.SocialListLink onClick={handleClickSocialicon}>
                                        <StyledIcons.FacebookIcon/>
                                    </HeaderStyleComponent.SocialListLink>
                                </HeaderStyleComponent.ListInlineItem>
                                <HeaderStyleComponent.ListInlineItem>
                                    <HeaderStyleComponent.SocialListLink onClick={handleClickGithubIcon}>
                                        <StyledIcons.GithubIcon/>
                                    </HeaderStyleComponent.SocialListLink>
                                </HeaderStyleComponent.ListInlineItem>
                            </HeaderStyleComponent.SocialList>
                            <HeaderStyleComponent.SocialListHr />
                        </HeaderStyleComponent.ProfileSection>

                        <HeaderStyleComponent.NavbarNav>
                            <HeaderStyleComponent.NavItem>
                                <HeaderStyleComponent.NavItemLink to={process.env.PUBLIC_URL + "/pages/about"}>
                                    <StyledIcons.AboutIcon /> About Me
                                </HeaderStyleComponent.NavItemLink>
                            </HeaderStyleComponent.NavItem>
                            <HeaderStyleComponent.NavItem>
                                <HeaderStyleComponent.NavItemLinkActive to={process.env.PUBLIC_URL + "/"}>
                                    <StyledIcons.HomeIcon /> Blog Home <HeaderStyleComponent.NavItemLinkTitle>(current)</HeaderStyleComponent.NavItemLinkTitle>
                                </HeaderStyleComponent.NavItemLinkActive>
                            </HeaderStyleComponent.NavItem>
                            {localstorage.login_state === true &&
                            <HeaderStyleComponent.NavItem>
                                <HeaderStyleComponent.NavItemLink to={process.env.PUBLIC_URL + "/admin/write"}>
                                    <StyledIcons.AboutIcon /> Write
                                </HeaderStyleComponent.NavItemLink>
                            </HeaderStyleComponent.NavItem>
                            }

                        </HeaderStyleComponent.NavbarNav>

                        <HeaderStyleComponent.GetInTouch>
                            {localstorage.login_state === true ?
                                <HeaderStyleComponent.GetInTouchLink to={process.env.PUBLIC_URL + "/admin/logout"}>로그아웃</HeaderStyleComponent.GetInTouchLink>

                                : <HeaderStyleComponent.GetInTouchLink to={process.env.PUBLIC_URL + "/admin/login"}>로그인</HeaderStyleComponent.GetInTouchLink>
                            }

                        </HeaderStyleComponent.GetInTouch>

                    </HeaderStyleComponent.NavbarCollapse>
                </HeaderStyleComponent.Nav>
            </HeaderStyleComponent.Header>
        </>
    );
}