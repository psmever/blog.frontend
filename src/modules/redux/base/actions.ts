import { SagaTypes }  from 'modules/reduxActiontTypes';

export const getBaseDataAction = () => {
    return {
        type: SagaTypes.BASE_REQUEST_START
    };
}