import React, { useRef } from 'react';
import { WriteBox, WriteContainer, LeftEditorBox, RightEditorPreviewBox } from '@Style/WrtePageStyle';

import EditorBox from './EditorBox';
import PriviewBox from './PriviewBox';

export default function Write() {
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <WriteBox>
            <WriteContainer>
                <LeftEditorBox ref={inputRef}>
                    <EditorBox />
                </LeftEditorBox>
                <RightEditorPreviewBox>
                    <PriviewBox />
                </RightEditorPreviewBox>
            </WriteContainer>
        </WriteBox>
    );
}
