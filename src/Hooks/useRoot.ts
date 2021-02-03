import { useState, useEffect } from 'react';

export default function useLogin() {
    const [RootLoading, setRootLoading] = useState<boolean>(true);

    const handleRootLoading = () => {
        if (RootLoading === false) {
            setRootLoading(true);
        } else {
            setRootLoading(false);
        }
    };

    useEffect(() => {
        const appStart = () => {
            console.log(':: AppStart ::');
        };

        appStart();
    }, []);

    useEffect(() => {
        setTimeout(() => {
            setRootLoading(false);
        }, 4000);
    }, []);

    useEffect(() => {
        console.log({ RootLoading: RootLoading });
    }, [RootLoading]);

    return {
        RootLoading,
        handleRootLoading,
    };
}
