import React from 'react';
import { Link } from "react-router-dom";
import * as PostDetailStyleComponent from "styles/PostDetail";
import * as StyledIcons from 'styles/StyledIcons';
import useDetail from 'hooks/useDetail';
import ReactMarkdown from 'react-markdown';
import Markdown,{compiler} from 'markdown-to-jsx';

export default function PostDetailPage() {

    const MyParagraph = (props:any) => (
        <p>This is inside MyParagraph, and the value is {props.children}</p>
      );

      // see https://github.com/rexxars/react-markdown#node-types
      const renderers = {
        paragraph: (props : any) => <MyParagraph {...props} />
      };


    const markdown = `
Foo \`console.log('foo')\` baz

| foo | bar |
|-----|-----|
| bar | baz |

\`\`\`js
const foo = "bar"
\`\`\`
`


    const {
        postBaseStateDetail
    } = useDetail();

    return (
        <>
            <PostDetailStyleComponent.MainWrapper>

                <PostDetailStyleComponent.BlogPost>

                    <PostDetailStyleComponent.Container>

                        <PostDetailStyleComponent.Header>
                            <PostDetailStyleComponent.HeaderTitle>{postBaseStateDetail.data?.post_title}</PostDetailStyleComponent.HeaderTitle>
                            <PostDetailStyleComponent.HeaderMeta>
                                <PostDetailStyleComponent.HeaderDate>{postBaseStateDetail.data?.detail_updated} </PostDetailStyleComponent.HeaderDate>
                                <PostDetailStyleComponent.HeaderTime> 5 min read</PostDetailStyleComponent.HeaderTime>
                                <PostDetailStyleComponent.HeaderComment>
                                    <PostDetailStyleComponent.HeaderCommentLink to="/">4 comments</PostDetailStyleComponent.HeaderCommentLink>
                                </PostDetailStyleComponent.HeaderComment>
                            </PostDetailStyleComponent.HeaderMeta>
                        </PostDetailStyleComponent.Header>

                        <PostDetailStyleComponent.PostBody>
                            {/* <ReactMarkdown
                                // source={postBaseStateDetail.data?.contents_text}
                                source={markdown}
                                renderers={renderers}
                            /> */}

{/* {postBaseStateDetail.data?.contents_html} */}
                        {/* <Markdown
                            children={markdown}
                        /> */}

{compiler(markdown)}
{compiler(markdown, { disableParsingRawHTML: true })}

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