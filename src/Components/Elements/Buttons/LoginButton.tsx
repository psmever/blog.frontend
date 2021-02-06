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
            <LoginButtonStyle loading={loading.toString()} onClick={event => onClick(event)}>
                <LoginButtonBox>
                    <LoginLoadingBox loading={loading.toString()}>
                        {loading === true && <ButtonSpinner />}
                    </LoginLoadingBox>
                    <LoginTextBox loading={loading.toString()}>{`로그인`}</LoginTextBox>
                </LoginButtonBox>
            </LoginButtonStyle>
        </>
    );
}
