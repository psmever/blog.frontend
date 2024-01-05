import { ReactNode, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { AppRootState } from '@/State';
import { useRouter } from 'next/navigation';
import { useLayout } from '@/hook';
import Messages from '@/Messages';

export default function AuthProvider({ children }: { children: ReactNode }) {
    const appRootState = useRecoilValue(AppRootState);
    const { OpenLayoutModal } = useLayout();
    const router = useRouter();

    useEffect(() => {
        if (!appRootState.login.status) {
            OpenLayoutModal({ message: Messages.needAuthority });
            router.push(`/post`);
        }

        // FIXME : 종속성 disable.
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [appRootState.login]);

    return <>{children}</>;
}
