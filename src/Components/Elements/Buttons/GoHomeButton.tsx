import React from 'react';
import { GoHomeButtonStyle } from '@Style/ButtonStyles';

export default function GoHomeButton({ handleClick }: { handleClick: () => void }) {
    return <GoHomeButtonStyle onClick={() => handleClick()}>홈으로</GoHomeButtonStyle>;
}
