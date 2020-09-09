import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginRequestInterface } from 'commonTypes';
import { attemptLoginAction } from 'modules/redux/authenticate';
import { RootState } from 'modules';

export default function useLogin() {

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
        const loginPayload : loginRequestInterface = {
            email: inputEmail,
            password: inputPassword,
        }

        dispatch(attemptLoginAction(loginPayload));
        // TODO 실패시 어떻게 할껀지?
    }

    useEffect(() => {
        console.debug(':: useLogin loading ::');
    }, []);

    useEffect(() => {
        // TODO login redux state 구조 수정 해야함.
        console.debug(login_state);
    }, [login_state])

    return {
        inputEmail,
        inputPassword,

        _handleInputEmailChange,
        _handleInputPasswordChange,
        _handleLoginButtonClick,

    };
}