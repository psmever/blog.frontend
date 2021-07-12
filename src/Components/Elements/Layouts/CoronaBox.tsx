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
    StatusDate,
} from '@Style/CoronaBoxStyles';
import { isEmpty } from '@Helper';

export default function CoronaBox() {
    const { specialtyCovidesCovides } = useSelector((store: RootState) => ({
        specialtyCovidesCovides: store.specialty.covides,
    }));

    const [covidCnt, setCovidCnt] = useState<{
        status: boolean;
        statusDate: string;
        todayDefCnt: string;
        totalDefCnt: string;
        todayClearCnt: string;
        totalClearCnt: string;
        todayDeathCnt: string;
        totalDeathCnt: string;
    }>({
        status: false,
        statusDate: '',
        todayDefCnt: '',
        totalDefCnt: '',
        todayClearCnt: '',
        totalClearCnt: '',
        todayDeathCnt: '',
        totalDeathCnt: '',
    });

    useEffect(() => {
        const setCovidCntData = (covides: CovidItem) => {
            if (
                !isEmpty(covides.today.incdec) &&
                !isEmpty(covides.today.defcnt) &&
                !isEmpty(covides.today.isolclearcnt) &&
                !isEmpty(covides.today.deathcnt)
            ) {
                const clearcnt = Number(covides.today.isolclearcnt) - Number(covides.yesterday.isolclearcnt);
                const deathcnt = Number(covides.today.deathcnt) - Number(covides.yesterday.deathcnt);
                const tempStatusDate = covides.covid_date.replace(/[^0-9]/g, '');
                const statusDate = `${tempStatusDate.substr(4, 2)}.${tempStatusDate.substr(
                    6,
                    2
                )} ${tempStatusDate.substr(8, 2)}:00 기준`;

                setCovidCnt({
                    status: true,
                    statusDate: statusDate,
                    todayDefCnt: covides.today.incdec.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','),
                    totalDefCnt: covides.today.defcnt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','),
                    todayClearCnt: clearcnt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','),
                    totalClearCnt: covides.today.isolclearcnt.replace(/\B(?=(\d{3})+(?!\d))/g, ','),
                    todayDeathCnt: deathcnt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','),
                    totalDeathCnt: covides.today.deathcnt.replace(/\B(?=(\d{3})+(?!\d))/g, ','),
                });
            }
        };

        if (specialtyCovidesCovides) {
            setCovidCntData(specialtyCovidesCovides.covides);
        }
    }, [specialtyCovidesCovides]);

    return (
        <>
            <CoronaBoxWrapper>
                <StatusWrap>
                    <StatusDate>{covidCnt.status && covidCnt.statusDate}</StatusDate>
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
