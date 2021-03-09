import React from 'react';
import { FooterLogtinButton } from '@Element/Buttons';
import { FooterInfoBox, TextBox, MadeText, LoginButton } from '@Style/FooterBoxStyles';

export default function FooterBox() {
    return (
        <>
            <FooterInfoBox>
                <TextBox>
                    <MadeText>Made In @psmever Version 2.0.0</MadeText>
                </TextBox>
                <LoginButton>
                    <FooterLogtinButton />
                </LoginButton>
            </FooterInfoBox>

            {/* <VersionText>Version 2.0.0</VersionText> */}
        </>
    );
}
