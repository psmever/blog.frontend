'use client';

import React, { useEffect } from 'react';
import { SplashScreen } from '@/Screen';
import { useAuth, useLayout } from '@/Hook';
import { useRouter } from 'next/navigation';
import Messages from '@/Messages';

export default function MnageLogoutPage() {
    const { HandleLogout } = useAuth();
    const { OpenLayoutModal } = useLayout();
    const router = useRouter();

    useEffect(() => {
        const thisAttempt = async () => {
            const { result } = await HandleLogout();
            if (result) {
                OpenLayoutModal({ message: Messages.logoutSuccess });
            } else {
                OpenLayoutModal({ message: Messages.alreadyLogout });
            }

            router.push(`/post`);
        };

        thisAttempt().then();
    }, [HandleLogout, OpenLayoutModal, router]);

    return <SplashScreen />;
}
