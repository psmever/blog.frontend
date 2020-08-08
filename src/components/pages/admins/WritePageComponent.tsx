import React from 'react';
import * as commonTypes from 'modules/commonTypes';
import useWrite from 'hooks/useWrite';
import * as PostWriterStyleComponent from "styles/PostWriter";

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
        setEditorContents,
        editorContents,
        editorTagContents,
        setEditorTagContents,
        editorTagSuggestions
    } = useWrite();


    const handleEditorContentsChandge = ({html, text}: commonTypes.editorContentsInterface) => {
        setEditorContents({
            html: html,
            text: text
        })
    }

    const handleDelete = (e: any) => {
        setEditorTagContents(editorTagContents.filter((tag, index) => index !== e))
    }

    const handleAddition = (e: any) => {
        setEditorTagContents([
            ...editorTagContents,
            e
        ]);
    }

    const handleDrag = (tag: any, currPos: any, newPos:any) => {
        console.debug({
            tag:tag,
            currPos:currPos,
            newPos:newPos,
        });

        const tags = [...editorTagContents];
        const newTags = tags.slice();

        newTags.splice(currPos, 1);
        newTags.splice(newPos, 0, tag);

        // re-render
        setEditorTagContents(newTags);

    }

    const handleTagClick = (e: any) => {
        console.debug("TagClick : ",editorTagContents[e]);
    }

    return (
        <>
            <PostWriterStyleComponent.MainWrapper>

                <PostWriterStyleComponent.BlogWrite>

                    <PostWriterStyleComponent.Container>

                        <PostWriterStyleComponent.Header>
                            {/* <PostWriterStyleComponent.HeaderTitle>글등록.</PostWriterStyleComponent.HeaderTitle> */}

                        </PostWriterStyleComponent.Header>

                        <PostWriterStyleComponent.WriteTitleBox>
                            <PostWriterStyleComponent.WriteTitleLabel htmlFor="semail"></PostWriterStyleComponent.WriteTitleLabel>
                            <PostWriterStyleComponent.WriteTitle type="text" id="semail" placeholder="제목을 입력해 주세요." />
                        </PostWriterStyleComponent.WriteTitleBox>

                        <PostWriterStyleComponent.WriteTagBox>
                            <ReactTags tags={ editorTagContents }
                                suggestions={editorTagSuggestions}
                                handleDelete={handleDelete}
                                handleAddition={handleAddition}
                                handleDrag={handleDrag}
                                delimiters={delimiters}
                                handleTagClick={handleTagClick}
                                placeholder={':::테그를 입력해 주세요:::'}
                            />
                        </PostWriterStyleComponent.WriteTagBox>

                        <PostWriterStyleComponent.WriteBody>

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
                                onChange={handleEditorContentsChandge}
                                placeholder={"내용을 입력해 주세요."}
                                config={markdownEditorConfig}
                            />

                        </PostWriterStyleComponent.WriteBody>

                        <PostWriterStyleComponent.ButtonContainer>

                            <PostWriterStyleComponent.ButtonBox buttonType={"Home"}>
                                <PostWriterStyleComponent.PublishButton>홈</PostWriterStyleComponent.PublishButton>
                            </PostWriterStyleComponent.ButtonBox>

                            <PostWriterStyleComponent.ButtonBox buttonType={"Save"}>
                                <PostWriterStyleComponent.PublishButton>저장</PostWriterStyleComponent.PublishButton>
                            </PostWriterStyleComponent.ButtonBox>

                            <PostWriterStyleComponent.ButtonBox buttonType={"Publish"}>
                                <PostWriterStyleComponent.PublishButton>개시</PostWriterStyleComponent.PublishButton>
                            </PostWriterStyleComponent.ButtonBox>

                        </PostWriterStyleComponent.ButtonContainer>

                    </PostWriterStyleComponent.Container>
                    {/* <!--//container--> */}
                </PostWriterStyleComponent.BlogWrite>

            </PostWriterStyleComponent.MainWrapper>
            {/* <!--//main-wrapper--> */}
        </>

    );
}