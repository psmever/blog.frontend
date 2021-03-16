import React, { useRef, useEffect } from 'react';
import { PostButtonAction } from 'CommonTypes';
import { RootState } from 'StoreTypes';
import { useHistory } from 'react-router-dom';
import { useDimensions, usePostSave } from '@Hooks';
import { useDispatch, useSelector } from 'react-redux';
import { clearPostContents, changePostGubun, clearPostButtonAction, changePostContentsGubun } from '@Store/Posts';
import { WriteBox, WriteContainer, LeftEditorBox, RightEditorPreviewBox } from '@Style/WrtePageStyle';
import EditorBox from './EditorBox';
import PriviewBox from './PriviewBox';
import EditorButton from './EditorButton';
import Swal from 'sweetalert2';

export default function Write() {
    const { pathName, contentsButtonAction, contentsGubun } = useSelector((store: RootState) => ({
        pathName: store.router.location.pathname,
        contentsGubun: store.posts.contents.gubun,
        contentsButtonAction: store.posts.contents.buttonAction,
    }));

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
                    }
                });
            } else if (buttonAction === 'publish') {
                Swal.fire({
                    title: '개시 하시겠습니까?',
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: '저장',
                    cancelButtonText: '취소',
                }).then(result => {
                    if (result.isConfirmed) {
                        postSaveAction();
                    }
                });
            }
        };

        if (contentsButtonAction !== 'idle') {
            doWritePageAction(contentsButtonAction);
        }
    }, [contentsButtonAction]);

    useEffect(() => {
        dispatch(clearPostButtonAction());
        if (postActionState.state === 'success') {
            if (postActionState.payload) {
                dispatch(
                    changePostContentsGubun({
                        post_uuid: postActionState.payload.post_uuid,
                        slug_title: postActionState.payload.slug_title,
                    })
                );
            }
            Swal.fire('저장되었습니다.', '', 'success');
        } else if (postActionState.state === 'failure') {
            Swal.fire({
                icon: 'error',
                title: postActionState.message ? postActionState.message : '알수 없는 문제가 발생했습니다.',
            });
        }
    }, [postActionState]);

    useEffect(() => {
        return () => {
            dispatch(clearPostContents());
        };
    }, []);

    return (
        <WriteBox ref={inputRef}>
            <WriteContainer>
                <LeftEditorBox>
                    <EditorBox editBoxSizeState={editBoxSizeState} />
                    <EditorButton />
                </LeftEditorBox>
                <RightEditorPreviewBox>
                    <PriviewBox />
                </RightEditorPreviewBox>
            </WriteContainer>
        </WriteBox>
    );
}
