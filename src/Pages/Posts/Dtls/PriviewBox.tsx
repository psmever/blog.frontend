import React, { useState, useEffect } from 'react';
import { RootState } from 'StoreTypes';
import { EditorData } from 'CommonTypes';
import { useSelector } from 'react-redux';

import { StyledPreviewTitle, RightEditorPreviewContents } from '@Style/WrtePageStyle';
import MarkdownRender from '@Element/Markdown/MarkdownRender';

export default function PriviewBox() {
    const { contentsInfo } = useSelector((store: RootState) => ({
        contentsInfo: store.posts.contents.info,
    }));

    const [previewData, setPreviewData] = useState<{ title: string; content: string }>({
        title: '',
        content: '',
    });

    useEffect(() => {
        const setPreviewDataView = (element: EditorData) => {
            setPreviewData({
                title: element.title,
                content: element.content,
            });
        };

        setPreviewDataView(contentsInfo);
    }, [contentsInfo]);

    return (
        <>
            <StyledPreviewTitle>{previewData.title ? previewData.title : '제목을 입력해 주세요.'}</StyledPreviewTitle>
            <RightEditorPreviewContents>
                <MarkdownRender markdownText={previewData.content} />
            </RightEditorPreviewContents>
        </>
    );
}
