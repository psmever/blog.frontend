import React from 'react';
import { Link } from "react-router-dom";
import * as PostDetailStyleComponent from "styles/PostDetail";
import * as StyledIcons from 'styles/StyledIcons';
import useDetail from 'hooks/useDetail';
import ReactMarkdown from 'react-markdown';
import Markdown,{compiler} from 'markdown-to-jsx';
// const toc = require('remark-toc');
import './demo.css';

export default function PostDetailPage() {

    const MyParagraph = (props:any) => (
        <p>This is inside MyParagraph, and the value is {props.children}</p>
      );

      // see https://github.com/rexxars/react-markdown#node-types
      const renderers = {
        paragraph: (props : any) => <MyParagraph {...props} />
      };


    const markdown = `
    # Live demo
    Changes are automatically rendered as you type.
    ## Table of Contents
    * Implements [GitHub Flavored Markdown](https://github.github.com/gfm/)
    * Renders actual, "native" React DOM elements
    * Allows you to escape or skip HTML (try toggling the checkboxes above)
    * If you escape or skip the HTML, no \`dangerouslySetInnerHTML\` is used! Yay!
    ## HTML block below
    <blockquote>
      This blockquote will change based on the HTML settings above.
    </blockquote>
    ## How about some code?
    \`\`\`js
    var React = require('react');
    var Markdown = require('react-markdown');
    React.render(
      <Markdown source="# Your markdown here" />,
      document.getElementById('content')
    );
    \`\`\`
    Pretty neat, eh?
    ## Tables?
    | Feature   | Support |
    | --------- | ------- |
    | tables    | ✔ |
    | alignment | ✔ |
    | wewt      | ✔ |
    ## More info?
    Read usage information and more on [GitHub](//github.com/rexxars/react-markdown)
    ---------------
    A component by [Espen Hovlandsdal](https://espen.codes/)
`


    const {
        postBaseStateDetail
    } = useDetail();

    return (
        <>

    <Markdown options={{ forceBlock: true }}>{markdown}</Markdown>

                            {/* <ReactMarkdown
                                // source={postBaseStateDetail.data?.contents_text}
                                source={markdown}
                                renderers={renderers}
                            /> */}

{/* {postBaseStateDetail.data?.contents_html} */}
{/* <ReactMarkdown
            className="result"
            source={markdown}
            skipHtml={true}
            escapeHtml={true}
            // renderers={{code: CodeBlock}}
            // plugins={[toc]}
          /> */}
                        {/* <Markdown
                            children={postBaseStateDetail.data?.contents_html !== undefined && postBaseStateDetail.data.contents_html}
                        /> */}

{/* {compiler(markdown)} */}
{/* {compiler(markdown, { disableParsingRawHTML: true })} */}


        </>
    );
}