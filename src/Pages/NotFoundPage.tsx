import { PageBox, NotFoundTextBox, NotFoundButtonBox } from '@Style/NotFoundStyles';
import { GoHomeButton } from '@Element/Buttons';
import History from '@Module/History';

export default function NotFoundPage() {
    return (
        <PageBox>
            <NotFoundTextBox>처음 보는 URL 인데요?</NotFoundTextBox>
            <NotFoundButtonBox>
                <GoHomeButton handleClick={() => History.push(process.env.PUBLIC_URL + '/')} />
            </NotFoundButtonBox>
        </PageBox>
    );
}
