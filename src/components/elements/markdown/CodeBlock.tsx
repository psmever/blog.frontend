import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';

// FIXME 2020-10-05 01:06  props 리팩토리 필요.
export default function CodeBlock(props : any) {
    const { language, value } = props;
    return (
        <SyntaxHighlighter language={language} style={github}>
            {value}
        </SyntaxHighlighter>
    );
}