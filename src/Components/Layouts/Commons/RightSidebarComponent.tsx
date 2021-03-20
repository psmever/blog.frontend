import React, { useEffect } from 'react';
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
    // MyIconButton,
} from '@Style/RightSidebar';
import { useDispatch } from 'react-redux';
import { getWeathers, getCovids } from '@Store/Specialty';

export default function RightSidebarComponent() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getWeathers());
        dispatch(getCovids());
    }, []);

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
                    <MyIcon>{/* <MyIconButton>GitHub Icon</MyIconButton> */}</MyIcon>

                    <MyIcon>{/* <MyIconButton>FaceBook Icon</MyIconButton> */}</MyIcon>
                </MyIconBox>
            </Wrapper>
        </>
    );
}
