import React from 'react';
import CodeBlock from "./CodeBlock";
import ReactMarkdown from 'react-markdown';
import './github-markdown.css'

// import Markdown,{compiler} from 'markdown-to-jsx';
// import showdown from "showdown";
// import htmlParser from 'react-markdown/plugins/html-parser';
// const htmlParser = require('react-markdown/plugins/html-parser')

interface MarkdownRenderPros  {
    markdownText: string
};

/**
 * 이미지 렌더.
 * @param props
 */
const imageRender = (props: any) : any => {
    return (
        <img {...props} style={{maxWidth: '100%'}} alt=""/>
    );
}

export default function MarkdownRender({markdownText} : MarkdownRenderPros) {

/**
 *
 * 렌더 테스트 소스.
 *
 * const converter = new showdown.Converter();
 * const html = converter.makeHtml(postContents.contents_html);
 *
 * const renderers = {
 *    paragraph: (props : any) => <MyParagraph {...props} />
 *  };
 *
 * const parseHtml = htmlParser({
 *    isValidNode: (node : any) => node.type !== 'script',
 *    processingInstructions: [/\* ... *\/]
 * })
 * const converter = new showdown.Converter();
 *
 *
 *
 */

    return (
        <div className='markdown-body'>
            <ReactMarkdown
                escapeHtml={true}
                skipHtml={false}
                source={markdownText}
                renderers={{ code: CodeBlock, image: imageRender}}
            />

            {/* 렌더 테스트 소스. */}
            {/* <ReactMarkdown
                source={markdownText}
                // source={markdown}
                //   escapeHtml={false}
                // astPlugins={[parseHtml]}
            /> */}
            {/* {compiler(markdownText, { disableParsingRawHTML: true })} */}
            {/* <div dangerouslySetInnerHTML={{__html: converter.makeHtml(markdownText)}} /> */}
        </div>
    );
}