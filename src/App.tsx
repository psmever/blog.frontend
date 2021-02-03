import React from 'react';
import Routes from '@Modules/Routes';
import GlobalStyles from '@Style/GlobalStyles';
import RootComponent from '@Src/Components/RootComponent';

import { useRoot } from '@Hooks';

function App() {
    const { RootLoading } = useRoot();

    return (
        <>
            <GlobalStyles />

            {(function () {
                if (RootLoading === true) {
                    return <RootComponent />;
                } else {
                    return <Routes />;
                }
            })()}
        </>
    );
}

export default App;
