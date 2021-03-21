import { RootState } from 'StoreTypes';
import { useDispatch, useSelector } from 'react-redux';
import { changePostButtonAction } from '@Store/Posts';

import { ButtonBox, Buttons } from '@Style/WrtePageStyle';
import { EditorActionButton } from '@Element/Buttons';

import { isEmpty } from '@Helper';

export default function EditorButton() {
    const { postsContentsGubun } = useSelector((store: RootState) => ({
        postsContentsGubun: store.posts.contents.contentsGubun,
    }));

    const { post_uuid, post_publish } = postsContentsGubun;

    const dispatch = useDispatch();

    // 글 등록 하단 나가기 버튼 처리.
    const handleClickExitButton = () => {
        dispatch(
            changePostButtonAction({
                buttonAction: 'exit',
            })
        );
    };

    // 글 등록 하단 저장 버튼 처리.
    const handleClickSaveButton = () => {
        dispatch(
            changePostButtonAction({
                buttonAction: 'save',
            })
        );
    };

    // 내용 업데이트.
    const handleClickUpdateButton = () => {
        dispatch(
            changePostButtonAction({
                buttonAction: 'update',
            })
        );
    };

    // 글 등록 하단 개시 버튼 처리.
    const handleClickPublishButton = () => {
        dispatch(
            changePostButtonAction({
                buttonAction: 'publish',
            })
        );
    };

    // 글 숨김 처리.
    const handleClickHideButton = () => {
        dispatch(
            changePostButtonAction({
                buttonAction: 'hide',
            })
        );
    };

    return (
        <ButtonBox>
            <Buttons>
                <EditorActionButton name={'나가기'} onClickHandler={() => handleClickExitButton()} />
                {(function () {
                    if (isEmpty(post_uuid)) {
                        return <EditorActionButton name={'저장'} onClickHandler={() => handleClickSaveButton()} />;
                    } else {
                        return <EditorActionButton name={'수정'} onClickHandler={() => handleClickUpdateButton()} />;
                    }
                })()}
                {(function () {
                    if (!isEmpty(post_uuid)) {
                        if (post_publish === 'Y') {
                            return <EditorActionButton name={'숨김'} onClickHandler={() => handleClickHideButton()} />;
                        } else {
                            return (
                                <EditorActionButton name={'개시'} onClickHandler={() => handleClickPublishButton()} />
                            );
                        }
                    }
                })()}
            </Buttons>
        </ButtonBox>
    );
}
