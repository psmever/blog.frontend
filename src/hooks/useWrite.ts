import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editorContentsInterface, editorTagInterface } from 'commonTypes';
import { postCreateInterface } from 'reduxTypes';
import { postCreateAction, postStateResetAction, postEditAction } from 'modules/redux/post';
import { useParams } from 'react-router-dom';
import { RootState } from 'modules';
import _Alert_ from 'lib/_Alert_';
// import history from 'modules/History';
import { useHistory, useRouteMatch } from 'react-router-dom';

interface RouteParams {
    post_uuid: string;
}

export default function useWrite() {

    const params = useParams<RouteParams>();
    const editMatch = useRouteMatch(process.env.PUBLIC_URL + `/admin/:post_uuid/edit`);

    const history = useHistory();

    const dispatch = useDispatch();
    const post_create_state = useSelector((state: RootState) => state.post.create);
    const post_edit_state = useSelector((state: RootState) => state.post.edit);

    const [ editorTitle, setEditorTitle] = useState<string>('');

    const [ editorContents, setEditorContents ] = useState<editorContentsInterface>({
        html: '',
        text: ''
    });

    // 글 쓰기 테그.
    const [ editorTagContents, setEditorTagContents] = useState<editorTagInterface>([]);

    // 글 쓰기 추천 테그.
    const [ editorTagSuggestions, setEditorTagSuggestions] = useState<editorTagInterface>([
        { id: 'Develop', text: 'Develop' },
        { id: 'Linux', text: 'Linux' },
        { id: 'Javascript', text: 'Javascript' },
        { id: 'PHP', text: 'PHP' },
    ]);

    // TODO 2020-09-25 00:28  edit 에서 저장을 create 가 아니라 update 처리 해야함.
    const _handleClickSaveButton = () => {
        const dataObject : postCreateInterface = {
            title: editorTitle,
            tags: editorTagContents.map(({ id, text }) => ({ tag_id: id, tag_text: text })),
            contents: editorContents
        };
        dispatch(postCreateAction(dataObject));
    }

    const _handleClickPublishButton = () => {
        console.debug('_handleClickPublishButton');
    }

    useEffect(() => {
        setEditorTitle('');
        setEditorContents({
            html: '',
            text: ''
        });
        setEditorTagContents([]);
    }, []);

    useEffect(() => {
        console.debug('params change');
    }, [params]);

    useEffect(() => {
        console.debug('editMatch', editMatch);
        if(post_edit_state.status === 'idle') {
            const post_uuid: string = params.post_uuid;
            dispatch(postEditAction({post_uuid : post_uuid}));
        }

    }, [editMatch]);

    useEffect(() => {
        if(post_create_state.status === 'failure') {
            _Alert_.error({text: post_create_state.message ? post_create_state.message : '다시 시도해 주세요.'});
            dispatch(postStateResetAction());
        } else if(post_create_state.status === 'success') {
            // 저장 성공 했을때.
            dispatch(postStateResetAction());
            // history.push({
            //     pathname: process.env.PUBLIC_URL + `/admin/${post_create_state.data.post_uuid}/update`,
            // });
            history.push(process.env.PUBLIC_URL + `/admin/${post_create_state.data.post_uuid}/edit`);
        }
    }, [post_create_state]);

    useEffect(() => {
        if(post_edit_state.status === 'success') {
            setEditorTitle(post_edit_state.data.post_title);
            setEditorContents({
                html: post_edit_state.data.contents_html,
                text: post_edit_state.data.contents_text
            });
            const tags = post_edit_state.data.tags;
            tags.map((e: any) => {
                setEditorTagContents([
                    ...editorTagContents,
                    {
                        id: e.tag_id,
                        text: e.tag_text
                    }
                ]);
            })
        }
    }, [post_edit_state]);


    useEffect(() => {
        console.debug('start');
    }, []);

    return {
        editorTitle,
        setEditorTitle,
        setEditorContents,
        editorContents,
        editorTagContents,
        setEditorTagContents,
        editorTagSuggestions,
        setEditorTagSuggestions,

        _handleClickSaveButton,
        _handleClickPublishButton,

        post_create_state,
    };
}