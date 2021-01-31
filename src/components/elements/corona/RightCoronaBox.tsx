import React from 'react';
import {
    CoronaBox,
    CoronaDetailBox,
    CoronaCategoryText,
    CoronaCategoryCount,
    CoronaPreviousCount,
} from '@Style/RightCoronaBoxStyles';

export default function RightCoronaBox() {
    return (
        <>
            <CoronaBox>
                <CoronaDetailBox>
                    <CoronaCategoryText>확진자:</CoronaCategoryText>
                    <CoronaCategoryCount>78,205</CoronaCategoryCount>
                    <CoronaPreviousCount>78,205</CoronaPreviousCount>
                </CoronaDetailBox>
                <CoronaDetailBox>
                    <CoronaCategoryText>격리해제:</CoronaCategoryText>
                    <CoronaCategoryCount>78,205</CoronaCategoryCount>
                    <CoronaPreviousCount>78,205</CoronaPreviousCount>
                </CoronaDetailBox>
                <CoronaDetailBox>
                    <CoronaCategoryText>사망자:</CoronaCategoryText>
                    <CoronaCategoryCount>78,205</CoronaCategoryCount>
                    <CoronaPreviousCount>78,205</CoronaPreviousCount>
                </CoronaDetailBox>
                <CoronaDetailBox>
                    <CoronaCategoryText>검사진행:</CoronaCategoryText>
                    <CoronaCategoryCount>78,205</CoronaCategoryCount>
                    <CoronaPreviousCount>78,205</CoronaPreviousCount>
                </CoronaDetailBox>
            </CoronaBox>
        </>
    );
}
