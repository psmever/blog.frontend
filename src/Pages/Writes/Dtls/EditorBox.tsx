import React, { useRef, useState, useEffect, useCallback } from 'react';
import { WriteTitleBox, WriteTitleLabel, WriteTitle, TagBox, MarkdownEditorBox } from '@Style/WrtePageStyle';
import MarkdownEditor from '@Element/Markdown/MarkdownEditor';
import TagsInput from 'react-tagsinput';

import '@Style/ReactTagStyle.css';
// import { editorTagInterface } from 'CommonTypes';

// https://github.com/olahol/react-tagsinput
export default function EditorBox({ editorBoxSize }: { editorBoxSize: { width: number; height: number } }) {
    const inputRef = useRef<HTMLInputElement>(null);

    const titleInputRef = useRef<HTMLInputElement>(null);

    const [editorTitle, setEditorTitle] = useState<string>('');
    const [tagsData, setTagsData] = useState<string[]>([]);
    const [tagData, setTagData] = useState<string>('');

    const handleChangesTags = useCallback((e: any) => {
        setTagsData(e);
    }, []);

    const handleChangesTagsinput = useCallback((e: any) => {
        setTagData(e);
    }, []);

    const handleEditorContents = (e: any) => {
        console.log(e);
    };

    useEffect(() => {
        console.log({
            tagsData: tagsData,
            tagData: tagData,
        });
    }, [tagsData, tagData]);

    useEffect(() => {
        console.log(editorBoxSize);
    }, [editorBoxSize]);

    return (
        <div ref={inputRef}>
            <WriteTitleBox>
                <WriteTitleLabel htmlFor="writeTitle">
                    <WriteTitle
                        type="text"
                        ref={titleInputRef}
                        placeholder="제목을 입력해 주세요."
                        value={editorTitle}
                        onChange={e => setEditorTitle(e.target.value)}
                    />
                </WriteTitleLabel>
            </WriteTitleBox>
            <TagBox>
                <TagsInput
                    value={tagsData}
                    onChange={handleChangesTags}
                    inputValue={tagData}
                    onChangeInput={handleChangesTagsinput}
                    inputProps={{
                        placeholder: '테그를 입력해 주세요.',
                    }}
                />
            </TagBox>
            <MarkdownEditorBox>
                <MarkdownEditor EditorContents={``} EditorContentsHandler={handleEditorContents} EditorHeight={926} />
            </MarkdownEditorBox>
        </div>
    );
}

/**

const [editorTagSuggestions, setEditorTagSuggestions] = useState<editorTagInterface>([
        { id: 'Develop', text: 'Develop' },
        { id: 'Linux', text: 'Linux' },
        { id: 'Javascript', text: 'Javascript' },
        { id: 'PHP', text: 'PHP' },
    ]);
    const handleTagDelete = (e: any) => {
        setEditorTagContents(editorTagContents.filter((tag, index) => index !== e));
    };

    const handleTagAddition = (e: any) => {
        setEditorTagContents([...editorTagContents, e]);
    };

    const handleTagDrag = (tag: any, currPos: any, newPos: any) => {
        const tags = [...editorTagContents];
        const newTags = tags.slice();

        newTags.splice(currPos, 1);
        newTags.splice(newPos, 0, tag);

        setEditorTagContents(newTags);
    };
    const delimiters = [KeyCodes.comma, KeyCodes.enter];
    const handleTagClick = (e: any) => {
        console.debug('TagClick : ', editorTagContents[e]);
    };


 */
