import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default function CodeBlock({ language = '', value = '' }: { language: string; value: string }) {
    return (
        <SyntaxHighlighter language={language} style={github}>
            {value}
        </SyntaxHighlighter>
    );
}
