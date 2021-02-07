import React, { MouseEvent, KeyboardEvent, useRef, useState } from 'react';
import { LoginWrapper, LoginMain, LoginTitle, LoginUserName, LoginPassword } from '@Style/LoginPageStyles';
import { LoginButton } from '@Element/Buttons';
import { loginInputState } from '@Module/InitializeConst';
import { isValidEmail } from '@Helper';
import _Alert_ from '@_Alert_';

export default function LoginPage() {
    const [loginInputValue, setLoginInputValue] = useState(loginInputState);
    const [loading, setLoding] = useState(false);

    const inputPasswordRef = useRef<HTMLInputElement | null>(null);

    const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key !== 'Enter') return;

        const target_id: string = (e.target as HTMLElement).id;

        if (target_id === 'email') {
            inputPasswordRef.current?.focus();
        }

        if (target_id === 'password') {
            handleClickLoginButton();
        }
    };

    // 로그인 form 값 변경 저장 처리.
    const handleChangeLoginInputValue = ({ name, value }: { name: string; value: string }) => {
        setLoginInputValue({
            ...loginInputValue,
            [name]: value,
        });
    };

    const handleClickLoginButton = () => {
        const checkInputValue = async ({ email, password }: { email: string; password: string }) => {
            if (email === '' || email.length === 0) {
                _Alert_.defaultInfo({ text: '로그인 이메일을 입력해 주세요.' });
                return;
            }

            if (password === '' || password.length === 0) {
                _Alert_.defaultInfo({ text: '로그인 비밀 번호를 입력해 주세요.' });
                return;
            }

            if (!isValidEmail(email)) {
                _Alert_.defaultInfo({ text: '올바른 이메일 형식을 입력해주세요.' });
                return;
            }
        };

        checkInputValue(loginInputValue);

        // isValidEmail();
        // if (loading === true) {
        //     setLoding(false);
        // } else {
        //     setLoding(true);
        // }
    };

    return (
        <>
            <LoginWrapper>
                <LoginMain>
                    <LoginTitle>psmever's Blog</LoginTitle>

                    <LoginUserName
                        type="text"
                        id="email"
                        name="email"
                        value={loginInputValue.email}
                        onChange={e => handleChangeLoginInputValue(e.target)}
                        placeholder="이메일 주로를 입력해주세요."
                        onKeyPress={e => onEnter(e)}
                    />

                    <LoginPassword
                        type="password"
                        id="password"
                        name="password"
                        value={loginInputValue.password}
                        onChange={e => handleChangeLoginInputValue(e.target)}
                        placeholder="비밀 번호를 입력해 주세요."
                        onKeyPress={e => onEnter(e)}
                        ref={inputPasswordRef}
                    />
                    <LoginButton onClick={() => handleClickLoginButton()} loading={loading} />
                </LoginMain>
            </LoginWrapper>
        </>
    );
}
