import React from 'react';
import { Link } from "react-router-dom";

export default function AboutPage() {
    return (
        <>
            <header className="header text-center">
                <h1 className="blog-name pt-lg-4 mb-0"><Link to="/">Anthony's Blog</Link></h1>

                <nav className="navbar navbar-expand-lg navbar-dark" >

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>

                    <div id="navigation" className="collapse navbar-collapse flex-column" >
                        <div className="profile-section pt-3 pt-lg-0">
                            <img className="profile-image mb-3 rounded-circle mx-auto" src="assets/images/profile.png" alt="" />

                            <div className="bio mb-3">Hi, my name is Anthony Doe. Briefly introduce yourself here. You can also provide a link to the about page.<br /><Link to="/">Find out more about me</Link></div>
                            {/* <!--//bio--> */}
                            <ul className="social-list list-inline py-3 mx-auto">
                                <li className="list-inline-item"><Link to="/"><i className="fab fa-twitter fa-fw"></i></Link></li>
                                <li className="list-inline-item"><Link to="/"><i className="fab fa-linkedin-in fa-fw"></i></Link></li>
                                <li className="list-inline-item"><Link to="/"><i className="fab fa-github-alt fa-fw"></i></Link></li>
                                <li className="list-inline-item"><Link to="/"><i className="fab fa-stack-overflow fa-fw"></i></Link></li>
                                <li className="list-inline-item"><Link to="/"><i className="fab fa-codepen fa-fw"></i></Link></li>
                            </ul>
                            {/* <!--//social-list--> */}
                            <hr />
                        </div>
                        {/* <!--//profile-section--> */}

                        <ul className="navbar-nav flex-column text-left">
                            <li className="nav-item">
                            <Link to="/" className="nav-link"><i className="fas fa-home fa-fw mr-2"></i>Blog Home <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                            <Link to="/" className="nav-link"><i className="fas fa-bookmark fa-fw mr-2"></i>Blog Post</Link>
                            </li>
                            <li className="nav-item active">
                            <Link to="/" className="nav-link"><i className="fas fa-user fa-fw mr-2"></i>About Me</Link>
                            </li>
                        </ul>

                        <div className="my-2 my-md-3">

                        <Link to="/" className="btn btn-primary">Get in Touch</Link>

                        </div>
                    </div>
                </nav>
            </header>

            <div className="main-wrapper">

                <article className="about-section py-5">
                    <div className="container">
                        <h2 className="title mb-3">About Me</h2>

                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. </p>
                        <figure><img className="img-fluid" src="assets/images/about-me.jpg" alt="" /></figure>
                        <h5 className="mt-5">About The Blog</h5>
                        <p>Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus.</p>
                        <h5 className="mt-5">My Skills and Experiences</h5>
                        <p>Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.</p>
                        <h5 className="mt-5">Side Projects</h5>
                        <p>Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.</p>

                        <figure><Link to="/"><img className="img-fluid" src="assets/images/promo-banner.jpg" alt="" /></Link></figure>
                    </div>
                </article>
                {/* <!--//about-section--> */}

                <section className="cta-section theme-bg-light py-5">
                    <div className="container text-center">
                        <h2 className="heading">Newsletter</h2>
                        <div className="intro">Welcome to my blog. Subscribe and get my latest blog post in your inbox.</div>
                        <form className="signup-form form-inline justify-content-center pt-3">
                            <div className="form-group">
                                <label className="sr-only" htmlFor="semail">Your email</label>
                                <input type="email" id="semail" name="semail1" className="form-control mr-md-1 semail" placeholder="Enter email" />
                            </div>
                            <button type="submit" className="btn btn-primary">Subscribe</button>
                        </form>
                    </div>
                    {/* <!--//container--> */}
                </section>

                <footer className="footer text-center py-2 theme-bg-dark">

                    {/* <!-- */}
                        {/* This template is free as long as you keep the footer attribution link. If you'd like to use the template without the attribution link, you can buy the commercial license via our website: themes.3rdwavemedia.com Thank you for your support. :)  */}
                    {/* --> */}
                    <small className="copyright">Designed with <i className="fas fa-heart" style={{color: "#fb866a"}}></i> by <Link to="/">Xiaoying Riley</Link> for developers</small>

                </footer>

            </div>
            {/* <!--//main-wrapper--> */}
        </>
    );
}