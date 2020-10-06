import React from 'react';
import {
    MainWrapper,
    BlogPost,
    Container,
    Header,
    HeaderTitle,
    HeaderMeta,
    HeaderDate,
    HeaderTime,
    HeaderComment,
    HeaderCommentLink,
    PostBody,
    PromoSection,
    PromoContainer,
    PromoTitle,
    PromoPtag,
    PromoFigure,
    PromoLink,
    PromoImage
} from "styles/PostDetail";
import { MarkdownRender } from 'components/elements';

import useDetail from 'hooks/useDetail';


export default function PostDetailPage() {

    const {
        postContents
    } = useDetail();

    return (
        <>
            <MainWrapper>

                <BlogPost>

                    <Container>

                        <Header>
                            <HeaderTitle>{postContents.post_title}</HeaderTitle>
                            <HeaderMeta>
                                <HeaderDate>{postContents.detail_updated}&nbsp;</HeaderDate>
                                <HeaderTime>0 min read&nbsp;</HeaderTime>
                                <HeaderComment>
                                    <HeaderCommentLink to="/">0 comments&nbsp;</HeaderCommentLink>
                                </HeaderComment>
                            </HeaderMeta>
                        </Header>

                        <PostBody>

                            <MarkdownRender
                                markdownText={postContents.contents_text}
                            />

                        </PostBody>

                    </Container>
                    {/* <!--//container--> */}
                </BlogPost>

                <PromoSection>
                    <PromoContainer>
                        <PromoTitle>Promo Section Heading</PromoTitle>
                        <PromoPtag>You can use this section to promote your side projects etc. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. </PromoPtag>
                        <PromoFigure>
                            <PromoLink to="/">
                                <PromoImage src="/assets/images/promo-banner.jpg" alt="" />
                            </PromoLink>
                        </PromoFigure>
                    </PromoContainer>
                    {/* <!--//container--> */}
                </PromoSection>
                {/* <!--//promo-section--> */}


            </MainWrapper>
            {/* <!--//main-wrapper--> */}
        </>
    );
}