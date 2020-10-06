import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    editorContentsInterface,
    editorTagInterface,
    defaultSelectBoxInterface,
    defaultSelectBoxItems,
    postRequestInterface,
    basicCodeItem,
} from 'commonTypes';
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
import * as Helper from 'lib/Helper';

import { useHistory } from 'react-router-dom';
import * as _ from "lodash";


interface RouteParams {
    post_uuid: string;
}

export default function useWrite() {

    // FIXME 2020-09-26 18:19  리팩토리 필요.
    // 글을 세로 등록 할때 저장을 누르면 edit 모드로 변경 하는데.. 바꿔야 하나?
    // edit 모드 일떄 params 으로 체크를 하니 로딩이 두번됨.

    const dispatch = useDispatch();
    const history = useHistory();

    const params = useParams<RouteParams>();

    // TODO 2020-09-28 21:22  스테이트명 정리.
    const baseState = useSelector((state: RootState) => state.base);
    const post_create_state = useSelector((state: RootState) => state.post.create);
    const post_edit_state = useSelector((state: RootState) => state.post.edit);
    const post_update_state = useSelector((state: RootState) => state.post.update);
    const post_publish_state = useSelector((state: RootState) => state.post.publish);

    const [ editorTitle, setEditorTitle] = useState<string>('');

    const [ editorContents, setEditorContents ] = useState<editorContentsInterface>({
        html: '',
        text: ''
    });

    // 리스트 이미지용 카테고리 select box options
    const [ categoryThumbList, setCategoryThumbList ] = useState<defaultSelectBoxInterface>([
        { value: '', label: '' }
    ]);

    // 글 쓰기 테그.
    const [ editorTagContents, setEditorTagContents ] = useState<editorTagInterface>([]);

    // 글 쓰기 추천 테그.
    // FIXME 2020-10-02 01:23  테그 처리.
    const [ editorTagSuggestions, setEditorTagSuggestions] = useState<editorTagInterface>([
        { id: 'Develop', text: 'Develop' },
        { id: 'Linux', text: 'Linux' },
        { id: 'Javascript', text: 'Javascript' },
        { id: 'PHP', text: 'PHP' },
    ]);

    const [ editorCategoryThumb, setEditorCategoryThumb ] = useState<defaultSelectBoxItems>({value: 'S05000', label: 'blog-default' });


    const _handleEditorCategorySelectItem = (selectitem:defaultSelectBoxItems ) => {
        setEditorCategoryThumb(selectitem)
    }

    // 글 저장 및 업데이트
    const _handleClickSaveButton = () => {
        const dataObject : postRequestInterface = {
            title: editorTitle,
            category_thumb: editorCategoryThumb.value,
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
                pathname: process.env.PUBLIC_URL + `/admin/${post_create_state.data?.post_uuid}/edit`,
                state: { edit: true }
            });
        }
    }, [dispatch, history, post_create_state]);

    // 에디트 모드일 경우 edit store 에서 내용을 가지오 와서 셋.
    useEffect(() => {
        if(post_edit_state.status === 'success' && post_edit_state.data !== undefined) {

            setEditorTitle(post_edit_state.data.post_title);
            setEditorCategoryThumb({value: post_edit_state.data.category_thumb.code_id, label: post_edit_state.data.category_thumb.code_name});
            setEditorTagContents(post_edit_state.data.tags.map((element: any) => {
                return {
                    id: element.tag_id,
                    text: element.tag_text
                }
            }));
            setEditorContents({
                html: post_edit_state.data.contents_html,
                text: post_edit_state.data.contents_text
            });
            dispatch(postEditResetAction());

        }
    }, [dispatch, post_edit_state]);

    // edit 모드 일 경우 edit saga 호출
    // FIXME 2020-09-26 18:04 두번 로딩됨.
    useEffect(() => {
        if(params.post_uuid && !_.isUndefined(params.post_uuid)) {
            dispatch(postEditAction({post_uuid: params.post_uuid}));
        }
    // eslint-disable-next-line
    }, [params.post_uuid]);

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
        if(baseState.status === 'success') {
            setCategoryThumbList(baseState.codes?.code_group.S05.map((e: basicCodeItem) => {
                return {
                    value: e.code_id,
                    label: e.code_name
                }
            }));
        }
    }, [baseState]);

    useEffect(() => {
        // console.debug(willMount);
        // console.debug(history.location.state);
        // willMount.current = false;
        const localstorage = Helper.getLocalToken();
        // console.debug(localstorage);
        if(localstorage.login_state === null || localstorage.login_state === false) {
            _Alert_.error({text: '로그인한 사용자만 이용할수 있습니다.'});
            history.push({
                pathname: process.env.PUBLIC_URL + '/admin/login',
                state: {
                    befor: 'write'
                }
            });
        }
        // FIXME 2020-10-06 13:45 리팩토리.
    // eslint-disable-next-line
    }, []);

    useEffect(() => {
        console.debug(editorTitle);
    }, [editorTitle]);

    return {
        editorTitle,
        setEditorTitle,
        setEditorContents,
        editorContents,
        editorTagContents,
        setEditorTagContents,
        editorTagSuggestions,
        setEditorTagSuggestions,
        _handleEditorCategorySelectItem,
        editorCategoryThumb,

        _handleClickSaveButton,
        _handleClickPublishButton,

        post_create_state,
        post_publish_state,

        categoryThumbList,
    };
}