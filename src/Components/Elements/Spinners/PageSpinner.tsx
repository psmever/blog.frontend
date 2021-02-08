import React from 'react';
import { HashLoader } from 'react-spinners';
import { PageSpinnerStyle } from '@Style/SpinnersStyles';

export default function PageSpinner() {
    return (
        <PageSpinnerStyle>
            <div className="sweet-loading">
                <HashLoader size={50} color={'#123abc'} loading={true} />
            </div>
        </PageSpinnerStyle>
    );
}
