import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import MainLayoutComponents from 'components/MainLayoutComponents';
import * as Pages from 'components/pages';
import useBase from 'hooks/useBase';
import { BodyLoading } from 'components/elements';

interface RootProps {
    Routerhistory: any;
}

const Routes = ({ Routerhistory }: RootProps) => {
    const { baseLoading } = useBase();

    return (
        <BrowserRouter basename={process.env.PUBLIC_URL + '/pages'}>
            {baseLoading === 'success' ? (
                <ConnectedRouter history={Routerhistory}>
                    <Switch>
                        <Route
                            path={process.env.PUBLIC_URL + '/admin/login'}
                            exact={true}
                            component={Pages.AdminLoginPage}
                        />
                        <Route
                            path={process.env.PUBLIC_URL + '/admin/logout'}
                            exact={true}
                            component={Pages.AdminLogoutPage}
                        />
                        <Route
                            path={process.env.PUBLIC_URL + '/admin/write'}
                            exact={true}
                            component={Pages.AdminWritePage}
                        />
                        <Route
                            path={process.env.PUBLIC_URL + '/admin/:post_uuid/edit'}
                            exact={true}
                            component={Pages.AdminWritePage}
                        />
                        <MainLayoutComponents>
                            <Route exact path="/" component={Pages.MainPage} />
                            <Route path={process.env.PUBLIC_URL + '/pages'} exact={true} component={Pages.MainPage} />
                            <Route
                                path={process.env.PUBLIC_URL + '/pages/about'}
                                exact={true}
                                component={Pages.AboutPage}
                            />
                            <Route
                                path={process.env.PUBLIC_URL + '/pages/post/detail/:slug_title'}
                                exact={true}
                                component={Pages.PostDetailPage}
                            />
                            <Route
                                path={process.env.PUBLIC_URL + '/pages/tags'}
                                exact={true}
                                component={Pages.TagPage}
                            />
                            <Route
                                path={process.env.PUBLIC_URL + '/pages/tags/:search_tag_item/search'}
                                exact={true}
                                component={Pages.TagPage}
                            />
                            {/* <Redirect path="*" to="/pages" /> */}
                        </MainLayoutComponents>
                        {/* <Route exact path={process.env.PUBLIC_URL + "/"} render={() => (<Redirect to="/pages" />)} /> */}
                    </Switch>
                </ConnectedRouter>
            ) : (
                <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <BodyLoading />
                </div>
            )}
        </BrowserRouter>
    );
};

export default Routes;
