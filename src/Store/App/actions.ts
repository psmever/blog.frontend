import { SagaTypes } from '@Store/reduxActiontTypes';

const { CHECK_SERVER_START } = SagaTypes;

// 서버 기본 체크.
export const checkServerAction = () => {
    return { type: CHECK_SERVER_START };
};
