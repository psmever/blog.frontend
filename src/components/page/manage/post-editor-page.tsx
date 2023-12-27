import '@uiw/react-md-editor/markdown-editor.css';
import '@uiw/react-markdown-preview/markdown.css';
import dynamic from 'next/dynamic';
import { useState } from 'react';

const MDEditor = dynamic(() => import('@uiw/react-md-editor'), { ssr: false });

export default function ManagePostEditorPage() {
    const [value, setValue] = useState<string>('**Hello world!!!**');
    return (
        <div>
            <MDEditor value={value} onChange={(e) => setValue(e as string)} />
        </div>
    );
}
