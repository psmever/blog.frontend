import { useState, useEffect } from 'react';
import { SectionGubunItem, SectionPostItem } from 'CommonTypes';
import { RootState } from 'StoreTypes';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { isEmpty } from '@Helper';
import MarkdownRender from '@Element/Markdown/MarkdownRender';
import SectionsHistorysBox from './SectionsHistorysBox';
import { getSectionsPost, getHistoryDetailAction } from '@Store/Sections';
import { SectionHistoryButton } from '@Element/Buttons';

import {
    PostDetailBox,
    PostBoxWarpper,
    HistoryBoxWarpper,
    Header,
    HeaderTitle,
    HeaderMeta,
    ContentsHr,
    HistoryButton,
} from '@Style/PostDetailStyles';

export default function SectionsDetail() {
    const dispatch = useDispatch();
    const params = useParams<{
        section_gubun: SectionGubunItem;
        post_uuid: string;
    }>();
    const { sectionsState, sectionsMessage, sectionsDetail } = useSelector((store: RootState) => ({
        sectionsState: store.sections.section.state,
        sectionsMessage: store.sections.section.message,
        sectionsDetail: store.sections.section.detail,
    }));

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

        const { section_gubun, post_uuid } = params;

        setEditorTitle(section_gubun);

        if (!isEmpty(section_gubun) && !isEmpty(post_uuid)) {
            if (section_gubun === 'scribble') {
                dispatch(
                    getHistoryDetailAction({
                        section: 'S07010',
                        post_uuid: post_uuid,
                    })
                );
            } else if (section_gubun === 'blog') {
                dispatch(
                    getHistoryDetailAction({
                        section: 'S07020',
                        post_uuid: post_uuid,
                    })
                );
            } else if (section_gubun === 'mingun') {
                dispatch(
                    getHistoryDetailAction({
                        section: 'S07030',
                        post_uuid: post_uuid,
                    })
                );
            }
        } else if (!isEmpty(section_gubun) && isEmpty(post_uuid)) {
            dispatch(getSectionsPost(section_gubun));
        }
    }, [params]);

    useEffect(() => {
        const setPageData = (item: SectionPostItem) => {
            setSectionDetailData(item);
        };

        if (!isEmpty(sectionsDetail)) {
            setPageData(sectionsDetail);
        }
    }, [sectionsDetail]);

    useEffect(() => {
        if (sectionsState === 'failure' && sectionsMessage) {
            console.debug({ error: sectionsMessage });
        }
    }, [sectionsState, sectionsMessage]);

    return (
        <PostDetailBox>
            <PostBoxWarpper>
                <Header>
                    <HeaderTitle>{sectionTitle}</HeaderTitle>
                    <HeaderMeta>
                        {/* <HeaderDate>{postInfo.detail_created}</HeaderDate> */}
                        <HistoryButton>
                            <SectionHistoryButton SectionName={params.section_gubun} />
                        </HistoryButton>
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
