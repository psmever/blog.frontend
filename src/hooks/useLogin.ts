import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginRequestInterface } from 'commonTypes';
import { attemptLoginAction } from 'modules/redux/authenticate';
import { RootState } from 'modules';
import * as Helper from 'lib/Helper';
import history from 'modules/History';
import { useToasts } from 'react-toast-notifications'


export default function useLogin() {
    const { addToast } = useToasts()

    const dispatch = useDispatch();
    const login_state = useSelector((state: RootState) => state.authenticate.login);

    const [ inputEmail, setInputEmail ] = useState<string>('');
    const [ inputPassword, setInputPassword ] = useState<string>('');

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

    const _handelLogin = () => {
        // TODO 실패시 어떻게 할껀지?
        const loginPayload : loginRequestInterface = {
            email: inputEmail,
            password: inputPassword,
        }

        dispatch(attemptLoginAction(loginPayload));
    }

    useEffect(() => {
        console.debug(':: useLogin loading ::');
    }, []);

    // 로그인 스토어 변경 처리.
    useEffect(() => {
        if(login_state.status === 'idle') { // 로그인 시도 전.

        } else if(login_state.status === 'loading') { // 로그인 시도중.

        } else if(login_state.status === 'success') { // 로그인 완료.
            Helper.saveLoginToken(login_state.data); // 토큰 저장.
            addToast("로그인 되었습니다.", {
                appearance: 'success',
                autoDismiss: true,
            })
            history.push(process.env.PUBLIC_URL + '/');
        } else if(login_state.status === 'failure') { // 시도 에러.
            addToast(login_state.message, {
                appearance: 'error',
                autoDismiss: true,
            })
        }
    }, [login_state])

    return {
        inputEmail,
        inputPassword,

        _handleInputEmailChange,
        _handleInputPasswordChange,
        _handleLoginButtonClick,
        _handelLogin,

    };
}