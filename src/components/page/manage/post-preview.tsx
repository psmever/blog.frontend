import { ManagePostPageStyle } from '@/Style/common-styles';
import { UniMarkDownView } from '@/Element';
const { PreViewBox } = ManagePostPageStyle;

export default function PostPreview({ Title, Contents }: { Title: string; Contents: string }) {
    return (
        <PreViewBox>
            <div className="flex w-full">
                <div className="inline-block w-full h-14 min-h-14 border-b border-dotted border-gray-500">
                    <p className="text-4xl">{Title ? Title : `제목을 입력해 주세요`}</p>
                </div>
            </div>
            <div className="flex w-full">
                <UniMarkDownView Contents={Contents} />
            </div>
        </PreViewBox>
    );
}
