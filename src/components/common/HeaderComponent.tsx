import React from 'react';
import * as HeaderStyleComponent from "styles/Header";
import * as StyledIcons from 'styles/StyledIcons';

export default function HeaderComponent() {
    return (
        <>
            <HeaderStyleComponent.Header>
                <HeaderStyleComponent.BlogName><HeaderStyleComponent.BlogNameLink to="/">psmever's Blog</HeaderStyleComponent.BlogNameLink></HeaderStyleComponent.BlogName>
                <HeaderStyleComponent.Nav>
                    <HeaderStyleComponent.NavbarToggler type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
                        <HeaderStyleComponent.NavbarTogglerIcon></HeaderStyleComponent.NavbarTogglerIcon>
                    </HeaderStyleComponent.NavbarToggler>

                    <HeaderStyleComponent.NavbarCollapse>
                        <HeaderStyleComponent.ProfileSection>
                            <HeaderStyleComponent.ProfileImage src="/assets/images/main_php.svg"/>

                            <HeaderStyleComponent.Bio>안녕 하세요.<br />< br/>PHP 를 좋아해서 PHP 개발자를 하고 있는< br/>< br/> 박성민 입니다.< br/>< br/> 즐거운 하루 보내세요 ^^;;<br /></HeaderStyleComponent.Bio>
                            <HeaderStyleComponent.SocialList>
                                <HeaderStyleComponent.ListInlineItem>
                                    <HeaderStyleComponent.SocialListLink to="/">
                                        <StyledIcons.FacebookIcon/>
                                    </HeaderStyleComponent.SocialListLink>
                                </HeaderStyleComponent.ListInlineItem>
                                <HeaderStyleComponent.ListInlineItem>
                                    <HeaderStyleComponent.SocialListLink to="/">
                                        <StyledIcons.GithubIcon/>
                                    </HeaderStyleComponent.SocialListLink>
                                </HeaderStyleComponent.ListInlineItem>
                            </HeaderStyleComponent.SocialList>
                            <HeaderStyleComponent.SocialListHr />
                        </HeaderStyleComponent.ProfileSection>

                        <HeaderStyleComponent.NavbarNav>
                            <HeaderStyleComponent.NavItem>
                                <HeaderStyleComponent.NavItemLinkActive to={process.env.PUBLIC_URL + "/"}>
                                    <StyledIcons.HomeIcon /> Blog Home <HeaderStyleComponent.NavItemLinkTitle>(current)</HeaderStyleComponent.NavItemLinkTitle>
                                </HeaderStyleComponent.NavItemLinkActive>
                            </HeaderStyleComponent.NavItem>
                            <HeaderStyleComponent.NavItem>
                                <HeaderStyleComponent.NavItemLink to="/">
                                    <StyledIcons.PostIcon /> Blog Post
                                </HeaderStyleComponent.NavItemLink>
                            </HeaderStyleComponent.NavItem>
                            <HeaderStyleComponent.NavItem>
                                <HeaderStyleComponent.NavItemLink to={process.env.PUBLIC_URL + "/pages/about"}>
                                    <StyledIcons.AboutIcon /> About Me
                                </HeaderStyleComponent.NavItemLink>
                            </HeaderStyleComponent.NavItem>
                            <HeaderStyleComponent.NavItem>
                                <HeaderStyleComponent.NavItemLink to={process.env.PUBLIC_URL + "/admin/write"}>
                                    <StyledIcons.AboutIcon /> Write
                                </HeaderStyleComponent.NavItemLink>
                            </HeaderStyleComponent.NavItem>
                            <HeaderStyleComponent.NavItem>
                                <HeaderStyleComponent.NavItemLink to={process.env.PUBLIC_URL + "/admin/login"}>
                                    <StyledIcons.SuperuserIcon /> Login
                                </HeaderStyleComponent.NavItemLink>
                            </HeaderStyleComponent.NavItem>
                        </HeaderStyleComponent.NavbarNav>

                        <HeaderStyleComponent.GetInTouch>
                            <HeaderStyleComponent.GetInTouchLink to={process.env.PUBLIC_URL + "/"}>Get in Touch</HeaderStyleComponent.GetInTouchLink>
                        </HeaderStyleComponent.GetInTouch>

                    </HeaderStyleComponent.NavbarCollapse>
                </HeaderStyleComponent.Nav>
            </HeaderStyleComponent.Header>
        </>
    );
}