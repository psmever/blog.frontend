import React, { useState } from 'react';

import { StyledPreviewTitle, RightEditorPreviewContents } from '@Style/WrtePageStyle';
import MarkdownRender from '@Element/Markdown/MarkdownRender';

export default function PriviewBox() {
    const [editorTitle] = useState<string>('');
    const [editorContents] = useState<string>('');
    return (
        <>
            <StyledPreviewTitle>{editorTitle ? editorTitle : '제목을 입력해 주세요.'}</StyledPreviewTitle>
            <RightEditorPreviewContents>
                <MarkdownRender markdownText={editorContents} />
            </RightEditorPreviewContents>
        </>
    );
}
