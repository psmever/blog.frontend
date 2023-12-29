import '@uiw/react-md-editor/markdown-editor.css';
import '@uiw/react-markdown-preview/markdown.css';
import dynamic from 'next/dynamic';
import { useEffect, useState, useRef } from 'react';
import { MDEditorProps } from '@uiw/react-md-editor';
import { useWindowSize } from '@/hook';
import { EditorStyle } from '@/Style/common-styles';

const { EditorWapper, DropZoneBox, DropZoneLabel, DropZoneTitleBox, DropZoneTitleP, DropZoneTitleSpan, DropZoneInput } = EditorStyle;

const MDEditor = dynamic<MDEditorProps>(() => import('@uiw/react-md-editor'), {
    ssr: false
});

export const UniMDEditor = ({ EditerContents, EditerOnChange }: { EditerContents: string; EditerOnChange: (text: string) => void }) => {
    const [editorHeight, setEditorHeight] = useState<number>(0);
    const [windowWidth, windowHeight] = useWindowSize();
    const imageInputRef = useRef<HTMLInputElement>(null);

    const handleFileInputReset = () => {
        if (imageInputRef.current && imageInputRef.current.value) {
            imageInputRef.current.value = '';
        }
    };

    useEffect(() => {
        const funSetHeight = (height: number) => {
            setEditorHeight(height - 170);
        };

        if (windowHeight > 0) {
            funSetHeight(windowHeight);
        }
    }, [windowWidth, windowHeight]);

    return (
        <EditorWapper>
            <MDEditor
                preview="edit"
                textareaProps={{
                    placeholder: '내용을 입력해 주세요.'
                }}
                height={editorHeight}
                hideToolbar={true}
                value={EditerContents}
                onChange={(e) => EditerOnChange(e as string)}
            />
            <DropZoneBox>
                <DropZoneLabel>
                    <DropZoneTitleBox>
                        <DropZoneTitleP>
                            <DropZoneTitleSpan>Click to upload</DropZoneTitleSpan> or drag and drop
                        </DropZoneTitleP>
                    </DropZoneTitleBox>
                    <DropZoneInput type="file" accept="image/jpg,image/png,image/jpeg,image/gif" ref={imageInputRef} onClick={() => console.debug('onclick')} onChange={handleFileInputReset} />
                </DropZoneLabel>
            </DropZoneBox>
        </EditorWapper>
    );
};
