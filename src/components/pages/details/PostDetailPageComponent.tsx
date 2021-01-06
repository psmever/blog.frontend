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
    PromoImage,
    PostTag,
    PostTagMeta,
    PostTags,
    PostTagsItems,
    PostTagsItem,
} from 'styles/PostDetail';
import { MarkdownRender } from 'components/elements';
import { useHistory } from 'react-router-dom';
import useDetail from 'hooks/useDetail';
import * as Helper from 'lib/Helper';

export default function PostDetailPage() {
    const { postContents, handleTagItemClick } = useDetail();

    const history = useHistory();

    // 수정 링크.
    const handleClickModifyLink = () => {
        const post_uuid = postContents.post_uuid;
        history.push({
            pathname: process.env.PUBLIC_URL + `/admin/${post_uuid}/edit`,
        });
    };

    return (
        <>
            <MainWrapper>
                <BlogPost>
                    <Container>
                        <Header>
                            <HeaderTitle>{postContents.post_title}</HeaderTitle>
                            <HeaderMeta>
                                <HeaderDate>{postContents.detail_created}&nbsp;</HeaderDate>
                                <HeaderTime>{postContents.view_count} view&nbsp;</HeaderTime>
                                <HeaderComment>
                                    <HeaderCommentLink to="/">0 comments&nbsp;</HeaderCommentLink>
                                </HeaderComment>
                                {Helper.getLocalToken().login_state === true && (
                                    <HeaderModify>
                                        <HeaderModifyLink onClick={handleClickModifyLink}>수정&nbsp;</HeaderModifyLink>
                                    </HeaderModify>
                                )}
                            </HeaderMeta>
                        </Header>
                        <PostTag>
                            <PostTagMeta>
                                <PostTags>
                                    {postContents.tags.map((element, n) => {
                                        return (
                                            <PostTagsItems key={n}>
                                                <PostTagsItem onClick={() => handleTagItemClick(element.text)}>
                                                    {element.text}
                                                </PostTagsItem>
                                            </PostTagsItems>
                                        );
                                    })}
                                </PostTags>
                            </PostTagMeta>
                        </PostTag>
                        <PostBody>
                            <MarkdownRender markdownText={postContents.contents_text} />
                        </PostBody>
                    </Container>
                    {/* <!--//container--> */}
                </BlogPost>

                <PromoSection>
                    <PromoContainer>
                        <PromoTitle>Promo Section Heading</PromoTitle>
                        <PromoPtag>
                            You can use this section to promote your side projects etc. Lorem ipsum dolor sit amet,
                            consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.{' '}
                        </PromoPtag>
                        <PromoFigure>
                            <PromoLink to="/">
                                <PromoImage
                                    src={process.env.REACT_APP_MEDIA_URL + '/assets/blog/images/promo-banner.jpg'}
                                />
                            </PromoLink>
                        </PromoFigure>
                    </PromoContainer>
                </PromoSection>
            </MainWrapper>
        </>
    );
}
