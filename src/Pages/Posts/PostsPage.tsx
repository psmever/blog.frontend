import React, { Suspense } from 'react';
import { PostCardWrapper } from '@Style/PostPageStyles';
import { PageSpinner } from '@Element/Spinners';

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
