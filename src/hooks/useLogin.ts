import { useState, useEffect } from 'react';
import * as Helper from 'lib/Helper';
import history from 'modules/History';
import { useToasts } from 'react-toast-notifications'
import { login } from 'modules/API';

export default function useLogin() {

    const { addToast } = useToasts();
    const [ inputEmail, setInputEmail ] = useState<string>('');
    const [ inputPassword, setInputPassword ] = useState<string>('');
    const [ loginAttemptState, setLoginAttemptState ] = useState<'attempt' | 'idle'>('idle');

    // email change event
    const _handleInputEmailChange = (email: string) => {
        setInputEmail(email);
    }

    // password change event
    const _handleInputPasswordChange = (password: string) => {
        setInputPassword(password);
    }

    // login button click  event
    const _handleLoginButtonClick = () => {
        _handelLogin();
    }

    // 로그인 처리.
    const _handelLogin = () => {
        setLoginAttemptState('attempt');
    }

    useEffect(() => {
        const localstorage = Helper.getLocalToken();
        if(localstorage.login_state === true) {
            addToast('이미 로그인이 되어 있습니다.', { appearance: 'info', autoDismiss: true });
            history.push(process.env.PUBLIC_URL + '/');
        }
        // FIXME 2020-10-06 13:45 리팩토리.
        // eslint-disable-next-line
    }, []);

    // 로그인 시도 결과 처리.
    useEffect(() => {
        async function attemptLogin() {
            const response = await login({
                email: inputEmail,
                password: inputPassword,
            });

            if(response.status === false) {
                addToast(response.message, { appearance: 'error', autoDismiss: true });
                setLoginAttemptState('idle');
            } else {
                Helper.saveLoginToken(response.payload);
                addToast('로그인이 완료 되었습니다.', { appearance: 'success', autoDismiss: true });
                history.push(process.env.PUBLIC_URL + '/');
            }
        }

        if(loginAttemptState === 'attempt') {
            attemptLogin();
        }
    } , [addToast, inputEmail, inputPassword, loginAttemptState]);

    return {
        inputEmail,
        inputPassword,

        loginAttemptState,

        _handleInputEmailChange,
        _handleInputPasswordChange,
        _handleLoginButtonClick,
        _handelLogin,
    };
}