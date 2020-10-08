import React from 'react';
import {
    MainWarpper, CtaSection, CtaSectionContainer, Heading, Intro, Form, FormGroup, FormLabel, FormInput, FormSubmitButton, ListSection, ListContainer, ListItem, ListMedia, ListImage, MegiaBody,
    Title, TitleLink, Meta, MetaDate, MetaTime, MetaComment, MetaCommentLink, ListItemIntro, MoreLink,
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
                    <ListContainer>

                    { postBaseStateLists.data?.posts.map((element) => {
                        return <ListItem key={element.post_id}>
                                <ListMedia key={element.post_id}>
                                    <ListImage src={'http://media.nicepage.pe.kr/blog/post-category/S05000.jpg'} alt="" />
                                    <MegiaBody>
                                        <Title>
                                            <TitleLink to={process.env.PUBLIC_URL + `/pages/post/detail/${element.slug_title}`}>
                                                {element.post_title}
                                            </TitleLink>
                                        </Title>
                                        <Meta>
                                            <MetaDate>{element.list_created}</MetaDate>
                                            <MetaTime>0 min read</MetaTime>
                                            <MetaComment>
                                                <MetaCommentLink to="/">
                                                    0 comments
                                                </MetaCommentLink>
                                            </MetaComment>
                                        </Meta>
                                        <ListItemIntro>
                                            {element.list_contents}
                                        </ListItemIntro>
                                        <MoreLink to={process.env.PUBLIC_URL + `/pages/post/detail/${element.slug_title}`}>
                                            Read more &rarr;
                                        </MoreLink>
                                    </MegiaBody>
                                    {/* <!--//media-body--> */}
                                </ListMedia>
                                {/* <!--//media--> */}
                            </ListItem>
                    })}
                        {/* <BLogNav>
                            <BlogNavLinkPrev to="/"><StyledIcons.ArrowLeftIcon/>Previous</BlogNavLinkPrev>
                            <BlogNavLinkNext to="/">Next<StyledIcons.ArrowRightIcon/></BlogNavLinkNext>
                        </BLogNav> */}

                    </ListContainer>
                </ListSection>
            </MainWarpper>
            {/* <!--//main-wrapper--> */}
        </>
    );
}