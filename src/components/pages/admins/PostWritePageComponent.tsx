import React, { useState, useEffect } from 'react';
import { editorContentsInterface } from 'commonTypes';
import useWrite from 'hooks/useWrite';
import history from 'modules/History';
import { DefaultSelectBox } from 'components/elements';
import {
    MainWrapper,
    BlogWrite,
    Container,
    Header,
    WriteTitleBox,
    WriteTitleLabel,
    WriteTitle,
    CategorySelectBox,
    WriteTagBox,
    WriteBody,
    PublishButton,
    StyledApp,
    StyledEditor,
    StyledEditorTextArea,
    StyledPreviewBox,
    StyledPreviewC3,
    StyledPreviewTitle,
    ButtonContainer,
} from "styles/PostWriter";
import { ButtonLoading } from 'components/elements';
import { MarkdownRender } from 'components/elements';
// https://stackblitz.com/edit/react-tag-input-1nelrc?file=index.js
import { WithContext as ReactTags } from 'react-tag-input';
import './ReactTagStyle.css';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import ReactHtmlParser, { processNodes, convertNodeToElement, } from 'react-html-parser';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import htmlReactParser from "html-react-parser";

const ReactMarkdownWithHtml = require("react-markdown");


export default function WritePage() {

    // const parseHtml = htmlParser({
    //     isValidNode: (node: any) => node.type !== 'script',
    //     processingInstructions: [/* ... */]
    //   })

    const KeyCodes = {
        comma: 188,
        enter: 13,
    };

    const delimiters = [KeyCodes.comma, KeyCodes.enter];

    const [markdown, setMarkdown] = useState('');

    const {
        editorTitle,
        setEditorTitle,
        setEditorContents,
        editorTagContents,
        setEditorTagContents,
        editorTagSuggestions,
        _handleClickSaveButton,
        _handleClickPublishButton,
    } = useWrite();

    // 내용 수정시 데이터 업데이트
    const handleEditorContentsChange = ({html, text}: editorContentsInterface) => {
        setEditorContents({
            html: html,
            text: text
        })
    }

    // 테그 삭제.
    const handleTagDelete = (e: any) => {
        setEditorTagContents(editorTagContents.filter((tag, index) => index !== e))
    }

    // 테그 추가.
    const handleTagAddition = (e: any) => {
        setEditorTagContents([
            ...editorTagContents,
            e
        ]);
    }

    // 테그 드레그 이벤트
    const handleTagDrag = (tag: any, currPos: any, newPos:any) => {
        console.debug({
            tag:tag,
            currPos:currPos,
            newPos:newPos,
        });

        const tags = [...editorTagContents];
        const newTags = tags.slice();

        newTags.splice(currPos, 1);
        newTags.splice(newPos, 0, tag);

        setEditorTagContents(newTags);

    }

    // 테그 클릭 이벤트
    const handleTagClick = (e: any) => {
        console.debug("TagClick : ",editorTagContents[e]);
    }

    // 홈으로 이동 버튼 클릭 이벤트
    const handleHomeButtonClick = () => {
        history.push(process.env.PUBLIC_URL + '/');
    }

    // 저장 버튼 클릭 이벤트
    const handleSaveButtonClick = () => {
        _handleClickSaveButton();

    }

    // 게시 버튼 클릭 이벤트
    const handlePublishButtonClick = () => {
        _handleClickPublishButton();
    }

    useEffect(() => {
        console.debug(ReactHtmlParser(markdown));
    }, [markdown]);


    const onChangeContents = (contents: string) => {
        // let _contents: string = '';
        // // if (__ISMSIE__) {
        //   if (contents.indexOf("<p><br></p>") > -1) {
        //     _contents = contents.replace(/<p><br><\/p>/gi, "<p>&nbsp;</p>");
        //   }
        // // }
        // console.debug(_contents);

      };


      const markdownTypesAllowed = [ 'text', 'strong', 'delete', 'emphasis', 'link' ];

      const get_text_attr = (el: any) => {
        if (el.type === 'some-tag') {
          const text_attr =`<span>${el.props.text}</span>`;
          return ReactHtmlParser(text_attr);
        }
        return '';
     };

     const parse = (el: any) => {
         return get_text_attr(el) || el;
     };

    // const markdownRenderText = (text: string) : string => {
    //     return mdParser.render(editorTitle + text);
    // }

    // FIXME 2020-10-01 22:21  높이 스크롤 생기는 버그 수정.필요.
    // https://codesandbox.io/s/nwm83w9y1l?file=/src/styles.css:0-91
    return (
        <>
            <MainWrapper>
                <BlogWrite>
                    <Container>
                        <WriteBody>
                            <StyledApp>
                                <StyledEditor>
                                    <WriteTitleLabel htmlFor="writeTitle"></WriteTitleLabel>
                                    <WriteTitle type="text" id="writeTitle" placeholder="제목을 입력해 주세요." value={editorTitle} onChange={ e => setEditorTitle(e.target.value) } />
                                    <ReactTags tags={ editorTagContents } suggestions={editorTagSuggestions} handleDelete={handleTagDelete} handleAddition={handleTagAddition} handleDrag={handleTagDrag} delimiters={delimiters} handleTagClick={handleTagClick} placeholder={'테그를 입력해 주세요'}/>
                                    {/* <ReactQuill theme="snow" value={markdown} onChange={onChangeContents}/> */}
                                    <ReactQuill theme="snow" value={markdown} onChange={setMarkdown}/>
                                </StyledEditor>

                                <StyledPreviewBox>
                                    <StyledPreviewTitle>{editorTitle}</StyledPreviewTitle>
                                    <StyledPreviewC3>
                                    {/* <ReactMarkdownWithHtml source={markdown} /> */}
                                        <ReactMarkdownWithHtml source={ReactHtmlParser(markdown).map((el: any) => {
          return parse(el);
      })} allowedTypes={markdownTypesAllowed} unwrapDisallowed={true} />
                                    </StyledPreviewC3>
                                </StyledPreviewBox>

                            </StyledApp>

                        </WriteBody>

                    </Container>
                    {/* <!--//container--> */}
                </BlogWrite>
            </MainWrapper>
            {/* <!--//main-wrapper--> */}
        </>

    );
}