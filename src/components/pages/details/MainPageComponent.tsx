import React from 'react';
import {
    MainWarpper, CtaSection, CtaSectionContainer, Heading, Intro, Form, FormGroup, FormLabel, FormInput, FormSubmitButton, ListSection,
    Band,BandItems,BandItemsCard,BandItemArticle,BandItemCardThumbBox, BandItemCardThumbimg,BandItemArticleTitle, BandItemArticleTitleSpan
    ,BandItemArticleMetaDate, BandItemArticleMetaTime, BandItemArticleDateBox

} from "styles/Main";
import useMain from 'hooks/useMain';
import { useToasts } from 'react-toast-notifications';
import { useHistory } from 'react-router-dom';
import InfiniteScroll from "react-infinite-scroll-component";

export default function MainPage() {

    const { addToast } = useToasts();
    const history = useHistory();

    const {
        basePostListsState,
        fetchMoreData
    } = useMain();

    // 검색 버튼.
    const handleClickSearchButton = () => {
        addToast('준비 중입니다.', { appearance: 'success', autoDismiss: true });
    }

    // 리스트 링크 클릭.
    const handlePostCardCLick = (slugTitle: string) => {
        history.push({
            pathname: process.env.PUBLIC_URL + `/pages/post/detail/${slugTitle}`
        });
    }

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
                                <FormInput type="text" id="search" placeholder="검색어를 입력해 주세요." />
                            </FormGroup>
                            <FormSubmitButton type="button" onClick={handleClickSearchButton}>검색</FormSubmitButton>
                        </Form>
                    </CtaSectionContainer>
                    {/* <!--//container--> */}
                </CtaSection>

                <ListSection>
                    {/* <ListContainer> */}


        <InfiniteScroll
          dataLength={basePostListsState.status === 'success' ? basePostListsState.posts.length : 0}
          next={fetchMoreData}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
            <Band>
                            { basePostListsState.status === 'success' && basePostListsState.posts.map((element, n) => {
                                    return (
                                        <BandItems key={n}>
                                            <BandItemsCard onClick={e=>handlePostCardCLick(element.slug_title)}>
                                                <BandItemCardThumbBox>
                                                    <BandItemCardThumbimg src={element.thumb_url} alt="" />
                                                </BandItemCardThumbBox>
                                                <BandItemArticle>
                                                    <BandItemArticleTitle>{element.post_title}</BandItemArticleTitle>
                                                    <BandItemArticleTitleSpan>{element.list_contents}</BandItemArticleTitleSpan>
                                                    <BandItemArticleDateBox>
                                                        <BandItemArticleMetaDate>{element.list_created}</BandItemArticleMetaDate>
                                                        <BandItemArticleMetaTime>{element.view_count} read</BandItemArticleMetaTime>
                                                    </BandItemArticleDateBox>
                                                </BandItemArticle>
                                            </BandItemsCard>
                                        </BandItems>
                                    )
                                })
                            }
            </Band>
        </InfiniteScroll>

                    {/* </ListContainer> */}
                </ListSection>
            </MainWarpper>
            {/* <!--//main-wrapper--> */}
        </>
    );
}