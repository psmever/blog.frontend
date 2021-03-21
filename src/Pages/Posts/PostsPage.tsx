import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet';
import { PageSpinner } from '@Element/Spinners';
import { PostCardWrapper } from '@Style/PostPageStyles';

const DtlPage = React.lazy(() => import('./Dtls/PostList'));

export default function PostsPage() {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>:: NicePage Blog ::</title>
                <link rel="canonical" href="https://blog.nicepage.pe.kr/" />
            </Helmet>

            <PostCardWrapper>
                <Suspense fallback={<PageSpinner />}>
                    <DtlPage />
                </Suspense>
            </PostCardWrapper>
        </>
    );
}
