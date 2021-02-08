import { useReducer, useEffect, useState } from 'react';
import { getPostList } from '@API';

function getReducer(state: any, action: any) {
    switch (action.type) {
        case 'LOADING':
            return {
                loading: true,
                posts: null,
                error: null,
            };
        case 'SUCCESS':
            return {
                loading: false,
                posts: action.data,
                error: null,
            };
        case 'ERROR':
            return {
                loading: false,
                posts: null,
                error: action.error,
            };
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}

export default function usePost() {
    const [pageNumber, setPageNumber] = useState<number>(1);
    const [state, getDispatch] = useReducer(getReducer, {
        loading: false,
        posts: null,
        error: null,
    });

    const getPostLists = async () => {
        getDispatch({ type: 'LOADING' });

        setPageNumber(pageNumber + 1);

        const { status, payload } = await getPostList({ pageNumber: pageNumber });

        if (status) {
            getDispatch({ type: 'SUCCESS', posts: payload });
        } else {
            getDispatch({ type: 'ERROR', error: payload });
        }
    };

    useEffect(() => {
        console.log('start');

        getPostLists();
    }, []);

    return [state, getPostLists] as const;
}
