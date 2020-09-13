import { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginRequestInterface } from 'commonTypes';
import { attemptLoginAction } from 'modules/redux/authenticate';
import { RootState } from 'modules';
// import * as Helper from 'lib/Helper';
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

    const loginResuxStore = useCallback(() => {
        return login_state;
    }, [login_state]);


    // 로그인 스토어 변경 처리.
    useEffect(() => {
        const loginStatus = loginResuxStore()
        switch (loginStatus.status) {
            case 'failure':
                addToast(loginStatus.message, { appearance: 'error', autoDismiss: true });
                break;
            case 'success':
                // FIXME 로그인 유지 시키도록 해야함.
                // Helper.saveLoginToken(loginStatus.data);
                addToast('로그인이 완료 되었습니다.', { appearance: 'success', autoDismiss: true });
                history.push(process.env.PUBLIC_URL + '/');
                break;
          }
    }, [loginResuxStore, addToast])

    useEffect(() => {
        // console.debug(':: useLogin loading ::');
    }, []);

    return {
        inputEmail,
        inputPassword,

        _handleInputEmailChange,
        _handleInputPasswordChange,
        _handleLoginButtonClick,
        _handelLogin,

    };
}