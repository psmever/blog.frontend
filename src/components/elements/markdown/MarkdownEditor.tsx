import React, { useState, useEffect } from 'react';
import ReactMde, { Suggestion, SaveImageHandler } from "react-mde"; // https://uiwjs.github.io/react-md-editor/
import * as Showdown from "showdown";
import "react-mde/lib/styles/css/react-mde-all.css";


interface MarkdownEditorPros {
    EditorContents : string
    EditorContentsHandler : ( contents: string ) => void
}

export default function MarkdownEditor({
    EditorContents,
    EditorContentsHandler
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

    const save: SaveImageHandler = async function*(data: ArrayBuffer) {
        // Promise that waits for "time" milliseconds
        const wait = function(time: number) {
            return new Promise((a, r) => {
                setTimeout(() => a(), time);
            });
        };

        // Upload "data" to your server
        // Use XMLHttpRequest.send to send a FormData object containing
        // "data"
        // Check this question: https://stackoverflow.com/questions/18055422/how-to-receive-php-image-data-over-copy-n-paste-javascript-with-xmlhttprequest

        await wait(2000);
        // yields the URL that should be inserted in the markdown
        yield "https://picsum.photos/300";
        await wait(2000);

        // returns true meaning that the save was successful
        return true;
    };

    useEffect(() => {
        // console.debug(EditorContents);
    }, [EditorContents]);

    return (
        <div className="container" style={{width:'100%'}}>
            <ReactMde
                minEditorHeight={1265-600}
                maxEditorHeight={1000}
                value={EditorContents}
                onChange={EditorContentsHandler}
                selectedTab={selectedTab}
                onTabChange={setSelectedTab}
                generateMarkdownPreview={markdown =>
                    Promise.resolve(converter.makeHtml(markdown))
                }
                loadSuggestions={loadSuggestions}
                childProps={{
                    writeButton: {
                        tabIndex: -1
                    },
                    textArea: {
                        onKeyDown: (e) => {
                            // FIXME 2020-10-08 13:17  TABLE 키 개선(?)
                        }
                      }
                }}
                paste={{
                    saveImage: save
                }}
            />
        </div>
    );
}