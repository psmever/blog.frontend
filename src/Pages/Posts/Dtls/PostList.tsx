import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'StoreTypes';
import { PostCardItem } from 'CommonTypes';
import { clearPostLists, getPostList, clearPostContents, clearPostDetail } from '@Store/Posts';
import PostsCard from './PostsCard';
import { ElementSpinner } from '@Element/Spinners';
import { PostElementLoadingBox } from '@Style/PostPageStyles';

function PostList() {
    const dispatch = useDispatch();
    const { posts, postState, postHasMore, pageNumber } = useSelector((store: RootState) => ({
        posts: store.posts.list.posts,
        postState: store.posts.list.state,
        postHasMore: store.posts.list.hasMore,
        pageNumber: store.posts.list.pageNumber,
    }));

    const [postList, setPostList] = useState<PostCardItem[]>([]);
    const [pageRaady, setPageRaady] = useState<boolean>(false);

    useEffect(() => {
        const setlistData = (data: PostCardItem[]) => {
            setPostList(
                data.map((element: PostCardItem) => {
                    return {
                        post_uuid: element.post_uuid,
                        post_title: element.post_title,
                        list_contents: element.list_contents,
                        tags: element.tags,
                        slug_title: element.slug_title,
                        thumb_url: element.thumb_url,
                        list_created: element.list_created,
                    };
                })
            );
            setPageRaady(true);
        };

        if (postState === 'success' && posts.length > 0) {
            setlistData(posts);
        }
    }, [posts]);

    const handleScroll = () => {
        const scrollHeight = document.documentElement.scrollHeight;
        const scrollTop = document.documentElement.scrollTop;
        const clientHeight = document.documentElement.clientHeight;

        if (scrollTop + clientHeight >= scrollHeight && postHasMore === true) {
            dispatch(getPostList());
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });

    useEffect(() => {
        if (pageNumber === 0) {
            dispatch(getPostList());
        }
    }, []);

    useEffect(() => {
        return () => {
            // 나갈때 초기화.
            dispatch(clearPostLists());
            dispatch(clearPostContents());
            dispatch(clearPostDetail());
        };
    }, []);

    return (
        <>
            {postList.map((element: PostCardItem, index) => {
                return <PostsCard key={element.post_uuid} elementIndex={index} postData={element} />;
            })}
            {pageRaady === true && postHasMore === true && postState === 'loading' && (
                <PostElementLoadingBox>
                    <ElementSpinner />
                </PostElementLoadingBox>
            )}
        </>
    );
}

export default PostList;
