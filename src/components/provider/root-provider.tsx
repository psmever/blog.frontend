'use client';
import { RecoilRoot } from 'recoil';
import { InspectProvider } from '@/Provider';

export default function RootProvider({ children }: { children: React.ReactNode }) {
    return (
        <RecoilRoot>
            <InspectProvider>{children}</InspectProvider>
        </RecoilRoot>
    );
}
