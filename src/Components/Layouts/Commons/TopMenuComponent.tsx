import React, { useState, useEffect } from 'react';
import { LayouTypes } from 'CommonTypes';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from 'StoreTypes';
import { postWaitingList } from '@API';
import { isEmpty } from '@Helper';
import Swal from 'sweetalert2';
import { Navi, NaviInput, MenuLabel, LogoText, MenuUList, MenuElement, MenuLink, MenuIcon } from '@Style/TopMenuStyles';

export default function TopMenuComponent({ LayouType }: { LayouType: LayouTypes }) {
    const history = useHistory();

    const { loginState, pathName } = useSelector((store: RootState) => ({
        loginState: store.app.loginState,
        pathName: store.router.location.pathname,
    }));

    const [loginDone, setLoginDone] = useState<boolean>(false);
    const [menuGubun, setMenuGubun] = useState<string>('');

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

        if (menuGubun === 'posts') {
            checkPostsWaitingList();
        } else {
            history.push({
                pathname: `${process.env.PUBLIC_URL}/${menuGubun}/write`,
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
        const setPagePathName = (pathname: string) => {
            setMenuGubun(pathname);
        };

        if (pathName) {
            const pathArray = pathName.split('/').filter(e => e);
            setPagePathName(pathArray[0]);
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
                            menuActive={menuGubun === 'posts' ? 'true' : 'false'}
                            onClick={() => handleClickHomeLink()}
                        >
                            홈
                        </MenuLink>
                    </MenuElement>
                    <MenuElement>
                        <MenuLink
                            layoutColor={LayouType.layoutColor}
                            menuActive={menuGubun === 'tags' ? 'true' : 'false'}
                            onClick={() => handleClickTagsLink()}
                        >
                            태그들
                        </MenuLink>
                    </MenuElement>
                    <MenuElement>
                        <MenuLink
                            layoutColor={LayouType.layoutColor}
                            menuActive={menuGubun === 'scribble' ? 'true' : 'false'}
                            onClick={() => handleClickScribbleLink()}
                        >
                            끄적끄적
                        </MenuLink>
                    </MenuElement>
                    <MenuElement>
                        <MenuLink
                            layoutColor={LayouType.layoutColor}
                            menuActive={menuGubun === 'blog' ? 'true' : 'false'}
                            onClick={() => handleClickBlogsLink()}
                        >
                            블로그 소개
                        </MenuLink>
                    </MenuElement>
                    <MenuElement>
                        <MenuLink
                            layoutColor={LayouType.layoutColor}
                            menuActive={menuGubun === 'mingun' ? 'true' : 'false'}
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
