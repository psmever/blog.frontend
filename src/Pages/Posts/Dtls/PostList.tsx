import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@Stores';
import { PostCardItem } from 'CommonTypes';
import { getPostList } from '@Store/Posts';
import PostsCard from './PostsCard';

function PostList() {
    const dispatch = useDispatch();
    const { posts, postState } = useSelector((store: RootState) => ({
        posts: store.posts.list.posts,
        postState: store.posts.list.state,
    }));

    const [postList, setPostList] = useState<PostCardItem[]>([]);

    useEffect(() => {
        const setlistData = (data: PostCardItem[]) => {
            setPostList(
                data.map((element: PostCardItem) => {
                    return {
                        post_title: element.post_title,
                        list_contents: element.list_contents,
                        tags: element.tags,
                        slug_title: element.slug_title,
                        thumb_url: element.thumb_url,
                    };
                })
            );
        };

        if (postState === 'success' && posts.length > 0) {
            setlistData(posts);
        }
    }, [posts]);

    useEffect(() => {
        dispatch(getPostList());
    }, []);

    return (
        <>
            {postList.map((element: PostCardItem, index) => {
                return <PostsCard key={index} elementIndex={index} postData={element} />;
            })}
        </>
    );
}

export default PostList;