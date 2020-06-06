import React from "react";
import { Link } from "react-router-dom";

export default function MainPage() {
  return (
        <>
            <header className="header text-center">
            <h1 className="blog-name pt-lg-4 mb-0">
                <Link to="/">Anthony's Blog</Link>
            </h1>

            <nav className="navbar navbar-expand-lg navbar-dark">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navigation"
                    aria-controls="navigation"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                <span className="navbar-toggler-icon"></span>
                </button>

                <div id="navigation" className="collapse navbar-collapse flex-column">
                <div className="profile-section pt-3 pt-lg-0">
                    <img
                        className="profile-image mb-3 rounded-circle mx-auto"
                        src="assets/images/profile.png"
                        alt=""
                    />

                    <div className="bio mb-3">
                    Hi, my name is Anthony Doe. Briefly introduce yourself here. You
                    can also provide a link to the about page.
                    <br />
                    <Link to="/">Find out more about me</Link>
                    </div>
                    {/* <!--//bio--> */}
                    <ul className="social-list list-inline py-3 mx-auto">
                    <li className="list-inline-item">
                        <Link to="/">
                            <i className="fab fa-twitter fa-fw"></i>
                        </Link>
                    </li>
                    <li className="list-inline-item">
                        <Link to="/">
                            <i className="fab fa-linkedin-in fa-fw"></i>
                        </Link>
                    </li>
                    <li className="list-inline-item">
                        <Link to="/">
                            <i className="fab fa-github-alt fa-fw"></i>
                        </Link>
                    </li>
                    <li className="list-inline-item">
                        <Link to="/">
                            <i className="fab fa-stack-overflow fa-fw"></i>
                        </Link>
                    </li>
                    <li className="list-inline-item">
                        <Link to="/">
                            <i className="fab fa-codepen fa-fw"></i>
                        </Link>
                    </li>
                    </ul>
                    {/* <!--//social-list--> */}
                    <hr />
                </div>
                {/* <!--//profile-section--> */}

                <ul className="navbar-nav flex-column text-left">
                    <li className="nav-item active">
                        <Link to="/" className="nav-link">
                            <i className="fas fa-home fa-fw mr-2"></i>Blog Home{" "}
                            <span className="sr-only">(current)</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/" className="nav-link">
                            <i className="fas fa-bookmark fa-fw mr-2"></i>Blog Post
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/" className="nav-link">
                            <i className="fas fa-user fa-fw mr-2"></i>About Me
                        </Link>
                    </li>
                </ul>

                <div className="my-2 my-md-3">
                    <Link to="/" className="btn btn-primary">
                        Get in Touch
                    </Link>
                </div>
                </div>
            </nav>
            </header>

            <div className="main-wrapper">
            <section className="cta-section theme-bg-light py-5">
                <div className="container text-center">
                    <h2 className="heading">
                        DevBlog - A Blog Template Made For Developers
                    </h2>
                    <div className="intro">
                        Welcome to my blog. Subscribe and get my latest blog post in your
                        inbox.
                    </div>
                    <form className="signup-form form-inline justify-content-center pt-3">
                        <div className="form-group">
                            <label className="sr-only" htmlFor="semail">
                                Your email
                            </label>
                            <input
                                type="email"
                                id="semail"
                                name="semail1"
                                className="form-control mr-md-1 semail"
                                placeholder="Enter email"
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Subscribe
                        </button>
                    </form>
                </div>
                {/* <!--//container--> */}
            </section>
            <section className="blog-list px-3 py-5 p-md-5">
                <div className="container">
                <div className="item mb-5">
                    <div className="media">
                    <img
                        className="mr-3 img-fluid post-thumb d-none d-md-flex"
                        src="assets/images/blog/blog-post-thumb-1.jpg"
                        alt=""
                    />
                    <div className="media-body">
                        <h3 className="title mb-1">
                        <Link to="/">Why Every Developer Should Have A Blog</Link>
                        </h3>
                        <div className="meta mb-1">
                        <span className="date">Published 2 days ago</span>
                        <span className="time">5 min read</span>
                        <span className="comment">
                            <Link to="/">8 comments</Link>
                        </span>
                        </div>
                        <div className="intro">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                        Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                        natoque penatibus et magnis dis parturient montes, nascetur
                        ridiculus mus. Donec quam felis, ultricies...
                        </div>
                        <Link to="/" className="more-link">
                        Read more &rarr;
                        </Link>
                    </div>
                    {/* <!--//media-body--> */}
                    </div>
                    {/* <!--//media--> */}
                </div>
                {/* <!--//item--> */}
                <div className="item mb-5">
                    <div className="media">
                    <img
                        className="mr-3 img-fluid post-thumb d-none d-md-flex"
                        src="assets/images/blog/blog-post-thumb-2.jpg"
                        alt=""
                    />
                    <div className="media-body">
                        <h3 className="title mb-1">
                        <Link to="/">
                            A Guide to Becoming a Full-Stack Developer
                        </Link>
                        </h3>
                        <div className="meta mb-1">
                        <span className="date">Published 3 months ago</span>
                        <span className="time">3 min read</span>
                        <span className="comment">
                            <Link to="/">26 comments</Link>
                        </span>
                        </div>
                        <div className="intro">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                        Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                        natoque penatibus et magnis dis parturient montes, nascetur
                        ridiculus mus. Donec quam felis, ultricies...
                        </div>
                        <Link to="/" className="more-link">
                        Read more &rarr;
                        </Link>
                    </div>
                    {/* <!--//media-body--> */}
                    </div>
                    {/* <!--//media--> */}
                </div>
                {/* <!--//item--> */}

                <div className="item mb-5">
                    <div className="media">
                    <img
                        className="mr-3 img-fluid post-thumb d-none d-md-flex"
                        src="assets/images/blog/blog-post-thumb-3.jpg"
                        alt=""
                    />
                    <div className="media-body">
                        <h3 className="title mb-1">
                        <Link to="/">High Performance JavaScript</Link>
                        </h3>
                        <div className="meta mb-1">
                        <span className="date">Published 1 month ago</span>
                        <span className="time">8 min read</span>
                        <span className="comment">
                            <Link to="/">12 comments</Link>
                        </span>
                        </div>
                        <div className="intro">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                        Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                        natoque penatibus et magnis dis parturient montes, nascetur
                        ridiculus mus. Donec quam felis, ultricies...
                        </div>
                        <Link to="/" className="more-link">
                        Read more &rarr;
                        </Link>
                    </div>
                    {/* <!--//media-body--> */}
                    </div>
                    {/* <!--//media--> */}
                </div>
                {/* <!--//item--> */}
                <div className="item mb-5">
                    <div className="media">
                    <img
                        className="mr-3 img-fluid post-thumb d-none d-md-flex"
                        src="assets/images/blog/blog-post-thumb-4.jpg"
                        alt=""
                    />
                    <div className="media-body">
                        <h3 className="title mb-1">
                        <Link to="/">Top 5 JavaScript Frameworks</Link>
                        </h3>
                        <div className="meta mb-1">
                        <span className="date">Published 2 months ago</span>
                        <span className="time">15 min read</span>
                        <span className="comment">
                            <Link to="/">3 comments</Link>
                        </span>
                        </div>
                        <div className="intro">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                        Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                        natoque penatibus et magnis dis parturient montes, nascetur
                        ridiculus mus. Donec quam felis, ultricies...
                        </div>
                        <Link to="/" className="more-link">
                        Read more &rarr;
                        </Link>
                    </div>
                    {/* <!--//media-body--> */}
                    </div>
                    {/* <!--//media--> */}
                </div>
                {/* <!--//item--> */}

                <div className="item mb-5">
                    <div className="media">
                    <img
                        className="mr-3 img-fluid post-thumb d-none d-md-flex"
                        src="assets/images/blog/blog-post-thumb-5.jpg"
                        alt=""
                    />
                    <div className="media-body">
                        <h3 className="title mb-1">
                        <Link to="/">Learn React in 24 Hours</Link>
                        </h3>
                        <div className="meta mb-1">
                        <span className="date">Published 2 months ago</span>
                        <span className="time">10 min read</span>
                        <span className="comment">
                            <Link to="/">23 comments</Link>
                        </span>
                        </div>
                        <div className="intro">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                        Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                        natoque penatibus et magnis dis parturient montes, nascetur
                        ridiculus mus. Donec quam felis, ultricies...
                        </div>
                        <Link to="/" className="more-link">
                        Read more &rarr;
                        </Link>
                    </div>
                    {/* <!--//media-body--> */}
                    </div>
                    {/* <!--//media--> */}
                </div>
                {/* <!--//item--> */}

                <div className="item">
                    <div className="media">
                    <img
                        className="mr-3 img-fluid post-thumb d-none d-md-flex"
                        src="assets/images/blog/blog-post-thumb-6.jpg"
                        alt=""
                    />
                    <div className="media-body">
                        <h3 className="title mb-1">
                        <Link to="/">About Remote Working</Link>
                        </h3>
                        <div className="meta mb-1">
                        <span className="date">Published 3 months ago</span>
                        <span className="time">2 min read</span>
                        <span className="comment">
                            <Link to="/">1 comment</Link>
                        </span>
                        </div>
                        <div className="intro">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                        Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                        natoque penatibus et magnis dis parturient montes, nascetur
                        ridiculus mus. Donec quam felis, ultricies...
                        </div>
                        <Link to="/" className="more-link">
                        Read more &rarr;
                        </Link>
                    </div>
                    {/* <!--//media-body--> */}
                    </div>
                    {/* <!--//media--> */}
                </div>
                {/* <!--//item--> */}

                <nav className="blog-nav nav nav-justified my-5">
                    <Link
                    to="/"
                    className="nav-link-prev nav-item nav-link d-none rounded-left"
                    >
                    Previous
                    <i className="arrow-prev fas fa-long-arrow-alt-left"></i>
                    </Link>
                    <Link to="/" className="nav-link-next nav-item nav-link rounded">
                    Next<i className="arrow-next fas fa-long-arrow-alt-right"></i>
                    </Link>
                </nav>
                </div>
            </section>

            <footer className="footer text-center py-2 theme-bg-dark">
                {/* <!-- */}
                {/* /* This template is free as long as you keep the footer attribution link. If you'd like to use the template without the attribution link, you can buy the commercial license via our website: themes.3rdwavemedia.com Thank you for your support. :) */}
                {/* --> */}
                <small className="copyright">
                Designed with{" "}
                <i className="fas fa-heart" style={{ color: "#fb866a" }}></i> by{" "}
                <Link to="/">Xiaoying Riley</Link> for developers
                </small>
            </footer>
            </div>
            {/* <!--//main-wrapper--> */}
        </>
  );
}
