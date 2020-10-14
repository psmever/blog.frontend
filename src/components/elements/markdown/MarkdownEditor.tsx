import React, { useState, useEffect } from 'react';
import axios from 'axios'
import ReactMde, { Suggestion, SaveImageHandler } from "react-mde"; // https://uiwjs.github.io/react-md-editor/
import * as Showdown from "showdown";
import * as Helper from 'lib/Helper';
import "react-mde/lib/styles/css/react-mde-all.css";
import _Alert_ from 'lib/_Alert_';

interface MarkdownEditorPros {
    EditorContents : string
    EditorContentsHandler : ( contents: string ) => void
    EditorHeight: any
}

interface MarkdownImageUpload {
    status: boolean
    media_url: string
    message: string
}

export default function MarkdownEditor({
    EditorContents,
    EditorContentsHandler,
    EditorHeight = 1000

} : MarkdownEditorPros) {

    const [selectedTab, setSelectedTab] = useState<"write" | "preview">("write");

    // FIXME 2020-10-08 11:31 추천 단어 개발.
    const loadSuggestions = async (text: string) => {
        return new Promise<Suggestion[]>((accept, reject) => {
            setTimeout(() => {
                const suggestions: Suggestion[] = [
                    {
                        preview: "Andre",
                        value: "@andre"
                    },
                    {
                        preview: "Angela",
                        value: "@angela"
                    },
                    {
                        preview: "David",
                        value: "@david"
                    },
                    {
                        preview: "Louise",
                        value: "@louise"
                    }
                ].filter(i => i.preview.toLowerCase().includes(text.toLowerCase()));
                accept(suggestions);
            }, 250);
        });
    };

    const converter = new Showdown.Converter({
        tables: true,
        simplifiedAutoLink: true,
        strikethrough: true,
        tasklists: true
    });

    // const save: SaveImageHandler = async function*(data: ArrayBuffer) {

    //     console.debug(data);
    //     var bytes = new Uint8Array( data );



    //     console.debug(bytes);

    //     // Promise that waits for "time" milliseconds
    //     const wait = function(time: number) {
    //         return new Promise((a, r) => {
    //             setTimeout(() => a(), time);
    //         });
    //     };

    //     // Upload "data" to your server
    //     // Use XMLHttpRequest.send to send a FormData object containing
    //     // "data"
    //     // Check this question: https://stackoverflow.com/questions/18055422/how-to-receive-php-image-data-over-copy-n-paste-javascript-with-xmlhttprequest

    //     await wait(2000);
    //     // yields the URL that should be inserted in the markdown
    //     yield "https://picsum.photos/300";
    //     await wait(2000);

    //     // returns true meaning that the save was successful
    //     return true;
    // };
    const save: SaveImageHandler = async function*(arrayBuffer: ArrayBuffer) : any {

        const formData = new FormData();
        const blob = new Blob( [ arrayBuffer ] );
        // const url = URL.createObjectURL( blob );
        formData.append('image', blob);

        const task : MarkdownImageUpload = await axios.post(process.env.REACT_APP_API_URL + `/api/v1/post/create-image`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                "Access-Control-Allow-Origin": "*",
                "Request-Client-Type": "S01010",
                "Accept": "application/json",
                "Authorization": 'Bearer ' + Helper.getAccessToken()
            },
        })
        .then(res => {
            return {
                status: true,
                media_url: res.data.media_url,
                message: '성공 했습니다.'
            };
        })
        .catch(function (error) {
            console.debug(error.response.data.error.error_message);
            return {
                status: false,
                media_url: '',
                message: error.response.data.error.error_message
            };
        });

        if(task.status === true) {
            yield task.media_url;
        } else {
            _Alert_.error({text: task.message ? task.message: '다시 시도해 주세요.'});
        }

        // Promise that waits for "time" milliseconds
        // const wait = function(time: number) {
        //     return new Promise((a, r) => {
        //         setTimeout(() => a(), time);
        //     });
        // };

        // Upload "data" to your server
        // Use XMLHttpRequest.send to send a FormData object containing
        // "data"
        // Check this question: https://stackoverflow.com/questions/18055422/how-to-receive-php-image-data-over-copy-n-paste-javascript-with-xmlhttprequest

        // await wait(2000);
        // yields the URL that should be inserted in the markdown

        // await wait(2000);

        // returns true meaning that the save was successful
        return true;
    };

    useEffect(() => {
        // console.debug(EditorContents);
    }, [EditorContents]);


    useEffect(() => {

    }, [EditorHeight]);

    return (
        <div className="container" style={{width:'100%'}} key={EditorHeight}>
            {EditorHeight > 0 &&
                <ReactMde
                    minEditorHeight = { EditorHeight-300 }
                    maxEditorHeight = { 1000 }
                    value = { EditorContents }
                    onChange = { EditorContentsHandler }
                    selectedTab = { selectedTab }
                    onTabChange={ setSelectedTab }
                    generateMarkdownPreview = { markdown => Promise.resolve(converter.makeHtml(markdown)) }
                    loadSuggestions={loadSuggestions}
                    childProps={{
                        writeButton: {
                            tabIndex: -1
                        },
                        textArea: {
                            onKeyDown: (e) => {
                                // FIXME 2020-10-08 13:17  TAB 키 개선(?)
                            }
                        }
                    }}
                    paste={{ saveImage: save }}
                />
            }

        </div>
    );
}