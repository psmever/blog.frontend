import React, { useRef, useState, useEffect } from 'react';
import { SectionGubunItem, DimensionsResult } from 'CommonTypes';
import { WriteTitleBox, WriteTitleLabel, WriteTitle, MarkdownEditorBox } from '@Style/WrtePageStyle';
import MarkdownEditor from '@Element/Markdown/MarkdownEditor';
import { getSectionDetail } from '@API';
import _Alert_ from '@_Alert_';

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
        const setEditorTitle = (gubun: SectionGubunItem) => {
            if (gubun === 'scribble') {
                setSectionTitle('끄적끄적');
            } else if (gubun === 'blog') {
                setSectionTitle('블로그 소개');
            } else if (gubun === 'mingun') {
                setSectionTitle('주인장은');
            }
        };

        const fetchesSectionData = async (gubun: SectionGubunItem) => {
            const { status, payload } = await getSectionDetail({ section: gubun });
            if (status) {
                setContentsData(payload.contents_text);
            } else {
                _Alert_.defaultInfo({ text: '데이터를 가지고 오는데 실패 했습니다.' });
            }
        };

        if (SectionGubun) {
            setEditorTitle(SectionGubun);
            fetchesSectionData(SectionGubun);
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
                        placeholder=""
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
