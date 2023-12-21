import { LoadingIcon } from '@/Icon';
import { ContainerStyle } from '@/Style/common-styles';

const { DefaultContainer } = ContainerStyle;

export default function SplashScreen() {
    return (
        <DefaultContainer>
            <LoadingIcon />
        </DefaultContainer>
    );
}
