import React from 'react';
import * as MainStyleComponent from "styles/Main";
import * as StyledIcons from 'styles/StyledIcons';
import useMain from 'hooks/useMain';

export default function MainPage() {
    const {
        postBaseStateLists
    } = useMain();

    return (
        <>
            <MainStyleComponent.MainWarpper>
                <MainStyleComponent.CtaSection>
                    <MainStyleComponent.CtaSectionContainer>
                        <MainStyleComponent.Heading>DevBlog - A Blog Template Made For Developers</MainStyleComponent.Heading>
                        <MainStyleComponent.Intro>Welcome to my blog. Subscribe and get my latest blog post in your inbox.</MainStyleComponent.Intro>
                        <MainStyleComponent.Form>
                            <MainStyleComponent.FormGroup>
                                <MainStyleComponent.FormLabel htmlFor="semail">Your email</MainStyleComponent.FormLabel>
                                <MainStyleComponent.FormInput type="email" id="semail" placeholder="Enter email" />
                            </MainStyleComponent.FormGroup>
                            <MainStyleComponent.FormSubmitButton type="button">검색</MainStyleComponent.FormSubmitButton>
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