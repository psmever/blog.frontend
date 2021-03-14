import { createReducer } from 'typesafe-actions';
import { SagaAction } from 'CommonTypes';
import produce from 'immer';
import { WeatherResult, CovidResult } from 'ServiceTypes';
import { SpecialtyState } from 'StoreTypes';
import { SagaTypes } from '@Store/reduxActiontTypes';
const {
    GET_WEATHER,
    GET_WEATHER_SUCCESS,
    GET_WEATHER_FAILURE,
    GET_COVID,
    GET_COVID_SUCCESS,
    GET_COVID_FAILURE,
} = SagaTypes;

// 스토어 init.
const initialState: SpecialtyState = {
    weathers: {
        state: 'idle',
        message: '',
        weathers: [],
    },
    covides: {
        state: 'idle',
        message: '',
        covides: [],
    },
};

export const SpecialtySagaReducer = createReducer<SpecialtyState>(initialState, {
    // 날씨 가지고 오기 시작.
    [GET_WEATHER]: (state: SpecialtyState) => {
        return produce(state, draft => {
            draft.weathers.state = 'loading';
        });
    },
    [GET_WEATHER_SUCCESS]: (state: SpecialtyState, action: SagaAction<{ weathers: WeatherResult }>) => {
        return produce(state, draft => {
            draft.weathers.state = 'success';
            draft.weathers.weathers = action.payload.weathers;
            draft.weathers.message = '';
        });
    },
    [GET_WEATHER_FAILURE]: (state: SpecialtyState, action: SagaAction<{ message: string }>) => {
        return produce(state, draft => {
            draft.weathers.state = 'failure';
            draft.weathers.weathers = initialState.weathers.weathers;
            draft.weathers.message = action.payload.message;
        });
    },

    // Covid 정보 가지고 오기.
    [GET_COVID]: (state: SpecialtyState) => {
        return produce(state, draft => {
            draft.covides.state = 'loading';
        });
    },
    [GET_COVID_SUCCESS]: (state: SpecialtyState, action: SagaAction<{ covids: CovidResult }>) => {
        return produce(state, draft => {
            draft.covides.state = 'success';
            draft.covides.covides = action.payload.covids;
            draft.covides.message = '';
        });
    },
    [GET_COVID_FAILURE]: (state: SpecialtyState, action: SagaAction<{ message: string }>) => {
        return produce(state, draft => {
            draft.covides.state = 'failure';
            draft.covides.message = action.payload.message;
            draft.covides.covides = initialState.covides.covides;
        });
    },
});
export default SpecialtySagaReducer;
