import React from 'react';
import { EditorActionButton } from '@Element/Buttons';
import { ButtonBox, Buttons } from '@Style/WrtePageStyle';

export default function EditorButton({
    handleExitButton,
    handleSaveButton,
}: {
    handleExitButton: () => void;
    handleSaveButton: () => void;
}) {
    return (
        <ButtonBox>
            <Buttons>
                <EditorActionButton name={'나가기'} onClickHandler={() => handleExitButton()} />
                <EditorActionButton name={'저장'} onClickHandler={() => handleSaveButton()} />
            </Buttons>
        </ButtonBox>
    );
}
