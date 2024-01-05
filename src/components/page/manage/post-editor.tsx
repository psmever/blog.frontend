import { useEffect, useRef } from 'react';
import { UniManageInput, UniMDEditor, UniMnageButton, UniTagInput } from '@/Element';
import { ManagePostPageStyle } from '@/Style/common-styles';
import { DefaultStateType } from '@/Types';

const { EditorBox, TitleWapper, TagWapper, EditorWapper, ButtonWapper, ButtonRow, LeftButton, RightButton } = ManagePostPageStyle;

export default function PostEditor({
    Title,
    Tags,
    Contents,
    ChangeTitle,
    ChangeTags,
    ChangeContents,
    IsTyping
}: {
    Title: string;
    ChangeTitle: (title: string) => void;
    Tags: Array<string>;
    ChangeTags: (tags: Array<string>) => void;
    Contents: string;
    ChangeContents: (contents: string) => void;
    IsTyping: (state: string | DefaultStateType) => void;
}) {
    const keyUpTimer = useRef<NodeJS.Timeout | null>(null);

    const handleOnKeyDown = () => {
        clearTimeout(keyUpTimer.current as NodeJS.Timeout);

        keyUpTimer.current = setTimeout(() => {
            IsTyping(`end`);
        }, 30000);
    };

    useEffect(() => {
        IsTyping(`yet`);

        // FIXME : 종속성 disable.
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <EditorBox>
            <TitleWapper>
                <UniManageInput
                    TextSize={`2xl`}
                    Placeholder={`제목을 입력해 주세요`}
                    InputValue={Title}
                    OnChange={(e) => ChangeTitle(e.target.value)}
                    HandleOnKeyDown={() => {
                        IsTyping(`ing`);
                        handleOnKeyDown();
                    }}
                />
            </TitleWapper>
            <TagWapper>
                <UniTagInput Tags={Tags} ChangeTags={(e) => ChangeTags(e)} />
            </TagWapper>
            <EditorWapper>
                <UniMDEditor
                    EditerContents={Contents}
                    EditerOnChange={(contents) => ChangeContents(contents)}
                    HandleOnKeyDown={() => {
                        IsTyping(`ing`);
                        handleOnKeyDown();
                    }}
                />
            </EditorWapper>
            <ButtonWapper>
                <ButtonRow>
                    <LeftButton>
                        <UniMnageButton ButtonText="게시" OnClick={() => console.debug('click')} />
                    </LeftButton>
                    <RightButton>
                        <UniMnageButton ButtonText="임시저장" OnClick={() => console.debug('click')} />
                        <UniMnageButton ButtonText="저장" OnClick={() => console.debug('click')} />
                    </RightButton>
                </ButtonRow>
            </ButtonWapper>
        </EditorBox>
    );
}
