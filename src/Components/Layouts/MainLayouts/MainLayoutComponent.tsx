import React from 'react';
import { MainTopMenu, MainLeftSidebar, MainRightSidebar, MainFooter } from '@MainLayouts';
import { Warp, Header, Container, LeftSideBox, ContentBox, RightSideBox, FooterBox } from '@Style/MainLayoutStyles';

export default function MainLayoutComponent({ children }: { children: any }) {
    // https://smilejsu.tistory.com/1925
    return (
        <Warp>
            <Header>
                <MainTopMenu />
            </Header>
            <Container id="container">
                <LeftSideBox>
                    <MainLeftSidebar />
                </LeftSideBox>
                <ContentBox>{children}</ContentBox>
                <RightSideBox>
                    <MainRightSidebar />
                </RightSideBox>
            </Container>
            <FooterBox>
                <MainFooter />
            </FooterBox>
        </Warp>
    );
}
