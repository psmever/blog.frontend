/* eslint-disable */
import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { MainLayout } from '@MainLayouts';
import { TestPage, DevPage, PostsMainPage, TagsPage, LatelyPage, BlogPage, InfomationsPage } from '@Pages';

const Routes = () => {

    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Switch>
                <Route path={process.env.PUBLIC_URL + '/test/test'} exact={true} component={TestPage} />
                <Route path={process.env.PUBLIC_URL + '/test/dev'} exact={true} component={DevPage} />
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
                    <Route path={process.env.PUBLIC_URL + '/infomations'} exact={true} component={InfomationsPage} />
                    <Route path={process.env.PUBLIC_URL + '/blogs'} exact={true} component={BlogPage} />
                    <Route path={process.env.PUBLIC_URL + '/lately'} exact={true} component={LatelyPage} />
                    <Route path={process.env.PUBLIC_URL + '/tags'} exact={true} component={TagsPage} />
                    <Route path={process.env.PUBLIC_URL + '/posts'} exact={true} component={PostsMainPage} />
                    {/* <Redirect path="*" to="/pages" /> */}
                </MainLayout>
                {/* <Route exact path={process.env.PUBLIC_URL + "/"} render={() => (<Redirect to="/pages" />)} /> */}
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
