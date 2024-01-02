import { ManagePostPageStyle } from '@/Style/common-styles';
import { UniMarkDownView } from '@/Element';

const { PreViewBox, PreViewRow, PreViewTitleWapper, PreViewTitle } = ManagePostPageStyle;

export default function PostPreview({ Title, Contents }: { Title: string; Contents: string }) {
    return (
        <PreViewBox>
            <PreViewRow>
                <PreViewTitleWapper>
                    <PreViewTitle>{Title ? Title : `제목을 입력해 주세요`}</PreViewTitle>
                </PreViewTitleWapper>
            </PreViewRow>
            <PreViewRow>
                <UniMarkDownView Contents={Contents} />
            </PreViewRow>
        </PreViewBox>
    );
}
