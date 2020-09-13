import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editorContentsInterface, editorTagInterface } from 'commonTypes';
import { postCreateAction } from 'modules/redux/post';
import { RootState } from 'modules';

const testInitText = `
# Blog.Frontend


#### Git Clone.

\`\`\`
git clone https://github.com/psmever/blog.front.git blog.front
\`\`\`

#### Config
\`\`\`
cp config/sample.environment.env config/development.env
cp config/sample.environment.env config/production.env
\`\`\`

#### Node Module Install.
\`\`\`
yarn install
\`\`\`

### Local Develper

\`\`\`
yarn start
yarn start:prod
\`\`\`

### Build
\`\`\`
yarn build
yarn build:prod
\`\`\`

### Server Deploy:prod
\`\`\`
yarn deploy:prod
\`\`\`


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
`;

const testInitHtml = `
<h1>Blog.Frontend</h1>
<h4>Git Clone.</h4>
<pre><code>git clone https://github.com/psmever/blog.front.git blog.front
</code></pre>
<h4>Config</h4>
<pre><code>cp config/sample.environment.env config/development.env
cp config/sample.environment.env config/production.env
</code></pre>
<h4>Node Module Install.</h4>
<pre><code>yarn install
</code></pre>
<h3>Local Develper</h3>
<pre><code>yarn start
yarn start:prod
</code></pre>
<h3>Build</h3>
<pre><code>yarn build
yarn build:prod
</code></pre>
<h3>Server Deploy:prod</h3>
<pre><code>yarn deploy:prod
</code></pre>
<h2>Contributing</h2>
<p>Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.</p>
<p>Please make sure to update tests as appropriate.</p>
<h2>License</h2>
<p><a href="https://choosealicense.com/licenses/mit/">MIT</a></p>
`;


export default function useWrite() {

    const dispatch = useDispatch();

    const [ editorTitle, setEditorTitle] = useState<string>('');

    const [ editorContents, setEditorContents ] = useState<editorContentsInterface>({
        html: '',
        text: ''
    });

    // 글 쓰기 테그.
    const [ editorTagContents, setEditorTagContents] = useState<editorTagInterface>([
    ]);

    // 글 쓰기 추천 테그.
    const [ editorTagSuggestions, setEditorTagSuggestions] = useState<editorTagInterface>([
        { id: 'Develop', text: 'Develop' },
        { id: 'Linux', text: 'Linux' },
        { id: 'Javascript', text: 'Javascript' },
        { id: 'PHP', text: 'PHP' },
    ]);

    const _handleClickSaveButton = () => {
        const dataObject = {
            editorTitle: editorTitle,
            editorContents: editorContents,
            editorTagContents: editorTagContents,
        };
        dispatch(postCreateAction(dataObject));
    }

    const _handleClickPublishButton = () => {
        console.debug('_handleClickPublishButton');
    }

    useEffect(() => {
        setEditorTitle('blog.front Readme.MD');
        setEditorContents({
            html: testInitHtml,
            text: testInitText
        });
        setEditorTagContents([
            {id: "Html", text: "Html"},
            {id: "Markdown", text: "Markdown"},
            {id: "Code", text: "Code"},
        ])
    }, [])

    return {
        editorTitle,
        setEditorTitle,
        setEditorContents,
        editorContents,
        editorTagContents,
        setEditorTagContents,
        editorTagSuggestions,
        setEditorTagSuggestions,

        _handleClickSaveButton,
        _handleClickPublishButton,
    };
}