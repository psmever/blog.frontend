import { useState, useEffect, useCallback } from 'react';
import { checkServer, checkServerNotice } from 'modules/API';
import { useDispatch, useSelector } from 'react-redux';
import { getBaseDataAction } from 'modules/redux/base';
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

    const startServerCheck = () => {
        Helper.COLORLOG(':: startServerCheck Start ::', 'info');
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
                    Helper.COLORLOG(':: startServerCheck Fail (001) ::', 'error');
                }
            });
        } else {
            getSiteBaseData();
        }
    }

    const BaseResuxState = useCallback(() => {
        return baseResuxState;
    }, [baseResuxState]);

    useEffect(() => {
        const baseStatus = BaseResuxState()
        if(baseStatus === 'success') {
            setBaseLoading(false);
            Helper.COLORLOG(':: startServerCheck End ::', 'info');
        } else if(baseStatus === 'failure') {
            // FIXME Base Data 가지고 오기 실패 하면 어떻게 할껀지?
            Helper.COLORLOG(':: startServerCheck Fail(002) ::', 'error');
        }
    }, [BaseResuxState])

    return {
        startServerCheck,
        baseLoading
    };
}