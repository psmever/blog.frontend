import React from 'react';
import { Link } from "react-router-dom";
import * as MainStyleComponent from "styles/Main";

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

                <MainStyleComponent.BLogListSection>
                    <MainStyleComponent.BlogListContainer>

                        <MainStyleComponent.BlogListItem>
                            <MainStyleComponent.BlogListMedia>
                                <MainStyleComponent.BlogListImage src="/assets/images/blog/blog-post-thumb-1.jpg" alt="" />
                                <MainStyleComponent.MegiaBody>
                                    <h3 className="title mb-1"><Link to={process.env.PUBLIC_URL + "/post"}>Why Every Developer Should Have A Blog</Link></h3>
                                    <div className="meta mb-1"><span className="date">Published 2 days ago</span><span className="time">5 min read</span><span className="comment"><Link to="/">8 comments</Link></span></div>
                                    <div className="intro">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies...</div>
                                    <Link to={process.env.PUBLIC_URL + "/post"} className="more-link">Read more &rarr;</Link>
                                </MainStyleComponent.MegiaBody>
                                {/* <!--//media-body--> */}
                            </MainStyleComponent.BlogListMedia>
                            {/* <!--//media--> */}
                        </MainStyleComponent.BlogListItem>
                        {/* <!--//item--> */}

                        <MainStyleComponent.BlogListItem>
                            <MainStyleComponent.BlogListMedia>
                                <MainStyleComponent.BlogListImage src="/assets/images/blog/blog-post-thumb-2.jpg" alt="" />
                                <MainStyleComponent.MegiaBody>
                                    <h3 className="title mb-1"><Link to={process.env.PUBLIC_URL + "/post"}>A Guide to Becoming a Full-Stack Developer</Link></h3>
                                    <div className="meta mb-1"><span className="date">Published 3 months ago</span><span className="time">3 min read</span><span className="comment"><Link to="/">26 comments</Link></span></div>
                                    <div className="intro">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies...</div>
                                    <Link to={process.env.PUBLIC_URL + "/post"} className="more-link">Read more &rarr;</Link>
                                </MainStyleComponent.MegiaBody>
                                {/* <!--//media-body--> */}
                            </MainStyleComponent.BlogListMedia>
                            {/* <!--//media--> */}
                        </MainStyleComponent.BlogListItem>
                        {/* <!--//item--> */}

                        <MainStyleComponent.BlogListItem>
                            <MainStyleComponent.BlogListMedia>
                                <MainStyleComponent.BlogListImage src="/assets/images/blog/blog-post-thumb-3.jpg" alt="" />
                                <MainStyleComponent.MegiaBody>
                                    <h3 className="title mb-1"><Link to={process.env.PUBLIC_URL + "/post"}>High Performance JavaScript</Link></h3>
                                    <div className="meta mb-1"><span className="date">Published 1 month ago</span><span className="time">8 min read</span><span className="comment"><Link to="/">12 comments</Link></span></div>
                                    <div className="intro">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies...</div>
                                    <Link to={process.env.PUBLIC_URL + "/post"} className="more-link">Read more &rarr;</Link>
                                </MainStyleComponent.MegiaBody>
                                {/* <!--//media-body--> */}
                            </MainStyleComponent.BlogListMedia>
                            {/* <!--//media--> */}
                        </MainStyleComponent.BlogListItem>
                        {/* <!--//item--> */}

                        <MainStyleComponent.BlogListItem>
                            <MainStyleComponent.BlogListMedia>
                                <MainStyleComponent.BlogListImage src="/assets/images/blog/blog-post-thumb-4.jpg" alt="" />
                                <MainStyleComponent.MegiaBody>
                                    <h3 className="title mb-1"><Link to={process.env.PUBLIC_URL + "/post"}>Top 5 JavaScript Frameworks</Link></h3>
                                    <div className="meta mb-1"><span className="date">Published 2 months ago</span><span className="time">15 min read</span><span className="comment"><Link to="/">3 comments</Link></span></div>
                                    <div className="intro">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies...</div>
                                    <Link to={process.env.PUBLIC_URL + "/post"} className="more-link">Read more &rarr;</Link>
                                </MainStyleComponent.MegiaBody>
                                {/* <!--//media-body--> */}
                            </MainStyleComponent.BlogListMedia>
                            {/* <!--//media--> */}
                        </MainStyleComponent.BlogListItem>
                        {/* <!--//item--> */}

                        <MainStyleComponent.BlogListItem>
                            <MainStyleComponent.BlogListMedia>
                                <MainStyleComponent.BlogListImage src="/assets/images/blog/blog-post-thumb-5.jpg" alt="" />
                                <MainStyleComponent.MegiaBody>
                                    <h3 className="title mb-1"><Link to={process.env.PUBLIC_URL + "/post"}>Learn React in 24 Hours</Link></h3>
                                    <div className="meta mb-1"><span className="date">Published 2 months ago</span><span className="time">10 min read</span><span className="comment"><Link to="/">23 comments</Link></span></div>
                                    <div className="intro">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies...</div>
                                    <Link to={process.env.PUBLIC_URL + "/post"} className="more-link">Read more &rarr;</Link>
                                </MainStyleComponent.MegiaBody>
                                {/* <!--//media-body--> */}
                            </MainStyleComponent.BlogListMedia>
                            {/* <!--//media--> */}
                        </MainStyleComponent.BlogListItem>
                        {/* <!--//item--> */}

                        <div className="item">
                            <MainStyleComponent.BlogListMedia>
                                <MainStyleComponent.BlogListImage src="/assets/images/blog/blog-post-thumb-6.jpg" alt="" />
                                <MainStyleComponent.MegiaBody>
                                    <h3 className="title mb-1"><Link to={process.env.PUBLIC_URL + "/post"}>About Remote Working</Link></h3>
                                    <div className="meta mb-1"><span className="date">Published 3 months ago</span><span className="time">2 min read</span><span className="comment"><Link to="/">1 comment</Link></span></div>
                                    <div className="intro">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies...</div>
                                    <Link to={process.env.PUBLIC_URL + "/post"} className="more-link">Read more &rarr;</Link>
                                </MainStyleComponent.MegiaBody>
                                {/* <!--//media-body--> */}
                            </MainStyleComponent.BlogListMedia>
                            {/* <!--//media--> */}
                        </div>
                        {/* <!--//item--> */}

                        <nav className="blog-nav nav nav-justified my-5">
                            <Link to="/" className="nav-link-prev nav-item nav-link d-none rounded-left">Previous<i className="arrow-prev fas fa-long-arrow-alt-left"></i></Link>
                            <Link to="/" className="nav-link-next nav-item nav-link rounded">Next<i className="arrow-next fas fa-long-arrow-alt-right"></i></Link>
                        </nav>

                    </MainStyleComponent.BlogListContainer>
                </MainStyleComponent.BLogListSection>
            </MainStyleComponent.MainWarpper>
            {/* <!--//main-wrapper--> */}
        </>
    );
}