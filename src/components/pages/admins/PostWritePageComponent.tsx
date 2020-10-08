import React, { useRef } from 'react';

import {
    MarkdownEditor,
    MarkdownRender,
    DefaultButton
} from 'components/elements';

import {
    MainWrapper,
    BlogWrite,
    Container,
    LeftEditorBox,
    RightEditorPreviewBox,
    WriteTitleBox,
    WriteTitleLabel,
    WriteTitle,
    TagBox,
    EditorBox,
    StyledPreviewTitle,
    RightEditorPreviewContents,
    WriteButtonBox,
    WriteButtonInner,
} from "styles/PostWriter";

import useWrite from 'hooks/useWrite';

import { WithContext as ReactTags } from 'react-tag-input';
import './ReactTagStyle.css';


const KeyCodes = {
    comma: 188,
    enter: 13,
};


export default function WritePage() {
    const {
        editorTitle,
        setEditorTitle,
        editorTagContents,

        editorContents,
        handleEditorContents,


        handleClickExitButton,
        handleClickSaveButton,
        handleClickPublishButton,

        setEditorTagContents,
        editorTagSuggestions,
    } = useWrite();

    const inputRef = useRef<HTMLInputElement>(null);

    const handleTagDelete = (e: any) => {
        setEditorTagContents(editorTagContents.filter((tag, index) => index !== e))
    }

    const delimiters = [KeyCodes.comma, KeyCodes.enter];

    // 테그 추가.
    const handleTagAddition = (e: any) => {
        setEditorTagContents([
            ...editorTagContents,
            e
        ]);
    }

    // 테그 드레그 이벤트
    const handleTagDrag = (tag: any, currPos: any, newPos:any) => {

        const tags = [...editorTagContents];
        const newTags = tags.slice();

        newTags.splice(currPos, 1);
        newTags.splice(newPos, 0, tag);

        setEditorTagContents(newTags);

    }

    // 테그 클릭 이벤트
    // FIXME 2020-10-08 11:24 테그 클릭시 어떻게 처리 할껀지?
    const handleTagClick = (e: any) => {
        console.debug("TagClick : ",editorTagContents[e]);
    }

    // useEffect(() => {
    //     console.debug(inputRef.current?.clientHeight);
    // }, []);

    return (
        <>
            <MainWrapper>
                <BlogWrite>
                    <Container>
                        <LeftEditorBox ref={inputRef}>
                            <WriteTitleBox>
                                <WriteTitleLabel htmlFor="writeTitle"></WriteTitleLabel>
                                <WriteTitle type="text" id="writeTitle" placeholder="제목을 입력해 주세요."
                                    value={editorTitle}
                                    onChange={ e => setEditorTitle(e.target.value) }
                                />
                            </WriteTitleBox>
                            <TagBox>
                                <ReactTags tags={ editorTagContents }
                                    suggestions={editorTagSuggestions}
                                    handleDelete={handleTagDelete}
                                    handleAddition={handleTagAddition}
                                    handleDrag={handleTagDrag}
                                    delimiters={delimiters}
                                    handleTagClick={handleTagClick}
                                    placeholder={'테그를 입력해 주세요'}
                                />
                            </TagBox>
                            <EditorBox>
                                <MarkdownEditor
                                    EditorContents={editorContents}
                                    EditorContentsHandler={handleEditorContents}
                                />
                            </EditorBox>
                            <WriteButtonBox>
                                <WriteButtonInner><DefaultButton name={"나가기"} onClickHandler={handleClickExitButton}/></WriteButtonInner>
                                <WriteButtonInner><DefaultButton name={"저장"} onClickHandler={handleClickSaveButton}/></WriteButtonInner>
                                <WriteButtonInner><DefaultButton name={"개시"} onClickHandler={handleClickPublishButton}/></WriteButtonInner>
                            </WriteButtonBox>
                        </LeftEditorBox>
                        <RightEditorPreviewBox>
                            <StyledPreviewTitle>{editorTitle ? editorTitle : "제목을 입력해 주세요."}</StyledPreviewTitle>
                            <RightEditorPreviewContents>
                                <MarkdownRender markdownText={editorContents}/>
                            </RightEditorPreviewContents>
                        </RightEditorPreviewBox>
                    </Container>
                </BlogWrite>
            </MainWrapper>
        </>
    );
}