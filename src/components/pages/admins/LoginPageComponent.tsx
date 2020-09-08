import React from 'react';
import * as AdminLoginStyleComponent from "styles/AdminLogin";
import useLogin from 'hooks/useLogin';

export default function LoginPage() {

    const {
        inputEmail,
        inputPassword,

        _handleInputEmailChange,
        _handleInputPasswordChange,
        _handleLoginButtonClick,
    } = useLogin();

    return (
        <>
            <AdminLoginStyleComponent.LoginWrapper>
                <AdminLoginStyleComponent.LoginMain>
                    <AdminLoginStyleComponent.LoginTitle>psmever's Blog</AdminLoginStyleComponent.LoginTitle>

                    <AdminLoginStyleComponent.LoginUserName
                        type="text"
                        name="u"
                        value={inputEmail}
                        onChange={ e => _handleInputEmailChange(e.target.value) }
                        placeholder="Email..."
                    />

                    <AdminLoginStyleComponent.LoginPassword
                        type="password"
                        name="p"
                        value={inputPassword}
                        onChange={ e => _handleInputPasswordChange(e.target.value) }
                        placeholder="Password"
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