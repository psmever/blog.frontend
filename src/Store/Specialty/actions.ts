import { SagaTypes } from '@Store/reduxActiontTypes';

const { GET_WEATHER, GET_COVID } = SagaTypes;

// 날씨 정보.
export const getWeathers = () => {
    return { type: GET_WEATHER };
};

export const getCovids = () => {
    return { type: GET_COVID };
};
