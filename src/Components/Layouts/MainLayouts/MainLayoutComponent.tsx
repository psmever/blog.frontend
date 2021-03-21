import React from 'react';
import { LayouTypes } from 'CommonTypes';
import GlobalStyles from '@Style/GlobalStyles';
import { TopMenu, LeftSidebar, RightSidebar, Footer } from '@CommonLayouts';
import { Warp, Header, Container, LeftSideBox, ContentBox, RightSideBox, FooterBox } from '@Style/MainLayoutStyles';

export default function MainLayoutComponent({ LayouType, children }: { LayouType: LayouTypes; children: any }) {
    // https://smilejsu.tistory.com/1925
    return (
        <>
            <GlobalStyles layoutColor={LayouType.layoutColor} />
            <Warp>
                <Header>
                    <TopMenu LayouType={LayouType} />
                </Header>
                <Container id="container">
                    <LeftSideBox>
                        <LeftSidebar />
                    </LeftSideBox>
                    <ContentBox>{children}</ContentBox>
                    <RightSideBox>
                        <RightSidebar />
                    </RightSideBox>
                </Container>
                <FooterBox>
                    <Footer />
                </FooterBox>
            </Warp>
        </>
    );
}
