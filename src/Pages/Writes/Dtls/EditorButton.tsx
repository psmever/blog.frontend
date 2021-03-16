import React from 'react';
import { RootState } from 'StoreTypes';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { ButtonBox, Buttons } from '@Style/WrtePageStyle';
import { EditorActionButton } from '@Element/Buttons';

export default function EditorButton() {
    const { ContentsGubun } = useSelector((store: RootState) => ({
        ContentsGubun: store.posts.contents.gubun,
    }));

    const history = useHistory();

    const handleClickExitButton = () => {
        history.push({
            pathname: process.env.PUBLIC_URL + `/${ContentsGubun}`,
        });
    };

    const handleClickSaveButton = () => {
        console.debug('handleClickSaveButton');
    };

    const handleClickPublishButton = () => {
        console.debug('handleClickPublishButton');
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
