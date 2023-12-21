'use client';
// TODO: use client 없이 에러 수정 필요

import React from 'react';
import { PostLayoutStyle } from '@/Style';
import { PostIcon, DailyIcon, BlogIcon, LoginIcon, HambergerIcon } from '@/Icon';
import { UniImage } from '@/Element';

const {
    MainContainer,
    Header,
    NavContainer,
    NavWapper,
    LogoDivision,
    LogoWapper,
    LogoText,
    MenuDivision,
    HambergerButtonArea,
    HambergerButton,
    MenuButtonArea,
    MenuButtonItem,
    SectionWapper,
    FooterWapper,
    FooterArea,
    FooterTextItem,
    FooterUnderLine
} = PostLayoutStyle;

export default function PostLayout({ children }: { children: React.ReactNode }) {
    return (
        <MainContainer>
            <Header>
                <NavContainer>
                    <NavWapper>
                        <LogoDivision>
                            <LogoWapper>
                                <UniImage ImageSrc={`./logo.png`} Width={32} Height={32} AltString="NicePage" />

                                <LogoText>NicePage</LogoText>
                            </LogoWapper>
                        </LogoDivision>
                        <MenuDivision>
                            <HambergerButtonArea>
                                <HambergerButton type="button">
                                    <HambergerIcon />
                                </HambergerButton>
                            </HambergerButtonArea>
                            <MenuButtonArea>
                                <MenuButtonItem>
                                    <PostIcon />
                                    포스트
                                </MenuButtonItem>
                                <MenuButtonItem>
                                    <DailyIcon />
                                    일상
                                </MenuButtonItem>
                                <MenuButtonItem>
                                    <BlogIcon />
                                    블로그
                                </MenuButtonItem>
                                <MenuButtonItem>
                                    <LoginIcon />
                                    로그인
                                </MenuButtonItem>
                            </MenuButtonArea>
                        </MenuDivision>
                    </NavWapper>
                </NavContainer>
            </Header>

            <SectionWapper>{children}</SectionWapper>

            <FooterWapper>
                <FooterArea>
                    <FooterTextItem>© 2023</FooterTextItem>
                    <FooterTextItem>
                        <FooterUnderLine>NicePage™.</FooterUnderLine>
                    </FooterTextItem>
                    <FooterTextItem>All Rights Reserved.</FooterTextItem>
                </FooterArea>
            </FooterWapper>
        </MainContainer>
    );
}
