import React from 'react';
import * as MainStyleComponent from "styles/Main";
import * as StyledIcons from 'styles/StyledIcons';

export default function MainPage() {
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

                        <MainStyleComponent.ListItem>
                            <MainStyleComponent.ListMedia>
                                <MainStyleComponent.ListImage src="/assets/images/blog/blog-post-thumb-1.jpg" alt="" />
                                <MainStyleComponent.MegiaBody>
                                    <MainStyleComponent.Title>
                                        <MainStyleComponent.TitleLink to={process.env.PUBLIC_URL + "/pages/post"}>
                                            Why Every Developer Should Have A Blog
                                        </MainStyleComponent.TitleLink>
                                    </MainStyleComponent.Title>
                                    <MainStyleComponent.Meta>
                                        <MainStyleComponent.MetaDate>Published 2 days ago</MainStyleComponent.MetaDate>
                                        <MainStyleComponent.MetaTime>5 min read</MainStyleComponent.MetaTime>
                                        <MainStyleComponent.MetaComment>
                                            <MainStyleComponent.MetaCommentLink to="/">
                                                8 comments
                                            </MainStyleComponent.MetaCommentLink>
                                        </MainStyleComponent.MetaComment>
                                    </MainStyleComponent.Meta>
                                    <MainStyleComponent.ListItemIntro>
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies...
                                    </MainStyleComponent.ListItemIntro>
                                    <MainStyleComponent.MoreLink to={process.env.PUBLIC_URL + "/pages/post"}>
                                        Read more &rarr;
                                    </MainStyleComponent.MoreLink>
                                </MainStyleComponent.MegiaBody>
                                {/* <!--//media-body--> */}
                            </MainStyleComponent.ListMedia>
                            {/* <!--//media--> */}
                        </MainStyleComponent.ListItem>
                        {/* <!--//item--> */}

                        <MainStyleComponent.ListItem>
                            <MainStyleComponent.ListMedia>
                                <MainStyleComponent.ListImage src="/assets/images/blog/blog-post-thumb-2.jpg" alt="" />
                                <MainStyleComponent.MegiaBody>
                                    <MainStyleComponent.Title>
                                        <MainStyleComponent.TitleLink to={process.env.PUBLIC_URL + "/pages/post"}>A Guide to Becoming a Full-Stack Developer</MainStyleComponent.TitleLink>
                                    </MainStyleComponent.Title>
                                    <MainStyleComponent.Meta><MainStyleComponent.MetaDate>Published 3 months ago</MainStyleComponent.MetaDate><MainStyleComponent.MetaTime>3 min read</MainStyleComponent.MetaTime><MainStyleComponent.MetaComment><MainStyleComponent.MetaCommentLink to="/">26 comments</MainStyleComponent.MetaCommentLink></MainStyleComponent.MetaComment></MainStyleComponent.Meta>
                                    <MainStyleComponent.ListItemIntro>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies...</MainStyleComponent.ListItemIntro>
                                    <MainStyleComponent.MoreLink to={process.env.PUBLIC_URL + "/pages/post"}>Read more &rarr;</MainStyleComponent.MoreLink>
                                </MainStyleComponent.MegiaBody>
                                {/* <!--//media-body--> */}
                            </MainStyleComponent.ListMedia>
                            {/* <!--//media--> */}
                        </MainStyleComponent.ListItem>
                        {/* <!--//item--> */}

                        <MainStyleComponent.ListItem>
                            <MainStyleComponent.ListMedia>
                                <MainStyleComponent.ListImage src="/assets/images/blog/blog-post-thumb-3.jpg" alt="" />
                                <MainStyleComponent.MegiaBody>
                                    <MainStyleComponent.Title>
                                        <MainStyleComponent.TitleLink to={process.env.PUBLIC_URL + "/pages/post"}>High Performance JavaScript</MainStyleComponent.TitleLink>
                                    </MainStyleComponent.Title>
                                    <MainStyleComponent.Meta><MainStyleComponent.MetaDate>Published 1 month ago</MainStyleComponent.MetaDate><MainStyleComponent.MetaTime>8 min read</MainStyleComponent.MetaTime><MainStyleComponent.MetaComment><MainStyleComponent.MetaCommentLink to="/">12 comments</MainStyleComponent.MetaCommentLink></MainStyleComponent.MetaComment></MainStyleComponent.Meta>
                                    <MainStyleComponent.ListItemIntro>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies...</MainStyleComponent.ListItemIntro>
                                    <MainStyleComponent.MoreLink to={process.env.PUBLIC_URL + "/pages/post"}>Read more &rarr;</MainStyleComponent.MoreLink>
                                </MainStyleComponent.MegiaBody>
                                {/* <!--//media-body--> */}
                            </MainStyleComponent.ListMedia>
                            {/* <!--//media--> */}
                        </MainStyleComponent.ListItem>
                        {/* <!--//item--> */}

                        <MainStyleComponent.ListItem>
                            <MainStyleComponent.ListMedia>
                                <MainStyleComponent.ListImage src="/assets/images/blog/blog-post-thumb-4.jpg" alt="" />
                                <MainStyleComponent.MegiaBody>
                                    <MainStyleComponent.Title>
                                        <MainStyleComponent.TitleLink to={process.env.PUBLIC_URL + "/pages/post"}>Top 5 JavaScript Frameworks</MainStyleComponent.TitleLink>
                                    </MainStyleComponent.Title>
                                    <MainStyleComponent.Meta><MainStyleComponent.MetaDate>Published 2 months ago</MainStyleComponent.MetaDate><MainStyleComponent.MetaTime>15 min read</MainStyleComponent.MetaTime><MainStyleComponent.MetaComment><MainStyleComponent.MetaCommentLink to="/">3 comments</MainStyleComponent.MetaCommentLink></MainStyleComponent.MetaComment></MainStyleComponent.Meta>
                                    <MainStyleComponent.ListItemIntro>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies...</MainStyleComponent.ListItemIntro>
                                    <MainStyleComponent.MoreLink to={process.env.PUBLIC_URL + "/pages/post"}>Read more &rarr;</MainStyleComponent.MoreLink>
                                </MainStyleComponent.MegiaBody>
                                {/* <!--//media-body--> */}
                            </MainStyleComponent.ListMedia>
                            {/* <!--//media--> */}
                        </MainStyleComponent.ListItem>
                        {/* <!--//item--> */}

                        <MainStyleComponent.ListItem>
                            <MainStyleComponent.ListMedia>
                                <MainStyleComponent.ListImage src="/assets/images/blog/blog-post-thumb-5.jpg" alt="" />
                                <MainStyleComponent.MegiaBody>
                                    <MainStyleComponent.Title>
                                        <MainStyleComponent.TitleLink to={process.env.PUBLIC_URL + "/pages/post"}>Learn React in 24 Hours</MainStyleComponent.TitleLink>
                                    </MainStyleComponent.Title>
                                    <MainStyleComponent.Meta><MainStyleComponent.MetaDate>Published 2 months ago</MainStyleComponent.MetaDate><MainStyleComponent.MetaTime>10 min read</MainStyleComponent.MetaTime><MainStyleComponent.MetaComment><MainStyleComponent.MetaCommentLink to="/">23 comments</MainStyleComponent.MetaCommentLink></MainStyleComponent.MetaComment></MainStyleComponent.Meta>
                                    <MainStyleComponent.ListItemIntro>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies...</MainStyleComponent.ListItemIntro>
                                    <MainStyleComponent.MoreLink to={process.env.PUBLIC_URL + "/pages/post"}>Read more &rarr;</MainStyleComponent.MoreLink>
                                </MainStyleComponent.MegiaBody>
                                {/* <!--//media-body--> */}
                            </MainStyleComponent.ListMedia>
                            {/* <!--//media--> */}
                        </MainStyleComponent.ListItem>
                        {/* <!--//item--> */}

                        <MainStyleComponent.ListItem>
                            <MainStyleComponent.ListMedia>
                                <MainStyleComponent.ListImage src="/assets/images/blog/blog-post-thumb-6.jpg" alt="" />
                                <MainStyleComponent.MegiaBody>
                                    <MainStyleComponent.Title>
                                        <MainStyleComponent.TitleLink to={process.env.PUBLIC_URL + "/pages/post"}>About Remote Working</MainStyleComponent.TitleLink>
                                    </MainStyleComponent.Title>
                                    <MainStyleComponent.Meta><MainStyleComponent.MetaDate>Published 3 months ago</MainStyleComponent.MetaDate><MainStyleComponent.MetaTime>2 min read</MainStyleComponent.MetaTime><MainStyleComponent.MetaComment><MainStyleComponent.MetaCommentLink to="/">1 comment</MainStyleComponent.MetaCommentLink></MainStyleComponent.MetaComment></MainStyleComponent.Meta>
                                    <MainStyleComponent.ListItemIntro>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies...</MainStyleComponent.ListItemIntro>
                                    <MainStyleComponent.MoreLink to={process.env.PUBLIC_URL + "/pages/post"}>Read more &rarr;</MainStyleComponent.MoreLink>
                                </MainStyleComponent.MegiaBody>
                                {/* <!--//media-body--> */}
                            </MainStyleComponent.ListMedia>
                            {/* <!--//media--> */}
                        </MainStyleComponent.ListItem>
                        {/* <!--//item--> */}

                        <MainStyleComponent.BLogNav>
                            <MainStyleComponent.BlogNavLinkPrev to="/"><StyledIcons.ArrowLeftIcon/>Previous</MainStyleComponent.BlogNavLinkPrev>
                            <MainStyleComponent.BlogNavLinkNext to="/">Next<StyledIcons.ArrowRightIcon/></MainStyleComponent.BlogNavLinkNext>
                        </MainStyleComponent.BLogNav>

                    </MainStyleComponent.ListContainer>
                </MainStyleComponent.ListSection>
            </MainStyleComponent.MainWarpper>
            {/* <!--//main-wrapper--> */}
        </>
    );
}