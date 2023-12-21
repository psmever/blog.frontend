import { LoadingIcon } from '@/Icon';
import { ContainerStyle } from '@/Style';

const { DefaultContainer } = ContainerStyle;

export default function SplashScreen() {
    return (
        <DefaultContainer>
            <LoadingIcon />
        </DefaultContainer>
    );
}
