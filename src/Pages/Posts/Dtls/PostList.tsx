import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@Stores';
import { PostListItem } from 'ServiceTypes';

import PostsCard from './PostsCard';

function PostList() {
    const { posts } = useSelector((store: RootState) => ({
        posts: store.posts.list.posts,
    }));

    return (
        <>
            {posts?.map((element: PostListItem, index) => {
                return <PostsCard key={index} elementIndex={index} postData={element} />;
            })}
        </>
    );
}

export default PostList;
