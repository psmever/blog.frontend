import React from 'react';
import * as MainStyleComponent from "styles/Main";
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
            <MainStyleComponent.MainWarpper>
                <MainStyleComponent.CtaSection>
                    <MainStyleComponent.CtaSectionContainer>
                        <MainStyleComponent.Heading>@psmever - 개발 블러그</MainStyleComponent.Heading>
                        <MainStyleComponent.Intro>psmever's 블러그에 오신걸 환영 합니다.</MainStyleComponent.Intro>
                        <MainStyleComponent.Form>
                            <MainStyleComponent.FormGroup>
                                <MainStyleComponent.FormLabel htmlFor="semail">Your email</MainStyleComponent.FormLabel>
                                <MainStyleComponent.FormInput type="text" id="search" placeholder="검색어를 입력해 주세요." />
                            </MainStyleComponent.FormGroup>
                            <MainStyleComponent.FormSubmitButton type="button" onClick={handleClickSearchButton}>검색</MainStyleComponent.FormSubmitButton>
                        </MainStyleComponent.Form>
                    </MainStyleComponent.CtaSectionContainer>
                    {/* <!--//container--> */}
                </MainStyleComponent.CtaSection>

                <MainStyleComponent.ListSection>
                    <MainStyleComponent.ListContainer>

                    { postBaseStateLists.data?.posts.map((element) => {
                        return <MainStyleComponent.ListItem key={element.post_id}>
                                <MainStyleComponent.ListMedia key={element.post_id}>
                                    <MainStyleComponent.ListImage src={element.category_thumb.category_thumb_url} alt="" />
                                    <MainStyleComponent.MegiaBody>
                                        <MainStyleComponent.Title>
                                            <MainStyleComponent.TitleLink to={process.env.PUBLIC_URL + `/pages/post/detail/${element.slug_title}`}>
                                                {element.post_title}
                                            </MainStyleComponent.TitleLink>
                                        </MainStyleComponent.Title>
                                        <MainStyleComponent.Meta>
                                            <MainStyleComponent.MetaDate>{element.list_created}</MainStyleComponent.MetaDate>
                                            <MainStyleComponent.MetaTime>0 min read</MainStyleComponent.MetaTime>
                                            <MainStyleComponent.MetaComment>
                                                <MainStyleComponent.MetaCommentLink to="/">
                                                    0 comments
                                                </MainStyleComponent.MetaCommentLink>
                                            </MainStyleComponent.MetaComment>
                                        </MainStyleComponent.Meta>
                                        <MainStyleComponent.ListItemIntro>
                                            {element.list_contents}
                                        </MainStyleComponent.ListItemIntro>
                                        <MainStyleComponent.MoreLink to={process.env.PUBLIC_URL + `/pages/post/detail/${element.slug_title}`}>
                                            Read more &rarr;
                                        </MainStyleComponent.MoreLink>
                                    </MainStyleComponent.MegiaBody>
                                    {/* <!--//media-body--> */}
                                </MainStyleComponent.ListMedia>
                                {/* <!--//media--> */}
                            </MainStyleComponent.ListItem>
                    })}
                        {/* <MainStyleComponent.BLogNav>
                            <MainStyleComponent.BlogNavLinkPrev to="/"><StyledIcons.ArrowLeftIcon/>Previous</MainStyleComponent.BlogNavLinkPrev>
                            <MainStyleComponent.BlogNavLinkNext to="/">Next<StyledIcons.ArrowRightIcon/></MainStyleComponent.BlogNavLinkNext>
                        </MainStyleComponent.BLogNav> */}

                    </MainStyleComponent.ListContainer>
                </MainStyleComponent.ListSection>
            </MainStyleComponent.MainWarpper>
            {/* <!--//main-wrapper--> */}
        </>
    );
}