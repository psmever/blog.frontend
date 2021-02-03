import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { MainLayout } from '@MainLayouts';
import { ManageLayout } from '@ManageLayouts';
import { TestLayout } from '@TestLayouts';
import {
    TestPage,
    DevPage,
    PostsMainPage,
    TagsPage,
    LatelyPage,
    BlogPage,
    InfomationsPage,
    LoginPage,
    LoadingPage,
} from '@Pages';

const Routes = ({ Routerhistory }: { Routerhistory: any }) => {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <ConnectedRouter history={Routerhistory}>
                <Switch>
                    <Route path={['/login']}>
                        <Switch>
                            <Route path={process.env.PUBLIC_URL + '/login'} exact={true} component={LoginPage} />
                        </Switch>
                    </Route>
                    <Route path={['/test', '/test/test', '/test/dev']}>
                        <TestLayout>
                            <Switch>
                                <Route path={process.env.PUBLIC_URL + '/test/dev'} exact={true} component={DevPage} />
                                <Route path={process.env.PUBLIC_URL + '/test/test'} exact={true} component={TestPage} />
                                <Route
                                    path={process.env.PUBLIC_URL + '/test/loading'}
                                    exact={true}
                                    component={LoadingPage}
                                />
                            </Switch>
                        </TestLayout>
                    </Route>
                    <Route path={['/manage']}>
                        <ManageLayout>
                            <Switch>
                                <Route
                                    path={process.env.PUBLIC_URL + '/manage'}
                                    exact={true}
                                    component={PostsMainPage}
                                />
                            </Switch>
                        </ManageLayout>
                    </Route>
                    <Route path={['/posts', '/tags', '/lately', '/blogs', '/infomations']}>
                        <MainLayout>
                            <Switch>
                                <Route
                                    path={process.env.PUBLIC_URL + '/infomations'}
                                    exact={true}
                                    component={InfomationsPage}
                                />
                                <Route path={process.env.PUBLIC_URL + '/blogs'} exact={true} component={BlogPage} />
                                <Route path={process.env.PUBLIC_URL + '/lately'} exact={true} component={LatelyPage} />
                                <Route path={process.env.PUBLIC_URL + '/tags'} exact={true} component={TagsPage} />
                                <Route
                                    path={process.env.PUBLIC_URL + '/posts'}
                                    exact={true}
                                    component={PostsMainPage}
                                />
                            </Switch>
                        </MainLayout>
                    </Route>
                </Switch>
            </ConnectedRouter>
        </BrowserRouter>
    );
};

export default Routes;

{
    /* <BrowserRouter basename={process.env.PUBLIC_URL}>
<Switch>
    <MainLayout>
        <Route exact path="/" component={Pages.MainPage} />
        <Route path={process.env.PUBLIC_URL + '/infomations'} exact={true} component={InfomationsPage} />
        <Route path={process.env.PUBLIC_URL + '/blogs'} exact={true} component={BlogPage} />
        <Route path={process.env.PUBLIC_URL + '/lately'} exact={true} component={LatelyPage} />
        <Route path={process.env.PUBLIC_URL + '/tags'} exact={true} component={TagsPage} />
        <Route path={process.env.PUBLIC_URL + '/posts'} exact={true} component={PostsMainPage} />
        <Redirect path="*" to="/pages" />
    </MainLayout>
    <ManageLayout>
        <Route path={process.env.PUBLIC_URL + '/manage'} exact={true} component={InfomationsPage} />
    </ManageLayout>
    <Route exact path={process.env.PUBLIC_URL + "/"} render={() => (<Redirect to="/pages" />)} />
</Switch>
</BrowserRouter> */
}

{
    /* <Route path={process.env.PUBLIC_URL + '/test/test'} exact={true} component={TestPage} />
<Route path={process.env.PUBLIC_URL + '/test/dev'} exact={true} component={DevPage} />
<Route path={process.env.PUBLIC_URL + '/layout'} exact={true} component={DefaultLayoutComponents} />
<Route path={process.env.PUBLIC_URL + '/test/layout'} exact={true} component={TestLayoutPage} />
<Route path={process.env.PUBLIC_URL + '/admin/login'} exact={true} component={Pages.AdminLoginPage} />
<Route path={process.env.PUBLIC_URL + '/admin/logout'} exact={true} component={Pages.AdminLogoutPage} />
<Route path={process.env.PUBLIC_URL + '/admin/write'} exact={true} component={Pages.AdminWritePage} />
<Route path={process.env.PUBLIC_URL + '/admin/:post_uuid/edit'} exact={true} component={Pages.AdminWritePage} /> */
}
