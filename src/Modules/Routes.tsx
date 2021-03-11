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
    ScribblePage,
    BlogPage,
    MingunPage,
    LoginPage,
    LogoutPage,
    LoadingPage,
    NotFoundPage,
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
                    <Route path={['/posts', '/tags', '/scribble', '/blog', '/mingun']}>
                        <MainLayout LayouType={{ layoutColor: 'main' }}>
                            <Switch>
                                <Route path={process.env.PUBLIC_URL + '/mingun'} component={MingunPage} />
                                <Route path={process.env.PUBLIC_URL + '/blog'} component={BlogPage} />
                                <Route path={process.env.PUBLIC_URL + '/scribble'} component={ScribblePage} />
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
