'use client';
import { RecoilRoot } from 'recoil';
import { InspectProvider, ModalProvider } from '@/Provider';
import React from 'react';

export default function RootProvider({ children }: { children: React.ReactNode }) {
    return (
        <RecoilRoot>
            <ModalProvider>
                <InspectProvider>{children}</InspectProvider>
            </ModalProvider>
        </RecoilRoot>
    );
}
