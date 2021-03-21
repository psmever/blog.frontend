import { Wrapper, ProfileBox, Thumbnail, Name, Title, Description } from '@Style/RightSidebar';

export default function RightSidebarComponent() {
    return (
        <>
            <Wrapper>
                <ProfileBox>
                    <Thumbnail src={process.env.PUBLIC_URL + `/assets/new-php-logo.png`} />
                    <Name>@psmever</Name>
                    <Title>PHP And React Developer</Title>
                    <Description>블로그에 오신걸 환영 합니다.</Description>
                </ProfileBox>
            </Wrapper>
        </>
    );
}
