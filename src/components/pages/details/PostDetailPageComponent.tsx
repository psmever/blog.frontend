import React from 'react';
import * as PostDetailStyleComponent from "styles/PostDetail";
import * as StyledIcons from 'styles/StyledIcons';
import { MarkdownRender } from 'components/elements';

import useDetail from 'hooks/useDetail';


export default function PostDetailPage() {



    const {
        postContents
    } = useDetail();

    return (
        <>
            <PostDetailStyleComponent.MainWrapper>

                <PostDetailStyleComponent.BlogPost>

                    <PostDetailStyleComponent.Container>

                        <PostDetailStyleComponent.Header>
                            <PostDetailStyleComponent.HeaderTitle>{postContents.post_title}</PostDetailStyleComponent.HeaderTitle>
                            <PostDetailStyleComponent.HeaderMeta>
                                <PostDetailStyleComponent.HeaderDate>{postContents.detail_updated}&nbsp;</PostDetailStyleComponent.HeaderDate>
                                <PostDetailStyleComponent.HeaderTime>0 min read&nbsp;</PostDetailStyleComponent.HeaderTime>
                                <PostDetailStyleComponent.HeaderComment>
                                    <PostDetailStyleComponent.HeaderCommentLink to="/">0 comments&nbsp;</PostDetailStyleComponent.HeaderCommentLink>
                                </PostDetailStyleComponent.HeaderComment>
                            </PostDetailStyleComponent.HeaderMeta>
                        </PostDetailStyleComponent.Header>

                        <PostDetailStyleComponent.PostBody>

                        <MarkdownRender
                            markdownText={postContents.contents_text}
                        />

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