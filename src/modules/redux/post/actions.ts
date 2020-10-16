import { SagaTypes }  from 'modules/reduxActiontTypes';

// 글 리스트 가지고 오기.
export const postGetListAction = (pageNumber: number) => {
    return {
        type: SagaTypes.POST_LIST_REQUEST_START,
        pageNumber: pageNumber,
    }
}