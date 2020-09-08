import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loginRequestInterface } from 'commonTypes';
import { attemptLoginAction } from 'modules/redux/authenticate';

export default function useLogin() {

    const dispatch = useDispatch();

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

    // useEffect(() => {
    // }, [inputEmail, inputPassword]);

    return {
        inputEmail,
        inputPassword,

        _handleInputEmailChange,
        _handleInputPasswordChange,
        _handleLoginButtonClick,

    };
}