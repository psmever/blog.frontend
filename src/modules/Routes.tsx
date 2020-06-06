import React from "react";
import { Router, Route, Switch, Redirect, BrowserRouter } from "react-router-dom";
import {
    MainPage,
    DefaultPage,
    PostPage,
    PostListPage,
    AboutPage,
} from "pages";

interface RootProps  {
    Routerhistory: any
};

const Routes = ({Routerhistory} : RootProps) => {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Router history={ Routerhistory }>
                <Switch>
                    <Route path={process.env.PUBLIC_URL + "/"} exact={ true } component={ MainPage } />
                    <Route path={process.env.PUBLIC_URL + "/main"} exact={ true } component={ MainPage } />
                    <Route path={process.env.PUBLIC_URL + "/post"} exact={ true } component={ PostPage } />
                    <Route path={process.env.PUBLIC_URL + "/post_list"} exact={ true } component={ PostListPage } />
                    <Route path={process.env.PUBLIC_URL + "/about"} exact={ true } component={ AboutPage } />
                    <Route path={process.env.PUBLIC_URL + "/default"} exact={ true } component={ DefaultPage } />
                    <Redirect path="*" to={process.env.PUBLIC_URL + "/main"} />
                </Switch>
            </Router>
        </BrowserRouter>
    );
}

export default Routes;