import { useEffect, useState } from 'react';
import { SectionGubunItem, SectionGubunCode } from 'CommonTypes';
import { RootState, SectionHistoryItem } from 'StoreTypes';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
    HistoryContainer,
    HistoryItems,
    HistoryItemsHeadBox,
    HistoryItemsBody,
    ItemsBodyCheckIconBox,
    HistoryItemsWapper,
    ItemsBodyContent,
    ItemsBodyContentIcon,
    HistoryItemsHeadTitle,
    HistoryItemsHeadHr,
} from '@Style/PostDetailStyles';
import { isEmpty } from '@Helper';
import { faAngleRight, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getSectionsHistoryAction } from '@Store/Sections';

export default function SectionsHistorysBox() {
    const dispatch = useDispatch();
    const params = useParams<{
        section_gubun: SectionGubunItem;
        post_uuid: string;
    }>();
    const history = useHistory();

    const { historyHistorys } = useSelector((store: RootState) => ({
        historyPerPage: store.sections.section.history.per_page,
        historyCurrentPage: store.sections.section.history.current_page,
        historyHasmore: store.sections.section.history.hasmore,
        historyHistorys: store.sections.section.history.historys,
    }));

    // 기본 끄적 끄적.
    const [gubunCode, setGubunCode] = useState<SectionGubunCode>('S07010');
    // const [currentPage, setCurrentPage] = useState<number>(0);
    // const [hasmore, setHasmore] = useState<boolean>(false);
    const [historyList, setHistoryList] = useState<SectionHistoryItem[]>();

    const handleClickHistory = (uuid: string) => {
        const gubun = params.section_gubun;
        history.push({
            pathname: process.env.PUBLIC_URL + `/sections/${gubun}/${uuid}/history`,
        });
    };

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
        if (gubunCode) {
            dispatch(getSectionsHistoryAction(gubunCode));
            setHistoryList([]);
        }
    }, [gubunCode]);

    useEffect(() => {
        const initPageData = () => {
            setHistoryList(historyHistorys);
            // setCurrentPage(historyCurrentPage);
            // setHasmore(historyHasmore);
        };

        if (historyHistorys.length > 0) {
            initPageData();
        }
    }, [historyHistorys]);

    return (
        <>
            {!isEmpty(historyList) && (
                <HistoryContainer>
                    <HistoryItems>
                        <HistoryItemsHeadBox>
                            <HistoryItemsHeadTitle>히스토리</HistoryItemsHeadTitle>
                            <HistoryItemsHeadHr />
                        </HistoryItemsHeadBox>
                        <HistoryItemsBody>
                            {historyList?.map((item: SectionHistoryItem) => {
                                return (
                                    <div key={item.post_uuid}>
                                        <HistoryItemsWapper>
                                            {params.post_uuid && params.post_uuid == item.post_uuid && (
                                                <ItemsBodyCheckIconBox>
                                                    <FontAwesomeIcon icon={faCheckCircle} />
                                                </ItemsBodyCheckIconBox>
                                            )}
                                            <ItemsBodyContent onClick={() => handleClickHistory(item.post_uuid)}>
                                                <span>{item.smal_content}</span>
                                                <ItemsBodyContentIcon>
                                                    <FontAwesomeIcon icon={faAngleRight} />
                                                </ItemsBodyContentIcon>
                                            </ItemsBodyContent>
                                        </HistoryItemsWapper>
                                    </div>
                                );
                            })}
                        </HistoryItemsBody>
                    </HistoryItems>
                </HistoryContainer>
            )}
        </>
    );
}
