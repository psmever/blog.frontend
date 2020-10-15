import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'modules';
import {
    postGetListAction
} from 'modules/redux/post';


export default function useMain() {
    const dispatch = useDispatch();
    const [ postItemList, setPostItemList] = useState('');
    const [ postListPageNumber, setPostListPageNumber] = useState<number>(1);
    const basePostListsState = useSelector((state: RootState) => state.post.lists);


    const fetchMoreData = () => {
        // a fake async api call like which sends
        // 20 more records in 1.5 secs
        setTimeout(() => {
            setPostListPageNumber(postListPageNumber+1)
            // dispatch(postGetListAction(postListPageNumber+1));
        }, 1500);
    };

    useEffect(() => {
        dispatch(postGetListAction(1));
        // FIXME 2020-10-05 01:13 경고 disable 수정 필요.
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        dispatch(postGetListAction(postListPageNumber));
    }, [postListPageNumber]);

    useEffect(() => {
        // console.debug('status', basePostListsState.status);
        // console.debug('posts', basePostListsState.posts);
        // console.debug('length', basePostListsState.posts.length);
    }, [basePostListsState]);
    return {
        basePostListsState,
        fetchMoreData
    }
}