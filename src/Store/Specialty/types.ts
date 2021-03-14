import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type SpecialtyAction = ActionType<typeof actions>;

export type Specialty = {
    weathers: {
        state: 'idle';
        message: '';
        weathers: [];
    };
    covides: {
        state: 'idle';
        message: '';
        covides: [];
    };
};

export type SpecialtyState = Specialty;
