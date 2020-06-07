import React from 'react';
import HeaderComponent from './common/HeaderComponent'
import FooterComponent from './common/FooterComponent'

interface MainLayoutComponentsProps  {
    children: any
};

export default function MainLayoutComponents({ children } : MainLayoutComponentsProps) {
    return (
        <>
            <HeaderComponent/>
                {children}
            <FooterComponent/>
        </>
    );
}