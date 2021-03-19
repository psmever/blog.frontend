import React, { useState, useEffect } from 'react';
import { SectionPostItem, SectionGubunItem } from 'CommonTypes';
import { useParams } from 'react-router-dom';
import { isEmpty } from '@Helper';
import { getSectionDetail } from '@API';
import _Alert_ from '@_Alert_';
import MarkdownRender from '@Element/Markdown/MarkdownRender';

import {
    PostDetailBox,
    Header,
    HeaderTitle,
    HeaderMeta,
    HeaderDate,
    ModifyButton,
    PostTag,
    PostTagMeta,
    PostTags,
    PostTagsItems,
    PostTagsItem,
} from '@Style/PostDetailStyles';

export default function SectionsDetail() {
    const params = useParams<{
        section_gubun: SectionGubunItem;
    }>();
    const [sectionDetailData, setSectionDetailData] = useState<SectionPostItem>({
        post_uuid: '',
        contents_html: '',
        contents_text: '',
        markdown: 'Y',
        created: '',
    });

    useEffect(() => {
        const fetchGetSectionDetail = async (gubun: SectionGubunItem) => {
            const { status, payload } = await getSectionDetail({ section: gubun });
            if (status) {
                setSectionDetailData({
                    post_uuid: payload.post_uuid,
                    contents_html: payload.contents_html,
                    contents_text: payload.contents_text,
                    markdown: payload.markdown,
                    created: payload.created,
                });
            } else {
                _Alert_.defaultInfo({ text: '데이터를 가지고 오는데 실패 했습니다.' });
            }
        };

        if (!isEmpty(params) && !isEmpty(params.section_gubun)) {
            fetchGetSectionDetail(params.section_gubun);
        }
    }, [params]);

    return (
        <PostDetailBox>
            {/* <Header>
                <HeaderMeta>
                    <HeaderDate>{sectionDetailData.created}</HeaderDate>
                </HeaderMeta>
            </Header> */}

            <MarkdownRender markdownText={sectionDetailData.contents_text} />
        </PostDetailBox>
    );
}
