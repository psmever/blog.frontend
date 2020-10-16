import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'modules';
import {
    postGetListAction
} from 'modules/redux/post';


export default function useMain() {
    const dispatch = useDispatch();
    const [ fetchLoading, setFetchLoading] = useState<boolean>(false);
    const basePostListsState = useSelector((state: RootState) => state.post.lists);

    const fetchMoreData = () => {
        if(fetchLoading === false) {

            if(fetchLoading === false) {
                setTimeout(() => {
                    dispatch(postGetListAction(basePostListsState.current_page+1));
                }, 1500);
                setFetchLoading(false);
            }
        }
    };

    useEffect(() => {
        if(basePostListsState.hasmore === true) {
            dispatch(postGetListAction(basePostListsState.current_page+1));
        }
    // FIXME 2020-10-05 01:13 경고 disable 수정 필요.
    // eslint-disable-next-line
    }, []);

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