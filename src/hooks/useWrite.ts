import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editorContentsInterface, editorTagInterface } from 'commonTypes';
import { postRequestInterface } from 'reduxTypes';
import {
    postCreateAction,
    postStateResetAction,
    postEditAction,
    postEditResetAction,
    postPublishAction,
    postPublishResetAction,
    postUpdateAction,
    postUpdateResetAction
} from 'modules/redux/post';
import { useParams } from 'react-router-dom';
import { RootState } from 'modules';
import _Alert_ from 'lib/_Alert_';

import { useHistory, useLocation } from 'react-router-dom';
import * as _ from "lodash";

interface RouteParams {
    post_uuid: string;
}

interface LocationState {
    edit: boolean
}

export default function useWrite() {

    // FIXME 2020-09-26 18:19  리팩토리 필요.
    // 글을 세로 등록 할때 저장을 누르면 edit 모드로 변경 하는데.. 바꿔야 하나?
    // edit 모드 일떄 params 으로 체크를 하니 로딩이 두번됨.

    const dispatch = useDispatch();
    const history = useHistory();

    const params = useParams<RouteParams>();
    const location = useLocation<LocationState>();

    const post_create_state = useSelector((state: RootState) => state.post.create);
    const post_edit_state = useSelector((state: RootState) => state.post.edit);
    const post_update_state = useSelector((state: RootState) => state.post.update);
    const post_publish_state = useSelector((state: RootState) => state.post.publish);

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

    // 글 저장 및 업데이트
    const _handleClickSaveButton = () => {

        const dataObject : postRequestInterface = {
            title: editorTitle,
            tags: editorTagContents.map(({ id, text }) => ({ tag_id: id, tag_text: text })),
            contents: editorContents
        };

        // post_uuid 가 있을경우 update saga 호출.
        if(params.post_uuid && !_.isUndefined(params.post_uuid)) {
            dispatch(postUpdateAction({post_uuid: params.post_uuid, payload: dataObject}));
        } else {
            dispatch(postCreateAction(dataObject));
        }
    }

    // 게시 버튼 클릭
    const _handleClickPublishButton = () => {
        if(params.post_uuid && !_.isUndefined(params.post_uuid)) {
            dispatch(postPublishAction({post_uuid: params.post_uuid}));
        }
    }

    // 최초엔 내용들 초기화.
    useEffect(() => {
        setEditorTitle('');
        setEditorContents({
            html: '',
            text: ''
        });
        setEditorTagContents([]);
    }, []);

    // 생성 모드 일떄 create saga 상태 처리.
    useEffect(() => {
        if(post_create_state.status === 'failure') {
            _Alert_.error({text: post_create_state.message ? post_create_state.message : '다시 시도해 주세요.'});
            dispatch(postStateResetAction());
        } else if(post_create_state.status === 'success') {
            // 저장 성공 했을때.
            setEditorTitle('');
            setEditorContents({ html: '', text: '' });
            setEditorTagContents([]);

            // 스테이트 리셋.
            dispatch(postStateResetAction());
            history.push({
                pathname: process.env.PUBLIC_URL + `/admin/${post_create_state.data.post_uuid}/edit`,
                state: { edit: true }
            });
        }
    }, [dispatch, history, post_create_state]);

    // 에디트 모드일 경우 edit store 에서 내용을 가지오 와서 셋.
    useEffect(() => {
        if(post_edit_state.status === 'success') {
            setEditorTitle(post_edit_state.data.post_title);
            setEditorContents({
                html: post_edit_state.data.contents_html,
                text: post_edit_state.data.contents_text
            });
            setEditorTagContents(post_edit_state.data.tags.map((e: any) => {
            return {
                id: e.tag_id,
                text: e.tag_text
            }
            }));
            dispatch(postEditResetAction());
        }
    }, [dispatch, post_edit_state]);

    // edit 모드 일 경우 edit saga 호출
    // FIXME 2020-09-26 18:04 두번 로딩됨.
    useEffect(() => {
        console.debug("params", params);
        if(params.post_uuid && !_.isUndefined(params.post_uuid)) {
            dispatch(postEditAction({post_uuid: params.post_uuid}));
        }
    }, [dispatch, location, params.post_uuid]);

    // 게시 버튼 클릭 했을떄 publish state 상태 확인.
    useEffect(() => {
        if(post_publish_state.status === 'success') {
            dispatch(postPublishResetAction());
            history.push({
                pathname: process.env.PUBLIC_URL + `/`
            });
        }
    }, [dispatch, history, post_publish_state]);

    // update 상태 확인후 리셋만.
    useEffect(() => {
        if(post_update_state.status === 'success') {
            dispatch(postUpdateResetAction());
        }
    }, [dispatch, post_update_state]);

    useEffect(() => {
        // console.debug('page');
    });

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
        post_publish_state,
    };
}