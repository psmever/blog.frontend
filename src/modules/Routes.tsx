import React from "react";
import { Router, Route, Switch, Redirect, BrowserRouter } from "react-router-dom";
import * as BlogPages from "pages";

import MainLayoutComponents from 'components/MainLayoutComponents'

interface RootProps  {
    Routerhistory: any
};

const Routes = ({Routerhistory} : RootProps) => {

    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Router history={ Routerhistory }>
                <Switch>
                    <MainLayoutComponents>
                        <Route path={process.env.PUBLIC_URL + "/"} exact component={ BlogPages.MainPage } />
                        <Route path={process.env.PUBLIC_URL + "/about"} exact component={ BlogPages.AboutPage } />
                        <Route path={process.env.PUBLIC_URL + "/post"} exact component={ BlogPages.PostDetailPage } />
                        <Redirect path="*" to={process.env.PUBLIC_URL + "/"} />
                    </MainLayoutComponents>
                </Switch>
            </Router>
        </BrowserRouter>
    );
}

export default Routes;