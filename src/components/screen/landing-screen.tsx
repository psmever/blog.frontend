import { ContainerStyle, WapperStyle } from '@/Style';
import { UniSpan } from '@/Element';

const { DefaultContainer } = ContainerStyle;
const { FlexColWapper, FlexNoWrapGap2 } = WapperStyle;

export default function LandingScreen() {
    return (
        <DefaultContainer>
            <FlexColWapper>
                <FlexNoWrapGap2>
                    <UniSpan TextSize={`5xl`} FontWeight={`extrabold`} Text={`서버`} />
                    <UniSpan TextSize={`xs`} FontWeight={`semibold`} Text={`정검 중입니다`} />
                </FlexNoWrapGap2>
            </FlexColWapper>
        </DefaultContainer>
    );
}
