import React, { Suspense } from 'react';
import { MainWrapper } from '@Style/PostDetailStyles';
import { PageSpinner } from '@Element/Spinners';

const DtlPage = React.lazy(() => import('./Dtls/PostDetail'));

export default function PostsDetailPage() {
    return (
        <MainWrapper>
            <Suspense fallback={<PageSpinner />}>
                <DtlPage />
            </Suspense>
        </MainWrapper>
    );
}
