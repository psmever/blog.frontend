import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet';
import { PageSpinner } from '@Element/Spinners';
import { WriteWrapper } from '@Style/WrtePageStyle';
import { useSelector } from 'react-redux';
import { RootState } from 'StoreTypes';
import { useParams } from 'react-router-dom';
import { isEmpty } from '@Helper';

const DtlPage = React.lazy(() => import('./Dtls/PostsWrite'));

export default function PostsWritePage() {
    const { storeRouterLocation } = useSelector((store: RootState) => ({
        storeRouterLocation: store.router.location,
    }));

    const { post_uuid } = useParams<{
        write_gubun: string;
        post_uuid: string;
        write_mode: string;
    }>();

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{isEmpty(post_uuid) ? `등록` : `글 수정`}</title>
                <link rel="canonical" href={`https://blog.nicepage.pe.kr${storeRouterLocation}`} />
            </Helmet>
            <WriteWrapper>
                <Suspense fallback={<PageSpinner />}>
                    <DtlPage />
                </Suspense>
            </WriteWrapper>
        </>
    );
}
