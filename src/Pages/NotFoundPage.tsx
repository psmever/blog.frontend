import React from 'react';
import { PageBox, NotFoundImage } from '@Style/NotFoundStyles';

export default function NotFoundPage() {
    return (
        <PageBox>
            <NotFoundImage src={process.env.PUBLIC_URL + `/assets/404.png`} />
        </PageBox>
    );
}
