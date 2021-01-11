import React from 'react';
import HeaderComponent from './HeaderComponent';
import NavbarComponent from './NavbarComponent';

interface MainLayoutComponentsProps {
    children: any;
}

export default function MainLayoutComponents({ children }: MainLayoutComponentsProps) {
    return (
        <>
            {/* <HeaderComponent /> */}
            <NavbarComponent />
            {children}
        </>
    );
}
