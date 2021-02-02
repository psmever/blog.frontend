import React from 'react';
import { HashLoader } from 'react-spinners';
import { BodyLoading } from '@Style/SpinnersStyles';

export default function BodySpinner() {
    return (
        <BodyLoading>
            <div className="sweet-loading">
                <HashLoader size={50} color={'#123abc'} loading={true} />
            </div>
        </BodyLoading>
    );
}
