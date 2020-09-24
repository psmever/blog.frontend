import React, { useEffect } from "react";
import { Router, Route, Switch, BrowserRouter } from "react-router-dom";
import MainLayoutComponents from 'components/MainLayoutComponents'
import * as Pages from "components/pages";
import useBase from "hooks/useBase";
import { BodyLoading } from 'components/elements';
interface RootProps  {
    Routerhistory: any
};

const Routes = ({Routerhistory} : RootProps) => {

    const {
        startServerCheck,
        baseLoading
    } = useBase();

    useEffect(() => {
        startServerCheck();
    // eslint-disable-next-line
    }, []);

    return (
        <BrowserRouter basename={process.env.PUBLIC_URL + "/pages"}>
            <Router history={ Routerhistory }>
                { baseLoading === true
                ?
                    <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <BodyLoading/>
                    </div>
                :
                <Switch>

                    <Route path={process.env.PUBLIC_URL + "/admin/login"} exact={true} component={ Pages.AdminLoginPage } />
                    <Route path={process.env.PUBLIC_URL + "/admin/write"} exact={true} component={ Pages.AdminWritePage } />
                    <Route path={process.env.PUBLIC_URL + "/admin/:post_uuid/edit"} exact={true} component={ Pages.AdminWritePage } />

                    <MainLayoutComponents>
                        <Route exact path="/" component={ Pages.MainPage }/>
                        <Route path={process.env.PUBLIC_URL + "/test"} exact={true} component={ Pages.TestPage } />
                        <Route path={process.env.PUBLIC_URL + "/pages"} exact={true} component={ Pages.MainPage } />
                        <Route path={process.env.PUBLIC_URL + "/pages/about"} exact={true} component={ Pages.AboutPage } />
                        <Route path={process.env.PUBLIC_URL + "/pages/post"} exact={true} component={ Pages.PostDetailPage } />
                        {/* <Redirect path="*" to="/pages" /> */}
                    </MainLayoutComponents>
                    {/* <Route exact path={process.env.PUBLIC_URL + "/"} render={() => (<Redirect to="/pages" />)} /> */}

                </Switch>
                }

            </Router>
        </BrowserRouter>
    );
}

export default Routes;