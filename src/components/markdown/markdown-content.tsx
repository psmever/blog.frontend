import ReactMarkdown, { type Components } from "react-markdown";

type MarkdownContentProps = {
    content: string;
};

type Token = {
    className?: string;
    value: string;
};

const KEYWORDS = new Set([
    "abstract",
    "and",
    "array",
    "as",
    "bool",
    "break",
    "case",
    "catch",
    "class",
    "clone",
    "const",
    "continue",
    "declare",
    "default",
    "die",
    "do",
    "echo",
    "else",
    "elseif",
    "empty",
    "enddeclare",
    "endfor",
    "endforeach",
    "endif",
    "endswitch",
    "endwhile",
    "enum",
    "eval",
    "exit",
    "extends",
    "false",
    "final",
    "finally",
    "float",
    "fn",
    "for",
    "foreach",
    "function",
    "global",
    "if",
    "implements",
    "include",
    "include_once",
    "instanceof",
    "int",
    "interface",
    "isset",
    "list",
    "match",
    "mixed",
    "namespace",
    "new",
    "null",
    "object",
    "or",
    "private",
    "protected",
    "public",
    "readonly",
    "require",
    "require_once",
    "return",
    "self",
    "static",
    "string",
    "switch",
    "throw",
    "trait",
    "true",
    "try",
    "unset",
    "use",
    "var",
    "void",
    "while",
    "xor",
    "yield",
]);

const TOKEN_PATTERN =
    /(\/\/[^\n]*|\/\*[\s\S]*?\*\/|#[^\n]*|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\$[A-Za-z_][A-Za-z0-9_]*|\b(?:abstract|and|array|as|bool|break|case|catch|class|clone|const|continue|declare|default|die|do|echo|else|elseif|empty|enddeclare|endfor|endforeach|endif|endswitch|endwhile|enum|eval|exit|extends|false|final|finally|float|fn|for|foreach|function|global|if|implements|include|include_once|instanceof|int|interface|isset|list|match|mixed|namespace|new|null|object|or|private|protected|public|readonly|require|require_once|return|self|static|string|switch|throw|trait|true|try|unset|use|var|void|while|xor|yield)\b|<\/?[A-Za-z][A-Za-z0-9-]*\b|[A-Za-z_][A-Za-z0-9_]*(?=\s*\())/g;

function tokenizeCode(value: string): Token[] {
    const tokens: Token[] = [];
    let lastIndex = 0;

    for (const match of value.matchAll(TOKEN_PATTERN)) {
        const tokenValue = match[0];
        const tokenIndex = match.index ?? 0;

        if (tokenIndex > lastIndex) {
            tokens.push({ value: value.slice(lastIndex, tokenIndex) });
        }

        tokens.push({
            className: getTokenClassName(tokenValue),
            value: tokenValue,
        });

        lastIndex = tokenIndex + tokenValue.length;
    }

    if (lastIndex < value.length) {
        tokens.push({ value: value.slice(lastIndex) });
    }

    return tokens;
}

function getTokenClassName(value: string) {
    if (value.startsWith("//") || value.startsWith("/*") || value.startsWith("#")) {
        return "markdown-token-comment";
    }

    if (value.startsWith('"') || value.startsWith("'")) {
        return "markdown-token-string";
    }

    if (value.startsWith("$")) {
        return "markdown-token-variable";
    }

    if (value.startsWith("<")) {
        return "markdown-token-tag";
    }

    if (KEYWORDS.has(value)) {
        return "markdown-token-keyword";
    }

    return "markdown-token-function";
}

const markdownComponents: Components = {
    code({ children, className, ...props }) {
        const rawCode = String(children);
        const code = rawCode.replace(/\n$/, "");
        const isCodeBlock = className?.startsWith("language-") || rawCode.includes("\n");

        if (!isCodeBlock) {
            return (
                <code className={className} {...props}>
                    {children}
                </code>
            );
        }

        return (
            <code className={className} {...props}>
                {tokenizeCode(code).map((token, index) => (
                    <span key={`${index}-${token.value}`} className={token.className}>
                        {token.value}
                    </span>
                ))}
            </code>
        );
    },
};

export function MarkdownContent({ content }: MarkdownContentProps) {
    return <ReactMarkdown components={markdownComponents}>{content}</ReactMarkdown>;
}
