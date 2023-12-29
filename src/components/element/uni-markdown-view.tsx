import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import remarkGfm from 'remark-gfm';

export const UniMarkDownView = ({ Contents }: { Contents: string }) => {
    return (
        <div className="markdown-body">
            <ReactMarkdown
                remarkPlugins={[remarkGfm]} // Allows us to have embedded HTML tags in our markdown
                components={{
                    code({ inline, className, children, ...props }: any) {
                        const match = /language-(\w+)/.exec(className || '');

                        return !inline && match ? (
                            <SyntaxHighlighter style={materialDark} PreTag="div" language={match[1]} {...props}>
                                {String(children).replace(/\n$/, '')}
                            </SyntaxHighlighter>
                        ) : (
                            <code className={className} {...props}>
                                {children}
                            </code>
                        );
                    },
                    img: (image) => <Image src={image.src || ''} alt={image.alt || ''} width={120} height={120} />
                }}
            >
                {Contents}
            </ReactMarkdown>
        </div>
    );
};
