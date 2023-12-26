import { useSetRecoilState } from 'recoil';
import { LayoutState } from '@/State';
export default function useLayout() {
    const setLayoutState = useSetRecoilState(LayoutState);

    const OpenLayoutModal = ({ message }: { message: string }) => {
        setLayoutState((prevState) => ({
            ...prevState,
            messageModal: {
                ...prevState.messageModal,
                type: `message`,
                message: message,
                open: true
            }
        }));
    };

    const CloseLayoutModal = () => {
        setLayoutState((prevState) => ({
            ...prevState,
            messageModal: {
                ...prevState.messageModal,
                type: ``,
                message: ``,
                open: false
            }
        }));
    };

    return {
        OpenLayoutModal,
        CloseLayoutModal
    };
}
