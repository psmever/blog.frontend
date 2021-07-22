import React, { useState, useEffect } from 'react';
import { SectionPostItem, SectionGubunItem } from 'CommonTypes';
import { useParams } from 'react-router-dom';
import { isEmpty } from '@Helper';
import { getSectionDetail } from '@API';
import _Alert_ from '@_Alert_';
import MarkdownRender from '@Element/Markdown/MarkdownRender';
import SectionsHistorysBox from './SectionsHistorysBox';

import {
    PostDetailBox,
    PostBoxWarpper,
    HistoryBoxWarpper,
    Header,
    HeaderTitle,
    HeaderMeta,
    ContentsHr,
} from '@Style/PostDetailStyles';

//https://codepen.io/sowmyaseshadri/pen/PdajzN

// TODO : 히스토리 박스 퍼블리싱.

export default function SectionsDetail() {
    const params = useParams<{
        section_gubun: SectionGubunItem;
    }>();
    const [sectionTitle, setSectionTitle] = useState<string>('');
    const [sectionDetailData, setSectionDetailData] = useState<SectionPostItem>({
        post_uuid: '',
        contents_html: '',
        contents_text: '',
        markdown: 'Y',
        created: '',
    });

    useEffect(() => {
        const setEditorTitle = (gubun: SectionGubunItem) => {
            if (gubun === 'scribble') {
                setSectionTitle('끄적끄적');
            } else if (gubun === 'blog') {
                setSectionTitle('블로그 소개');
            } else if (gubun === 'mingun') {
                setSectionTitle('민군은');
            }
        };
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
            setEditorTitle(params.section_gubun);
            fetchGetSectionDetail(params.section_gubun);
        }
    }, [params]);

    return (
        <PostDetailBox>
            <PostBoxWarpper>
                <Header>
                    <HeaderTitle>{sectionTitle}</HeaderTitle>
                    <HeaderMeta>
                        {/* <HeaderDate>{postInfo.detail_created}</HeaderDate> */}
                        {/* <ModifyButton>
                        <PostEditButton EditLink={editButtonLink} />
                    </ModifyButton> */}
                    </HeaderMeta>
                </Header>

                <MarkdownRender markdownText={sectionDetailData.contents_text} />
            </PostBoxWarpper>
            <ContentsHr />
            <HistoryBoxWarpper>
                <SectionsHistorysBox />
            </HistoryBoxWarpper>
        </PostDetailBox>
    );
}
