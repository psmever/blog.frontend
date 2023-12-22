import React, { ReactNode, Fragment } from 'react';
import { LayoutModal } from '@/Element';
import { useRecoilValue } from 'recoil';
import { LayoutState } from '@/State';
import { useLayout } from '@/Hook';

export default function ModalProvider({ children }: { children: ReactNode }) {
    const layoutState = useRecoilValue(LayoutState);
    const { CloseLayoutModal } = useLayout();

    return (
        <Fragment>
            {layoutState.messageModal.open && <LayoutModal ModalMessage={layoutState.messageModal.message} AcceptButtonClick={() => CloseLayoutModal()} />}
            {children}
        </Fragment>
    );
}
