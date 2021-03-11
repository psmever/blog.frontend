import React, { Suspense } from 'react';
import { PageSpinner } from '@Element/Spinners';
import { LoginWrapper } from '@Style/LoginPageStyles';

const DtlPage = React.lazy(() => import('./Dtls/Login'));

export default function LoginPage() {
    return (
        <LoginWrapper>
            <Suspense fallback={<PageSpinner />}>
                <DtlPage />
            </Suspense>
        </LoginWrapper>
    );
}
