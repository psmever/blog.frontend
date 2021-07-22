import { useEffect, useState } from 'react';
import { SectionGubunItem, SectionGubunCode } from 'CommonTypes';
import { SectionHistoryItem } from 'ServiceTypes';
import { useParams } from 'react-router-dom';

import {
    HistoryContainer,
    HistoryItems,
    HistoryItemsHeadBox,
    HistoryItemsBody,
    ItemsBodyContent,
    ItemsBodyContentIcon,
    HistoryItemsHeadTitle,
    HistoryItemsHeadHr,
} from '@Style/PostDetailStyles';

import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getSectionHistory } from '@API';

export default function SectionsHistorysBox() {
    const params = useParams<{
        section_gubun: SectionGubunItem;
    }>();

    // 기본 끄적 끄적.
    const [gubunCode, setGubunCode] = useState<SectionGubunCode>('S07010');
    const [currentPage, setCurrentPage] = useState<number>(0);
    const [hasmore, setHasmore] = useState<boolean>(false);
    const [historyList, setHistoryList] = useState<SectionHistoryItem[]>();

    useEffect(() => {
        const setSectionGubun = (gubun: SectionGubunItem) => {
            if (gubun === 'scribble') {
                setGubunCode('S07010');
            } else if (gubun === 'blog') {
                setGubunCode('S07020');
            } else if (gubun === 'mingun') {
                setGubunCode('S07030');
            }
        };
        if (params.section_gubun) {
            setSectionGubun(params.section_gubun);
        }
    }, [params]);

    useEffect(() => {
        const sectionHistoryRequest = async (getcode: SectionGubunCode) => {
            const response = await getSectionHistory(getcode);
            if (response.status === true && response.payload !== null) {
                const { historys, current_page, hasmore } = response.payload;

                setHistoryList(historys);
                setCurrentPage(current_page);
                setHasmore(hasmore);
            }
        };

        if (gubunCode) {
            sectionHistoryRequest(gubunCode);
        }
    }, [gubunCode]);

    useEffect(() => {
        console.debug(currentPage, hasmore);
    }, [currentPage, hasmore]);

    return (
        <HistoryContainer>
            <HistoryItems>
                <HistoryItemsHeadBox>
                    <HistoryItemsHeadTitle>히스토리</HistoryItemsHeadTitle>
                    <HistoryItemsHeadHr />
                </HistoryItemsHeadBox>
                <HistoryItemsBody>
                    {historyList?.map((item: SectionHistoryItem) => {
                        return (
                            <ItemsBodyContent key={item.post_uuid}>
                                <span>{item.smal_content}</span>
                                <ItemsBodyContentIcon>
                                    <FontAwesomeIcon icon={faAngleRight} />
                                </ItemsBodyContentIcon>
                            </ItemsBodyContent>
                        );
                    })}
                </HistoryItemsBody>
            </HistoryItems>
        </HistoryContainer>
    );
}
