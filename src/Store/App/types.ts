import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type AppAction = ActionType<typeof actions>;
