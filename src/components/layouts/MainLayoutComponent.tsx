import React from 'react';
import { MainContentPage } from '@Pages';
import { TopMenu, LeftSidebar, RightSidebar, Footer } from '@Layouts';
import {
    MainContainer,
    MainHeaderBox,
    MainWrapper,
    LeftSideBox,
    MainPageBox,
    RightSideBox,
} from '@Style/MainLayoutStyles';

export default function MainLayoutComponent() {
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
                    <MainPageBox>
                        <MainContentPage />
                    </MainPageBox>

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
