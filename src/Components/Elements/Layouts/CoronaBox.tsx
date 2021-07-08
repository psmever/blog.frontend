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

export default function CoronaBox() {
    const { specialtyCovidesCovides } = useSelector((store: RootState) => ({
        specialtyCovidesCovides: store.specialty.covides.covides,
    }));

    const [todayCovid, setTodayCovid] = useState<CovidItem>();
    const [yesterdayCovid, setYesterdayCovid] = useState<CovidItem>();

    useEffect(() => {
        if (specialtyCovidesCovides.length === 2) {
            setTodayCovid(specialtyCovidesCovides[0]);
            setYesterdayCovid(specialtyCovidesCovides[1]);
        }
    }, [specialtyCovidesCovides]);

    return (
        <>
            <CoronaBoxWrapper>
                <StatusWrap>
                    <ListStatus>
                        <StatusBox>
                            <StatusTitle>확진환자</StatusTitle>
                            <StatusCount color={`red`}>
                                <StatusCountDiff>
                                    {todayCovid?.incdec.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                </StatusCountDiff>
                                <ScreenOut>명</ScreenOut>
                            </StatusCount>
                            <ChangeCount>
                                {todayCovid?.defcnt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                            </ChangeCount>
                        </StatusBox>
                        <StatusBox>
                            <StatusTitle>격리해제</StatusTitle>
                            <StatusCount color={`blue`}>
                                <StatusCountDiff>423</StatusCountDiff>
                                <ScreenOut>명</ScreenOut>
                            </StatusCount>
                            <ChangeCount>151,923</ChangeCount>
                        </StatusBox>
                        <StatusBox>
                            <StatusTitle>검사 중</StatusTitle>
                            <StatusCount color={`black`}>
                                <StatusCountDiff>8,410</StatusCountDiff>
                                <ScreenOut>명</ScreenOut>
                            </StatusCount>
                            <ChangeCount>151,158</ChangeCount>
                        </StatusBox>
                        <StatusBox>
                            <StatusTitle>사망자</StatusTitle>
                            <StatusCount color={`black`}>
                                <StatusCountDiff>
                                    {todayCovid?.deathcnt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                </StatusCountDiff>
                                <ScreenOut>명</ScreenOut>
                            </StatusCount>
                            <ChangeCount>
                                {todayCovid?.deathcnt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                            </ChangeCount>
                        </StatusBox>
                    </ListStatus>
                </StatusWrap>
            </CoronaBoxWrapper>
        </>
    );
}
