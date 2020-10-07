import React, {useState, useEffect, useRef} from 'react';
import ReactMde, { Suggestion, SaveImageHandler } from "react-mde";
import * as Showdown from "showdown";
import "react-mde/lib/styles/css/react-mde-all.css";

export default function MarkdownEditor() {


    const [value, setValue] = useState("**Hello world!!!**");
    const [selectedTab, setSelectedTab] = useState<"write" | "preview">(
      "write"
    );

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


    return (
        <div className="container" style={{width:'100%'}}>
            <ReactMde
                minEditorHeight={1265-300}
                maxEditorHeight={1000}
                value={value}
                onChange={setValue}
                selectedTab={selectedTab}
                onTabChange={setSelectedTab}
                generateMarkdownPreview={markdown =>
                    Promise.resolve(converter.makeHtml(markdown))
                }
                loadSuggestions={loadSuggestions}
                childProps={{
                    writeButton: {
                    tabIndex: -1
                    }
                }}
                paste={{
                    saveImage: save
                }}
            />
        </div>
    );
}