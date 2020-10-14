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
    HeaderModify,
    HeaderModifyLink,
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
import { useHistory } from 'react-router-dom';
import useDetail from 'hooks/useDetail';
import * as Helper from 'lib/Helper';


export default function PostDetailPage() {

    const {
        postContents
    } = useDetail();

    const history = useHistory();

    // 수정 링크.
    const handleClickModifyLink = () => {
        const post_uuid = postContents.post_uuid;
        history.push({
            pathname: process.env.PUBLIC_URL + `/admin/${post_uuid}/edit`
        });
    }

    return (
        <>
            <MainWrapper>

                <BlogPost>

                    <Container>

                        <Header>
                            <HeaderTitle>{postContents.post_title}</HeaderTitle>
                            <HeaderMeta>
                                <HeaderDate>{postContents.detail_updated}&nbsp;</HeaderDate>
                                <HeaderTime>{postContents.view_count} view&nbsp;</HeaderTime>
                                <HeaderComment>
                                    <HeaderCommentLink to="/">0 comments&nbsp;</HeaderCommentLink>
                                </HeaderComment>
                            {Helper.getLocalToken().login_state === true &&
                                <HeaderModify>
                                    <HeaderModifyLink onClick={handleClickModifyLink}>수정&nbsp;</HeaderModifyLink>
                                </HeaderModify>
                            }
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