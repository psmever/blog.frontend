import React, { useEffect } from 'react';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { MainLayout } from '@MainLayouts';
import { ViewLayout } from '@ViewLayouts';
import { ManageLayout } from '@ManageLayouts';
import { TestLayout } from '@TestLayouts';
import {
    TestPage,
    DevPage,
    PostsPage,
    PostsDetailPage,
    TagsPage,
    LatelyPage,
    BlogPage,
    InfomationsPage,
    LoginPage,
    LogoutPage,
    LoadingPage,
    NotFoundPage,
} from '@Pages';

// FIXME: 2021-02-05 00:57  404 페이지, 서버 에러 페이지 퍼블리싱.
// TODO: 2021-03-05 00:07 글 뷰 페이지 레이아웃 다르게 하기. 퍼블리싱
const Routes = ({ Routerhistory }: { Routerhistory: any }) => {
    useEffect(() => {
        console.log(Routerhistory);
    }, [Routerhistory]);
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <ConnectedRouter history={Routerhistory}>
                <Switch>
                    <Route path={['/login', '/logout']}>
                        <Switch>
                            <Route path={process.env.PUBLIC_URL + '/logout'} component={LogoutPage} />
                            <Route path={process.env.PUBLIC_URL + '/login'} component={LoginPage} />
                        </Switch>
                    </Route>
                    <Route path={['/test', '/test/test', '/test/dev']}>
                        <TestLayout>
                            <Switch>
                                <Route path={process.env.PUBLIC_URL + '/test/dev'} component={DevPage} />
                                <Route path={process.env.PUBLIC_URL + '/test/test'} component={TestPage} />
                                <Route path={process.env.PUBLIC_URL + '/test/loading'} component={LoadingPage} />
                            </Switch>
                        </TestLayout>
                    </Route>
                    <Route path={['/manage']}>
                        <ManageLayout>
                            <Switch>
                                <Route path={process.env.PUBLIC_URL + '/manage'} component={PostsPage} />
                            </Switch>
                        </ManageLayout>
                    </Route>
                    <Route path={['/post/:slug_title/detail']}>
                        <ViewLayout LayouType={{ layoutColor: 'view' }}>
                            <Switch>
                                <Route
                                    path={process.env.PUBLIC_URL + '/post/:slug_title/detail'}
                                    component={PostsDetailPage}
                                />
                            </Switch>
                        </ViewLayout>
                    </Route>
                    <Route path={['/posts', '/tags', '/lately', '/blogs', '/infomations']}>
                        <MainLayout LayouType={{ layoutColor: 'main' }}>
                            <Switch>
                                <Route path={process.env.PUBLIC_URL + '/infomations'} component={InfomationsPage} />
                                <Route path={process.env.PUBLIC_URL + '/blogs'} component={BlogPage} />
                                <Route path={process.env.PUBLIC_URL + '/lately'} component={LatelyPage} />
                                <Route path={process.env.PUBLIC_URL + '/tags'} component={TagsPage} />
                                <Route path={process.env.PUBLIC_URL + '/posts'} component={PostsPage} />
                                <Route path={process.env.PUBLIC_URL + '/'} component={PostsPage} exact />
                            </Switch>
                        </MainLayout>
                    </Route>
                    <Redirect path="/" to="/posts" exact />
                    <Route component={NotFoundPage} />
                </Switch>
            </ConnectedRouter>
        </BrowserRouter>
    );
};

export default Routes;
