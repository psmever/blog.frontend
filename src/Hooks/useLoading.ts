import { useReducer } from 'react';

function loadingReducer(state: any, action: any) {
    switch (action.type) {
        case 'START':
            return { state: true, message: null, error: false };
        case 'ERROR':
            return { state: false, message: action.message, error: true };
        case 'END':
            return { state: false, message: null, error: false };
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}

export default function useLoading() {
    const [loadingState, loadingDispatch] = useReducer(loadingReducer, { state: false, message: null, error: false });

    const loadingControl = async (state: { type: 'start' | 'error' | 'end'; message?: string }) => {
        if (state.type === 'start') {
            loadingDispatch({ type: 'START' });
        } else if (state.type === 'error') {
            loadingDispatch({ type: 'ERROR', message: state.message });
        } else if (state.type === 'end') {
            loadingDispatch({ type: 'END' });
        }
    };

    return { loadingState, loadingControl };
}
