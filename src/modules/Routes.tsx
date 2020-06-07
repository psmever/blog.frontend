import React from "react";
import { Router, Route, Switch, Redirect, BrowserRouter } from "react-router-dom";
import {
    TemplateMainPage,
    TemplateDefaultPage,
    TemplatePostPage,
    TemplatePostListPage,
    TemplateAboutPage,
} from "pages";

interface RootProps  {
    Routerhistory: any
};

const Routes = ({Routerhistory} : RootProps) => {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Router history={ Routerhistory }>
                <Switch>
                    <Route path={process.env.PUBLIC_URL + "/"} exact={ true } component={ TemplateMainPage } />
                    <Route path={process.env.PUBLIC_URL + "/template/main"} exact={ true } component={ TemplateMainPage } />
                    <Route path={process.env.PUBLIC_URL + "/template/post"} exact={ true } component={ TemplatePostPage } />
                    <Route path={process.env.PUBLIC_URL + "/template/post_list"} exact={ true } component={ TemplatePostListPage } />
                    <Route path={process.env.PUBLIC_URL + "/template/about"} exact={ true } component={ TemplateAboutPage } />
                    <Route path={process.env.PUBLIC_URL + "/template/default"} exact={ true } component={ TemplateDefaultPage } />
                    <Redirect path="*" to={process.env.PUBLIC_URL + "/main"} />
                </Switch>
            </Router>
        </BrowserRouter>
    );
}

export default Routes;