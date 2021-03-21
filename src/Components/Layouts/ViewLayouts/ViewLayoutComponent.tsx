import { LayouTypes } from 'CommonTypes';
import GlobalStyles from '@Style/GlobalStyles';
import { TopMenu, Footer } from '@CommonLayouts';
import { Warp, Header, Container, ContentBox, FooterBox } from '@Style/ViewLayoutStyles';

export default function ViewLayoutComponent({ LayouType, children }: { LayouType: LayouTypes; children: any }) {
    // https://smilejsu.tistory.com/1925
    return (
        <>
            <GlobalStyles layoutColor={LayouType.layoutColor} />
            <Warp>
                <Header>
                    <TopMenu LayouType={LayouType} />
                </Header>
                <Container id="container">
                    <ContentBox>{children}</ContentBox>
                </Container>
                <FooterBox>
                    <Footer />
                </FooterBox>
            </Warp>
        </>
    );
}
