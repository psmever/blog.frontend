import React from 'react';
import { LayouTypes } from 'CommonTypes';
import GlobalStyles from '@Style/GlobalStyles';

export default function ManageLayoutComponent({ LayouType, children }: { LayouType: LayouTypes; children: any }) {
    return (
        <>
            <GlobalStyles layoutColor={LayouType.layoutColor} />
            {children}
        </>
    );
}
