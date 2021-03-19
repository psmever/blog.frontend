import { Suspense, lazy } from 'react';
import { PageSpinner } from '@Element/Spinners';
import { WriteWrapper } from '@Style/WrtePageStyle';

const DtlPage = lazy(() => import('./Dtls/SectionsWrite'));

export default function SectionsWritePage() {
    return (
        <WriteWrapper>
            <Suspense fallback={<PageSpinner />}>
                <DtlPage />
            </Suspense>
        </WriteWrapper>
    );
}
