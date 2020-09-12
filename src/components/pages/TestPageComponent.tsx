import React, { useEffect } from 'react';


export default function TestPage() {



    useEffect(() => {
        console.debug(':: TestPage Start :: ');
    }, []);

    return (
        <>
            TestPage
        </>

    );
}