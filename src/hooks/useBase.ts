import { useState, useEffect, useCallback } from 'react';
import { checkServer, checkServerNotice } from 'modules/API';
import { useDispatch, useSelector } from 'react-redux';
import { getBaseDataAction } from 'modules/redux/base';
import { attemptLocalTokenAction } from 'modules/redux/authenticate';
import * as Helper from 'lib/Helper';
import _Alert_ from 'lib/_Alert_';
import * as _ from "lodash";
import { RootState } from 'modules';

export default function useBase() {

    const dispatch = useDispatch();
    const baseResuxState = useSelector((state: RootState) => state.base.status);
    const [ baseLoading, setBaseLoading ] = useState<boolean>(false);

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
        Helper.COLORLOG(':: App Check Start ::', 'info');
        // dispatch(startBaseGLobalLoadingAction());
        setBaseLoading(true);
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

    // 기본 베이트 스테이트
    // fix 경고 떄문에 이렇게 처리함.
    // FIXME 2020-09-26 18:17 리팩토리 필요.
    const BaseResuxState = useCallback(() => {
        return baseResuxState;
    }, [baseResuxState]);

    // 기본 데이터 체크.
    useEffect(() => {
        const baseStatus = BaseResuxState()
        if(baseStatus === 'success') {
            setBaseLoading(false);
            Helper.COLORLOG(':: App Check End ::', 'info');
        } else if(baseStatus === 'failure') {
            // FIXME Base Data 가지고 오기 실패 하면 어떻게 할껀지?
            Helper.COLORLOG(':: App Start Fail(002) ::', 'error');
        }
    }, [BaseResuxState])

    return {
        startServerCheck,
        baseLoading
    };
}