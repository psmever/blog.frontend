import React from 'react';
import HeaderComponent from './common/HeaderComponent';

interface MainLayoutComponentsProps {
    children: any;
}

export default function MainLayoutComponents({ children }: MainLayoutComponentsProps) {
    return (
        <>
            <HeaderComponent />
            {children}
        </>
    );
}
