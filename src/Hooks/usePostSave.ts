import { useReducer } from 'react';
import { postCreate, postUpdate, postPublish, postHide } from '@API';
import { DefaultStatus, DefaultPostSaveResult } from 'CommonTypes';
import { RootState } from 'StoreTypes';
import { useSelector } from 'react-redux';

type State = {
    state: DefaultStatus;
    payload: DefaultPostSaveResult | null;
    message: string;
    error: Error | null;
};

function getReducer(state: any, action: any): State {
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
                message: '저장 되었습니다.',
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

export default function usePostSave() {
    const { contentsButtonAction, contentsInfo, contentsGubun } = useSelector((store: RootState) => ({
        contentsButtonAction: store.posts.contents.buttonAction,
        contentsInfo: store.posts.contents.info,
        contentsGubun: store.posts.contents.contentsGubun,
    }));

    const [postActionState, saveDispatch] = useReducer(getReducer, {
        state: 'idle',
        payload: null,
        message: '',
        error: null,
    });

    const postSaveAction = async () => {
        const doPostSave = async () => {
            saveDispatch({ type: 'LOADING' });

            try {
                const response = await postCreate({
                    title: contentsInfo.title,
                    tags: contentsInfo.tags.map((e: string) => {
                        return {
                            tag_id: e,
                            tag_text: e,
                        };
                    }),
                    contents: {
                        html: contentsInfo.content,
                        text: contentsInfo.content,
                    },
                });

                if (response.status === true) {
                    saveDispatch({
                        type: 'SUCCESS',
                        payload: response.payload,
                        message: response.message,
                    });
                } else {
                    saveDispatch({ type: 'ERROR', message: response.message, error: response.message });
                }
            } catch (e) {
                saveDispatch({ type: 'ERROR', message: '알수 없는 문제가 발생했습니다.', error: e });
                throw new Error(`Error: ${e}`);
            }
        };

        const doPostUpdate = async () => {
            saveDispatch({ type: 'LOADING' });

            try {
                const response = await postUpdate({
                    post_uuid: contentsGubun.post_uuid,
                    payload: {
                        title: contentsInfo.title,
                        tags: contentsInfo.tags.map((e: string) => {
                            return {
                                tag_id: e,
                                tag_text: e,
                            };
                        }),
                        contents: {
                            html: contentsInfo.content,
                            text: contentsInfo.content,
                        },
                    },
                });

                if (response.status === true) {
                    saveDispatch({
                        type: 'SUCCESS',
                        payload: response.payload,
                        message: response.message,
                    });
                } else {
                    saveDispatch({ type: 'ERROR', message: response.message, error: response.message });
                }
            } catch (e) {
                saveDispatch({ type: 'ERROR', message: '알수 없는 문제가 발생했습니다.', error: e });
                throw new Error(`Error: ${e}`);
            }
        };

        const doPostPublish = async () => {
            saveDispatch({ type: 'LOADING' });

            try {
                const response = await postPublish(contentsGubun.post_uuid);

                if (response.status === true) {
                    saveDispatch({
                        type: 'SUCCESS',
                        payload: response.payload,
                        message: response.message,
                    });
                } else {
                    saveDispatch({ type: 'ERROR', message: response.message, error: response.message });
                }
            } catch (e) {
                saveDispatch({ type: 'ERROR', message: '알수 없는 문제가 발생했습니다.', error: e });
                throw new Error(`Error: ${e}`);
            }
        };

        const doPostHide = async () => {
            saveDispatch({ type: 'LOADING' });

            try {
                const response = await postHide(contentsGubun.post_uuid);

                if (response.status === true) {
                    saveDispatch({
                        type: 'SUCCESS',
                        payload: response.payload,
                        message: response.message,
                    });
                } else {
                    saveDispatch({ type: 'ERROR', message: response.message, error: response.message });
                }
            } catch (e) {
                saveDispatch({ type: 'ERROR', message: '알수 없는 문제가 발생했습니다.', error: e });
                throw new Error(`Error: ${e}`);
            }
        };

        if (contentsButtonAction === 'save') {
            doPostSave();
        } else if (contentsButtonAction === 'update') {
            doPostUpdate();
        } else if (contentsButtonAction === 'publish') {
            doPostPublish();
        } else if (contentsButtonAction === 'hide') {
            doPostHide();
        }
    };

    return [postActionState, postSaveAction] as const;
}
