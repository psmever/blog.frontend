import React from 'react';
import { EdittorActionButton, EdittorActionButtonSpan } from '@Style/ButtonStyles';

export default function EditorActionButton({ name, onClickHandler }: { name: string; onClickHandler: () => void }) {
    return (
        <>
            <EdittorActionButton onClick={() => onClickHandler()}>
                <EdittorActionButtonSpan>{name}</EdittorActionButtonSpan>
            </EdittorActionButton>
        </>
    );
}
