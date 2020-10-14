import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'modules';
import { useParams } from 'react-router-dom';
import {
    postDetailAction
} from 'modules/redux/post';
import { incrementViewCount } from 'modules/API';

import { apiPostDetailResultInterface } from 'commonTypes';

// post 내용 초기화.
const postContentsInit : apiPostDetailResultInterface = {
    post_uuid: '',
    user: {
        user_uuid: '',
        user_type: {
            code_id: '',
            code_name: '',
        },
        user_level: {
            code_id: '',
            code_name: '',
        },
        name: '',
        nickname: '',
        email: '',
        active: 'N'
    },
    post_title: '',
    slug_title: '',
    contents_html: '',
    contents_text: '',
    markdown: 'N',
    tags: [
        {
            id: '',
            text: ''
        }
    ],
    view_count: 0,
    detail_created: '',
    detail_updated: '',
}

interface RouteParams {
    slug_title: string;
}

export default function useDetail() {
    const dispatch = useDispatch();
    const params = useParams<RouteParams>();

    const postBaseStateDetailStatus = useSelector((state: RootState) => state.post.detail.status);
    const baseStatePostDetailData = useSelector((state: RootState) => state.post.detail.data);

    const [ postContents, setPostContents] = useState<apiPostDetailResultInterface>(postContentsInit);

    useEffect(() => {
        dispatch(postDetailAction(params.slug_title));
    // FIXME 2020-10-05 01:14  경고 disable 수정 필요.
    // eslint-disable-next-line
    }, [])

    useEffect(() => {

        async function postIncrementViewCall(post_uuid : string) {
            await incrementViewCount(post_uuid);
        }

        if(postBaseStateDetailStatus === 'success' && baseStatePostDetailData !== undefined) {
            setPostContents(baseStatePostDetailData);
            postIncrementViewCall(baseStatePostDetailData.post_uuid);
        }

    }, [postBaseStateDetailStatus, baseStatePostDetailData])

    return {
        postContents
    }
}