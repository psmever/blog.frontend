import React from 'react';
import { ClipLoader } from 'react-spinners';
import { ButtonSpinnerStyle } from '@Style/SpinnersStyles';

export default function ButtonSpinner() {
    return (
        <ButtonSpinnerStyle>
            <ClipLoader size={20} color={'#123abc'} loading={true} />
        </ButtonSpinnerStyle>
    );
}
