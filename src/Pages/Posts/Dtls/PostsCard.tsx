import React from 'react';
import {
    PostCard,
    PostCardMeta,
    PostPhoto,
    Details,
    PostAuthor,
    PostDate,
    Tags,
    TagsUList,
    TagsList,
    DetailList,
    Description,
    DescriptionMainText,
    DescriptionSubText,
    DescriptionContent,
    DescriptionReadMore,
    DescriptionReadMoreList,
} from '@Style/PostPageStyles';
import { PostCardItem } from 'CommonTypes';
import History from '@Module/History';

export default function PostsCard({ elementIndex, postData }: { elementIndex: number; postData: PostCardItem }) {
    const { post_title, list_contents, tags, slug_title, thumb_url } = postData;
    const optionAlt = elementIndex % 2 === 0 ? 'false' : 'true';
    const postTitle = post_title;
    const postListContents = list_contents.replace(/[^\uAC00-\uD7AF\u1100-\u11FF\u3130-\u318F]/gi, '');
    const postTags = tags
        .map(e => {
            return e.text;
        })
        .join(', ');

    const handleOnClickReadMore = () => {
        History.push({
            pathname: process.env.PUBLIC_URL + `/posts/${slug_title}/detail`,
        });
    };

    return (
        <PostCard alt={optionAlt}>
            <PostCardMeta>
                <PostPhoto
                    id="PostPhoto"
                    style={{
                        backgroundImage: `url(${thumb_url})`,
                    }}
                ></PostPhoto>
                <Details id="Details" alt={optionAlt}>
                    <PostAuthor>
                        <DetailList href="#">John Doe</DetailList>
                    </PostAuthor>
                    <PostDate>Aug. 24, 2015</PostDate>
                    <Tags>
                        <TagsUList>
                            <TagsList>
                                <DetailList href="#">Learn</DetailList>
                            </TagsList>
                            <TagsList>
                                <DetailList href="#">Code</DetailList>
                            </TagsList>
                            <TagsList>
                                <DetailList href="#">HTML</DetailList>
                            </TagsList>
                            <TagsList>
                                <DetailList href="#">CSS</DetailList>
                            </TagsList>
                        </TagsUList>
                    </Tags>
                </Details>
            </PostCardMeta>
            <Description alt={optionAlt}>
                <DescriptionMainText>{postTitle}</DescriptionMainText>
                <DescriptionSubText>{postTags}</DescriptionSubText>
                <DescriptionContent>{postListContents}</DescriptionContent>
                <DescriptionReadMore>
                    <DescriptionReadMoreList onClick={() => handleOnClickReadMore()}>더보기</DescriptionReadMoreList>
                </DescriptionReadMore>
            </Description>
        </PostCard>
    );
}
