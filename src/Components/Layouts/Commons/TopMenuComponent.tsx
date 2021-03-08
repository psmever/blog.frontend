import React from 'react';
import { LayouTypes } from 'CommonTypes';
import { useHistory } from 'react-router-dom';
import { Navi, NaviInput, MenuLabel, LogoText, MenuUList, MenuElement, MenuLink, MenuIcon } from '@Style/TopMenuStyles';

export default function TopMenuComponent({ LayouType }: { LayouType: LayouTypes }) {
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
            <Navi layoutColor={LayouType.layoutColor}>
                <NaviInput type="checkbox" id="check" />
                <MenuLabel htmlFor="check">
                    <MenuIcon />
                </MenuLabel>
                <LogoText layoutColor={LayouType.layoutColor}>NicePage</LogoText>
                <MenuUList>
                    <MenuElement>
                        <MenuLink layoutColor={LayouType.layoutColor} onClick={() => handleClickHomeLink()}>
                            홈
                        </MenuLink>
                    </MenuElement>
                    <MenuElement>
                        <MenuLink layoutColor={LayouType.layoutColor} onClick={() => handleClickTagsLink()}>
                            태그들
                        </MenuLink>
                    </MenuElement>
                    <MenuElement>
                        <MenuLink layoutColor={LayouType.layoutColor} onClick={() => handleClickLatelyLink()}>
                            최근
                        </MenuLink>
                    </MenuElement>
                    <MenuElement>
                        <MenuLink layoutColor={LayouType.layoutColor} onClick={() => handleClickBlogsLink()}>
                            블로그에 대해
                        </MenuLink>
                    </MenuElement>
                    <MenuElement>
                        <MenuLink layoutColor={LayouType.layoutColor} onClick={() => handleClickInfomationLink()}>
                            정보
                        </MenuLink>
                    </MenuElement>
                </MenuUList>
            </Navi>
        </>
    );
}
