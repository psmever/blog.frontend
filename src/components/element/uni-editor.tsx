import '@uiw/react-md-editor/markdown-editor.css';
import '@uiw/react-markdown-preview/markdown.css';
import dynamic from 'next/dynamic';
import React, { ChangeEvent, KeyboardEvent, useEffect, useState, useRef } from 'react';
import { MDEditorProps } from '@uiw/react-md-editor';
import { useLayout, useWindowSize } from '@/hook';
import { EditorStyle } from '@/Style/common-styles';
import { ImageUploadIcon, ButtonLoadingIcon } from '@/Icon';
import { ServiceMediaCreate } from '@/ServerInterface';

const { EditorWapper, ButtonRow, ButtonWapper, UploadButtonLabel, UploadInput, EditorRow } = EditorStyle;

const MDEditor = dynamic<MDEditorProps>(() => import('@uiw/react-md-editor'), {
    ssr: false
});

export const UniMDEditor = ({ EditerContents, EditerOnChange, HandleOnKeyDown }: { EditerContents: string; EditerOnChange: (text: string) => void; HandleOnKeyDown: (e: KeyboardEvent<HTMLImageElement>) => void }) => {
    const { OpenLayoutModal } = useLayout();
    const [imageButtonLoading, setLmageButtonLoading] = useState<boolean>(false);
    const [editorHeight, setEditorHeight] = useState<number>(0);
    const [windowWidth, windowHeight] = useWindowSize();
    const imageInputRef = useRef<HTMLInputElement>(null);

    const handleFileInputReset = () => {
        if (imageInputRef.current && imageInputRef.current.value) {
            imageInputRef.current.value = '';
        }
    };

    const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setLmageButtonLoading(true);
            const formData = new FormData();
            formData.append('media', e.target.files[0]);

            const { status, payload, message } = await ServiceMediaCreate(formData);
            if (status) {
                EditerOnChange(`![image](${payload.url.image})\n ${EditerContents}`);
            } else {
                OpenLayoutModal({ message: message });
            }
            setLmageButtonLoading(false);
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
            <ButtonRow>
                <ButtonWapper>
                    <UploadButtonLabel>
                        {(() => {
                            if (imageButtonLoading) {
                                return (
                                    <>
                                        <ButtonLoadingIcon />
                                    </>
                                );
                            } else {
                                return (
                                    <>
                                        <ImageUploadIcon />
                                        <UploadInput
                                            type="file"
                                            accept="image/jpg,image/png,image/jpeg,image/gif"
                                            ref={imageInputRef}
                                            onClick={() => handleFileInputReset()}
                                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleFileChange(e)}
                                        />
                                    </>
                                );
                            }
                        })()}
                    </UploadButtonLabel>
                </ButtonWapper>
            </ButtonRow>
            <EditorRow>
                <MDEditor
                    className="w-full flex"
                    preview="edit"
                    textareaProps={{
                        placeholder: '내용을 입력해 주세요.'
                    }}
                    height={editorHeight}
                    hideToolbar={true}
                    value={EditerContents}
                    onChange={(e) => EditerOnChange(e as string)}
                    onKeyDown={(e: KeyboardEvent<HTMLImageElement>) => HandleOnKeyDown(e)}
                />
            </EditorRow>
        </EditorWapper>
    );
};
