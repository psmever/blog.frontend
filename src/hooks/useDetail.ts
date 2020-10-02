import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'modules';
import {
    postDetailAction
} from 'modules/redux/post';

export default function useDetail() {
    const dispatch = useDispatch();

    const postBaseStateDetail = useSelector((state: RootState) => state.post.detail);



    useEffect(() => {

        console.debug('useDetail start');

        dispatch(postDetailAction('마크다운-markdown-작성법'));
    }, [])

    useEffect(() => {
        console.debug(postBaseStateDetail.data);
    }, [postBaseStateDetail])


    return {
        postBaseStateDetail
    }
}