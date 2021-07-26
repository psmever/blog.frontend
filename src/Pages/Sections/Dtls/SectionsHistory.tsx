import { useEffect } from 'react';
import { RootState } from 'StoreTypes';
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
} from '@Style/SectionsHistorysStyles';
import { useSelector } from 'react-redux';

export default function SectionsHistory() {
    // const params = useParams<{
    //     section_gubun: string;
    // }>();
    // const dispatch = useDispatch();
    const history = useHistory();
    const { appLoginInit, appLoading, appLoginState } = useSelector((store: RootState) => ({
        appLoading: store.app.loading,
        appLoginState: store.app.loginState,
        appLoginInit: store.app.appInit,
    }));

    useEffect(() => {
        console.debug({
            appLoginInit: appLoginInit,
            appLoading: appLoading,
            appLoginState: appLoginState,
        });

        // TODO: 로그인체크 로직 변경. 로딩이 끝난후 체크.
        if (appLoginInit === true) {
            if (appLoginState === false) {
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

    return (
        <SectionHistoryWrapper>
            <TitleWrapper>
                <SectionTitle>리스트 타이틀.</SectionTitle>
            </TitleWrapper>
            <TableWrapper>
                <HistoryTable>
                    <HistoryTableHead>
                        <HistoryTableTr>
                            <HistoryTableTheadTh>uuid</HistoryTableTheadTh>
                            <HistoryTableTheadTh>제목</HistoryTableTheadTh>
                            <HistoryTableTheadTh>상태</HistoryTableTheadTh>
                            <HistoryTableTheadTh>등록일</HistoryTableTheadTh>
                            <HistoryTableTheadTh>관리</HistoryTableTheadTh>
                        </HistoryTableTr>
                    </HistoryTableHead>
                    <HistoryTableTbody>
                        <HistoryTableTbodyTr>
                            <HistoryTableTbodyTd>Tbody : 1</HistoryTableTbodyTd>
                            <HistoryTableTbodyTd>Tbody : 2</HistoryTableTbodyTd>
                            <HistoryTableTbodyTd>Tbody : 3</HistoryTableTbodyTd>
                            <HistoryTableTbodyTd>Tbody : 4</HistoryTableTbodyTd>
                            <HistoryTableTbodyTd>Tbody : 5</HistoryTableTbodyTd>
                        </HistoryTableTbodyTr>
                        <HistoryTableTbodyTr>
                            <HistoryTableTbodyTd>Tbody : 1</HistoryTableTbodyTd>
                            <HistoryTableTbodyTd>Tbody : 2</HistoryTableTbodyTd>
                            <HistoryTableTbodyTd>Tbody : 3</HistoryTableTbodyTd>
                            <HistoryTableTbodyTd>Tbody : 4</HistoryTableTbodyTd>
                            <HistoryTableTbodyTd>Tbody : 5</HistoryTableTbodyTd>
                        </HistoryTableTbodyTr>
                    </HistoryTableTbody>
                </HistoryTable>
            </TableWrapper>
        </SectionHistoryWrapper>
    );
}
