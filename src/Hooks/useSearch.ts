import { useReducer } from 'react';
import { DefaultStatus, PostListItem } from 'CommonTypes';
import { postSearch } from '@API';

type State = {
    state: DefaultStatus;
    payload: PostListItem[] | null;
    message: string;
    error: Error | null;
};

function searchReducer(state: any, action: any): State {
    switch (action.type) {
        case 'LOADING':
            return {
                state: 'loading',
                payload: null,
                message: '',
                error: null,
            };
        case 'SUCCESS':
            return {
                state: 'success',
                payload: action.payload,
                message: action.message,
                error: null,
            };
        case 'ERROR':
            return {
                state: 'failure',
                payload: null,
                message: action.message ? action.message : '에러가 발생했습니다.',
                error: action.error,
            };
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}

export default function useSearch({ searchGubun }: { searchGubun: 'posts' | 'tags' }) {
    const [searchActionState, searchDispatch] = useReducer(searchReducer, {
        state: 'idle',
        payload: null,
        message: '',
        error: null,
    });

    const searchAction = ({ searchValue }: { searchValue: string }) => {
        const searchPosts = async (searchstr: string) => {
            searchDispatch({ type: 'LOADING' });
            try {
                const response = await postSearch(searchstr);

                if (response.status === true) {
                    searchDispatch({
                        type: 'SUCCESS',
                        payload: response.payload,
                        message: '정상 처리 하였습니다.',
                    });
                } else {
                    searchDispatch({ type: 'ERROR', message: response.message, error: response.message });
                }
            } catch (e) {
                searchDispatch({ type: 'ERROR', message: '알수 없는 문제가 발생했습니다.', error: e });
                throw new Error(`Error: ${e}`);
            }
        };

        if (searchGubun === 'posts') {
            searchPosts(searchValue);
        } else if (searchGubun === 'tags') {
        }
    };

    return [searchActionState, searchAction] as const;
}
