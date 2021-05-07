import React, { Suspense } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { PageSpinner } from '@Element/Spinners';
import { LoginWrapper } from '@Style/LoginPageStyles';
import { RootState } from 'StoreTypes';
import { useSelector } from 'react-redux';

const DtlPage = React.lazy(() => import('./Dtls/Login'));

export default function LoginPage() {
    const { storeRouterLocation } = useSelector((store: RootState) => ({
        storeRouterLocation: store.router.location,
    }));

    return (
        <HelmetProvider>
            <Helmet>
                <meta charSet="utf-8" />
                <title>:: NicePage Blog :: {`로그인`}</title>
                <link rel="canonical" href={`https://blog.nicepage.pe.kr${storeRouterLocation}`} />
            </Helmet>
            <LoginWrapper>
                <Suspense fallback={<PageSpinner />}>
                    <DtlPage />
                </Suspense>
            </LoginWrapper>
        </HelmetProvider>
    );
}
