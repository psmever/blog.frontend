import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'modules';
import {
    postGetListAction
} from 'modules/redux/post';


export default function useMain() {
    const dispatch = useDispatch();
    const [ fetchLoading, setFetchLoading] = useState<boolean>(false);
    const [ postListPageNumber, setPostListPageNumber] = useState<number>(1);
    const basePostListsState = useSelector((state: RootState) => state.post.lists);

    const fetchMoreData = () => {
        if(fetchLoading === false) {
            setFetchLoading(true);

            if(fetchLoading === false) {
                setTimeout(() => {
                    setPostListPageNumber(postListPageNumber+1)
                }, 1500);
                setFetchLoading(false);
            }
        }
    };

    useEffect(() => {
        dispatch(postGetListAction(1));
        // FIXME 2020-10-05 01:13 경고 disable 수정 필요.
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        dispatch(postGetListAction(postListPageNumber));
        // FIMEX 2020-10-16 00:34  disable 수정 필요.
        // eslint-disable-next-line
    }, [postListPageNumber]);

    useEffect(() => {
        if(basePostListsState.hasmore === false) {
            setFetchLoading(false);
        }
    } ,[basePostListsState]);

    return {
        basePostListsState,
        fetchMoreData,
        fetchLoading,
    }
}