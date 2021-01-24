import React from 'react';
import { TopMenu, LeftSidebar, RightSidebar, Footer } from '@Layouts';
import {
    MainContainer,
    MainHeaderBox,
    MainWrapper,
    LeftSideBox,
    ContentsPageBox,
    RightSideBox,
} from '@Style/MainLayoutStyles';

export default function MainLayoutComponent({ children }: { children: any }) {
    return (
        <>
            <MainContainer>
                <MainHeaderBox>
                    <TopMenu />
                </MainHeaderBox>
                <MainWrapper>
                    {/* <!-- Left sidebar --> */}
                    <LeftSideBox>
                        <LeftSidebar />
                    </LeftSideBox>

                    {/* <!-- Main content --> */}
                    <ContentsPageBox>{children}</ContentsPageBox>

                    {/* <!-- Right sidebar --> */}
                    <RightSideBox>
                        <RightSidebar />
                    </RightSideBox>
                </MainWrapper>
                <footer>
                    <Footer />
                </footer>
            </MainContainer>
        </>
    );
}
