import React, { useState, useEffect } from 'react';
import { LayouTypes } from 'CommonTypes';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from 'StoreTypes';
import { postWaitingList } from '@API';
import { isEmpty } from '@Helper';
import Swal from 'sweetalert2';
import { Navi, NaviInput, MenuLabel, LogoText, MenuUList, MenuElement, MenuLink, MenuIcon } from '@Style/TopMenuStyles';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function TopMenuComponent({ LayouType }: { LayouType: LayouTypes }) {
    const history = useHistory();

    const { loginState, pathName } = useSelector((store: RootState) => ({
        loginState: store.app.loginState,
        pathName: store.router.location.pathname,
    }));

    const [loginDone, setLoginDone] = useState<boolean>(false);
    const [menuGubun, setMenuGubun] = useState<string>('');
    const [openMobileMenu, setOpenMobileMenu] = useState<'false' | 'true'>('false');

    const handleClickMobileMenu = () => {
        if (openMobileMenu === 'false') {
            setOpenMobileMenu('true');
        } else {
            setOpenMobileMenu('false');
        }
    };

    // 로고 클릭 처리.
    const handleClickLogoText = () => {
        setOpenMobileMenu('false');
        history.push({
            pathname: process.env.PUBLIC_URL + `/posts`,
        });
    };

    // 검색 버튼
    const handleClickSearchLink = () => {
        setOpenMobileMenu('false');
        history.push({
            pathname: process.env.PUBLIC_URL + `/search/posts`,
        });
    };
    // 홈
    const handleClickHomeLink = () => {
        setOpenMobileMenu('false');
        history.push({
            pathname: process.env.PUBLIC_URL + `/posts`,
        });
    };

    const handleClickScribbleLink = () => {
        setOpenMobileMenu('false');
        history.push({
            pathname: process.env.PUBLIC_URL + `/sections/scribble`,
        });
    };

    // 블로그에 대해 링크
    const handleClickBlogsLink = () => {
        setOpenMobileMenu('false');
        history.push({
            pathname: process.env.PUBLIC_URL + `/sections/blog`,
        });
    };

    // 정보 메뉴 클릭
    const handleClickMingunLink = () => {
        history.push({
            pathname: process.env.PUBLIC_URL + `/sections/mingun`,
        });
    };

    // 글 등록.
    const handleClickPostWriteLink = () => {
        // 게시전 글이 있다면 선택후 수정 페이지로 이동.
        const checkPostsWaitingList = async () => {
            const waitingPost = await postWaitingList();
            if (waitingPost.status === true && !isEmpty(waitingPost.payload) && waitingPost.payload.length > 0) {
                const selectBoxOptions = waitingPost.payload.map(e => {
                    return e.post_title;
                });

                const { value: selectValue } = await Swal.fire({
                    title: '작성 중인 글이 있습니다.',
                    input: 'select',
                    inputOptions: selectBoxOptions,
                    inputPlaceholder: '선택후 이동',
                    showCancelButton: true,
                    confirmButtonText: '수정',
                    cancelButtonText: '나중에',
                });

                if (isEmpty(selectValue)) {
                    history.push({
                        pathname: process.env.PUBLIC_URL + `/posts/write`,
                    });
                    return;
                }

                const selectPostUUID = waitingPost.payload[selectValue]
                    ? waitingPost.payload[selectValue].post_uuid
                    : null;

                if (isEmpty(selectPostUUID)) {
                    history.push({
                        pathname: process.env.PUBLIC_URL + `/posts/write`,
                    });
                    return;
                }

                history.push({
                    pathname: process.env.PUBLIC_URL + `/posts/${selectPostUUID}/edit`,
                });
            } else {
                history.push({
                    pathname: process.env.PUBLIC_URL + `/posts/write`,
                });
            }
        };

        if (menuGubun === 'posts' || menuGubun === 'search') {
            checkPostsWaitingList();
        } else {
            history.push({
                pathname: `${process.env.PUBLIC_URL}/sections/${menuGubun}/write`,
            });
        }
    };

    // 로그인 상태 처리.
    useEffect(() => {
        const setLoginCheckSuccess = () => {
            setLoginDone(true);
        };

        if (loginState === true) {
            setLoginCheckSuccess();
        }
    }, [loginState]);

    // 라우터를 기준으로 글 구분 처리.
    useEffect(() => {
        const setPagePathName = (pathname: string[]) => {
            if (pathname[0] === 'posts') {
                setMenuGubun(pathname[0]);
            } else if (pathname[0] === 'search') {
                setMenuGubun(pathname[0]);
            } else {
                // 섹션 일경우 .
                setMenuGubun(pathname[1]);
            }
        };

        if (pathName) {
            const pathArray = pathName.split('/').filter(e => e);
            setPagePathName(pathArray);
        }
    }, [pathName]);

    return (
        <>
            <Navi layoutColor={LayouType.layoutColor} mobileMenuOpen={openMobileMenu}>
                <NaviInput type="checkbox" id="check" />
                <MenuLabel htmlFor="check" onClick={() => handleClickMobileMenu()}>
                    <MenuIcon layoutColor={LayouType.layoutColor} />
                </MenuLabel>
                <LogoText layoutColor={LayouType.layoutColor} onClick={() => handleClickLogoText()}>
                    NicePage
                </LogoText>
                <MenuUList mobileMenuOpen={openMobileMenu} layoutColor={LayouType.layoutColor}>
                    <MenuElement>
                        <MenuLink
                            layoutColor={LayouType.layoutColor}
                            menuActive={menuGubun === 'search' ? 'true' : 'false'}
                            onClick={() => handleClickSearchLink()}
                        >
                            {menuGubun && menuGubun === 'search' && <FontAwesomeIcon icon={faCheckCircle} />} 검색
                        </MenuLink>
                    </MenuElement>
                    <MenuElement>
                        <MenuLink
                            layoutColor={LayouType.layoutColor}
                            menuActive={menuGubun === 'posts' ? 'true' : 'false'}
                            onClick={() => handleClickHomeLink()}
                        >
                            {menuGubun && menuGubun === 'posts' && <FontAwesomeIcon icon={faCheckCircle} />} 포스트
                        </MenuLink>
                    </MenuElement>
                    <MenuElement>
                        <MenuLink
                            layoutColor={LayouType.layoutColor}
                            menuActive={menuGubun === 'scribble' ? 'true' : 'false'}
                            onClick={() => handleClickScribbleLink()}
                        >
                            {menuGubun && menuGubun === 'scribble' && <FontAwesomeIcon icon={faCheckCircle} />} 끄적끄적
                        </MenuLink>
                    </MenuElement>
                    <MenuElement>
                        <MenuLink
                            layoutColor={LayouType.layoutColor}
                            menuActive={menuGubun === 'mingun' ? 'true' : 'false'}
                            onClick={() => handleClickMingunLink()}
                        >
                            {menuGubun && menuGubun === 'mingun' && <FontAwesomeIcon icon={faCheckCircle} />} 민군은
                        </MenuLink>
                    </MenuElement>
                    <MenuElement>
                        <MenuLink
                            layoutColor={LayouType.layoutColor}
                            menuActive={menuGubun === 'blog' ? 'true' : 'false'}
                            onClick={() => handleClickBlogsLink()}
                        >
                            {menuGubun && menuGubun === 'blog' && <FontAwesomeIcon icon={faCheckCircle} />} 블로그 소개
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
