import React, { useEffect } from 'react';
import { BodySpinner } from '@Element/Spinners';
import { useRoot } from '@Hooks';

export default function RootComponent({ handleAppSpinner }: { handleAppSpinner: () => void }) {
    const { AppBaseCheckState } = useRoot();

    useEffect(() => {
        const setAppMainSinner = (loading: boolean) => {
            if (loading === true) {
                handleAppSpinner();
            }
        };

        setAppMainSinner(AppBaseCheckState);
    }, [AppBaseCheckState]);

    return <BodySpinner />;
}
