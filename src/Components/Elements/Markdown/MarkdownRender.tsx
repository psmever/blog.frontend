import React from 'react';
import CodeBlock from './CodeBlock';
import ReactMarkdown from 'react-markdown';
import '@Style/GithubMarkdown.css';

/**
 * 이미지 렌더.
 * @param props
 */
const imageRender = (props: any): any => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img {...props} style={{ maxWidth: '85%' }} alt="" />
        </div>
    );
};

export default function MarkdownRender({ markdownText }: { markdownText: string }) {
    return (
        <div className="markdown-body">
            <ReactMarkdown
                disallowedTypes={[]}
                escapeHtml={true}
                // skipHtml={false}
                source={markdownText}
                renderers={{ code: CodeBlock, image: imageRender }}
            />
        </div>
    );
}
