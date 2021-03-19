import React, { Suspense } from 'react';
import { PageSpinner } from '@Element/Spinners';
import { SearchWrapper } from '@Style/SearchPageStyles';

const DtlPage = React.lazy(() => import('./Dtls/SearchMainBox'));

export default function SearchPage() {
    return (
        <SearchWrapper>
            <Suspense fallback={<PageSpinner />}>
                <DtlPage />
            </Suspense>
        </SearchWrapper>
    );
}
