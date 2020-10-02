import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'modules';
import {
    postGetListAction
} from 'modules/redux/post';

export default function useMain() {
    const dispatch = useDispatch();

    const postBaseStateLists = useSelector((state: RootState) => state.post.lists);



    useEffect(() => {

        console.debug('useMain start');

        dispatch(postGetListAction(1));
    }, [])
    return {
        postBaseStateLists
    }
}