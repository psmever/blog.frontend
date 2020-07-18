import React from 'react';
import { Link } from "react-router-dom";
import * as PostDetailStyleComponent from "styles/PostDetail";
import * as StyledIcons from 'styles/StyledIcons';

export default function PostDetailPage() {
    return (
        <>
            <PostDetailStyleComponent.MainWrapper>

                <PostDetailStyleComponent.BlogPost>

                    <PostDetailStyleComponent.Container>

                        <PostDetailStyleComponent.Header>
                            <PostDetailStyleComponent.HeaderTitle>Why Every Developer Should Have A Blog</PostDetailStyleComponent.HeaderTitle>
                            <PostDetailStyleComponent.HeaderMeta>
                                <PostDetailStyleComponent.HeaderDate>Published 3 months ago</PostDetailStyleComponent.HeaderDate>
                                <PostDetailStyleComponent.HeaderTime>5 min read</PostDetailStyleComponent.HeaderTime>
                                <PostDetailStyleComponent.HeaderComment>
                                    <PostDetailStyleComponent.HeaderCommentLink to="/">4 comments</PostDetailStyleComponent.HeaderCommentLink>
                                </PostDetailStyleComponent.HeaderComment>
                            </PostDetailStyleComponent.HeaderMeta>
                        </PostDetailStyleComponent.Header>

                        <PostDetailStyleComponent.PostBody>
                            <PostDetailStyleComponent.Banner>
                                <PostDetailStyleComponent.BannerLink to="/">
                                    <PostDetailStyleComponent.BannerImage src="/assets/images/blog/blog-post-banner.jpg" alt="" />
                                </PostDetailStyleComponent.BannerLink>
                                <PostDetailStyleComponent.BannerImageCaption>
                                    Image Credit:
                                        <PostDetailStyleComponent.BannerImageCaptionLink to="/">
                                            made4dev.com (Premium Programming T-shirts)
                                        </PostDetailStyleComponent.BannerImageCaptionLink>
                                </PostDetailStyleComponent.BannerImageCaption>
                            </PostDetailStyleComponent.Banner>
                            <PostDetailStyleComponent.PTag>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. </PostDetailStyleComponent.PTag>

                            <PostDetailStyleComponent.ContentTitle1>
                                Code Block Example
                            </PostDetailStyleComponent.ContentTitle1>
                            <PostDetailStyleComponent.PTag>You can get more info at <Link to="/">https://highlightjs.org/</Link>. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. </PostDetailStyleComponent.PTag>
                            <pre>
                                <code>

                code contents

                                </code>
                            </pre>
                            <PostDetailStyleComponent.ContentTitle1>
                                Typography
                            </PostDetailStyleComponent.ContentTitle1>
                            <PostDetailStyleComponent.PTag>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</PostDetailStyleComponent.PTag>
                            <PostDetailStyleComponent.ContentTitle2>
                                Bullet Points:
                            </PostDetailStyleComponent.ContentTitle2>
                            <PostDetailStyleComponent.ContentPoint1>
                                <PostDetailStyleComponent.ContentPointItem>Lorem ipsum dolor sit amet consectetuer.</PostDetailStyleComponent.ContentPointItem>
                                <PostDetailStyleComponent.ContentPointItem>Aenean commodo ligula eget dolor.</PostDetailStyleComponent.ContentPointItem>
                                <PostDetailStyleComponent.ContentPointItem>Aenean massa cum sociis natoque penatibus.</PostDetailStyleComponent.ContentPointItem>
                            </PostDetailStyleComponent.ContentPoint1>
                            <PostDetailStyleComponent.ContentPoint2>
                                <PostDetailStyleComponent.ContentPointItem>Lorem ipsum dolor sit amet consectetuer.</PostDetailStyleComponent.ContentPointItem>
                                <PostDetailStyleComponent.ContentPointItem>Aenean commodo ligula eget dolor.</PostDetailStyleComponent.ContentPointItem>
                                <PostDetailStyleComponent.ContentPointItem>Aenean massa cum sociis natoque penatibus.</PostDetailStyleComponent.ContentPointItem>
                            </PostDetailStyleComponent.ContentPoint2>
                            <PostDetailStyleComponent.ContentTitle2>
                                Quote Example:
                            </PostDetailStyleComponent.ContentTitle2>
                            <PostDetailStyleComponent.BlockQuote>
                                <PostDetailStyleComponent.BlockQuotePtag>You might not think that programmers are artists, but programming is an extremely creative profession. It's logic-based creativity.</PostDetailStyleComponent.BlockQuotePtag>
                                <PostDetailStyleComponent.BlockQuoteFooter>John Romero</PostDetailStyleComponent.BlockQuoteFooter>
                            </PostDetailStyleComponent.BlockQuote>

                        </PostDetailStyleComponent.PostBody>

                        <PostDetailStyleComponent.Nav>
                            <PostDetailStyleComponent.NavPrevLink to="/"><StyledIcons.ArrowLeftIcon/>Previous</PostDetailStyleComponent.NavPrevLink>
                            <PostDetailStyleComponent.NavNextLink to="/">Next<StyledIcons.ArrowRightIcon/></PostDetailStyleComponent.NavNextLink>
                        </PostDetailStyleComponent.Nav>

                    </PostDetailStyleComponent.Container>
                    {/* <!--//container--> */}
                </PostDetailStyleComponent.BlogPost>

                <PostDetailStyleComponent.PromoSection>
                    <PostDetailStyleComponent.PromoContainer>
                        <PostDetailStyleComponent.PromoTitle>Promo Section Heading</PostDetailStyleComponent.PromoTitle>
                        <PostDetailStyleComponent.PromoPtag>You can use this section to promote your side projects etc. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. </PostDetailStyleComponent.PromoPtag>
                        <PostDetailStyleComponent.PromoFigure>
                            <PostDetailStyleComponent.PromoLink to="/">
                                <PostDetailStyleComponent.PromoImage src="/assets/images/promo-banner.jpg" alt="" />
                            </PostDetailStyleComponent.PromoLink>
                        </PostDetailStyleComponent.PromoFigure>
                    </PostDetailStyleComponent.PromoContainer>
                    {/* <!--//container--> */}
                </PostDetailStyleComponent.PromoSection>
                {/* <!--//promo-section--> */}


            </PostDetailStyleComponent.MainWrapper>
            {/* <!--//main-wrapper--> */}
        </>
    );
}