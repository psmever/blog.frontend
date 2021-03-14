import React, { useRef, useState, useEffect } from 'react';
import { WriteTitleBox, WriteTitleLabel, WriteTitle, TagBox } from '@Style/WrtePageStyle';
// import MarkdownEditor from '@Element/Markdown/MarkdownEditor';
import TagsInput from 'react-tagsinput';

import '@Style/ReactTagStyle.css';
// import { editorTagInterface } from 'CommonTypes';

// https://github.com/olahol/react-tagsinput
export default function EditorBox() {
    const titleInputRef = useRef<HTMLInputElement>(null);

    const [editorTitle, setEditorTitle] = useState<string>('');

    // const [editorTagContents, setEditorTagContents] = useState<editorTagInterface>([]);

    const [tagsData, setTagsData] = useState({ tags: [] });
    // const [tagData, setTagData] = useState('');

    const handleChangesTags = (e: any) => {
        console.log(e);
        setTagsData({ tags: e });
    };

    // const handleChangesTagsinput = (e: any) => {
    //     console.log(e);
    //     setTagData(e);
    // };

    useEffect(() => {
        console.log(tagsData);
    }, [tagsData]);

    return (
        <>
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
                    value={tagsData.tags}
                    onChange={handleChangesTags}
                    // inputValue={tagData}
                    // onChangeInput={handleChangesTagsinput}
                />
            </TagBox>
        </>
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
