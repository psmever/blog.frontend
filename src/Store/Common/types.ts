import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type CommonAction = ActionType<typeof actions>;

export type Common = {
    codes: [];
};

export type CommonState = Common;
