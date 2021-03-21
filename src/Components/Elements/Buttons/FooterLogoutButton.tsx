import React from 'react';
import { FooterLogoutButtonWarp, FooterLogoutButtonMain } from '@Style/ButtonStyles';
import { useHistory } from 'react-router-dom';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function FooterLogoutButton() {
    const history = useHistory();

    const handleClickLogoutButton = () => {
        history.push({
            pathname: process.env.PUBLIC_URL + `/logout`,
        });
    };

    return (
        <FooterLogoutButtonWarp onClick={() => handleClickLogoutButton()}>
            <FooterLogoutButtonMain>
                <FontAwesomeIcon icon={faSignOutAlt} /> 로그아웃
            </FooterLogoutButtonMain>
        </FooterLogoutButtonWarp>
    );
}
