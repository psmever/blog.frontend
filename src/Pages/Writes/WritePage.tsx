import React, { Suspense } from 'react';
import { PageSpinner } from '@Element/Spinners';
import { WriteWrapper } from '@Style/WrtePageStyle';

const DtlPage = React.lazy(() => import('./Dtls/Write'));

export default function PostsPage() {
    return (
        <>
            <WriteWrapper>
                <Suspense fallback={<PageSpinner />}>
                    <DtlPage />
                </Suspense>
            </WriteWrapper>
        </>
    );
}
