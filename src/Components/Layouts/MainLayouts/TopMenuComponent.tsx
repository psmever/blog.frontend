import React from 'react';
import { useHistory } from 'react-router-dom';

import { Navi, NaviInput, MenuLabel, LogoText, MenuUList, MenuElement, MenuLink, MenuIcon } from '@Style/TopMenuStyles';

export default function TopMenuComponent() {
    const history = useHistory();

    // 홈
    const handleClickHomeLink = () => {
        history.push({
            pathname: process.env.PUBLIC_URL + `/posts`,
        });
    };

    // 태그리스트.
    const handleClickTagsLink = () => {
        history.push({
            pathname: process.env.PUBLIC_URL + `/tags`,
        });
    };

    const handleClickLatelyLink = () => {
        history.push({
            pathname: process.env.PUBLIC_URL + `/lately`,
        });
    };

    // 블로그에 대해 링크
    const handleClickBlogsLink = () => {
        history.push({
            pathname: process.env.PUBLIC_URL + `/blogs`,
        });
    };

    // 정보 메뉴 클릭
    const handleClickInfomationLink = () => {
        history.push({
            pathname: process.env.PUBLIC_URL + `/infomations`,
        });
    };

    return (
        <>
            <Navi>
                <NaviInput type="checkbox" id="check" />
                <MenuLabel htmlFor="check">
                    <MenuIcon />
                </MenuLabel>
                <LogoText>NicePage</LogoText>
                <MenuUList>
                    <MenuElement>
                        <MenuLink onClick={() => handleClickHomeLink()}>홈</MenuLink>
                    </MenuElement>
                    <MenuElement>
                        <MenuLink onClick={() => handleClickTagsLink()}>태그들</MenuLink>
                    </MenuElement>
                    <MenuElement>
                        <MenuLink onClick={() => handleClickLatelyLink()}>최근</MenuLink>
                    </MenuElement>
                    <MenuElement>
                        <MenuLink onClick={() => handleClickBlogsLink()}>블로그에 대해</MenuLink>
                    </MenuElement>
                    <MenuElement>
                        <MenuLink onClick={() => handleClickInfomationLink()}>정보</MenuLink>
                    </MenuElement>
                </MenuUList>
            </Navi>
        </>
    );
}
