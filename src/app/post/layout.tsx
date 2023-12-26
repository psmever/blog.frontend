'use client';

import React from 'react';
import { PostLayoutStyle } from '@/Style/common-styles';
import { PostIcon, DailyIcon, BlogIcon, LoginIcon, HambergerIcon, LogoutIcon, PostWriteIcon } from '@/Icon';
import { UniImage } from '@/Element';
import { useRouter } from 'next/navigation';
import lodash from 'lodash';
import { getAccessToken } from '@/Helper';

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
    const loginCheck = !lodash.isEmpty(getAccessToken());
    const router = useRouter();

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
                                {loginCheck ? (
                                    <>
                                        <MenuButtonItem onClick={() => router.push('/manage/post/create')}>
                                            <PostWriteIcon />
                                            글등록
                                        </MenuButtonItem>

                                        <MenuButtonItem onClick={() => router.push('/manage/logout')}>
                                            <LogoutIcon />
                                            로그아웃
                                        </MenuButtonItem>
                                    </>
                                ) : (
                                    <MenuButtonItem onClick={() => router.push('/manage/login')}>
                                        <LoginIcon />
                                        로그인
                                    </MenuButtonItem>
                                )}
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
