import React from 'react';
import {
    MainWarpper, CtaSection, CtaSectionContainer, Heading, Intro, Form, FormGroup, FormLabel, FormInput, ListSection
} from "styles/Main";
import useMain from 'hooks/useMain';
import {
    MainPostList,
    MainPostSearchList,
} from 'components/elements'

export default function MainPage() {

    const {
        basePostListsState,
        fetchMoreData,

        handleChangeSearchItem,
        searchItem,
        searchItemResult,
    } = useMain();

    return (
        <>
            <MainWarpper>
                <CtaSection>
                    <CtaSectionContainer>
                        <Heading>@psmever - Blog</Heading>
                        <Intro>psmever's 블러그에 오신걸 환영 합니다.</Intro>
                        <Form>
                            <FormGroup>
                                <FormLabel htmlFor="semail">Your email</FormLabel>
                                <FormInput type="text" id="search" placeholder="검색어를 입력해 주세요."
                                    onChange={e => handleChangeSearchItem(e.target.value)}
                                    value={searchItem}
                                />
                            </FormGroup>
                        </Form>
                    </CtaSectionContainer>
                </CtaSection>

                <ListSection>
                    { searchItem.length > 0 && searchItemResult.length > 0
                    ?
                        <MainPostSearchList
                        listData={searchItemResult}
                        />
                    :
                        <MainPostList
                            listDataLength={basePostListsState.status === 'success' ? basePostListsState.posts.length : 0}
                            listNext={fetchMoreData}
                            listHasMore={basePostListsState.hasmore}
                            listData={basePostListsState.posts}
                        />
                    }
                </ListSection>

            </MainWarpper>
        </>
    );
}