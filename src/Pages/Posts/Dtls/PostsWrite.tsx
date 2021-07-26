import React, { useRef, useEffect } from 'react';
import Swal from 'sweetalert2';
import { PostButtonAction } from 'CommonTypes';
import { RootState } from 'StoreTypes';
import { useHistory, useParams } from 'react-router-dom';
import { useDimensions, usePostSave } from '@Hooks';
import { useDispatch, useSelector } from 'react-redux';
import { PageSpinner } from '@Element/Spinners';
import {
    clearPostContents,
    clearPostDetail,
    clearPostLists,
    clearPostButtonAction,
    getPostEdit,
    clearPostContentsState,
} from '@Store/Posts';
import { WriteBox, WriteContainer, LeftEditorBox, RightEditorPreviewBox } from '@Style/WrtePageStyle';
import { loginCheck } from '@API';
import { isEmpty } from '@Helper';

import EditorBox from './EditorBox';
import PriviewBox from './PriviewBox';
import EditorButton from './EditorButton';

export default function PostsWrite() {
    const { appLoginInit, appLoading, appLoginState, contentsButtonAction, contentsContentsGubun } = useSelector(
        (store: RootState) => ({
            appLoading: store.app.loading,
            appLoginState: store.app.loginState,
            appLoginInit: store.app.appInit,
            contentsContentsGubun: store.posts.contents.contentsGubun,
            contentsButtonAction: store.posts.contents.buttonAction,
        })
    );

    const params = useParams<{
        write_gubun: string;
        post_uuid: string;
        write_mode: string;
    }>();

    const history = useHistory();
    const dispatch = useDispatch();
    const inputRef = useRef<HTMLInputElement>(null);
    const [editBoxSizeState] = useDimensions(inputRef);
    const [postActionState, postSaveAction] = usePostSave();

    // useEffect(() => {
    //     if (pathName) {
    //         // const pathArray = pathName.split('/').filter(e => e);
    //         // setPagePathName(pathArray[0]);
    //         dispatch(changePostGubun({ gubun: 'posts' }));
    //     }
    // }, [pathName]);

    useEffect(() => {
        const doWritePageAction = (buttonAction: PostButtonAction) => {
            if (buttonAction === 'exit') {
                history.push({
                    pathname: process.env.PUBLIC_URL + `/posts`,
                });
            } else if (buttonAction === 'save') {
                Swal.fire({
                    title: '저장 하시겠습니까?',
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: '저장',
                    cancelButtonText: '취소',
                }).then(result => {
                    if (result.isConfirmed) {
                        postSaveAction();
                    } else {
                        dispatch(clearPostButtonAction());
                    }
                });
            } else if (buttonAction === 'update') {
                Swal.fire({
                    title: '수정 하시겠습니까?',
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: '수정',
                    cancelButtonText: '취소',
                }).then(result => {
                    if (result.isConfirmed) {
                        postSaveAction();
                    } else {
                        dispatch(clearPostButtonAction());
                    }
                });
            } else if (buttonAction === 'publish') {
                Swal.fire({
                    title: '개시 처리 하시겠습니까?',
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: '개시',
                    cancelButtonText: '취소',
                }).then(result => {
                    if (result.isConfirmed) {
                        postSaveAction();
                    } else {
                        dispatch(clearPostButtonAction());
                    }
                });
            } else if (buttonAction === 'hide') {
                Swal.fire({
                    title: '숨김 처리 하시겠습니까?',
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: '숨김',
                    cancelButtonText: '취소',
                }).then(result => {
                    if (result.isConfirmed) {
                        postSaveAction();
                    } else {
                        dispatch(clearPostButtonAction());
                    }
                });
            }
        };

        if (contentsButtonAction !== 'idle') {
            doWritePageAction(contentsButtonAction);
        }
    }, [contentsButtonAction]);

    useEffect(() => {
        if (postActionState.state === 'success') {
            Swal.fire('처리 되었습니다.', '', 'success');
            if (contentsButtonAction === 'save' || contentsButtonAction === 'update') {
                dispatch(clearPostButtonAction());
                if (postActionState.payload && postActionState.payload.post_uuid) {
                    history.push({
                        pathname: process.env.PUBLIC_URL + `/posts/${postActionState.payload.post_uuid}/edit`,
                    });
                } else {
                    throw new Error(`Error: 등록 처리중 문제가 발생했습니다.`);
                }
            } else if (contentsButtonAction === 'publish' || contentsButtonAction === 'hide') {
                dispatch(clearPostButtonAction());
                history.push({
                    pathname: `/posts/${contentsContentsGubun.post_uuid}/edit`,
                });
            }
        } else if (postActionState.state === 'failure') {
            Swal.fire({
                icon: 'error',
                title: postActionState.message ? postActionState.message : '알수 없는 문제가 발생했습니다.',
            });
        }
    }, [postActionState]);

    useEffect(() => {
        const checkRouterPostInfo = async ({ post_uuid, write_mode }: { post_uuid: string; write_mode: string }) => {
            const checkResult = await loginCheck();
            if (checkResult.status) {
                if (write_mode === 'edit') {
                    if (!isEmpty(post_uuid)) {
                        // 포스트 정보 가지고 오기.
                        dispatch(getPostEdit({ post_uuid: post_uuid }));
                    }
                }
            }
        };

        if (isEmpty(params)) {
            dispatch(clearPostContentsState({ state: 'ready' }));
        } else {
            checkRouterPostInfo(params);
        }
    }, [params]);

    useEffect(() => {
        if (appLoginInit === true && appLoading === false) {
            if (appLoginState === 'failure') {
                Swal.fire({
                    text: '로그인 하시겠습니까?',
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: '로그인',
                    cancelButtonText: '취소',
                }).then(result => {
                    if (result.isConfirmed) {
                        history.push({
                            pathname: process.env.PUBLIC_URL + `/login`,
                        });
                    } else {
                        history.push({
                            pathname: process.env.PUBLIC_URL + `/`,
                        });
                    }
                });
            }
        }
    }, [appLoginState, appLoading, appLoginInit]);

    useEffect(() => {
        return () => {
            // 나갈때 초기화.
            dispatch(clearPostLists());
            dispatch(clearPostContents());
            dispatch(clearPostDetail());
        };
    }, []);

    return (
        <WriteBox ref={inputRef}>
            {(function () {
                if (appLoading === false && appLoginState === 'success' && editBoxSizeState.state === 'success') {
                    return (
                        <WriteContainer>
                            <LeftEditorBox>
                                <EditorBox editBoxSizeState={editBoxSizeState} writeMode={params.write_mode} />
                                <EditorButton />
                            </LeftEditorBox>
                            <RightEditorPreviewBox>
                                <PriviewBox />
                            </RightEditorPreviewBox>
                        </WriteContainer>
                    );
                } else {
                    return (
                        <WriteContainer>
                            <PageSpinner />
                        </WriteContainer>
                    );
                }
            })()}
        </WriteBox>
    );
}
