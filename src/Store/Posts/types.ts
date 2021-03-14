import { DefaultStatus, PostListItem, PostDetailItem } from 'CommonTypes';
import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type PostsAction = ActionType<typeof actions>;
