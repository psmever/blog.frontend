import { UniManageInput, UniMDEditor, UniMnageButton, UniTagInput } from '@/Element';
import { ManagePostPageStyle } from '@/Style/common-styles';

const { EditorBox, TitleWapper, TagWapper, EditorWapper, ButtonWapper, ButtonRow, LeftButton, RightButton } = ManagePostPageStyle;

export default function PostEditor({
    Title,
    Tags,
    Contents,
    ChangeTitle,
    ChangeTags,
    ChangeContents
}: {
    Title: string;
    ChangeTitle: (title: string) => void;
    Tags: Array<string>;
    ChangeTags: (tags: Array<string>) => void;
    Contents: string;
    ChangeContents: (contents: string) => void;
}) {
    return (
        <EditorBox>
            <TitleWapper>
                <UniManageInput TextSize={`2xl`} Placeholder={`제목을 입력해 주세요`} InputValue={Title} OnChange={(e) => ChangeTitle(e.target.value)} />
            </TitleWapper>
            <TagWapper>
                <UniTagInput Tags={Tags} ChangeTags={(e) => ChangeTags(e)} />
            </TagWapper>
            <EditorWapper>
                <UniMDEditor EditerContents={Contents} EditerOnChange={(contents) => ChangeContents(contents)} />
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
