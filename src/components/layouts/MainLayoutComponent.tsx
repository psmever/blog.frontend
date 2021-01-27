import React from 'react';
import { TopMenu, LeftSidebar, RightSidebar, Footer } from '@Layouts';
import { Warp, Header, Container, LeftSideBox, ContentBox, RightSideBox, FooterBox } from '@Style/MainLayoutStyles';

export default function MainLayoutComponent({ children }: { children: any }) {
    // TODO: 레이아웃 변경.
    // https://smilejsu.tistory.com/1925
    return (
        <Warp>
            <Header>
                <TopMenu />
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
    );
}

// return (
//     <>
//         <MainContainer>
//             <MainHeaderBox>
//                 <TopMenu />
//             </MainHeaderBox>
//             <MainWrapper>
//                 {/* <!-- Left sidebar --> */}
//                 <LeftSideBox>
//                     <LeftSidebar />
//                 </LeftSideBox>

//                 {/* <!-- Main content --> */}
//                 <ContentsPageBox>{children}</ContentsPageBox>

//                 {/* <!-- Right sidebar --> */}
//                 <RightSideBox>
//                     <RightSidebar />
//                 </RightSideBox>
//             </MainWrapper>
//             <footer>
//                 <Footer />
//             </footer>
//         </MainContainer>
//     </>
// );
