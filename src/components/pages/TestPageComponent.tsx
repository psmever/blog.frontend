import React, { useEffect } from 'react';
import * as API from 'modules/API';

export default function TestPage() {

    // TODO 로그인 토큰 리프레시 테스트 하고 프로젝트 진행~
    const testRequest = async () => {

        const result = await API.login();

        console.debug(result);
    }

    useEffect(() => {
        console.debug(':: TestPage Start :: ');


        testRequest()


    }, []);

    return (
        <>
            TestPage
        </>
    );
}