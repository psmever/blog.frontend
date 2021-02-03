import { SagaTypes } from '@Module/reduxActiontTypes';

const { BASE_REQUEST_START, BASE_GLOBAL_LOADING_START, BASE_GLOBAL_LOADING_END } = SagaTypes;

export const getBaseDataAction = () => {
    return {
        type: BASE_REQUEST_START,
    };
};

export const startBaseGLobalLoadingAction = () => {
    return {
        type: BASE_GLOBAL_LOADING_START,
    };
};

export const endBaseGLobalLoadingAction = () => {
    return {
        type: BASE_GLOBAL_LOADING_END,
    };
};
