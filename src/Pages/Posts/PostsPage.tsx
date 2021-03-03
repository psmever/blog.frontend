import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@Stores';
import { PostCardWrapper } from '@Style/PostPageStyles';
import { PageSpinner } from '@Element/Spinners';
import { PostList } from './Dtls';
import { getPostList } from '@Store/Posts';

export default function PostsPage() {
    const dispatch = useDispatch();
    const { postState } = useSelector((store: RootState) => ({
        postState: store.posts.list.state,
    }));

    useEffect(() => {
        dispatch(getPostList());
    }, []);

    return (
        <>
            <PostCardWrapper>
                {(function () {
                    if (postState === 'success') {
                        return <PostList />;
                    } else if (postState === 'loading') {
                        return (
                            <>
                                <PageSpinner />
                            </>
                        );
                    }
                })()}
            </PostCardWrapper>
        </>
    );
}
