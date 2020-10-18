import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'modules';
import {
    postGetListAction
} from 'modules/redux/post';
import { postItemSearch } from 'modules/API';
import { apiPostListResultItemsInterface } from 'commonTypes';
import debounce from 'lodash/debounce';

export default function useMain() {
    const dispatch = useDispatch();
    const basePostListsState = useSelector((state: RootState) => state.post.lists);

    const [ fetchLoading, setFetchLoading] = useState<boolean>(false);
    const [ searchLoading, setSearchLoading] = useState<boolean>(false);
    const [ searchItem, setSearchItem] = useState<string>('');
    const [ searchItemResult, setSearchItemResult] = useState<apiPostListResultItemsInterface[]>([]);

    const handleChangeSearchItem = (item: string) => {
        setSearchItem(item);
    }

    const handleClickSearchButton = async () => {

        if(searchLoading === false) {
            setSearchLoading(true);
            const searchResult = await postItemSearch(searchItem);
            if(searchResult.status === true && searchResult.payload.length > 0) {
                setSearchItemResult(searchResult.payload);
            } else {
                setSearchItemResult([]);
            }
            setSearchLoading(true);
        }
    }

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

    useEffect(() => {
        const handleClickSearchButton = debounce (async () => {
            if(searchLoading === false) {
                setSearchLoading(true);
                const searchResult = await postItemSearch(searchItem);
                if(searchResult.status === true && searchResult.payload) {
                    setSearchItemResult(searchResult.payload);
                } else {
                    setSearchItemResult([]);
                }
                setSearchLoading(false);
            }
        }, 400)

        if(searchItem.length > 0) {
            handleClickSearchButton();
        }
    // FIXME 2020-10-16 18:10 경고 disable 수정 필요.
    // eslint-disable-next-line
    }, [searchItem]);

    return {
        basePostListsState,
        fetchMoreData,
        fetchLoading,

        handleChangeSearchItem,
        searchItem,
        handleClickSearchButton,

        searchLoading,
        searchItemResult,
    }
}