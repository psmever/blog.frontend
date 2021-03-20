import React, { useRef, useState, useEffect, useCallback } from 'react';
import { DimensionsResult, EditorData, TagItem } from 'CommonTypes';
import { RootState } from 'StoreTypes';
import { useDispatch, useSelector } from 'react-redux';
import { changePostContents, changePostContentsGubun } from '@Store/Posts';
import { WriteTitleBox, WriteTitleLabel, WriteTitle, TagBox, MarkdownEditorBox } from '@Style/WrtePageStyle';
import MarkdownEditor from '@Element/Markdown/MarkdownEditor';
import ReactTagsinput from 'react-tagsinput';

import '@Style/ReactTagStyle.css';

// https://github.com/olahol/react-tagsinput
export default function EditorBox({
    editBoxSizeState,
    writeMode,
}: {
    editBoxSizeState: DimensionsResult;
    writeMode: string;
}) {
    const { contentsInfo, detailState, detailInfo } = useSelector((store: RootState) => ({
        contentsInfo: store.posts.contents.info,
        detailState: store.posts.detail.state,
        detailInfo: store.posts.detail.info,
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

    // 수정 모드 일때 Store 에 글 상세 정보 스테이트 확인추 내용 업데이트.
    useEffect(() => {
        const editDataSet = () => {
            setEditorData({
                ...editorData,
                title: detailInfo.post_title,
                tags: detailInfo.tags.map((e: TagItem) => {
                    return e.tag_text;
                }),
                content: detailInfo.contents_text,
            });

            // 글 구분값 설정.
            dispatch(
                changePostContentsGubun({
                    post_uuid: detailInfo.post_uuid,
                    slug_title: detailInfo.slug_title,
                    post_active: detailInfo.post_active,
                    post_publish: detailInfo.post_publish,
                })
            );
        };

        if (writeMode === 'edit') {
            if (detailState === 'success') {
                editDataSet();
            }
        }
    }, [detailState, writeMode]);

    return (
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
    );
}
