import React, { useState, useEffect } from 'react';
import { PageSpinner } from '@Element/Spinners';
import { PostCardWrapper } from '@Style/PostPageStyles';
import { usePost } from '@Hooks';
import { PostListItem } from 'ServiceTypes';
import { PostsCard } from '@Elements';

export default function PostsPage() {
    const [pageLoading, setPageLoging] = useState<boolean>(false);
    const [postLists, setPostLists] = useState<PostListItem[] | null>();
    const [postState] = usePost();

    useEffect(() => {
        const { state, payload } = postState;

        const setPageLoading = () => {
            if (state === 'loading') {
                setPageLoging(true);
            } else {
                setPageLoging(false);
            }
        };

        const setPostListState = (list: PostListItem[]) => {
            setPostLists(list);
        };

        setPageLoading();

        if (state === 'success' && payload !== null) {
            setPostListState(payload.posts);
        }
    }, [postState]);

    return (
        <PostCardWrapper>
            {(function () {
                if (pageLoading === true) {
                    return <PageSpinner />;
                } else {
                    return postLists?.map((element: PostListItem, index) => {
                        return <PostsCard key={index} elementIndex={index} postData={element} />;
                    });
                }
            })()}
        </PostCardWrapper>
    );
}
