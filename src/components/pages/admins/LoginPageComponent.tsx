import React,{ KeyboardEvent, useRef } from 'react';
import {
    LoginWrapper,
    LoginMain,
    LoginTitle,
    LoginUserName,
    LoginPassword,
    LoginButton,
} from "styles/AdminLogin";
import useLogin from 'hooks/useLogin';
import { LoginButtonLoading } from 'components/elements';

export default function LoginPage() {

    // focus 용 Ref.
    const inputPasswordRef = useRef<HTMLInputElement | null>(null);

    const {
        inputEmail,
        inputPassword,

        loginAttemptState,

        _handleInputEmailChange,
        _handleInputPasswordChange,
        _handleLoginButtonClick,
    } = useLogin();

    // 엔터키 처리.
    const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        if(e.key !== 'Enter') return;

        const target_id: string = (e.target as HTMLElement).id;

        if(target_id === 'Email') {
            inputPasswordRef.current?.focus();
        }

        if(target_id === 'Password'){
            _handleLoginButtonClick();
        }
    }

    return (
        <>
            <LoginWrapper>
                <LoginMain>
                    <LoginTitle>psmever's Blog</LoginTitle>

                    <LoginUserName
                        type="text"
                        id="Email"
                        value={inputEmail}
                        onChange={ e => _handleInputEmailChange(e.target.value) }
                        placeholder="Email..."
                        onKeyPress={e => onEnter(e)}
                    />

                    <LoginPassword
                        type="password"
                        id="Password"
                        value={inputPassword}
                        onChange={ e => _handleInputPasswordChange(e.target.value) }
                        placeholder="Password"
                        onKeyPress={e => onEnter(e)}
                        ref={inputPasswordRef}
                    />

                    {loginAttemptState === 'attempt'
                        ? <LoginButtonLoading />
                        : <LoginButton
                                type="button"
                                onClick={ () => _handleLoginButtonClick() }
                            >로그인.
                        </LoginButton>
                    }

                </LoginMain>
            </LoginWrapper>

       </>
    );
}