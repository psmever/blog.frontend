'use client';

import React, { useState, useRef, KeyboardEvent, useEffect } from 'react';
import { ManageLoginPageStyle } from '@/Style/common-styles';
import { useLayout } from '@/Hook';
import lodash from 'lodash';
import Messages from '@/Messages';
import { UniButton } from '@/Element';
import { isValidEmail } from '@/Common/helper';
import { useAuth } from '@/Hook';
import { useRouter } from 'next/navigation';

const { MainContainer, MainWapper, LoginWapper, LoginBox, TitleDivision, LoginTitle, LoginForm, LoginFormRow, LoginFormLabel, LoginInput } = ManageLoginPageStyle;

interface PageStateInterface {
    loading: boolean;
    inputValue: {
        email: string;
        password: string;
    };
}

export default function ManageLoginPage() {
    const initialPageState = {
        loading: false,
        inputValue: {
            email: '',
            password: ''
        }
    };

    const [pageState, setPageState] = useState<PageStateInterface>(initialPageState);
    const enterInputRef = useRef<HTMLInputElement[]>([]);
    const { OpenLayoutModal } = useLayout();
    const { HandleAttemptLogin, HandleTokenCheck } = useAuth();
    const router = useRouter();

    // 포커스 처리
    const HandleOnKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key !== `Enter`) return;
        const inputName = (event.target as HTMLInputElement).name;

        if (inputName === 'email') {
            enterInputRef.current[1].focus();
        } else if (inputName === 'password') {
            handleLogin().then();
        }
    };

    // 로그인
    const handleLogin = async () => {
        const { email, password } = pageState.inputValue;

        // 로그인 validation
        if (lodash.isEmpty(email)) {
            OpenLayoutModal({ message: Messages.validation.emptyEmail });
            enterInputRef.current[0].focus();
            return;
        }

        if (!isValidEmail(email)) {
            OpenLayoutModal({ message: Messages.validation.email });
            enterInputRef.current[0].focus();
            return;
        }

        if (lodash.isEmpty(password)) {
            OpenLayoutModal({ message: Messages.validation.emptyPassword });
            enterInputRef.current[1].focus();
            return;
        }

        setPageState((prevState) => ({
            ...prevState,
            loading: true
        }));

        const { result, message } = await HandleAttemptLogin({ email: email, password: password });
        setPageState((prevState) => ({
            ...prevState,
            loading: false
        }));

        if (result) {
            OpenLayoutModal({ message: Messages.loginSuccess });
            router.push(`/post`);
        } else {
            OpenLayoutModal({ message: message });
        }
    };

    // 최초 페이지 로딩시 로컬 토큰 정보 체크
    useEffect(() => {
        const thisPageStart = async () => {
            if (await HandleTokenCheck()) {
                OpenLayoutModal({ message: Messages.alreadyLogin });
                router.push(`/post`);
            }
        };

        thisPageStart().then();

        // FIXME : 종속성 disable.
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [router]);

    return (
        <MainContainer>
            <MainWapper>
                <LoginWapper>
                    <LoginBox>
                        <TitleDivision>
                            <LoginTitle>{Messages.title.loginBoxTitle}</LoginTitle>
                        </TitleDivision>
                        <LoginForm>
                            <LoginFormRow>
                                <LoginFormLabel>{Messages.input.emailLabel}</LoginFormLabel>
                                <LoginInput
                                    type="email"
                                    name={`email`}
                                    placeholder={`${Messages.input.emailPlaceholder}`}
                                    ref={(el) => (enterInputRef.current[0] = el as HTMLInputElement)}
                                    onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => HandleOnKeyDown(e)}
                                    onChange={(e) =>
                                        setPageState((prevState) => ({
                                            ...prevState,
                                            inputValue: {
                                                ...prevState.inputValue,
                                                email: e.target.value
                                            }
                                        }))
                                    }
                                />
                            </LoginFormRow>
                            <LoginFormRow>
                                <LoginFormLabel>{Messages.input.passwordLabel}</LoginFormLabel>
                                <LoginInput
                                    type="password"
                                    name={`password`}
                                    placeholder={Messages.input.passwordPlaceholder}
                                    autoComplete={'off'}
                                    ref={(el) => (enterInputRef.current[1] = el as HTMLInputElement)}
                                    onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => HandleOnKeyDown(e)}
                                    onChange={(e) =>
                                        setPageState((prevState) => ({
                                            ...prevState,
                                            inputValue: {
                                                ...prevState.inputValue,
                                                password: e.target.value
                                            }
                                        }))
                                    }
                                />
                            </LoginFormRow>
                            <LoginFormRow>
                                <UniButton ButtonText={Messages.button.login} OnClick={() => handleLogin()} Loading={pageState.loading} />
                            </LoginFormRow>
                        </LoginForm>
                    </LoginBox>
                </LoginWapper>
            </MainWapper>
        </MainContainer>
    );
}
