import React, { lazy, Suspense } from 'react';
import { MainWrapper } from '@Style/PostDetailStyles';
import { PageSpinner } from '@Element/Spinners';

const DtlPage = lazy(() => import('./Dtls/SectionsDetail'));

export default function SectionsPage() {
    return (
        <MainWrapper>
            <Suspense fallback={<PageSpinner />}>
                <DtlPage />
            </Suspense>
        </MainWrapper>
    );
}
