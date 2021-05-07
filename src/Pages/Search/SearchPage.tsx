import React, { Suspense } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { PageSpinner } from '@Element/Spinners';
import { SearchWrapper } from '@Style/SearchPageStyles';
import { useParams } from 'react-router-dom';
import { isEmpty } from '@Helper';

const DtlPage = React.lazy(() => import('./Dtls/SearchMainBox'));

export default function SearchPage() {
    const { search_gubun, search_str } = useParams<{
        search_gubun: 'posts' | 'tags';
        search_str: string;
    }>();

    return (
        <HelmetProvider>
            <Helmet>
                <meta charSet="utf-8" />
                <title>
                    {!isEmpty(search_gubun) ? `검색` : `:: NicePage Blog ::`}{' '}
                    {!isEmpty(search_str) ? `${search_str}` : ``}
                </title>
                <link rel="canonical" href="https://blog.nicepage.pe.kr/" />
            </Helmet>
            <SearchWrapper>
                <Suspense fallback={<PageSpinner />}>
                    <DtlPage />
                </Suspense>
            </SearchWrapper>
        </HelmetProvider>
    );
}
