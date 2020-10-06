import React, { useState } from 'react';
import { editorContentsInterface } from 'commonTypes';
import useWrite from 'hooks/useWrite';
import history from 'modules/History';
import { DefaultSelectBox } from 'components/elements';
import {
    MainWrapper,
    BlogWrite,
    Container,
    Header,
    WriteTitleBox,
    WriteTitleLabel,
    WriteTitle,
    CategorySelectBox,
    WriteTagBox,
    WriteBody,
    PublishButton,
    StyledApp,
    StyledEditor,
    StyledEditorTextArea,
    StyledPreviewBox,
    StyledPreviewC3,
    StyledPreviewTitle,
    ButtonContainer,
} from "styles/PostWriter";
import { ButtonLoading } from 'components/elements';
import { MarkdownRender } from 'components/elements';
// https://stackblitz.com/edit/react-tag-input-1nelrc?file=index.js
import { WithContext as ReactTags } from 'react-tag-input';
import './ReactTagStyle.css';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

const mardownText = `
# Blog.Backend

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
throw new \App\Exceptions\CustomException('Something Went Wrong.');

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

    const KeyCodes = {
        comma: 188,
        enter: 13,
    };

    const delimiters = [KeyCodes.comma, KeyCodes.enter];

    const [markdown, setMarkdown] = useState(mardownText);

    const {
        editorTitle,
        setEditorTitle,
        setEditorContents,
        editorContents,
        editorTagContents,
        setEditorTagContents,
        editorTagSuggestions,
        _handleEditorCategorySelectItem,

        editorCategoryThumb,

        _handleClickSaveButton,
        _handleClickPublishButton,

        post_create_state,
        post_publish_state,

        categoryThumbList
    } = useWrite();

    // 내용 수정시 데이터 업데이트
    const handleEditorContentsChange = ({html, text}: editorContentsInterface) => {
        setEditorContents({
            html: html,
            text: text
        })
    }

    // 테그 삭제.
    const handleTagDelete = (e: any) => {
        setEditorTagContents(editorTagContents.filter((tag, index) => index !== e))
    }

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

    // 홈으로 이동 버튼 클릭 이벤트
    const handleHomeButtonClick = () => {
        history.push(process.env.PUBLIC_URL + '/');
    }

    // 저장 버튼 클릭 이벤트
    const handleSaveButtonClick = () => {
        _handleClickSaveButton();

    }

    // 게시 버튼 클릭 이벤트
    const handlePublishButtonClick = () => {
        _handleClickPublishButton();
    }

    // const markdownRenderText = (text: string) : string => {
    //     return mdParser.render(editorTitle + text);
    // }

    // FIXME 2020-10-01 22:21  높이 스크롤 생기는 버그 수정.필요.
    // https://codesandbox.io/s/nwm83w9y1l?file=/src/styles.css:0-91
    return (
        <>
            <MainWrapper>
                <BlogWrite>
                    <Container>
                        <WriteBody>
                            <StyledApp>
                                <StyledEditor>
                                    <WriteTitleLabel htmlFor="writeTitle"></WriteTitleLabel>
                                    <WriteTitle type="text" id="writeTitle" placeholder="제목을 입력해 주세요." value={editorTitle} onChange={ e => setEditorTitle(e.target.value) } />
                                    <ReactTags tags={ editorTagContents } suggestions={editorTagSuggestions} handleDelete={handleTagDelete} handleAddition={handleTagAddition} handleDrag={handleTagDrag} delimiters={delimiters} handleTagClick={handleTagClick} placeholder={'테그를 입력해 주세요'}/>
                                    <StyledEditorTextArea onChange={e => setMarkdown(e.target.value)} value={markdown} />


<div className="sc-kafWEX eFDVNK">
    <div className="sc-lhVmIH iWtevg"><button className="sc-jtRfpW kZfGaX"><svg stroke="currentColor" fill="currentColor"
                stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path>
            </svg><span>나가기</span></button>
        <div className="sc-bYSBpT jTukdO"><button color="lightGray"
                className="sc-dnqmqq fzKLng sc-elJkPf cDxJYR">임시저장</button><button color="teal"
                className="sc-dnqmqq gzELJz sc-elJkPf cDxJYR">출간하기</button></div>
    </div>
</div>
                                </StyledEditor>

                                <StyledPreviewBox>
                                    <StyledPreviewTitle>하이</StyledPreviewTitle>
                                    <StyledPreviewC3>
                                        <MarkdownRender
                                            markdownText={mardownText}
                                        />
                                    </StyledPreviewC3>
                                </StyledPreviewBox>

                            </StyledApp>

                        </WriteBody>

                    </Container>
                    {/* <!--//container--> */}
                </BlogWrite>
            </MainWrapper>
            {/* <!--//main-wrapper--> */}
        </>

    );
}