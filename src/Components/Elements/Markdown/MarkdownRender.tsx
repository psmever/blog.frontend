import ReactMarkdown from 'react-markdown/with-html';
import '@Style/GithubMarkdown.css';
import { imageRender, CodeBlock } from './MarkdownRenderer';

export default function MarkdownRender({ markdownText }: { markdownText: string }) {
    return (
        <div className="markdown-body">
            <ReactMarkdown
                disallowedTypes={[]}
                escapeHtml={false}
                // skipHtml={false}
                source={markdownText}
                renderers={{ code: CodeBlock, image: imageRender }}
                // renderers={{ paragraph: props => <div {...props} /> }}
                // renderers={{
                //     paragraph: props =>
                //         props.children[0].type.name === 'image' ? (
                //             <img {...props} style={{ maxWidth: '15%' }} alt="" />
                //         ) : (
                //             <img {...props} />
                //         ),
                // }}
            />
        </div>
    );
}
