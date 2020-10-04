import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'modules';
import { useParams } from 'react-router-dom';
import {
    postDetailAction
} from 'modules/redux/post';
import * as _ from "lodash";
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
        console.debug('useDetail start');
        dispatch(postDetailAction(params.slug_title));
    }, [])

    useEffect(() => {
        if(postBaseStateDetailStatus === 'success' && baseStatePostDetailData !== undefined) {
            setPostContents(baseStatePostDetailData);
        }

    }, [postBaseStateDetailStatus, baseStatePostDetailData])

    return {
        postContents
    }
}