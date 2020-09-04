import React, { useEffect } from 'react';
import * as API from 'modules/API';
import * as Helper from 'lib/Helper';

export default function TestPage() {

    // TODO 로그인 토큰 리프레시 테스트 하고 프로젝트 진행~
    const loginRequest = async () => {
        console.debug('::login start::');
        const loginResult = await API.login();
        Helper.saveLoginToken(loginResult.data);
        console.debug('::login end::');
    }

    const loginRequest2 = async () => {
        console.debug('::testCheck start::');
        const loginResult = await API.testCheck();
        console.debug(loginResult);
        // Helper.saveLoginToken(loginResult.data);
        console.debug('::testCheck end::');
        // loginCheckRequest();
    }

    useEffect(() => {
        console.debug(':: TestPage Start :: ');

        // // Helper.removeLoginToken();
        // console.debug(Helper.getAccessToken() ? 'login True' : 'login False');

        if(Helper.isEmpty(Helper.getAccessToken()) === true) {
            loginRequest();
        } else {
            loginRequest2();
        }

    }, []);

    return (
        <>
            TestPage
        </>
    );
}