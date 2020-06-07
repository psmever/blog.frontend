import React from "react";
import { Router, Route, Switch, BrowserRouter } from "react-router-dom";

import MainLayoutComponents from 'components/MainLayoutComponents'
import * as Pages from "components/pages";

interface RootProps  {
    Routerhistory: any
};

const Routes = ({Routerhistory} : RootProps) => {

    return (
        <BrowserRouter basename={process.env.PUBLIC_URL + "/"}>
            <Router history={ Routerhistory }>
                <Switch>
                    <MainLayoutComponents>
                        <Route path={process.env.PUBLIC_URL + "/"} exact={true} component={ Pages.MainPage } />
                        <Route path={process.env.PUBLIC_URL + "/about"} exact={true} component={ Pages.AboutPage } />
                        <Route path={process.env.PUBLIC_URL + "/post"} exact={true} component={ Pages.PostDetailPage } />
                    </MainLayoutComponents>
                </Switch>
            </Router>
        </BrowserRouter>
    );
}

export default Routes;