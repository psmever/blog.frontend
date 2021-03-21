import React, { useEffect, useState } from 'react';
import { FooterLoginButton, FooterLogoutButton } from '@Element/Buttons';
import { FooterInfoBox, TextBox, MadeText, LoginButton } from '@Style/FooterBoxStyles';
import { useSelector } from 'react-redux';
import { RootState } from 'StoreTypes';

export default function FooterBox() {
    const { loginState } = useSelector((store: RootState) => ({
        loginState: store.app.loginState,
    }));

    const [loginCheck, setLoginCheck] = useState(false);

    useEffect(() => {
        const loginStateSuccess = () => {
            setLoginCheck(true);
        };

        const loginStateFail = () => {
            setLoginCheck(false);
        };

        if (loginState === true) {
            loginStateSuccess();
        } else if (loginState === false) {
            loginStateFail();
        }
    }, [loginState]);

    return (
        <>
            <FooterInfoBox>
                <TextBox>
                    <MadeText>{`Made In @psmever Version ${process.env.REACT_APP_VERSION}`}</MadeText>
                </TextBox>
                <LoginButton>{loginCheck === true ? <FooterLogoutButton /> : <FooterLoginButton />}</LoginButton>
            </FooterInfoBox>

            {/* <VersionText>Version 2.0.0</VersionText> */}
        </>
    );
}
