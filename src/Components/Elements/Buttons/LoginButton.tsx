import React, { MouseEvent } from 'react';
import { LoginButtonStyle, LoginButtonBox, LoginLoadingBox, LoginTextBox } from '@Style/ButtonStyles';
import { ButtonSpinner } from '@Element/Spinners';

export default function LoginButton({
    onClick,
    loading,
}: {
    onClick: (event: MouseEvent<HTMLButtonElement>) => void;
    loading: boolean;
}) {
    return (
        <>
            <LoginButtonStyle loading={loading} onClick={event => onClick(event)}>
                <LoginButtonBox>
                    <LoginLoadingBox loading={loading}>{loading === true && <ButtonSpinner />}</LoginLoadingBox>
                    <LoginTextBox loading={loading}>{`로그인`}</LoginTextBox>
                </LoginButtonBox>
            </LoginButtonStyle>
        </>
    );
}
