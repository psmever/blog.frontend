import React from 'react';
import { LayouTypes } from 'CommonTypes';
import { TopMenu, Footer } from '@CommonLayouts';
import { Warp, Header, FooterBox } from '@Style/ViewLayoutStyles';
import GlobalStyles from '@Style/GlobalStyles';

export default function WritelayoutComponent({ LayouType, children }: { LayouType: LayouTypes; children: any }) {
    return (
        <>
            <GlobalStyles layoutColor={LayouType.layoutColor} />
            <Warp>
                <Header>
                    <TopMenu LayouType={LayouType} />
                </Header>
                {children}
                <FooterBox>
                    <Footer />
                </FooterBox>
            </Warp>
        </>
    );
}
