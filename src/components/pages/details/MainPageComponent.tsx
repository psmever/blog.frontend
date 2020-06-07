import React from 'react';
import { Link } from "react-router-dom";

export default function MainPage() {
    return (
        <>
            <div className="main-wrapper">
                <section className="cta-section theme-bg-light py-5">
                    <div className="container text-center">
                        <h2 className="heading">DevBlog - A Blog Template Made For Developers</h2>
                        <div className="intro">Welcome to my blog. Subscribe and get my latest blog post in your inbox.</div>
                        <form className="signup-form form-inline justify-content-center pt-3">
                            <div className="form-group">
                                <label className="sr-only" htmlFor="semail">Your email</label>
                                <input type="email" id="semail" name="semail1" className="form-control mr-md-1 semail" placeholder="Enter email" />
                            </div>
                            <button type="button" className="btn btn-primary">검색</button>
                        </form>
                    </div>
                    {/* <!--//container--> */}
                </section>

                <section className="blog-list px-3 py-5 p-md-5">
                    <div className="container">

                        <div className="item mb-5">
                            <div className="media">
                                <img className="mr-3 img-fluid post-thumb d-none d-md-flex" src="/assets/images/blog/blog-post-thumb-1.jpg" alt="" />
                                <div className="media-body">
                                    <h3 className="title mb-1"><Link to={process.env.PUBLIC_URL + "/post"}>Why Every Developer Should Have A Blog</Link></h3>
                                    <div className="meta mb-1"><span className="date">Published 2 days ago</span><span className="time">5 min read</span><span className="comment"><Link to="/">8 comments</Link></span></div>
                                    <div className="intro">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies...</div>
                                    <Link to={process.env.PUBLIC_URL + "/post"} className="more-link">Read more &rarr;</Link>
                                </div>
                                {/* <!--//media-body--> */}
                            </div>
                            {/* <!--//media--> */}
                        </div>
                        {/* <!--//item--> */}

                        <div className="item mb-5">
                            <div className="media">
                                <img className="mr-3 img-fluid post-thumb d-none d-md-flex" src="/assets/images/blog/blog-post-thumb-2.jpg" alt="" />
                                <div className="media-body">
                                    <h3 className="title mb-1"><Link to={process.env.PUBLIC_URL + "/post"}>A Guide to Becoming a Full-Stack Developer</Link></h3>
                                    <div className="meta mb-1"><span className="date">Published 3 months ago</span><span className="time">3 min read</span><span className="comment"><Link to="/">26 comments</Link></span></div>
                                    <div className="intro">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies...</div>
                                    <Link to={process.env.PUBLIC_URL + "/post"} className="more-link">Read more &rarr;</Link>
                                </div>
                                {/* <!--//media-body--> */}
                            </div>
                            {/* <!--//media--> */}
                        </div>
                        {/* <!--//item--> */}

                        <div className="item mb-5">
                            <div className="media">
                                <img className="mr-3 img-fluid post-thumb d-none d-md-flex" src="/assets/images/blog/blog-post-thumb-3.jpg" alt="" />
                                <div className="media-body">
                                    <h3 className="title mb-1"><Link to={process.env.PUBLIC_URL + "/post"}>High Performance JavaScript</Link></h3>
                                    <div className="meta mb-1"><span className="date">Published 1 month ago</span><span className="time">8 min read</span><span className="comment"><Link to="/">12 comments</Link></span></div>
                                    <div className="intro">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies...</div>
                                    <Link to={process.env.PUBLIC_URL + "/post"} className="more-link">Read more &rarr;</Link>
                                </div>
                                {/* <!--//media-body--> */}
                            </div>
                            {/* <!--//media--> */}
                        </div>
                        {/* <!--//item--> */}

                        <div className="item mb-5">
                            <div className="media">
                                <img className="mr-3 img-fluid post-thumb d-none d-md-flex" src="/assets/images/blog/blog-post-thumb-4.jpg" alt="" />
                                <div className="media-body">
                                    <h3 className="title mb-1"><Link to={process.env.PUBLIC_URL + "/post"}>Top 5 JavaScript Frameworks</Link></h3>
                                    <div className="meta mb-1"><span className="date">Published 2 months ago</span><span className="time">15 min read</span><span className="comment"><Link to="/">3 comments</Link></span></div>
                                    <div className="intro">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies...</div>
                                    <Link to={process.env.PUBLIC_URL + "/post"} className="more-link">Read more &rarr;</Link>
                                </div>
                                {/* <!--//media-body--> */}
                            </div>
                            {/* <!--//media--> */}
                        </div>
                        {/* <!--//item--> */}

                        <div className="item mb-5">
                            <div className="media">
                                <img className="mr-3 img-fluid post-thumb d-none d-md-flex" src="/assets/images/blog/blog-post-thumb-5.jpg" alt="" />
                                <div className="media-body">
                                    <h3 className="title mb-1"><Link to={process.env.PUBLIC_URL + "/post"}>Learn React in 24 Hours</Link></h3>
                                    <div className="meta mb-1"><span className="date">Published 2 months ago</span><span className="time">10 min read</span><span className="comment"><Link to="/">23 comments</Link></span></div>
                                    <div className="intro">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies...</div>
                                    <Link to={process.env.PUBLIC_URL + "/post"} className="more-link">Read more &rarr;</Link>
                                </div>
                                {/* <!--//media-body--> */}
                            </div>
                            {/* <!--//media--> */}
                        </div>
                        {/* <!--//item--> */}

                        <div className="item">
                            <div className="media">
                                <img className="mr-3 img-fluid post-thumb d-none d-md-flex" src="/assets/images/blog/blog-post-thumb-6.jpg" alt="" />
                                <div className="media-body">
                                    <h3 className="title mb-1"><Link to={process.env.PUBLIC_URL + "/post"}>About Remote Working</Link></h3>
                                    <div className="meta mb-1"><span className="date">Published 3 months ago</span><span className="time">2 min read</span><span className="comment"><Link to="/">1 comment</Link></span></div>
                                    <div className="intro">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies...</div>
                                    <Link to={process.env.PUBLIC_URL + "/post"} className="more-link">Read more &rarr;</Link>
                                </div>
                                {/* <!--//media-body--> */}
                            </div>
                            {/* <!--//media--> */}
                        </div>
                        {/* <!--//item--> */}

                        <nav className="blog-nav nav nav-justified my-5">
                            <Link to="/" className="nav-link-prev nav-item nav-link d-none rounded-left">Previous<i className="arrow-prev fas fa-long-arrow-alt-left"></i></Link>
                            <Link to="/" className="nav-link-next nav-item nav-link rounded">Next<i className="arrow-next fas fa-long-arrow-alt-right"></i></Link>
                        </nav>

                    </div>
                </section>
            </div>
            {/* <!--//main-wrapper--> */}
        </>
    );
}