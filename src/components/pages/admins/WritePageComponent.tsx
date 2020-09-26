import React from 'react';
import { editorContentsInterface } from 'commonTypes';
import useWrite from 'hooks/useWrite';
import history from 'modules/History';
import {
    MainWrapper,
    BlogWrite,
    Container,
    Header,
    WriteTitleBox,
    WriteTitleLabel,
    WriteTitle,
    WriteTagBox,
    WriteBody,
    ButtonContainer,
    ButtonBox,
    PublishButton
} from "styles/PostWriter";

import { ButtonLoading } from 'components/elements';

import hljs from 'highlight.js'
import javascript from 'highlight.js/lib/languages/javascript'
import 'highlight.js/styles/atom-one-light.css';

/** MarkDown Editor Start */
import MarkdownIt from 'markdown-it'
import MdEditor from 'react-markdown-editor-lite'
import 'react-markdown-editor-lite/lib/index.css';

// https://stackblitz.com/edit/react-tag-input-1nelrc?file=index.js
import { WithContext as ReactTags } from 'react-tag-input';
import './ReactTagStyle.css';

hljs.registerLanguage('javascript', javascript)

// const mdParser = new MarkdownIt(/* Markdown-it options */);
const mdParser = new MarkdownIt({
    html:         false,        // Enable HTML tags in source
    xhtmlOut:     false,        // Use '/' to close single tags (<br />).
                            // This is only for full CommonMark compatibility.
    breaks:       false,        // Convert '\n' in paragraphs into <br>
    langPrefix:   'language-',  // CSS language prefix for fenced blocks. Can be
                            // useful for external highlighters.
    linkify:      false,        // Autoconvert URL-like text to links


    // Enable some language-neutral replacement + quotes beautification
    typographer:  false,

    // Double + single quotes replacement pairs, when typographer enabled,
    // and smartquotes on. Could be either a String or an Array.
    //
    // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
    // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
    quotes: '“”‘’',
    highlight: function (str, lang) {
        if (lang && hljs.getLanguage(lang)) {
          try {
            return hljs.highlight(lang, str).value;
          } catch (__) {}
        }

        return ''; // use external default escaping
      }
});

const KeyCodes = {
    comma: 188,
    enter: 13,
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

// 에디터 설정.
const markdownEditorConfig = {
    view: {
        menu: false,
        md: true,
        html: true
    }
}

/** MarkDown Editor End */
export default function WritePage() {

    const {
        editorTitle,
        setEditorTitle,
        setEditorContents,
        editorContents,
        editorTagContents,
        setEditorTagContents,
        editorTagSuggestions,

        _handleClickSaveButton,
        _handleClickPublishButton,

        post_create_state,
        post_publish_state
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

    // TODO 2020-09-20 22:57 버튼 로딩 컴포넌트 가운데에 마춰야함.
    return (
        <>
            <MainWrapper>
                <BlogWrite>
                    <Container>
                        <Header>
                            {/* <HeaderTitle>글등록.</HeaderTitle> */}
                        </Header>
                        <WriteTitleBox>
                            <WriteTitleLabel htmlFor="writeTitle"></WriteTitleLabel>
                            <WriteTitle type="text" id="writeTitle" placeholder="제목을 입력해 주세요."
                                value={editorTitle}
                                onChange={ e => setEditorTitle(e.target.value) }
                            />
                        </WriteTitleBox>
                        <WriteTagBox>
                            <ReactTags tags={ editorTagContents }
                                suggestions={editorTagSuggestions}
                                handleDelete={handleTagDelete}
                                handleAddition={handleTagAddition}
                                handleDrag={handleTagDrag}
                                delimiters={delimiters}
                                handleTagClick={handleTagClick}
                                placeholder={':::테그를 입력해 주세요:::'}
                            />
                        </WriteTagBox>
                        <WriteBody>
                            <MdEditor
                                plugins={[
                                    'header',
                                    'font-bold',
                                    'font-italic',
                                    'font-underline',
                                    'font-strikethrough',
                                    'list-unordered',
                                    'list-ordered',
                                    'block-quote',
                                    'block-wrap',
                                    'block-code-inline',
                                    'block-code-block',
                                    'table',
                                    'image',
                                    'link',
                                    'clear',
                                    'logger',
                                    'mode-toggle',
                                    // 'full-screen'
                                ]}
                                value={editorContents.text}
                                style={{ height: "100%", width: "100%" }}
                                renderHTML={(text) => mdParser.render(text)}
                                onChange={handleEditorContentsChange}
                                placeholder={"내용을 입력해 주세요."}
                                config={markdownEditorConfig}
                            />
                        </WriteBody>
                        <ButtonContainer>
                            <ButtonBox buttonType={"Home"} onClick={handleHomeButtonClick}><PublishButton>홈</PublishButton></ButtonBox>
                            { post_create_state.status === 'loading' ? <ButtonBox buttonType={"Save"}><ButtonLoading/></ButtonBox> : <ButtonBox buttonType={"Save"} onClick={handleSaveButtonClick}><PublishButton>저장</PublishButton></ButtonBox> }
                            { post_publish_state.status === 'loading' ? <ButtonBox buttonType={"Publish"}><ButtonLoading/></ButtonBox> : <ButtonBox buttonType={"Publish"} onClick={handlePublishButtonClick}><PublishButton>게시</PublishButton></ButtonBox> }
                        </ButtonContainer>
                    </Container>
                    {/* <!--//container--> */}
                </BlogWrite>
            </MainWrapper>
            {/* <!--//main-wrapper--> */}
        </>

    );
}