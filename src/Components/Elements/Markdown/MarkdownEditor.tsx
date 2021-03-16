import React, { useState, useEffect } from 'react';
import { DimensionsResult } from 'CommonTypes';
import axios from 'axios';
import ReactMde, { Suggestion, SaveImageHandler } from 'react-mde'; // https://uiwjs.github.io/react-md-editor/
import * as Showdown from 'showdown';
import { getAccessToken } from '@Helper';
import _Alert_ from '@_Alert_';
import 'react-mde/lib/styles/css/react-mde-all.css';

interface MarkdownImageUpload {
    status: boolean;
    media_url: string;
    message: string;
}

export default function MarkdownEditor({
    EditorContents,
    EditorContentsHandler,
    editBoxSizeState,
}: {
    EditorContents: string;
    EditorContentsHandler: (contents: string) => void;
    editBoxSizeState: DimensionsResult;
}) {
    const [selectedTab, setSelectedTab] = useState<'write' | 'preview'>('write');
    const [editorHeight, setEditorHeight] = useState<{ min: number; max: number }>({
        min: 0,
        max: 0,
    });

    // FIXME 2020-10-08 11:31 추천 단어 개발.
    const loadSuggestions = async (text: string) => {
        return new Promise<Suggestion[]>(accept => {
            setTimeout(() => {
                const suggestions: Suggestion[] = [
                    {
                        preview: 'Andre',
                        value: '@andre',
                    },
                    {
                        preview: 'Angela',
                        value: '@angela',
                    },
                    {
                        preview: 'David',
                        value: '@david',
                    },
                    {
                        preview: 'Louise',
                        value: '@louise',
                    },
                ].filter(i => i.preview.toLowerCase().includes(text.toLowerCase()));
                accept(suggestions);
            }, 250);
        });
    };

    const converter = new Showdown.Converter({
        tables: true,
        simplifiedAutoLink: true,
        strikethrough: true,
        tasklists: true,
    });

    const save: SaveImageHandler = async function* (arrayBuffer: ArrayBuffer): any {
        const formData = new FormData();
        const blob = new Blob([arrayBuffer]);
        formData.append('image', blob);

        const task: MarkdownImageUpload = await axios
            .post(process.env.REACT_APP_API_URL + `/api/v1/post/create-image`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Access-Control-Allow-Origin': '*',
                    'Request-Client-Type': 'S01010',
                    Accept: 'application/json',
                    Authorization: 'Bearer ' + getAccessToken(),
                },
            })
            .then(res => {
                return {
                    status: true,
                    media_url: res.data.media_url,
                    message: '성공 했습니다.',
                };
            })
            .catch(function (error) {
                return {
                    status: false,
                    media_url: '',
                    message: error.response.data.error.error_message,
                };
            });

        if (task.status === true) {
            yield task.media_url;
        } else {
            _Alert_.error({ text: task.message ? task.message : '다시 시도해 주세요.' });
        }
        return true;
    };

    useEffect(() => {
        const setHeightsize = ({ width, height }: { width: number; height: number }) => {
            if (width < 530) {
                setEditorHeight({
                    min: height - 290,
                    max: height - 290,
                });
            } else {
                setEditorHeight({
                    min: height - 250,
                    max: height - 250,
                });
            }
        };

        if (editBoxSizeState.state === 'success') {
            setHeightsize(editBoxSizeState.data);
        }

        // setHeightsize(EditorSize);
    }, [editBoxSizeState]);

    return (
        <div className="container" style={{ width: '100%', height: '100%' }} key={editorHeight.min}>
            {editBoxSizeState.state === 'success' && (
                <ReactMde
                    minEditorHeight={editorHeight.min}
                    maxEditorHeight={editorHeight.max}
                    value={EditorContents}
                    onChange={EditorContentsHandler}
                    selectedTab={selectedTab}
                    onTabChange={setSelectedTab}
                    generateMarkdownPreview={markdown => Promise.resolve(converter.makeHtml(markdown))}
                    loadSuggestions={loadSuggestions}
                    childProps={{
                        writeButton: {
                            tabIndex: -1,
                        },
                        textArea: {
                            // eslint-disable-next-line @typescript-eslint/no-unused-vars
                            onKeyDown: e => {
                                // FIXME 2020-10-08 13:17  TAB 키 개선(?)
                            },
                        },
                    }}
                    paste={{ saveImage: save }}
                />
            )}
        </div>
    );
}
