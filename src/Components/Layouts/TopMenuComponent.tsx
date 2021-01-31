import React from 'react';
import { Navi, NaviInput, MenuLabel, LogoText, MenuUList, MenuElement, MenuLink, MenuIcon } from '@Style/TopMenuStyles';

export default function TopMenuComponent() {
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
                        <MenuLink href="#">홈</MenuLink>
                    </MenuElement>
                    <MenuElement>
                        <MenuLink href="#">태그들</MenuLink>
                    </MenuElement>
                    <MenuElement>
                        <MenuLink href="#">최근</MenuLink>
                    </MenuElement>
                    <MenuElement>
                        <MenuLink href="#">블로그에 대해</MenuLink>
                    </MenuElement>
                    <MenuElement>
                        <MenuLink href="#">정보</MenuLink>
                    </MenuElement>
                </MenuUList>
            </Navi>
        </>
    );
}
