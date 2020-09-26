import { SagaTypes }  from 'modules/reduxActiontTypes';

export const getBaseDataAction = () => {
    return {
        type: SagaTypes.BASE_REQUEST_START
    };
}

export const startBaseGLobalLoadingAction = () => {
    return {
        type: SagaTypes.BASE_GLOBAL_LOADING_START
    };
}

export const endBaseGLobalLoadingAction = () => {
    return {
        type: SagaTypes.BASE_GLOBAL_LOADING_END
    };
}