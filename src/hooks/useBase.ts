import { useState, useEffect, useCallback } from 'react';
import { checkServer, checkServerNotice } from 'modules/API';
import { useDispatch, useSelector } from 'react-redux';
import { getBaseDataAction, startBaseGLobalLoadingAction, endBaseGLobalLoadingAction } from 'modules/redux/base';
import { attemptLocalTokenAction } from 'modules/redux/authenticate';
import * as Helper from 'lib/Helper';
import _Alert_ from 'lib/_Alert_';
import * as _ from "lodash";
import { RootState } from 'modules';

export default function useBase() {

    const dispatch = useDispatch();
    const baseResuxState = useSelector((state: RootState) => state.base.status);
    const globalLoading = useSelector((state: RootState) => state.base.global_loading);

    // 서버 상태 체크.
    const checkServerStatus = () => {
        return new Promise((resolve) => {
            resolve(checkServer());
        })
    }
    // 서버 공지 사항 체크.
    const checkServerNoticeStatus = () => {
        return new Promise((resolve) => {
            resolve(checkServerNotice());
        })
    }
    // 싸이트 기본 데이터 가지고 오기.
    const getSiteBaseData = () => {
        dispatch(getBaseDataAction());
    }

    // 서버 체크.
    const startServerCheck = () => {
        Helper.COLORLOG(':: App Start ::', 'info');
        dispatch(startBaseGLobalLoadingAction());
        // Production 버전일 경우만 서버 체크.
        if(process.env.REACT_APP_ENV === 'production') {
            checkServerStatus().then((e: any) => {
                if(e.status === true) {
                    checkServerNoticeStatus().then((e: any) => {
                        // 공지 사항이 있을때.
                        if(!_.isNull(e.payload) && !_.isUndefined(e.payload.notice_message)) {
                            _Alert_.default({text: e.payload.notice_message})
                        }
                        getSiteBaseData();
                    });
                } else {
                    Helper.COLORLOG(':: App Start Fail (001) ::', 'error');
                }
            });
        } else {
            getSiteBaseData();
        }

        dispatch(attemptLocalTokenAction()); // 로컬 토큰 체크.
    }

    const BaseResuxState = useCallback(() => {
        return baseResuxState;
    }, [baseResuxState]);

    useEffect(() => {
        const baseStatus = BaseResuxState()
        if(baseStatus === 'success') {
            if(globalLoading === 'loading') {
                dispatch(endBaseGLobalLoadingAction());
            }
            // Helper.COLORLOG(':: App Start End ::', 'info');
        } else if(baseStatus === 'failure') {
            // FIXME Base Data 가지고 오기 실패 하면 어떻게 할껀지?
            Helper.COLORLOG(':: App Start Fail(002) ::', 'error');
        }
    }, [baseResuxState])

    return {
        startServerCheck,
        globalLoading
    };
}