import React from 'react';
import * as HeaderStyleComponent from "styles/Header";
import * as StyledIcons from 'styles/StyledIcons';

export default function HeaderComponent() {
    return (
        <>
            <HeaderStyleComponent.Header>
                <HeaderStyleComponent.BlogName><HeaderStyleComponent.BlogNameLink to="/">SungMin's Blog</HeaderStyleComponent.BlogNameLink></HeaderStyleComponent.BlogName>
                <HeaderStyleComponent.Nav>
                    <HeaderStyleComponent.NavbarToggler type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
                        <HeaderStyleComponent.NavbarTogglerIcon></HeaderStyleComponent.NavbarTogglerIcon>
                    </HeaderStyleComponent.NavbarToggler>

                    <HeaderStyleComponent.NavbarCollapse>
                        <HeaderStyleComponent.ProfileSection>
                            <HeaderStyleComponent.ProfileImage src="/assets/images/main_php.svg"/>

                            <HeaderStyleComponent.Bio>Hi, my name is Anthony Doe. Briefly introduce yourself here. You can also provide a link to the about page.<br /><HeaderStyleComponent.BioLink to="/">Find out more about me</HeaderStyleComponent.BioLink></HeaderStyleComponent.Bio>
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
                                <HeaderStyleComponent.NavItemLink to={process.env.PUBLIC_URL + "/about"}>
                                    <StyledIcons.AboutIcon /> About Me
                                </HeaderStyleComponent.NavItemLink>
                            </HeaderStyleComponent.NavItem>
                            <HeaderStyleComponent.NavItem>
                                <HeaderStyleComponent.NavItemLink to={process.env.PUBLIC_URL + "/admin/write"}>
                                    <StyledIcons.AboutIcon /> Write
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