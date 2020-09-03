import { useState } from 'react';
import { editorContentsInterface, editorTagInterface } from 'commonTypes';


const testInitText = `

# test
\`\`\` js
function test() {
         const testData = 'Good.......';
}
\`\`\`
`;


export default function useWrite() {


    const [ editorContents, setEditorContents ] = useState<editorContentsInterface>({
        html: '',
        text: testInitText
    });

    // 글 쓰기 테그.
    const [ editorTagContents, setEditorTagContents] = useState<editorTagInterface>([
        {id: 'javascript', text:'javascript'},
        {id: 'php', text:'php'},
        {id: 'linux', text:'linux'},
        {id: 'mac', text:'mac'},
    ]);

    // 글 쓰기 추천 테그.
    const [ editorTagSuggestions, setEditorTagSuggestions] = useState<editorTagInterface>([
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