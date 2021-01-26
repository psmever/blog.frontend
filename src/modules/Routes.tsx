/* eslint-disable */
import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { MainLayout } from '@Layouts';
import { TestPage, DevPage, PostsMainPage, MainContentPage } from '@Pages';

const Routes = () => {

    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Switch>
                {/* <Route path={process.env.PUBLIC_URL + '/default'} exact={true} component={DefaultPage} /> */}
                <Route path={process.env.PUBLIC_URL + '/test/test'} exact={true} component={TestPage} />
                <Route path={process.env.PUBLIC_URL + '/test/dev'} exact={true} component={DevPage} />
                <Route path={process.env.PUBLIC_URL + '/test/main'} exact={true} component={MainLayout} />
                <Route path={process.env.PUBLIC_URL + '/test/center'} exact={true} component={MainLayout} />
                <Route path={process.env.PUBLIC_URL + '/test/posts'} exact={true} component={MainContentPage} />
                {/* <Route path={process.env.PUBLIC_URL + '/layout'} exact={true} component={DefaultLayoutComponents} /> */}
                {/* <Route path={process.env.PUBLIC_URL + '/test/layout'} exact={true} component={TestLayoutPage} /> */}
                {/* <Route path={process.env.PUBLIC_URL + '/admin/login'} exact={true} component={Pages.AdminLoginPage} />
                <Route path={process.env.PUBLIC_URL + '/admin/logout'} exact={true} component={Pages.AdminLogoutPage} />
                <Route path={process.env.PUBLIC_URL + '/admin/write'} exact={true} component={Pages.AdminWritePage} />
                <Route path={process.env.PUBLIC_URL + '/admin/:post_uuid/edit'} exact={true} component={Pages.AdminWritePage} /> */}
                <MainLayout>
                    {/* <Route exact path="/" component={Pages.MainPage} />
                    <Route path={process.env.PUBLIC_URL + '/pages'} exact={true} component={Pages.MainPage} />
                    <Route path={process.env.PUBLIC_URL + '/pages/about'} exact={true} component={Pages.AboutPage} />
                    <Route path={process.env.PUBLIC_URL + '/pages/post/detail/:slug_title'} exact={true} component={Pages.PostDetailPage} />
                    <Route path={process.env.PUBLIC_URL + '/pages/tags'} exact={true} component={Pages.TagPage} />
                    <Route path={process.env.PUBLIC_URL + '/pages/tags/:search_tag_item/search'} exact={true} component={Pages.TagPage} /> */}
                    <Route path={process.env.PUBLIC_URL + '/posts'} exact={true} component={PostsMainPage} />
                    {/* <Redirect path="*" to="/pages" /> */}
                </MainLayout>
                {/* <Route exact path={process.env.PUBLIC_URL + "/"} render={() => (<Redirect to="/pages" />)} /> */}
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
