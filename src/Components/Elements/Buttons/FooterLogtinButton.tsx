import React from 'react';
import { FooterLoginButtonWarp, FooterLoginButtonMain } from '@Style/ButtonStyles';
import { useHistory } from 'react-router-dom';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function FooterLogtinButton() {
    const history = useHistory();

    const handleClickLoginButton = () => {
        history.push({
            pathname: process.env.PUBLIC_URL + `/login`,
        });
    };

    return (
        <>
            <FooterLoginButtonWarp onClick={() => handleClickLoginButton()}>
                <FooterLoginButtonMain>
                    <FontAwesomeIcon icon={faSignInAlt} /> 로그인
                </FooterLoginButtonMain>
            </FooterLoginButtonWarp>
        </>
    );
}
