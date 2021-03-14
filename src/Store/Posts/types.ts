import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type PostsAction = ActionType<typeof actions>;

export type Posts = {
    list: {
        pageNumber: 1;
        state: 'idle';
        message: '';
        posts: [];
    };
    detail: {
        slug_title: '';
        state: 'idle';
        message: '';
        info: [];
    };
};

export type PostsState = Posts;
