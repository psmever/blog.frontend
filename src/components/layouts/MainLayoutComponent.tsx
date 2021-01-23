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
    SideLine,
} from '@Style/MainLayoutStyles';

import styled from 'styled-components';

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
                        <SideLine>
                            <LeftSidebar />
                        </SideLine>
                    </LeftSideBox>

                    {/* <!-- Main content --> */}
                    <MainPageBox>
                        <MainContentPage />
                    </MainPageBox>

                    {/* <!-- Right sidebar --> */}
                    <RightSideBox>
                        <SideLine>
                            <RightSidebar />
                        </SideLine>
                    </RightSideBox>
                </MainWrapper>
                <footer>
                    <Footer />
                </footer>
            </MainContainer>
        </>
    );
}
