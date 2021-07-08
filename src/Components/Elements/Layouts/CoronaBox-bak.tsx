import { useState, useEffect } from 'react';
import { CovidItem } from 'CommonTypes';
import { RootState } from 'StoreTypes';
import { useSelector } from 'react-redux';
import {
    CoronaBoxWrapper,
    CoronaTopBox,
    CoronaBoxText,
    CoronaDetailBox,
    CoronaCategoryText,
    CoronaCategoryCount,
    CoronaPreviousCount,
    CoronaDefcntText,
    CoronaTotalDefcntText,
    CoronaDefcnCount,
    CoronaTotalDefcntCount,
    CoronaTotalPreviousDefcntCount,
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
                <CoronaTopBox>
                    <CoronaBoxText>코로나 현황</CoronaBoxText>
                </CoronaTopBox>
                <CoronaDetailBox>
                    <CoronaDefcntText>확진환자:</CoronaDefcntText>
                    <CoronaDefcnCount>
                        {todayCovid?.incdec.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    </CoronaDefcnCount>
                    <CoronaPreviousCount>
                        {yesterdayCovid?.incdec.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    </CoronaPreviousCount>
                </CoronaDetailBox>
                <CoronaDetailBox>
                    <CoronaTotalDefcntText>전체 확진환자:</CoronaTotalDefcntText>
                    <CoronaTotalDefcntCount>
                        {todayCovid?.defcnt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    </CoronaTotalDefcntCount>
                    <CoronaTotalPreviousDefcntCount>
                        {yesterdayCovid?.defcnt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    </CoronaTotalPreviousDefcntCount>
                </CoronaDetailBox>
                <CoronaDetailBox>
                    <CoronaCategoryText>격리해제:</CoronaCategoryText>
                    <CoronaCategoryCount>
                        {todayCovid?.isolclearcnt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    </CoronaCategoryCount>
                    <CoronaPreviousCount>
                        {yesterdayCovid?.isolclearcnt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    </CoronaPreviousCount>
                </CoronaDetailBox>
                <CoronaDetailBox>
                    <CoronaCategoryText>사망자:</CoronaCategoryText>
                    <CoronaCategoryCount>
                        {todayCovid?.deathcnt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    </CoronaCategoryCount>
                    <CoronaPreviousCount>
                        {yesterdayCovid?.deathcnt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    </CoronaPreviousCount>
                </CoronaDetailBox>
            </CoronaBoxWrapper>
        </>
    );
}
