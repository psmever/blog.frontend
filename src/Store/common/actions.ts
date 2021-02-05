import { SagaTypes } from '@Module/reduxActiontTypes';

const { CHECK_SERVER_START } = SagaTypes;

export const baseServerCheck = () => {
    return { type: CHECK_SERVER_START };
};
