import { createReducer } from 'typesafe-actions';
import produce from 'immer';
import { WeatherResult } from 'ServiceTypes';
import { SpecialtyState } from 'StoreTypes';
import { SagaTypes, SagaAction } from '@Store/reduxActiontTypes';
const { GET_WEATHER, GET_WEATHER_SUCCESS, GET_WEATHER_FAILURE } = SagaTypes;

// 스토어 init.
const initialState: SpecialtyState = {
    weather: {
        state: 'idle',
        message: '',
        weathers: [],
    },
};

export const SpecialtySagaReducer = createReducer<SpecialtyState>(initialState, {
    // 날씨 가지고 오기 시작.
    [GET_WEATHER]: (state: SpecialtyState) => {
        return produce(state, draft => {
            draft.weather.state = 'loading';
        });
    },
    [GET_WEATHER_SUCCESS]: (state: SpecialtyState, action: SagaAction<{ weathers: WeatherResult }>) => {
        return produce(state, draft => {
            draft.weather.state = 'success';
            draft.weather.weathers = action.payload.weathers;
        });
    },
    [GET_WEATHER_FAILURE]: (state: SpecialtyState, action: SagaAction<{ message: string }>) => {
        return produce(state, draft => {
            draft.weather.state = 'failure';
            draft.weather.message = action.payload.message;
        });
    },
});
export default SpecialtySagaReducer;
