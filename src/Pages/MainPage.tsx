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
    PostCardWrapper,
} from '@Style/MainPageStyles';

export default function MainPage() {
    return (
        <>
            <PostCardWrapper>
                <PostCard alt={'false'}>
                    <PostCardMeta>
                        <PostPhoto
                            id="PostPhoto"
                            style={{
                                backgroundImage: `url(https://storage.googleapis.com/chydlx/codepen/blog-cards/image-1.jpg)`,
                            }}
                        ></PostPhoto>
                        <Details id="Details" alt={'false'}>
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
                    <Description alt={'false'}>
                        <DescriptionMainText>Learning to Code</DescriptionMainText>
                        <DescriptionSubText>Opening a door to the future</DescriptionSubText>
                        <DescriptionContent>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto
                            obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis,
                            sit.
                        </DescriptionContent>
                        <DescriptionReadMore>
                            <DescriptionReadMoreList href="#">Read More</DescriptionReadMoreList>{' '}
                        </DescriptionReadMore>
                    </Description>
                </PostCard>
                <PostCard alt={'true'}>
                    <PostCardMeta>
                        <PostPhoto
                            id="PostPhoto"
                            style={{
                                backgroundImage: `url(https://storage.googleapis.com/chydlx/codepen/blog-cards/image-2.jpg)`,
                            }}
                        ></PostPhoto>
                        <Details id="Details" alt={'true'}>
                            <PostAuthor>
                                <DetailList href="#">Jane Doe</DetailList>
                            </PostAuthor>
                            <PostDate>July. 15, 2015</PostDate>
                            <Tags>
                                <TagsUList>
                                    <TagsList>
                                        <DetailList href="#">Learn</DetailList>
                                    </TagsList>
                                    <TagsList>
                                        <DetailList href="#">Code</DetailList>
                                    </TagsList>
                                    <TagsList>
                                        <DetailList href="#">JavaScript</DetailList>
                                    </TagsList>
                                </TagsUList>
                            </Tags>
                        </Details>
                    </PostCardMeta>
                    <Description alt={'true'}>
                        <DescriptionMainText>Mastering the Language</DescriptionMainText>
                        <DescriptionSubText>Java is not the same as JavaScript</DescriptionSubText>
                        <DescriptionContent>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto
                            obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis,
                            sit.
                        </DescriptionContent>
                        <DescriptionReadMore>
                            <DescriptionReadMoreList href="#">Read More</DescriptionReadMoreList>{' '}
                        </DescriptionReadMore>
                    </Description>
                </PostCard>
                <PostCard alt={'false'}>
                    <PostCardMeta>
                        <PostPhoto
                            id="PostPhoto"
                            style={{
                                backgroundImage: `url(https://storage.googleapis.com/chydlx/codepen/blog-cards/image-1.jpg)`,
                            }}
                        ></PostPhoto>
                        <Details id="Details" alt={'false'}>
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
                    <Description alt={'false'}>
                        <DescriptionMainText>Learning to Code</DescriptionMainText>
                        <DescriptionSubText>Opening a door to the future</DescriptionSubText>
                        <DescriptionContent>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto
                            obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis,
                            sit.
                        </DescriptionContent>
                        <DescriptionReadMore>
                            <DescriptionReadMoreList href="#">Read More</DescriptionReadMoreList>{' '}
                        </DescriptionReadMore>
                    </Description>
                </PostCard>
                <PostCard alt={'true'}>
                    <PostCardMeta>
                        <PostPhoto
                            id="PostPhoto"
                            style={{
                                backgroundImage: `url(https://storage.googleapis.com/chydlx/codepen/blog-cards/image-2.jpg)`,
                            }}
                        ></PostPhoto>
                        <Details id="Details" alt={'true'}>
                            <PostAuthor>
                                <DetailList href="#">Jane Doe</DetailList>
                            </PostAuthor>
                            <PostDate>July. 15, 2015</PostDate>
                            <Tags>
                                <TagsUList>
                                    <TagsList>
                                        <DetailList href="#">Learn</DetailList>
                                    </TagsList>
                                    <TagsList>
                                        <DetailList href="#">Code</DetailList>
                                    </TagsList>
                                    <TagsList>
                                        <DetailList href="#">JavaScript</DetailList>
                                    </TagsList>
                                </TagsUList>
                            </Tags>
                        </Details>
                    </PostCardMeta>
                    <Description alt={'true'}>
                        <DescriptionMainText>Mastering the Language</DescriptionMainText>
                        <DescriptionSubText>Java is not the same as JavaScript</DescriptionSubText>
                        <DescriptionContent>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto
                            obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis,
                            sit.
                        </DescriptionContent>
                        <DescriptionReadMore>
                            <DescriptionReadMoreList href="#">Read More</DescriptionReadMoreList>{' '}
                        </DescriptionReadMore>
                    </Description>
                </PostCard>
                <PostCard alt={'false'}>
                    <PostCardMeta>
                        <PostPhoto
                            id="PostPhoto"
                            style={{
                                backgroundImage: `url(https://storage.googleapis.com/chydlx/codepen/blog-cards/image-1.jpg)`,
                            }}
                        ></PostPhoto>
                        <Details id="Details" alt={'false'}>
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
                    <Description alt={'false'}>
                        <DescriptionMainText>Learning to Code</DescriptionMainText>
                        <DescriptionSubText>Opening a door to the future</DescriptionSubText>
                        <DescriptionContent>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto
                            obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis,
                            sit.
                        </DescriptionContent>
                        <DescriptionReadMore>
                            <DescriptionReadMoreList href="#">Read More</DescriptionReadMoreList>{' '}
                        </DescriptionReadMore>
                    </Description>
                </PostCard>
            </PostCardWrapper>
        </>
    );
}
