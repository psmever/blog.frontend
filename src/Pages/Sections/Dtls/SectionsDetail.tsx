import React, { useState, useEffect } from 'react';
import { SectionPostItem, SectionGubunItem } from 'CommonTypes';
import { useParams } from 'react-router-dom';
import { isEmpty } from '@Helper';
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
        console.log(params);

        // TODO: 2021-03-19 09:50 섹션 상세 가지고 오기.
        // const getSectionData = () => {}

        if (!isEmpty(params) && !isEmpty(params.section_gubun)) {
        }
    }, [params]);
    return (
        <PostDetailBox>
            <Header>
                <HeaderMeta>
                    <HeaderDate>{sectionDetailData.created}</HeaderDate>
                </HeaderMeta>
            </Header>

            <MarkdownRender markdownText={sectionDetailData.contents_text} />
        </PostDetailBox>
    );
}
