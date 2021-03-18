import React, { useRef, useEffect } from 'react';
import Swal from 'sweetalert2';
import { PostButtonAction } from 'CommonTypes';
import { RootState } from 'StoreTypes';
import { useHistory, useParams } from 'react-router-dom';
import { useDimensions, usePostSave } from '@Hooks';
import { useDispatch, useSelector } from 'react-redux';
import { clearPostContents, clearPostDetail, changePostGubun, clearPostButtonAction, getPostEdit } from '@Store/Posts';
import { WriteBox, WriteContainer, LeftEditorBox, RightEditorPreviewBox } from '@Style/WrtePageStyle';

import { isEmpty } from '@Helper';

import EditorBox from './EditorBox';
import PriviewBox from './PriviewBox';
import EditorButton from './EditorButton';

export default function Write() {
    const { pathName, contentsButtonAction, contentsGubun, contentsContentsGubun } = useSelector(
        (store: RootState) => ({
            pathName: store.router.location.pathname,
            contentsGubun: store.posts.contents.gubun,
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

    useEffect(() => {
        const setPagePathName = (pathname: string) => {
            if (pathname === 'posts' || pathname === 'scribble' || pathname === 'blog' || pathname === 'mingun') {
                dispatch(changePostGubun({ gubun: pathname }));
            }
        };

        if (pathName) {
            const pathArray = pathName.split('/').filter(e => e);
            setPagePathName(pathArray[0]);
        }
    }, [pathName]);

    // TODO: 2021-03-17 00:19 글 수정 처리및, 등록 중인 포스트 보여 주기 추라.
    useEffect(() => {
        const doWritePageAction = (buttonAction: PostButtonAction) => {
            if (buttonAction === 'exit') {
                history.push({
                    pathname: process.env.PUBLIC_URL + `/${contentsGubun}`,
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
                        pathname: `/${contentsGubun}/${postActionState.payload.post_uuid}/edit`,
                    });
                } else {
                    throw new Error(`Error: 등록 처리중 문제가 발생했습니다.`);
                }
            } else if (contentsButtonAction === 'publish' || contentsButtonAction === 'hide') {
                dispatch(clearPostButtonAction());
                history.push({
                    pathname: `/${contentsGubun}/${contentsContentsGubun.post_uuid}/edit`,
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
        const checkRouterPostInfo = ({
            write_gubun,
            post_uuid,
            write_mode,
        }: {
            write_gubun: string;
            post_uuid: string;
            write_mode: string;
        }) => {
            if (write_mode === 'edit') {
                if (write_gubun === 'posts' && !isEmpty(post_uuid)) {
                    // 포스트 정보 가지고 오기.
                    dispatch(getPostEdit({ post_uuid: post_uuid }));
                }
            }
        };

        if (!isEmpty(params)) {
            checkRouterPostInfo(params);
        }
    }, [params]);

    useEffect(() => {
        return () => {
            // 나갈때 초기화.
            dispatch(clearPostContents());
            dispatch(clearPostDetail());
        };
    }, []);

    return (
        <WriteBox ref={inputRef}>
            <WriteContainer>
                <LeftEditorBox>
                    <EditorBox editBoxSizeState={editBoxSizeState} writeMode={params.write_mode} />
                    <EditorButton />
                </LeftEditorBox>
                <RightEditorPreviewBox>
                    <PriviewBox />
                </RightEditorPreviewBox>
            </WriteContainer>
        </WriteBox>
    );
}
