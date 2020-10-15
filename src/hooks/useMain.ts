import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'modules';
import * as Helper from 'lib/Helper';
import {
    postGetListAction
} from 'modules/redux/post';

export default function useMain() {
    const dispatch = useDispatch();
    const postBaseStateLists = useSelector((state: RootState) => state.post.lists);



    useEffect(() => {
        dispatch(postGetListAction(1));

        // FIXME 2020-10-05 01:13 경고 disable 수정 필요.
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        console.debug(Helper.getLocalToken());
    }, [])
    return {
        postBaseStateLists
    }
}