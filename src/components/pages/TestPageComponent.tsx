import React, { useEffect } from 'react';
import * as API from 'modules/API';

export default function TestPage() {

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