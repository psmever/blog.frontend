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

/** MarkDown Editor End */
export default function WritePage() {

    const {
        setEditorContents,
        editorContents
    } = useWrite();


    const handleEditorContentsChandge = ({html, text}: commonTypes.editorContentsInterface) => {
        setEditorContents({
            html: html,
            text: text
        })
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
                            />

                        </PostWriterStyleComponent.WriteBody>


                    </PostWriterStyleComponent.Container>
                    {/* <!--//container--> */}
                </PostWriterStyleComponent.BlogWrite>

            </PostWriterStyleComponent.MainWrapper>
            {/* <!--//main-wrapper--> */}
        </>

    );
}