import React,{ KeyboardEvent, useRef } from 'react';
import * as AdminLoginStyleComponent from "styles/AdminLogin";
import useLogin from 'hooks/useLogin';

export default function LoginPage() {

    // focus 용 Ref.
    const inputPasswordRef = useRef<HTMLInputElement | null>(null);

    const {
        inputEmail,
        inputPassword,

        _handleInputEmailChange,
        _handleInputPasswordChange,
        _handleLoginButtonClick,
        _handelLogin,
    } = useLogin();

    // 엔터키 처리.
    const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        if(e.key !== 'Enter') return;

        const target_id: string = (e.target as HTMLElement).id;

        if(target_id === 'Email') {
            console.debug('email');
            inputPasswordRef.current?.focus();
        }

        if(target_id === 'Password'){
            console.debug('password');
            _handelLogin();
        }
    }


    return (
        <>
            <AdminLoginStyleComponent.LoginWrapper>
                <AdminLoginStyleComponent.LoginMain>
                    <AdminLoginStyleComponent.LoginTitle>psmever's Blog</AdminLoginStyleComponent.LoginTitle>

                    <AdminLoginStyleComponent.LoginUserName
                        type="text"
                        name="u"
                        id="Email"
                        value={inputEmail}
                        onChange={ e => _handleInputEmailChange(e.target.value) }
                        placeholder="Email..."
                        onKeyPress={e => onEnter(e)}
                    />

                    <AdminLoginStyleComponent.LoginPassword
                        type="password"
                        name="p"
                        id="Password"
                        value={inputPassword}
                        onChange={ e => _handleInputPasswordChange(e.target.value) }
                        placeholder="Password"
                        onKeyPress={e => onEnter(e)}
                        ref={inputPasswordRef}
                    />

                    <AdminLoginStyleComponent.LoginButton
                        type="button"
                        onClick={ () => _handleLoginButtonClick() }
                    >로그인.
                    </AdminLoginStyleComponent.LoginButton>
                </AdminLoginStyleComponent.LoginMain>
            </AdminLoginStyleComponent.LoginWrapper>

       </>
    );
}