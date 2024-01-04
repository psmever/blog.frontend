'use client';

import React from 'react';
import { PostPageStyle } from '@/Style/common-styles';

const { PostContainer, PostWapper, PostItemWapper, PostArticle, PostListBox, PostImageArea, PostImage, PostContentArea, PostTitle, PostContent } = PostPageStyle;

export default function PostPage() {
    return (
        <PostContainer>
            <PostWapper>
                <PostItemWapper>
                    {[...Array(20)].map(() => {
                        return (
                            <PostArticle key={(Math.random() + 1).toString(36).substring(7)}>
                                <PostListBox>
                                    <PostImageArea>
                                        <PostImage src="http://psmever.iptime.org:8003/default/default.jpg" width={320} height={240} alt="..." />
                                    </PostImageArea>

                                    <PostContentArea>
                                        <PostTitle>Noteworthy technology acquisitions 2021</PostTitle>
                                        <PostContent>Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</PostContent>
                                    </PostContentArea>
                                </PostListBox>
                            </PostArticle>
                        );
                    })}
                </PostItemWapper>
            </PostWapper>
        </PostContainer>
    );
}
