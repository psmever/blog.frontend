import React, { Suspense } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { MainWrapper } from '@Style/PostDetailStyles';
import { PageSpinner } from '@Element/Spinners';
import { RootState } from 'StoreTypes';
import { useSelector } from 'react-redux';
import { isEmpty } from '@Helper';

const DtlPage = React.lazy(() => import('./Dtls/PostDetail'));

export default function PostsDetailPage() {
    const { detailInfo } = useSelector((store: RootState) => ({
        detailInfo: store.posts.detail.info,
    }));

    return (
        <HelmetProvider>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{!isEmpty(detailInfo.post_title) ? detailInfo.post_title : `:: NicePage Blog ::`}</title>
                <link rel="canonical" href="https://blog.nicepage.pe.kr/" />
            </Helmet>
            <MainWrapper>
                <Suspense fallback={<PageSpinner />}>
                    <DtlPage />
                </Suspense>
            </MainWrapper>
        </HelmetProvider>
    );
}
