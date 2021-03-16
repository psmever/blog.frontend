import React from 'react';
import { useDispatch } from 'react-redux';
import { changePostButtonAction } from '@Store/Posts';

import { ButtonBox, Buttons } from '@Style/WrtePageStyle';
import { EditorActionButton } from '@Element/Buttons';

export default function EditorButton() {
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

    // 글 등록 하단 개시 버튼 처리.
    const handleClickPublishButton = () => {
        dispatch(
            changePostButtonAction({
                buttonAction: 'publish',
            })
        );
    };

    return (
        <>
            <ButtonBox>
                <Buttons>
                    <EditorActionButton name={'나가기'} onClickHandler={() => handleClickExitButton()} />
                    <EditorActionButton name={'저장'} onClickHandler={() => handleClickSaveButton()} />
                    <EditorActionButton name={'개시'} onClickHandler={() => handleClickPublishButton()} />
                </Buttons>
            </ButtonBox>
        </>
    );
}
