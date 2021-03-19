import React, { useRef, useState, useEffect } from 'react';
import { SectionGubunItem, DimensionsResult } from 'CommonTypes';
import { WriteTitleBox, WriteTitleLabel, WriteTitle, MarkdownEditorBox } from '@Style/WrtePageStyle';
import MarkdownEditor from '@Element/Markdown/MarkdownEditor';

export default function EditorBox({
    editBoxSizeState,
    SectionGubun,
    handleChangeContent,
}: {
    editBoxSizeState: DimensionsResult;
    SectionGubun: SectionGubunItem;
    handleChangeContent: (content: string) => void;
}) {
    const titleInputRef = useRef<HTMLInputElement>(null);
    const [sectionTitle, setSectionTitle] = useState<string>('');
    const [contentsData, setContentsData] = useState<string>('');

    useEffect(() => {
        const setEditorTitle = (gubun: string) => {
            if (gubun === 'scribble') {
                setSectionTitle('끄적끄적');
            } else if (gubun === 'blog') {
                setSectionTitle('블로그 소개');
            } else if (gubun === 'mingun') {
                setSectionTitle('주인장은');
            }
        };

        if (SectionGubun) {
            setEditorTitle(SectionGubun);
        }
    }, [SectionGubun]);

    useEffect(() => {
        handleChangeContent(contentsData);
    }, [contentsData]);

    return (
        <>
            <WriteTitleBox>
                <WriteTitleLabel htmlFor="writeTitle">
                    <WriteTitle
                        type="text"
                        ref={titleInputRef}
                        placeholder="제목을 입력해 주세요."
                        value={`${sectionTitle} 등록`}
                        onChange={e => {
                            console.debug(e);
                        }}
                    />
                </WriteTitleLabel>
            </WriteTitleBox>

            <MarkdownEditorBox>
                <MarkdownEditor
                    EditorContents={contentsData}
                    EditorContentsHandler={e => {
                        setContentsData(e);
                    }}
                    editBoxSizeState={editBoxSizeState}
                />
            </MarkdownEditorBox>
        </>
    );
}
