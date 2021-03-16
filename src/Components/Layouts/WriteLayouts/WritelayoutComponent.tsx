import React from 'react';
import { LayouTypes } from 'CommonTypes';
import { Warp } from '@Style/ViewLayoutStyles';
import GlobalStyles from '@Style/GlobalStyles';

export default function WritelayoutComponent({ LayouType, children }: { LayouType: LayouTypes; children: any }) {
    return (
        <>
            <GlobalStyles layoutColor={LayouType.layoutColor} />
            <Warp>{children}</Warp>
        </>
    );
}
