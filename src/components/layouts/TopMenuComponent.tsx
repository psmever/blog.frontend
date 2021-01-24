import React from 'react';
import { Navi, NaviInput, MenuLabel, LogoText, MenuUList, MenuElement, MenuLink } from '@Style/TopMenuStyles';

export default function TopMenuComponent() {
    return (
        <>
            <Navi>
                <NaviInput type="checkbox" id="check" />
                <MenuLabel htmlFor="check">MENU</MenuLabel>
                <LogoText>NicePage</LogoText>
                <MenuUList>
                    <MenuElement>
                        <MenuLink href="#">Home</MenuLink>
                    </MenuElement>
                    <MenuElement>
                        <MenuLink href="#">About</MenuLink>
                    </MenuElement>
                    <MenuElement>
                        <MenuLink href="#">Services</MenuLink>
                    </MenuElement>
                    <MenuElement>
                        <MenuLink href="#">Contact</MenuLink>
                    </MenuElement>
                    <MenuElement>
                        <MenuLink href="#">Feedback</MenuLink>
                    </MenuElement>
                </MenuUList>
            </Navi>
        </>
    );
}
