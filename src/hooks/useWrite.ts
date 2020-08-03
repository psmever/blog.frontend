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



    return {
        setEditorContents,
        editorContents,
    };
}