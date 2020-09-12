import { SagaTypes }  from 'modules/reduxActiontTypes';

export const baseAction = () => {
    return {
        type: SagaTypes.BASE_START
    };
}