import { StyleSizeType, StyleFontWeightType } from '@/Types';
import { SpanStyle } from '@/Style/common-styles';
import Image from 'next/image';

const { Span } = SpanStyle;

export const UniSpan = ({ Text, TextSize, FontWeight }: { Text: string; TextSize: StyleSizeType; FontWeight: StyleFontWeightType }) => {
    return (
        <Span FontWeight={FontWeight} TextSize={TextSize}>
            {Text}
        </Span>
    );
};

export const UniImage = ({ ImageSrc, Width, Height, AltString }: { ImageSrc: string; Width: number; Height: number; AltString: string }) => {
    return <Image src={ImageSrc} width={Width} height={Height} className="h-8" alt={AltString} />;
};
