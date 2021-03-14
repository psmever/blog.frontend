import React, { useState, useEffect } from 'react';
import { LayouTypes } from 'CommonTypes';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from 'StoreTypes';
import { Navi, NaviInput, MenuLabel, LogoText, MenuUList, MenuElement, MenuLink, MenuIcon } from '@Style/TopMenuStyles';

export default function TopMenuComponent({ LayouType }: { LayouType: LayouTypes }) {
    const history = useHistory();

    const { loginState, pathName } = useSelector((store: RootState) => ({
        loginState: store.app.loginState,
        pathName: store.router.location.pathname,
    }));

    const [loginDone, setLoginDone] = useState<boolean>(false);
    const [postGubun, setPostGubun] = useState<string>('');

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

    const handleClickScribbleLink = () => {
        history.push({
            pathname: process.env.PUBLIC_URL + `/scribble`,
        });
    };

    // 블로그에 대해 링크
    const handleClickBlogsLink = () => {
        history.push({
            pathname: process.env.PUBLIC_URL + `/blog`,
        });
    };

    // 정보 메뉴 클릭
    const handleClickMingunLink = () => {
        history.push({
            pathname: process.env.PUBLIC_URL + `/mingun`,
        });
    };

    const handleClickPostWriteLink = () => {
        console.debug(`handleClickPostWriteLink ${postGubun}`);
    };

    useEffect(() => {
        const setLoginCheckSuccess = () => {
            setLoginDone(true);
        };

        if (loginState === true) {
            setLoginCheckSuccess();
        }
    }, [loginState]);

    useEffect(() => {
        const setPagePathName = (pathname: string) => {
            setPostGubun(pathname);
        };

        if (pathName) {
            setPagePathName(pathName.replace('/', ''));
        }
    }, [pathName]);

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
                        <MenuLink
                            layoutColor={LayouType.layoutColor}
                            menuActive={postGubun === 'posts' ? 'true' : 'false'}
                            onClick={() => handleClickHomeLink()}
                        >
                            홈
                        </MenuLink>
                    </MenuElement>
                    <MenuElement>
                        <MenuLink
                            layoutColor={LayouType.layoutColor}
                            menuActive={postGubun === 'tags' ? 'true' : 'false'}
                            onClick={() => handleClickTagsLink()}
                        >
                            태그들
                        </MenuLink>
                    </MenuElement>
                    <MenuElement>
                        <MenuLink
                            layoutColor={LayouType.layoutColor}
                            menuActive={postGubun === 'scribble' ? 'true' : 'false'}
                            onClick={() => handleClickScribbleLink()}
                        >
                            끄적끄적
                        </MenuLink>
                    </MenuElement>
                    <MenuElement>
                        <MenuLink
                            layoutColor={LayouType.layoutColor}
                            menuActive={postGubun === 'blog' ? 'true' : 'false'}
                            onClick={() => handleClickBlogsLink()}
                        >
                            블로그 소개
                        </MenuLink>
                    </MenuElement>
                    <MenuElement>
                        <MenuLink
                            layoutColor={LayouType.layoutColor}
                            menuActive={postGubun === 'mingun' ? 'true' : 'false'}
                            onClick={() => handleClickMingunLink()}
                        >
                            주인장은
                        </MenuLink>
                    </MenuElement>
                    {loginDone === true && (
                        <MenuElement>
                            <MenuLink layoutColor={LayouType.layoutColor} onClick={() => handleClickPostWriteLink()}>
                                글등록
                            </MenuLink>
                        </MenuElement>
                    )}
                </MenuUList>
            </Navi>
        </>
    );
}
