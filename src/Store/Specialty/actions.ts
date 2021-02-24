import { SagaTypes } from '@Store/reduxActiontTypes';

const { GET_WEATHER } = SagaTypes;

// 날씨 정보.
export const getWeather = () => {
    return { type: GET_WEATHER };
};
