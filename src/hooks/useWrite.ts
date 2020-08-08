import { useState } from 'react';
import * as commonTypes from 'modules/commonTypes';


const testInitText = `

# test
\`\`\` js
function test() {
         const testData = 'Good.......';
}
\`\`\`
`;


export default function useWrite() {


    const [ editorContents, setEditorContents ] = useState<commonTypes.editorContentsInterface>({
        html: '',
        text: testInitText
    });

    // 글 쓰기 테그.
    const [ editorTagContents, setEditorTagContents] = useState<commonTypes.editorTagInterface>([
        {id: 'javascript', text:'javascript'},
        {id: 'php', text:'php'},
        {id: 'linux', text:'linux'},
        {id: 'mac', text:'mac'},
    ]);

    // 글 쓰기 추천 테그.
    const [ editorTagSuggestions, setEditorTagSuggestions] = useState<commonTypes.editorTagInterface>([
        { id: 'Develop', text: 'Develop' },
        { id: 'Linux', text: 'Linux' },
        { id: 'Javascript', text: 'Javascript' },
        { id: 'PHP', text: 'PHP' },
    ]);



    return {
        setEditorContents,
        editorContents,
        editorTagContents,
        setEditorTagContents,
        editorTagSuggestions,
        setEditorTagSuggestions
    };
}