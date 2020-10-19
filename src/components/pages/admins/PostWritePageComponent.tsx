import React, { useRef, useEffect, useLayoutEffect, useState } from 'react';

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
    WriteButtonContainer,
    WriteButtonInner
} from "styles/PostWriter";

import useWrite from 'hooks/useWrite';
import { WithContext as ReactTags } from 'react-tag-input';
import './ReactTagStyle.css';

const KeyCodes = {
    comma: 188,
    enter: 13,
};

// Hook
function useDimensions(targetRef: any) {
    const getDimensions = () => {
        return {
            width: targetRef.current ? targetRef.current.offsetWidth : 0,
            height: targetRef.current ? targetRef.current.offsetHeight : 0
        };
    };

    const [dimensions, setDimensions] = useState(getDimensions);

    const handleResize = () => {
        setDimensions(getDimensions());
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
        // FIXME 2020-10-08 18:24  esline 경고.
        // eslint-disable-next-line
    }, []);

    useLayoutEffect(() => {
        handleResize();
        // FIXME 2020-10-08 18:24  esline 경고.
        // eslint-disable-next-line
    }, []);
    return dimensions;
}

export default function WritePage() {

    const titleInputRef = useRef<HTMLInputElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

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
        editorTagSuggestions
    } = useWrite();

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

    const size = useDimensions(inputRef);

    useEffect(() => {
        titleInputRef.current?.focus();
    }, []);

    return (
        <>
        <MainWrapper>
            <BlogWrite>
                <Container>
                    <LeftEditorBox ref={inputRef}>
                        <WriteTitleBox>
                            <WriteTitleLabel htmlFor="writeTitle"></WriteTitleLabel>
                            <WriteTitle type="text" ref={titleInputRef} placeholder="제목을 입력해 주세요."
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
                                EditorHeight={size.height}
                            />
                        </EditorBox>
                        {/* FIXME 화면이 작을때 세로로 배치되는 문제 수정. */}
                        <WriteButtonBox>
                            <WriteButtonContainer>
                                <WriteButtonInner><DefaultButton name={"나가기"} onClickHandler={handleClickExitButton}/></WriteButtonInner>
                                <WriteButtonInner><DefaultButton name={"저장"} onClickHandler={handleClickSaveButton}/></WriteButtonInner>
                                <WriteButtonInner><DefaultButton name={"개시"} onClickHandler={handleClickPublishButton}/></WriteButtonInner>
                            </WriteButtonContainer>
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