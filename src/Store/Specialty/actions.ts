import { deprecated } from 'typesafe-actions';
const { createStandardAction } = deprecated;
// Specialty
export const GET_WEATHER = 'specialty/GET_WEATHER';
export const GET_WEATHER_SUCCESS = 'specialty/GET_WEATHER_SUCCESS';
export const GET_WEATHER_FAILURE = 'specialty/GET_WEATHER_FAILURE';

export const GET_COVID = 'specialty/GET_COVID';
export const GET_COVID_SUCCESS = 'specialty/GET_COVID_SUCCESS';
export const GET_COVID_FAILURE = 'specialty/GET_COVID_FAILURE';

// 날씨 정보.
export const getWeathers = createStandardAction(GET_WEATHER)();

// 코로나 정보.
export const getCovids = createStandardAction(GET_COVID)();
