import { useEffect, useLayoutEffect, useReducer } from 'react';
import { DimensionsResult } from 'CommonTypes';

function sizeReducer(state: any, action: any): DimensionsResult {
    switch (action.type) {
        case 'START':
            return {
                state: 'loading',
                data: {
                    width: 0,
                    height: 0,
                },
            };
        case 'END':
            return {
                state: 'success',
                data: {
                    width: action.data.width,
                    height: action.data.height,
                },
            };
        case 'ERROR':
            return {
                state: 'error',
                data: {
                    width: 0,
                    height: 0,
                },
            };
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}

function useDimensions(targetRef: any) {
    const [sizeState, dispatch] = useReducer(sizeReducer, {
        state: 'loading',
        data: {
            width: 0,
            height: 0,
        },
    });

    const handleResize = () => {
        dispatch({ type: 'START' });
        try {
            dispatch({
                type: 'END',
                data: {
                    width: targetRef.current ? targetRef.current.offsetWidth : 0,
                    height: targetRef.current ? targetRef.current.offsetHeight : 0,
                },
            });
        } catch (e) {
            dispatch({ type: 'ERROR', error: e });
        }
    };

    useEffect(() => {
        const handleEddectResize = () => {
            window.addEventListener('resize', handleResize);
        };

        setTimeout(handleEddectResize, 1000);
        return () => window.removeEventListener('resize', handleResize);
        // eslint-disable-next-line
    }, []);

    useLayoutEffect(() => {
        setTimeout(handleResize, 1000);
        // eslint-disable-next-line
    }, []);

    return [sizeState];
}

export default useDimensions;
