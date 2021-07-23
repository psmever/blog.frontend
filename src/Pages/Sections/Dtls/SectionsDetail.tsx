import { useState, useEffect } from 'react';
import { SectionGubunItem, SectionPostItem } from 'CommonTypes';
import { RootState } from 'StoreTypes';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { isEmpty } from '@Helper';
// import _Alert_ from '@_Alert_';
import MarkdownRender from '@Element/Markdown/MarkdownRender';
import SectionsHistorysBox from './SectionsHistorysBox';
import { getSectionsPost, getHistoryDetailAction } from '@Store/Sections';

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

    // useEffect(() => {
    //     const setEditorTitle = (section_gubun: SectionGubunItem) => {
    //         if (gubun === 'scribble') {
    //             setSectionTitle('끄적끄적');
    //         } else if (gubun === 'blog') {
    //             setSectionTitle('블로그 소개');
    //         } else if (gubun === 'mingun') {
    //             setSectionTitle('민군은');
    //         }
    //     };
    //     const fetchGetSectionDetail = async (gubun: SectionGubunItem) => {
    //         const { status, payload } = await getSectionDetail({ section: gubun });
    //         if (status) {
    //             setSectionDetailData({
    //                 post_uuid: payload.post_uuid,
    //                 contents_html: payload.contents_html,
    //                 contents_text: payload.contents_text,
    //                 markdown: payload.markdown,
    //                 created: payload.created,
    //             });
    //         } else {
    //             _Alert_.defaultInfo({ text: '데이터를 가지고 오는데 실패 했습니다.' });
    //         }
    //     };

    //     const fetchGetSectionHistoryDetail = async ({
    //         gubun,
    //         post_uuid,
    //     }: {
    //         gubun: SectionGubunCode;
    //         post_uuid: string;
    //     }) => {
    //         const { status, payload } = await getSectionHistoryDetail({ gubun: gubun, post_uuid: post_uuid });
    //         if (status) {
    //             setSectionDetailData({
    //                 post_uuid: payload.post_uuid,
    //                 contents_html: payload.contents_html,
    //                 contents_text: payload.contents_text,
    //                 markdown: payload.markdown,
    //                 created: payload.created,
    //             });
    //         } else {
    //             _Alert_.defaultInfo({ text: '데이터를 가지고 오는데 실패 했습니다.' });
    //         }
    //     };

    //     const { section_gubun, post_uuid } = params;
    //     setEditorTitle(section_gubun);
    //     if (!isEmpty(section_gubun) && !isEmpty(post_uuid)) {
    //         if (section_gubun === 'scribble') {
    //             fetchGetSectionHistoryDetail({ gubun: 'S07010', post_uuid: post_uuid });
    //         } else if (section_gubun === 'blog') {
    //             fetchGetSectionHistoryDetail({ gubun: 'S07020', post_uuid: post_uuid });
    //         } else if (section_gubun === 'mingun') {
    //             fetchGetSectionHistoryDetail({ gubun: 'S07030', post_uuid: post_uuid });
    //         }
    //     } else if (!isEmpty(section_gubun) && isEmpty(post_uuid)) {
    //         fetchGetSectionDetail(section_gubun);
    //     }
    // }, [params]);

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
