import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
// import { MarkdownImageRender } from '@Style/CommonStyle';

/**
 * 이미지 렌더.
 * @param props
 */
export const imageRender = (props: any): any => {
    return (
        <img
            {...props}
            style={{
                maxWidth: '85%',
                border: 'solid',
                borderRadius: 15,
                marginTop: 50,
                marginBottom: 50,
                textAlign: 'center',
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto',
                width: 'inherit',
                height: 'auto',
            }}
            alt=""
        />
    );
};

/**
 * 코드 렌더링.
 * @param param0
 * @returns
 */
export const CodeBlock = ({ language = '', value = '' }: { language: string; value: string }) => {
    return (
        <SyntaxHighlighter language={language} style={github}>
            {value}
        </SyntaxHighlighter>
    );
};
