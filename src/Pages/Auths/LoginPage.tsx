import React, { MouseEvent, KeyboardEvent, useRef, useState } from 'react';
import { LoginWrapper, LoginMain, LoginTitle, LoginUserName, LoginPassword } from '@Style/LoginPageStyles';
import { LoginButton } from '@Element/Buttons';
export default function LoginPage() {
    const [loading, setLoding] = useState(false);

    const inputEmail = '';
    const inputPassword = '';
    const inputPasswordRef = useRef<HTMLInputElement | null>(null);

    const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key !== 'Enter') return;

        const target_id: string = (e.target as HTMLElement).id;

        if (target_id === 'Email') {
            // inputPasswordRef.current?.focus();
        }

        if (target_id === 'Password') {
            // _handleLoginButtonClick();
        }
    };

    const _handleInputEmailChange = (value: string) => {
        console.log(value);
    };

    const _handleInputPasswordChange = (value: string) => {
        console.log(value);
    };

    const _handleLoginButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
        console.log('_handleLoginButtonClick', event);
        if (loading === true) {
            setLoding(false);
        } else {
            setLoding(true);
        }
    };

    return (
        <>
            <LoginWrapper>
                <LoginMain>
                    <LoginTitle>psmever's Blog</LoginTitle>

                    <LoginUserName
                        type="text"
                        id="Email"
                        value={inputEmail}
                        onChange={e => _handleInputEmailChange(e.target.value)}
                        placeholder="Email..."
                        onKeyPress={e => onEnter(e)}
                    />

                    <LoginPassword
                        type="password"
                        id="Password"
                        value={inputPassword}
                        onChange={e => _handleInputPasswordChange(e.target.value)}
                        placeholder="Password"
                        onKeyPress={e => onEnter(e)}
                        ref={inputPasswordRef}
                    />
                    <LoginButton onClick={event => _handleLoginButtonClick(event)} loading={loading} />
                </LoginMain>
            </LoginWrapper>
        </>
    );
}
