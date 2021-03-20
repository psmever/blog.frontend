import { useHistory } from 'react-router-dom';
import {
    PostCard,
    PostCardMeta,
    PostPhoto,
    Details,
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
import { PostCardItem, TagItem } from 'CommonTypes';
import History from '@Module/History';

export default function PostsCard({ elementIndex, postData }: { elementIndex: number; postData: PostCardItem }) {
    const history = useHistory();
    const { post_uuid, post_title, list_contents, tags, slug_title, thumb_url, list_created } = postData;
    const optionAlt = elementIndex % 2 === 0 ? 'false' : 'true';
    const postTitle = post_title;
    const listCreated = list_created;
    const listTags = tags;
    const postListContents = list_contents.replace(/[^\uAC00-\uD7AF\u1100-\u11FF\u3130-\u318F]/gi, '');
    const postTags = tags
        .map(e => {
            return e.tag_text;
        })
        .join(', ');

    const handleOnClickReadMore = () => {
        History.push({
            pathname: process.env.PUBLIC_URL + `/posts/${slug_title}/detail`,
        });
    };

    return (
        <PostCard alt={optionAlt} key={post_uuid}>
            <PostCardMeta>
                <PostPhoto
                    id="PostPhoto"
                    style={{
                        backgroundImage: `url(${thumb_url})`,
                    }}
                ></PostPhoto>
                <Details id="Details" alt={optionAlt}>
                    <PostDate>{listCreated}</PostDate>
                    <Tags>
                        <TagsUList>
                            {listTags.map((e: TagItem, index) => {
                                return (
                                    <TagsList key={index}>
                                        <DetailList
                                            onClick={() => {
                                                history.push({
                                                    pathname: process.env.PUBLIC_URL + `/search/tags/${e.tag_text}`,
                                                });
                                            }}
                                        >
                                            {e.tag_text}
                                        </DetailList>
                                    </TagsList>
                                );
                            })}
                        </TagsUList>
                    </Tags>
                </Details>
            </PostCardMeta>
            <Description alt={optionAlt}>
                <DescriptionMainText>{postTitle}</DescriptionMainText>
                <DescriptionSubText>{postTags}</DescriptionSubText>
                <DescriptionContent>{postListContents}</DescriptionContent>
                <DescriptionReadMore>
                    <DescriptionReadMoreList onClick={() => handleOnClickReadMore()}>글보기</DescriptionReadMoreList>
                </DescriptionReadMore>
            </Description>
        </PostCard>
    );
}
