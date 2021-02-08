import React, { KeyboardEvent, useRef, useState, useEffect } from 'react';
import { LoginWrapper, LoginMain, LoginTitle, LoginUserName, LoginPassword } from '@Style/LoginPageStyles';
import { LoginButton } from '@Element/Buttons';
import { loginInputState } from '@Module/InitializeConst';
import { isValidEmail } from '@Helper';
import _Alert_ from '@_Alert_';
import { useLoading } from '@Hooks';
import { login } from '@API';
import { useToasts } from 'react-toast-notifications';
import * as Helper from '@Util/Helper';
import History from '@Module/History';
import { useDispatch } from 'react-redux';
import { loginSetAction } from '@Store/App';

export default function LoginPage() {
    const { addToast } = useToasts();
    const dispatch = useDispatch();

    // const { loading, setLoading } = useLogin();
    // const [loadingState, controller] = useLoading();
    const { loadingState, loadingControl } = useLoading();

    const [loginInputValue, setLoginInputValue] = useState(loginInputState);
    // const [loading, setLoding] = useState(false);

    const inputPasswordRef = useRef<HTMLInputElement | null>(null);

    // 엔터 키 이벤트.
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

    // 로그인 버튼 클릭시 벨리데이션 및 api 콜
    const handleClickLoginButton = () => {
        loadingControl({
            type: 'start',
        });

        // 로그인 벨리데이션 체크.
        function checkInputValue({ email, password }: { email: string; password: string }) {
            if (email === '' || email.length === 0) {
                loadingControl({
                    type: 'error',
                    message: '로그인 이메일을 입력해 주세요.',
                });
                return false;
            }
            if (password === '' || password.length === 0) {
                loadingControl({
                    type: 'error',
                    message: '로그인 비밀 번호를 입력해 주세요.',
                });
                return false;
            }
            if (!isValidEmail(email)) {
                loadingControl({
                    type: 'error',
                    message: '올바른 이메일 형식을 입력해주세요.',
                });
                return false;
            }

            return true;
        }

        // 로그인 시도
        async function attemptLogin() {
            const response = await login({
                email: loginInputValue.email,
                password: loginInputValue.password,
            });

            const { status, message, payload } = response;

            if (status) {
                const {
                    access_token,
                    refresh_token,
                    expires_in,
                }: { access_token: string; refresh_token: string; expires_in: number } = payload;
                Helper.saveLoginToken({
                    access_token,
                    refresh_token,
                    expires_in,
                });
                dispatch(loginSetAction());
                addToast('로그인이 완료 되었습니다.', { appearance: 'success', autoDismiss: true });
                History.push(process.env.PUBLIC_URL + '/');
            } else {
                addToast(message, { appearance: 'error', autoDismiss: true });
            }

            loadingControl({
                type: 'end',
            });
        }

        if (checkInputValue(loginInputValue)) {
            attemptLogin();
        }
    };

    // 체크 에러 발생시 얼럿.
    useEffect(() => {
        const setLadingErrorAlert = ({ message }: { state: boolean; message: string; error: boolean }) => {
            _Alert_.test({
                position: 'top-end',
                text: message,
                callBack: () => {
                    loadingControl({
                        type: 'end',
                    });
                },
            });
        };

        if (loadingState.error === true) {
            setLadingErrorAlert(loadingState);
        }
    }, [loadingState]);

    // 최초 로딩때 로컬 토큰 체크.
    useEffect(() => {
        const checkStartLoginCheck = async () => {
            const localstorage = Helper.getLocalToken();
            if (localstorage.login_state === true) {
                addToast('이미 로그인이 되어 있습니다.', { appearance: 'info', autoDismiss: true });
                History.push(process.env.PUBLIC_URL + '/');
            }
        };

        checkStartLoginCheck();
    }, []);

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
                    <LoginButton onClick={() => handleClickLoginButton()} loading={loadingState.state} />
                </LoginMain>
            </LoginWrapper>
        </>
    );
}
