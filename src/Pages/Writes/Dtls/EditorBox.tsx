import React, { useRef, useState, useEffect, useCallback } from 'react';
import { DimensionsResult, EditorData } from 'CommonTypes';
import { RootState } from 'StoreTypes';
import { useDispatch, useSelector } from 'react-redux';
import { changePostContents } from '@Store/Posts';
import { WriteTitleBox, WriteTitleLabel, WriteTitle, TagBox, MarkdownEditorBox } from '@Style/WrtePageStyle';
import MarkdownEditor from '@Element/Markdown/MarkdownEditor';
import ReactTagsinput from 'react-tagsinput';

import '@Style/ReactTagStyle.css';

// https://github.com/olahol/react-tagsinput
export default function EditorBox({ editBoxSizeState }: { editBoxSizeState: DimensionsResult }) {
    const ContentsState = useSelector((store: RootState) => store.posts.contents.state);

    const { contentsInfo } = useSelector((store: RootState) => ({
        contentsInfo: store.posts.contents.info,
    }));

    const dispatch = useDispatch();

    const titleInputRef = useRef<HTMLInputElement>(null);

    const [tagData, setTagData] = useState<string>('');

    const [editorData, setEditorData] = useState<EditorData>({
        title: '',
        tags: [],
        content: '',
    });

    const handleChangesTag = useCallback((e: any) => {
        setTagData(e);
    }, []);

    useEffect(() => {
        const setStorePostContent = (element: EditorData) => {
            dispatch(
                changePostContents({
                    ...contentsInfo,
                    title: element.title,
                    tags: element.tags,
                    content: element.content,
                })
            );
        };

        setStorePostContent(editorData);
    }, [editorData]);

    return (
        <>
            {ContentsState === 'ready' && (
                <>
                    <WriteTitleBox>
                        <WriteTitleLabel htmlFor="writeTitle">
                            <WriteTitle
                                type="text"
                                ref={titleInputRef}
                                placeholder="제목을 입력해 주세요."
                                value={editorData.title}
                                onChange={e => {
                                    setEditorData({
                                        ...editorData,
                                        title: e.target.value,
                                    });
                                }}
                            />
                        </WriteTitleLabel>
                    </WriteTitleBox>
                    <TagBox>
                        <ReactTagsinput
                            value={editorData.tags}
                            onChange={e => {
                                setEditorData({
                                    ...editorData,
                                    tags: e,
                                });
                            }}
                            inputValue={tagData}
                            onChangeInput={handleChangesTag}
                            inputProps={{
                                placeholder: '태그를 입력해 주세요.',
                            }}
                        />
                    </TagBox>
                    <MarkdownEditorBox>
                        <MarkdownEditor
                            EditorContents={editorData.content}
                            EditorContentsHandler={e => {
                                setEditorData({
                                    ...editorData,
                                    content: e,
                                });
                            }}
                            editBoxSizeState={editBoxSizeState}
                        />
                    </MarkdownEditorBox>
                </>
            )}
        </>
    );
}
