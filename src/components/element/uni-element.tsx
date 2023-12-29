import { StyleSizeType, StyleFontWeightType } from '@/Types';
import { SpanStyle, ButtonStyle, InputStyle } from '@/Style/common-styles';
import Image from 'next/image';
import React, { ChangeEvent, KeyboardEvent } from 'react';
import { ButtonLoadingIcon } from '@/Icon';

const { Span } = SpanStyle;
const { Button, ManageButton } = ButtonStyle;
const { ManageInput } = InputStyle;

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

export const UniMnageButton = ({ OnClick, ButtonText, Loading }: { ButtonText: string; OnClick: () => void; Loading?: boolean }) => {
    return (
        <ManageButton type="button" onClick={() => OnClick()} disabled={Loading}>
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
        </ManageButton>
    );
};

export const UniManageInput = ({
    TextSize,
    Placeholder,
    OnChange,
    InputValue,
    HandleOnKeyDown
}: {
    Placeholder: string;
    TextSize: StyleSizeType;
    InputValue: string;
    OnChange: (event: ChangeEvent<HTMLInputElement>) => void;
    HandleOnKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void;
}) => {
    return (
        <ManageInput
            type="text"
            TextSize={TextSize}
            placeholder={Placeholder}
            onChange={(e: ChangeEvent<HTMLInputElement>) => OnChange(e)}
            value={InputValue}
            onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => HandleOnKeyDown && HandleOnKeyDown(e)}
        />
    );
};
