'use client';

import { Inter } from 'next/font/google';
import './globals.css';
import React from 'react';
import { RootProvider } from '@/Provider';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <RootProvider>{children}</RootProvider>
                <div id="modal-root"></div>
            </body>
        </html>
    );
}
