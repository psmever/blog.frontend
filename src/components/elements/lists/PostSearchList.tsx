import React from 'react';
import {
    Band,
    BandItems,
    BandItemsCard,
    BandItemArticle,
    BandItemCardThumbBox,
    BandItemCardThumbimg,
    BandItemArticleTitle,
    BandItemArticleTitleSpan,
    BandItemArticleMetaDate,
    BandItemArticleMetaTime,
    BandItemArticleDateBox,
} from 'styles/Main';
import { apiPostListResultItemsInterface } from 'commonTypes';
import { useHistory } from 'react-router-dom';

interface InfiniteScrollListProps {
    listData: apiPostListResultItemsInterface[];
}

export default function MainPostSearchList({ listData }: InfiniteScrollListProps) {
    const history = useHistory();

    // 리스트 링크 클릭.
    const handlePostCardCLick = (slugTitle: string) => {
        history.push({
            pathname: process.env.PUBLIC_URL + `/pages/post/detail/${slugTitle}`,
        });
    };

    return (
        <>
            <Band>
                {listData.map((element, n) => {
                    return (
                        <BandItems key={n}>
                            <BandItemsCard onClick={() => handlePostCardCLick(element.slug_title)}>
                                <BandItemCardThumbBox>
                                    <BandItemCardThumbimg src={element.thumb_url} alt="" />
                                </BandItemCardThumbBox>
                                <BandItemArticle>
                                    <BandItemArticleTitle>{element.post_title}</BandItemArticleTitle>
                                    <BandItemArticleTitleSpan>{element.list_contents}</BandItemArticleTitleSpan>
                                    <BandItemArticleDateBox>
                                        <BandItemArticleMetaDate>{element.list_created}</BandItemArticleMetaDate>
                                        <BandItemArticleMetaTime>{element.view_count} read</BandItemArticleMetaTime>
                                    </BandItemArticleDateBox>
                                </BandItemArticle>
                            </BandItemsCard>
                        </BandItems>
                    );
                })}
            </Band>
        </>
    );
}
