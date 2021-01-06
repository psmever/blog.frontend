import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';

interface CodeBlockPros {
    language: string;
    value: string;
}

export default function CodeBlock({ language = '', value = '' }: CodeBlockPros) {
    return (
        <SyntaxHighlighter language={language} style={github}>
            {value}
        </SyntaxHighlighter>
    );
}
