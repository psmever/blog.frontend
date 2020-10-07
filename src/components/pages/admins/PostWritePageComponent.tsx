import React, {useState, useEffect, useRef} from 'react';

import {
    MarkdownEditor,
    MarkdownRender
} from 'components/elements';

import {
    MainWrapper,
    BlogWrite,
    Container,
    LeftEditorBox,
    RightEditorPreviewBox,
    WriteTitleBox,
    WriteTitleLabel,
    WriteTitle,
    TagBox,
    EditorBox,
    StyledPreviewTitle,
    RightEditorPreviewContents,
} from "styles/PostWriter";

import useWrite from 'hooks/useWrite';

import { WithContext as ReactTags } from 'react-tag-input';
import './ReactTagStyle.css';


const KeyCodes = {
    comma: 188,
    enter: 13,
};



const mardownText = `
# Blog.Backend

![image](https://picsum.photos/300)

### Git First Push.
Use the package manager [composer](https://getcomposer.org/) to install foobar.

## Git Clone.

\`\`\`bash
git clone https://github.com/psmever/blog.backend.git blog.backend
\`\`\`

## Git Clone (Single Branch).

\`\`\`bash
git clone -b develop --single-branch https://github.com/psmever/blog.backend.git
\`\`\`

## Composer.
\`\`\`bash
composer install

\`\`\`

## First Config.
\`\`\`bash
composer install
cp .env.example .env
\`\`\`

## Local Develop Server.
\`\`\`bash
php artisan serve
\`\`\`

## Browser.
\`\`\`bash
http://127.0.0.1:8000 || http://localhost:8000/
\`\`\`

## Ex Site..
\`\`\`bash
repository-pattern
https://medium.com/dev-genius/laravel-api-repository-pattern-make-your-code-more-structured-the-simple-guide-5b770da766d7

deploy
https://jeromejaglale.com/doc/php/laravel_github_webhook

deploy - envoy
https://github.com/appkr/envoy


Rest-api-Response-Format
https://github.com/cryptlex/rest-api-response-format

\`\`\`

## CustomException
\`\`\`
throw new AppExceptionsCustomException('Something Went Wrong.');

\`\`\`

## App Clear Script
\`\`\`

composer app:clear
composer test:clear
\`\`\`

## Server Deploy
\`\`\`
> composer global require laravel/envoy

envoy run deploy_prod
envoy run deploy_stage

\`\`\`

## etc message
github actions test
\`\`\`

SlackMessage notifications
https://medium.com/@olayinka.omole/sending-slack-notifications-from-your-laravel-app-1bdb6e4e4127
https://www.lesstif.com/php-and-laravel/sending-slack-notifications-from-laravel-36209045.html
\`\`\`

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
`;


export default function WritePage() {
    const {
        editorTagContents,
        setEditorTagContents,
        editorTagSuggestions,
    } = useWrite();

    const inputRef = useRef<HTMLInputElement>(null);

    const handleTagDelete = (e: any) => {
        setEditorTagContents(editorTagContents.filter((tag, index) => index !== e))
    }

    const delimiters = [KeyCodes.comma, KeyCodes.enter];
        // 테그 추가.
        const handleTagAddition = (e: any) => {
            setEditorTagContents([
                ...editorTagContents,
                e
            ]);
        }

        // 테그 드레그 이벤트
        const handleTagDrag = (tag: any, currPos: any, newPos:any) => {
            console.debug({
                tag:tag,
                currPos:currPos,
                newPos:newPos,
            });

            const tags = [...editorTagContents];
            const newTags = tags.slice();

            newTags.splice(currPos, 1);
            newTags.splice(newPos, 0, tag);

            setEditorTagContents(newTags);

        }

        // 테그 클릭 이벤트
        const handleTagClick = (e: any) => {
            console.debug("TagClick : ",editorTagContents[e]);
        }


    useEffect(() => {
        console.debug(inputRef.current?.clientHeight);
      }, []);




    return (
        <>
            <MainWrapper>
                <BlogWrite>
                    <Container>
                        <LeftEditorBox ref={inputRef}>
                            <WriteTitleBox>
                                <WriteTitleLabel htmlFor="writeTitle"></WriteTitleLabel>
                                <WriteTitle type="text" id="writeTitle" placeholder="제목을 입력해 주세요."
                                    value="Editor Title"
                                    onChange={ e => console.debug(e) }
                                />
                            </WriteTitleBox>
                            <TagBox>
                                <ReactTags tags={ editorTagContents }
                                    suggestions={editorTagSuggestions}
                                    handleDelete={handleTagDelete}
                                    handleAddition={handleTagAddition}
                                    handleDrag={handleTagDrag}
                                    delimiters={delimiters}
                                    handleTagClick={handleTagClick}
                                    placeholder={'테그를 입력해 주세요'}
                                />
                            </TagBox>
                            <EditorBox>
                                <MarkdownEditor/>
                            </EditorBox>
                        </LeftEditorBox>
                        <RightEditorPreviewBox>
                            <StyledPreviewTitle>Title</StyledPreviewTitle>
                            <RightEditorPreviewContents>
                                <MarkdownRender markdownText={mardownText}/>
                            </RightEditorPreviewContents>
                        </RightEditorPreviewBox>
                    </Container>
                </BlogWrite>
            </MainWrapper>
        </>
    );
}