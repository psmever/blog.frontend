import { useEffect, useState } from 'react';
import { RootState } from 'StoreTypes';
import { SectionsTotalHistoryItem, SectionGubunCode } from 'CommonTypes';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import {
    SectionHistoryWrapper,
    TitleWrapper,
    SectionTitle,
    TableWrapper,
    HistoryTable,
    HistoryTableHead,
    HistoryTableTr,
    HistoryTableTbodyTr,
    // HistoryTableTh,
    HistoryTableTheadTh,
    HistoryTableTbody,
    HistoryTableTbodyTd,
    ManageButton,
} from '@Style/SectionsHistorysStyles';
import { useDispatch, useSelector } from 'react-redux';
import { getHistoryTotalHistory } from '@Store/Sections';
import { useParams } from 'react-router-dom';
import { SectionManageButton } from '@Element/Buttons';

// FIXME: 히스트리 페이징 처리, getHistoryTotalHistory 리팩토링.
export default function SectionsHistory() {
    const params = useParams<{
        section_gubun: string;
    }>();
    const dispatch = useDispatch();
    const history = useHistory();
    const { appLoginInit, appLoading, appLoginState, totalHistorysState, totalHistorys } = useSelector(
        (store: RootState) => ({
            appLoading: store.app.loading,
            appLoginState: store.app.loginState,
            appLoginInit: store.app.appInit,
            totalHistorysState: store.sections.total_historys.state,
            totalHistorysPerPage: store.sections.total_historys.per_page,
            totalHistorysHasMore: store.sections.total_historys.hasmore,
            totalHistorys: store.sections.total_historys.historys,
        })
    );

    const [sectionHistorys, setSectionHistorys] = useState<SectionsTotalHistoryItem[]>([]);
    const [sectionCode, setSectionCode] = useState<SectionGubunCode>('S07010');

    const handleReloadControl = () => {
        dispatch(
            getHistoryTotalHistory({
                section: sectionCode,
                page: 1,
            })
        );
    };

    useEffect(() => {
        dispatch(
            getHistoryTotalHistory({
                section: sectionCode,
                page: 1,
            })
        );
    }, [sectionCode]);

    useEffect(() => {
        if (appLoginInit === true) {
            if (appLoginState === 'success') {
                if (params.section_gubun === 'scribble') {
                    setSectionCode('S07010');
                } else if (params.section_gubun === 'blog') {
                    setSectionCode('S07020');
                } else if (params.section_gubun === 'mingun') {
                    setSectionCode('S07030');
                }
            } else if (appLoginState === 'failure') {
                Swal.fire({
                    text: '로그인 하시겠습니까?',
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: '로그인',
                    cancelButtonText: '취소',
                }).then(result => {
                    if (result.isConfirmed) {
                        history.push({
                            pathname: process.env.PUBLIC_URL + `/login`,
                        });
                    } else {
                        history.push({
                            pathname: process.env.PUBLIC_URL + `/`,
                        });
                    }
                });
            }
        }
    }, [appLoginState, appLoading, appLoginInit]);

    useEffect(() => {
        const initSectionsHistory = (item: SectionsTotalHistoryItem[]) => {
            setSectionHistorys(
                item.map((element: SectionsTotalHistoryItem) => {
                    return element;
                })
            );
        };
        if (totalHistorysState === 'success') {
            initSectionsHistory(totalHistorys);
        }
    }, [totalHistorysState]);

    return (
        <SectionHistoryWrapper>
            <TitleWrapper>
                <SectionTitle>{params.section_gubun} 타이틀.</SectionTitle>
            </TitleWrapper>
            <TableWrapper>
                <HistoryTable>
                    <HistoryTableHead>
                        <HistoryTableTr>
                            <HistoryTableTheadTh width="10%">uuid</HistoryTableTheadTh>
                            <HistoryTableTheadTh width="20%">제목</HistoryTableTheadTh>
                            <HistoryTableTheadTh width="5%">상태(active)</HistoryTableTheadTh>
                            <HistoryTableTheadTh width="5%">상태(display)</HistoryTableTheadTh>
                            <HistoryTableTheadTh width="5%">등록일</HistoryTableTheadTh>
                            <HistoryTableTheadTh width="10%">관리</HistoryTableTheadTh>
                        </HistoryTableTr>
                    </HistoryTableHead>
                    <HistoryTableTbody>
                        {sectionHistorys.map((element: SectionsTotalHistoryItem) => {
                            return (
                                <HistoryTableTbodyTr key={element.post_uuid}>
                                    <HistoryTableTbodyTd>{element.post_uuid}</HistoryTableTbodyTd>
                                    <HistoryTableTbodyTd>{element.smal_content}</HistoryTableTbodyTd>
                                    <HistoryTableTbodyTd>{element.active}</HistoryTableTbodyTd>
                                    <HistoryTableTbodyTd>{element.display_flag}</HistoryTableTbodyTd>
                                    <HistoryTableTbodyTd>{element.created_at}</HistoryTableTbodyTd>
                                    <HistoryTableTbodyTd>
                                        <ManageButton>
                                            <SectionManageButton
                                                option={element.display_flag}
                                                post_uuid={element.post_uuid}
                                                handleReload={() => handleReloadControl()}
                                            />
                                        </ManageButton>
                                    </HistoryTableTbodyTd>
                                </HistoryTableTbodyTr>
                            );
                        })}
                    </HistoryTableTbody>
                </HistoryTable>
            </TableWrapper>
        </SectionHistoryWrapper>
    );
}
