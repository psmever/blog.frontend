import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { WriteLayout, MainLayout, ViewLayout, ManageLayout, TestLayout } from '@Layouts';

import {
    TestPage,
    DevPage,
    PostsPage,
    PostsDetailPage,
    TagsPage,
    LoginPage,
    LogoutPage,
    LoadingPage,
    NotFoundPage,
    PostsWritePage,
    SectionsWritePage,
    SectionsPage,
} from '@Pages';

// FIXME: 2021-02-05 00:57  404 페이지, 서버 에러 페이지 퍼블리싱.
const Routes = ({ Routerhistory }: { Routerhistory: any }) => {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <ConnectedRouter history={Routerhistory}>
                <Switch>
                    <Route path={['/test', '/test/test', '/test/dev']}>
                        <TestLayout>
                            <Switch>
                                <Route path={process.env.PUBLIC_URL + '/test/dev'} component={DevPage} />
                                <Route path={process.env.PUBLIC_URL + '/test/test'} component={TestPage} />
                                <Route path={process.env.PUBLIC_URL + '/test/loading'} component={LoadingPage} />
                            </Switch>
                        </TestLayout>
                    </Route>
                    <Route path={['/manage', '/login', '/logout']}>
                        <ManageLayout LayouType={{ layoutColor: 'view' }}>
                            <Switch>
                                <Route path={process.env.PUBLIC_URL + '/manage'} component={PostsPage} />
                                <Route path={process.env.PUBLIC_URL + '/logout'} component={LogoutPage} />
                                <Route path={process.env.PUBLIC_URL + '/login'} component={LoginPage} />
                            </Switch>
                        </ManageLayout>
                    </Route>
                    <Route path={['/posts/:slug_title/detail', '/posts/detail']}>
                        <ViewLayout LayouType={{ layoutColor: 'view' }}>
                            <Switch>
                                <Route
                                    path={process.env.PUBLIC_URL + '/posts/:slug_title/detail'}
                                    component={PostsDetailPage}
                                />
                            </Switch>
                        </ViewLayout>
                    </Route>
                    <Route path={['/sections/:section_gubun/write']}>
                        <WriteLayout LayouType={{ layoutColor: 'view' }}>
                            <Switch>
                                <Route
                                    path={process.env.PUBLIC_URL + '/sections/:section_gubun/write'}
                                    component={SectionsWritePage}
                                />
                            </Switch>
                        </WriteLayout>
                    </Route>
                    <Route path={['/posts/write', '/posts/:post_uuid/:write_mode']}>
                        <WriteLayout LayouType={{ layoutColor: 'view' }}>
                            <Switch>
                                <Route
                                    path={process.env.PUBLIC_URL + '/posts/:post_uuid/:write_mode'}
                                    component={PostsWritePage}
                                />
                                <Route path={process.env.PUBLIC_URL + '/posts/write'} component={PostsWritePage} />
                            </Switch>
                        </WriteLayout>
                    </Route>
                    <Route path={['/posts', '/sections/:section_gubun', '/tags']}>
                        <MainLayout LayouType={{ layoutColor: 'main' }}>
                            <Switch>
                                <Route
                                    path={process.env.PUBLIC_URL + '/sections/:section_gubun'}
                                    component={SectionsPage}
                                />
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
