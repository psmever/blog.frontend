import React, { useState, useEffect } from 'react';
import { RightEditorPreviewContents } from '@Style/WrtePageStyle';
import MarkdownRender from '@Element/Markdown/MarkdownRender';

export default function PriviewBox({ priviewContent }: { priviewContent: string }) {
    const [previewData, setPreviewData] = useState<{ content: string }>({
        content: '',
    });

    useEffect(() => {
        setPreviewData({
            content: priviewContent,
        });
    }, [priviewContent]);

    return (
        <RightEditorPreviewContents>
            <MarkdownRender markdownText={previewData.content} />
        </RightEditorPreviewContents>
    );
}
