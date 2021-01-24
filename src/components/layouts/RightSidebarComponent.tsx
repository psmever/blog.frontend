import React from 'react';
import {
    Wrapper,
    ProfileBox,
    Thumbnail,
    Name,
    Title,
    Description,
    ContectButton,
    MyIconBox,
    MyIcon,
    MyIconButton,
    VersionBox,
    MadeText,
    VersionText,
} from '@Style/RightSidebar';

export default function RightSidebarComponent() {
    return (
        <>
            <Wrapper>
                <ProfileBox>
                    <Thumbnail src={process.env.PUBLIC_URL + `/assets/new-php-logo.png`} />
                    <Name>@psmever</Name>
                    <Title>PHP And React Developer</Title>
                    <Description>블로그에 오신걸 환영 합니다.</Description>
                    <ContectButton type="button">나에게</ContectButton>
                </ProfileBox>

                <MyIconBox>
                    <MyIcon>
                        <MyIconButton>GitHub Icon</MyIconButton>
                    </MyIcon>

                    <MyIcon>
                        <MyIconButton>FaceBook Icon</MyIconButton>
                    </MyIcon>
                </MyIconBox>
            </Wrapper>

            <VersionBox>
                <MadeText>Made In @psmever</MadeText>
                <VersionText>Version 2.0.0</VersionText>
            </VersionBox>
        </>
    );
}
