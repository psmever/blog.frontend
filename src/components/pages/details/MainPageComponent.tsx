import React from 'react';
import {
    MainWarpper, CtaSection, CtaSectionContainer, Heading, Intro, Form, FormGroup, FormLabel, FormInput, FormSubmitButton, ListSection, ListContainer,
    // ListItem, ListMedia, ListImage, MegiaBody, Title, TitleLink, Meta, MetaDate, MetaTime, MetaComment, MetaCommentLink, ListItemIntro, MoreLink,

    Band,BandItems,BandItemsCard,BandItemArticle,BandItemCardThumbBox, BandItemCardThumbimg,BandItemArticleTitle, BandItemArticleTitleSpan
    ,BandItemArticleMetaDate, BandItemArticleMetaTime

} from "styles/Main";
import useMain from 'hooks/useMain';
import { useToasts } from 'react-toast-notifications';

export default function MainPage() {

    const { addToast } = useToasts();

    const {
        postBaseStateLists
    } = useMain();


    const handleClickSearchButton = () => {
        addToast('준비 중입니다.', { appearance: 'success', autoDismiss: true });
    }

    return (
        <>
            <MainWarpper>
                <CtaSection>
                    <CtaSectionContainer>
                        <Heading>@psmever - 개발 블러그</Heading>
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

                        <Band>

                            { postBaseStateLists.data?.posts.map((element) => {
                                    return (
                                        <BandItems>
                                            <BandItemsCard>
                                                <BandItemCardThumbBox>
                                                    <BandItemCardThumbimg src={element.thumb_url} alt="" />
                                                </BandItemCardThumbBox>
                                                <BandItemArticle>
                                                    <BandItemArticleTitle>{element.list_contents}</BandItemArticleTitle>
                                                    <BandItemArticleTitleSpan>{element.post_title}</BandItemArticleTitleSpan>
                                                    <BandItemArticleMetaDate>{element.list_created}</BandItemArticleMetaDate>
                                                    <BandItemArticleMetaTime>{element.view_count} read</BandItemArticleMetaTime>
                                                </BandItemArticle>
                                            </BandItemsCard>
                                        </BandItems>
                                    )
                                })
                            }


                        </Band>


                    {/* </ListContainer> */}
                </ListSection>
            </MainWarpper>
            {/* <!--//main-wrapper--> */}
        </>
    );
}