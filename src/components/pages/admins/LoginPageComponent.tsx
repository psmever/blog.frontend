import React from 'react';
import * as AdminLoginStyleComponent from "styles/AdminLogin";

export default function LoginPage() {
    return (
        <>
            <AdminLoginStyleComponent.LoginWrapper>
                <AdminLoginStyleComponent.LoginMain>
                    <AdminLoginStyleComponent.LoginTitle>psmever's Blog</AdminLoginStyleComponent.LoginTitle>
                    <AdminLoginStyleComponent.LoginUserName type="text" name="u" placeholder="Username" />
                    <AdminLoginStyleComponent.LoginPassword type="password" name="p" placeholder="Password" />
                    <AdminLoginStyleComponent.LoginButton  type="submit">로그인.</AdminLoginStyleComponent.LoginButton>
                </AdminLoginStyleComponent.LoginMain>
            </AdminLoginStyleComponent.LoginWrapper>

        </>
    );
}