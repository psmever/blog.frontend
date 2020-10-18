import { useState, useEffect } from 'react';
<<<<<<< HEAD
import { useParams } from 'react-router-dom';
import { incrementViewCount, getPostDetail } from 'modules/API';

=======
import { incrementViewCount, getPostDetail } from 'modules/API';
>>>>>>> develop
import { apiPostDetailResultInterface } from 'commonTypes';
import { useHistory, useParams } from 'react-router-dom';

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
    const params = useParams<RouteParams>();
<<<<<<< HEAD

    const [ postContents, setPostContents] = useState<apiPostDetailResultInterface>(postContentsInit);

=======
    const history = useHistory();

    const [ postContents, setPostContents] = useState<apiPostDetailResultInterface>(postContentsInit);

    const handleTagItemClick = (tag_text: string) => {
        history.push({
            pathname: process.env.PUBLIC_URL + `/pages/tags/${tag_text}/search`,
            state: { list: true }
        });
    }

>>>>>>> develop
    useEffect(() => {

        async function postIncrementViewCall(post_uuid : string) {
            await incrementViewCount(post_uuid);
        }

        async function doGetPostDetail() {
            const getResult = await getPostDetail({ slugTitle: params.slug_title});
            if(getResult.status === true) {
                setPostContents(getResult.payload);
                postIncrementViewCall(getResult.payload.post_uuid);
            }
        }

        doGetPostDetail();

    // FIXME 2020-10-05 01:14  경고 disable 수정 필요.
    // eslint-disable-next-line
    }, [])

    return {
        postContents,
        handleTagItemClick
    }
}