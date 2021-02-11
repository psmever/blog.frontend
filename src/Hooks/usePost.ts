import { useReducer, useEffect, useState } from 'react';
import { getPostList } from '@API';
import { DefaultStatus } from 'CommonTypes';
import { PostList } from 'ServiceTypes';

type State = {
    state: DefaultStatus;
    payload: PostList | null;
    error: Error | null;
};

function getReducer(state: any, action: any): State {
    switch (action.type) {
        case 'LOADING':
            return {
                state: 'loading',
                payload: null,
                error: null,
            };
        case 'SUCCESS':
            return {
                state: 'success',
                payload: action.posts,
                error: null,
            };
        case 'ERROR':
            return {
                state: 'failure',
                payload: null,
                error: action.error,
            };
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}

export default function usePost() {
    const [pageNumber, setPageNumber] = useState<number>(1);
    const [postState, getDispatch] = useReducer(getReducer, {
        state: 'idle',
        payload: null,
        error: null,
    });

    const getPostLists = async () => {
        getDispatch({ type: 'LOADING' });

        setPageNumber(pageNumber);

        const { status, payload } = await getPostList({ pageNumber: pageNumber });

        if (status) {
            getDispatch({ type: 'SUCCESS', posts: payload });
        } else {
            getDispatch({ type: 'ERROR', error: payload });
        }
    };

    useEffect(() => {
        getPostLists();
    }, []);

    return [postState, getPostLists] as const;
}
