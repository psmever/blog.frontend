import React from 'react';
import * as HeaderStyleComponent from "styles/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function HeaderComponent() {
    return (
        <>
            <HeaderStyleComponent.Header>
                <HeaderStyleComponent.BlogName><HeaderStyleComponent.BlogNameLink to="/">SungMin's Blog</HeaderStyleComponent.BlogNameLink></HeaderStyleComponent.BlogName>
                <HeaderStyleComponent.Nav>
                    <HeaderStyleComponent.NavbarToggler>
                        <HeaderStyleComponent.NavbarTogglerIcon></HeaderStyleComponent.NavbarTogglerIcon>
                    </HeaderStyleComponent.NavbarToggler>

                    <HeaderStyleComponent.NavbarCollapse>
                        <HeaderStyleComponent.ProfileSection>
                            <HeaderStyleComponent.ProfileImage src="/assets/images/main_php.svg"/>

                            <HeaderStyleComponent.Bio>Hi, my name is Anthony Doe. Briefly introduce yourself here. You can also provide a link to the about page.<br /><HeaderStyleComponent.BioLink to="/">Find out more about me</HeaderStyleComponent.BioLink></HeaderStyleComponent.Bio>
                            <HeaderStyleComponent.SocialList>
                                <HeaderStyleComponent.ListInlineItem>
                                    <HeaderStyleComponent.SocialListLink to="/">
                                        <FontAwesomeIcon icon={["fab", "facebook"]} size="lg"/>
                                    </HeaderStyleComponent.SocialListLink>
                                </HeaderStyleComponent.ListInlineItem>
                                <HeaderStyleComponent.ListInlineItem>
                                    <HeaderStyleComponent.SocialListLink to="/">
                                        <FontAwesomeIcon icon={["fab", "github"]} size="lg"/>
                                    </HeaderStyleComponent.SocialListLink>
                                </HeaderStyleComponent.ListInlineItem>
                            </HeaderStyleComponent.SocialList>
                            <hr />
                        </HeaderStyleComponent.ProfileSection>

                        <HeaderStyleComponent.NavbarNav>
                            <HeaderStyleComponent.NavItem>
                                <HeaderStyleComponent.NavItemLinkActive to={process.env.PUBLIC_URL + "/"}>
                                    <i className="fas fa-home fa-fw mr-2"></i>Blog Home <HeaderStyleComponent.NavItemLinkTitle>(current)</HeaderStyleComponent.NavItemLinkTitle>
                                </HeaderStyleComponent.NavItemLinkActive>
                            </HeaderStyleComponent.NavItem>
                            <HeaderStyleComponent.NavItem>
                                <HeaderStyleComponent.NavItemLink to="/">
                                    <i className="fas fa-bookmark fa-fw mr-2"></i>Blog Post
                                </HeaderStyleComponent.NavItemLink>
                            </HeaderStyleComponent.NavItem>
                            <HeaderStyleComponent.NavItem>
                                <HeaderStyleComponent.NavItemLink to={process.env.PUBLIC_URL + "/about"}>
                                    <i className="fas fa-user fa-fw mr-2"></i>About Me
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