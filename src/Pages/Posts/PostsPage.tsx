import React, { Suspense } from 'react';
import { PageSpinner } from '@Element/Spinners';
import { PostCardWrapper } from '@Style/PostPageStyles';

const DtlPage = React.lazy(() => import('./Dtls/PostList'));

export default function PostsPage() {
    return (
        <PostCardWrapper>
            <Suspense fallback={<PageSpinner />}>
                <DtlPage />
            </Suspense>
        </PostCardWrapper>
    );
}
