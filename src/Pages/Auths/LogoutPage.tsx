import React, { Suspense } from 'react';
import { PageSpinner } from '@Element/Spinners';

const DtlPage = React.lazy(() => import('./Dtls/Logout'));

export default function LogoutPage() {
    return (
        <Suspense fallback={<PageSpinner />}>
            <DtlPage />
        </Suspense>
    );
}
