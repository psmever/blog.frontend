import { StyleSizeType, StyleFontWeightType } from '@/Types';
import { SpanStyle, ButtonStyle } from '@/Style/common-styles';
import Image from 'next/image';
import React from 'react';
import { ButtonLoadingIcon } from '@/Icon';

const { Span } = SpanStyle;
const { Button } = ButtonStyle;

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

export const UniButton = ({ OnClick, ButtonText, Loading }: { ButtonText: string; OnClick: () => void; Loading?: boolean }) => {
    return (
        <Button type="button" onClick={() => OnClick()} disabled={Loading}>
            {(() => {
                if (Loading) {
                    return (
                        <>
                            <ButtonLoadingIcon />
                            로딩중...
                        </>
                    );
                } else {
                    return ButtonText;
                }
            })()}
        </Button>
    );
};
