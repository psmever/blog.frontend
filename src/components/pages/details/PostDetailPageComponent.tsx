import React from 'react';
import { Link } from "react-router-dom";

export default function PostDetailPage() {
    return (
        <>
            <div className="main-wrapper">

                <article className="blog-post px-3 py-5 p-md-5">
                    <div className="container">
                        <header className="blog-post-header">
                            <h2 className="title mb-2">Why Every Developer Should Have A Blog</h2>
                            <div className="meta mb-3"><span className="date">Published 3 months ago</span><span className="time">5 min read</span><span className="comment"><Link to="/">4 comments</Link></span></div>
                        </header>

                        <div className="blog-post-body">
                            <figure className="blog-banner">
                                <Link to="/"><img className="img-fluid" src="/assets/images/blog/blog-post-banner.jpg" alt="" /></Link>
                                <figcaption className="mt-2 text-center image-caption">Image Credit: <Link to="/">made4dev.com (Premium Programming T-shirts)</Link></figcaption>
                            </figure>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. </p>

                            <h3 className="mt-5 mb-3">Code Block Example</h3>
                            <p>You can get more info at <Link to="/">https://highlightjs.org/</Link>. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. </p>
                            <pre>
                                <code>

                code contents

                                </code>
                            </pre>
                            <h3 className="mt-5 mb-3">Typography</h3>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                            <h5 className="my-3">Bullet Points:</h5>
                            <ul className="mb-5">
                                <li className="mb-2">Lorem ipsum dolor sit amet consectetuer.</li>
                                <li className="mb-2">Aenean commodo ligula eget dolor.</li>
                                <li className="mb-2">Aenean massa cum sociis natoque penatibus.</li>
                            </ul>
                            <ol className="mb-5">
                                <li className="mb-2">Lorem ipsum dolor sit amet consectetuer.</li>
                                <li className="mb-2">Aenean commodo ligula eget dolor.</li>
                                <li className="mb-2">Aenean massa cum sociis natoque penatibus.</li>
                            </ol>
                            <h5 className="my-3">Quote Example:</h5>
                            <blockquote className="blockquote m-lg-5 py-3 pl-4 px-lg-5">
                                <p className="mb-2">You might not think that programmers are artists, but programming is an extremely creative profession. It's logic-based creativity.</p>
                                <footer className="blockquote-footer">John Romero</footer>
                            </blockquote>

                            <h5 className="my-3">Table Example:</h5>
                            <table className="table table-striped my-5">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">First</th>
                                        <th scope="col">Last</th>
                                        <th scope="col">Handle</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Larry</td>
                                        <td>the Bird</td>
                                        <td>@twitter</td>
                                    </tr>
                                </tbody>
                            </table>

                            <h5 className="mb-3">Embed A Tweet:</h5>

                            <blockquote className="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">1969:<br />-what&#39;re you doing with that 2KB of RAM?<br />-sending people to the moon<br /><br />2017:<br />-what&#39;re you doing with that 1.5GB of RAM?<br />-running Slack</p>&mdash; I Am Devloper (@iamdevloper) <Link to="/">November 3, 2017</Link></blockquote>




                            <h3 className="mt-5 mb-3">Video Example</h3>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. </p>

                            <div className="embed-responsive embed-responsive-16by9">
                            {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/hnCmSXCZEpU" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe> */}
                            </div>

                        </div>

                        <nav className="blog-nav nav nav-justified my-5">
                        <Link to="/" className="nav-link-prev nav-item nav-link rounded-left">Previous<i className="arrow-prev fas fa-long-arrow-alt-left"></i></Link>
                        <Link to="/" className="nav-link-next nav-item nav-link rounded-right">Next<i className="arrow-next fas fa-long-arrow-alt-right"></i></Link>
                        </nav>

                        <div className="blog-comments-section">
                            <div id="disqus_thread"></div>
                            <script>
                                /**
                                *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT
                                *  THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR
                                *  PLATFORM OR CMS.
                                *
                                *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT:
                                *  https://disqus.com/admin/universalcode/#configuration-variables
                                */
                                /*
                                var disqus_config = function () {
                                    // Replace PAGE_URL with your page's canonical URL variable
                                    // this.page.url = PAGE_URL;

                                    // Replace PAGE_IDENTIFIER with your page's unique identifier variable
                                    // this.page.identifier = PAGE_IDENTIFIER;
                                };
                                */

                                {/* (function() {  // REQUIRED CONFIGURATION VARIABLE: EDIT THE SHORTNAME BELOW
                                    var d = document, s = d.createElement('script');

                                    // IMPORTANT: Replace 3wmthemes with your forum shortname!
                                    s.src = 'https://3wmthemes.disqus.com/embed.js';

                                    s.setAttribute('data-timestamp', +new Date());
                                    (d.head || d.body).appendChild(s);
                                })(); */}
                            </script>
                            <noscript>
                                Please enable JavaScript to view the
                                <Link to="/" rel="nofollow">
                                    comments powered by Disqus.
                                </Link>
                            </noscript>
                        </div>
                        {/* <!--//blog-comments-section--> */}

                    </div>
                    {/* <!--//container--> */}
                </article>

                <section className="promo-section theme-bg-light py-5 text-center">
                    <div className="container">
                        <h2 className="title">Promo Section Heading</h2>
                        <p>You can use this section to promote your side projects etc. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. </p>
                        <figure className="promo-figure">
                            <Link to="/"><img className="img-fluid" src="/assets/images/promo-banner.jpg" alt="" /></Link>
                        </figure>
                    </div>
                    {/* <!--//container--> */}
                </section>
                {/* <!--//promo-section--> */}


            </div>
            {/* <!--//main-wrapper--> */}
        </>
    );
}