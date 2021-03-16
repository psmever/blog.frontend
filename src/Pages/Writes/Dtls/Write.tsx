import React, { useRef, useEffect } from 'react';
import { WriteBox, WriteContainer, LeftEditorBox, RightEditorPreviewBox } from '@Style/WrtePageStyle';
import { useDimensions } from '@Hooks';

import EditorBox from './EditorBox';
import PriviewBox from './PriviewBox';

export default function Write() {
    const inputRef = useRef<HTMLInputElement>(null);
    const EditorBoxSize = useDimensions(inputRef);

    return (
        <WriteBox>
            <WriteContainer>
                <LeftEditorBox ref={inputRef}>
                    <EditorBox editorBoxSize={EditorBoxSize} />
                </LeftEditorBox>
                <RightEditorPreviewBox>
                    <PriviewBox />
                </RightEditorPreviewBox>
            </WriteContainer>
        </WriteBox>
    );
}
