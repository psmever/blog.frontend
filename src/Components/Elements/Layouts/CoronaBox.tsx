import { useState, useEffect } from 'react';
import { CovidItem } from 'CommonTypes';
import { RootState } from 'StoreTypes';
import { useSelector } from 'react-redux';
import {
    CoronaBoxWrapper,
    StatusWrap,
    ListStatus,
    StatusBox,
    StatusTitle,
    StatusCount,
    ChangeCount,
    ScreenOut,
    StatusCountDiff,
} from '@Style/CoronaBoxStyles';
import { isEmpty } from '@Helper';

export default function CoronaBox() {
    const { specialtyCovidesCovides } = useSelector((store: RootState) => ({
        specialtyCovidesCovides: store.specialty.covides.covides,
    }));

    const [covidCnt, setCovidCnt] = useState<{
        status: boolean;
        todayDefCnt: string;
        totalDefCnt: string;
        todayClearCnt: string;
        totalClearCnt: string;
        todayDeathCnt: string;
        totalDeathCnt: string;
    }>({
        status: false,
        todayDefCnt: '',
        totalDefCnt: '',
        todayClearCnt: '',
        totalClearCnt: '',
        todayDeathCnt: '',
        totalDeathCnt: '',
    });

    useEffect(() => {
        const setCovidCntData = (covides: CovidItem[]) => {
            if (
                !isEmpty(covides[0].incdec) &&
                !isEmpty(covides[0].defcnt) &&
                !isEmpty(covides[0].isolclearcnt) &&
                !isEmpty(covides[0].deathcnt)
            ) {
                const clearcnt = Number(covides[0].isolclearcnt) - Number(covides[1].isolclearcnt);
                const deathcnt = Number(covides[0].deathcnt) - Number(covides[1].deathcnt);

                setCovidCnt({
                    status: true,
                    todayDefCnt: covides[0].incdec.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','),
                    totalDefCnt: covides[0].defcnt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','),
                    todayClearCnt: clearcnt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','),
                    totalClearCnt: covides[0].isolclearcnt.replace(/\B(?=(\d{3})+(?!\d))/g, ','),
                    todayDeathCnt: deathcnt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','),
                    totalDeathCnt: covides[0].deathcnt.replace(/\B(?=(\d{3})+(?!\d))/g, ','),
                });
            }
        };

        if (specialtyCovidesCovides.length === 2) {
            setCovidCntData(specialtyCovidesCovides);
        }
    }, [specialtyCovidesCovides]);

    return (
        <>
            <CoronaBoxWrapper>
                <StatusWrap>
                    <ListStatus>
                        <StatusBox hasLine={false}>
                            <StatusTitle>확진환자</StatusTitle>
                            <StatusCount color={`red`}>
                                <StatusCountDiff>{covidCnt.status && covidCnt.todayDefCnt}</StatusCountDiff>
                                <ScreenOut>명</ScreenOut>
                            </StatusCount>
                            <ChangeCount>{covidCnt.status && covidCnt.totalDefCnt}</ChangeCount>
                        </StatusBox>
                        <StatusBox hasLine={true}>
                            <StatusTitle>격리해제</StatusTitle>
                            <StatusCount color={`blue`}>
                                <StatusCountDiff>{covidCnt.status && covidCnt.todayClearCnt}</StatusCountDiff>
                                <ScreenOut>명</ScreenOut>
                            </StatusCount>
                            <ChangeCount>{covidCnt.status && covidCnt.totalClearCnt}</ChangeCount>
                        </StatusBox>
                        {/* <StatusBox>
                            <StatusTitle>검사 중</StatusTitle>
                            <StatusCount color={`black`}>
                                <StatusCountDiff>8,410</StatusCountDiff>
                                <ScreenOut>명</ScreenOut>
                            </StatusCount>
                            <ChangeCount>151,158</ChangeCount>
                        </StatusBox> */}
                        <StatusBox hasLine={true}>
                            <StatusTitle>사망자</StatusTitle>
                            <StatusCount color={`black`}>
                                <StatusCountDiff>{covidCnt.status && covidCnt.todayDeathCnt}</StatusCountDiff>
                                <ScreenOut>명</ScreenOut>
                            </StatusCount>
                            <ChangeCount>{covidCnt.status && covidCnt.totalDeathCnt}</ChangeCount>
                        </StatusBox>
                    </ListStatus>
                </StatusWrap>
            </CoronaBoxWrapper>
        </>
    );
}
