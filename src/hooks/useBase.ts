import { useState, useEffect, useCallback } from 'react';
import { checkServer, checkServerNotice } from 'modules/API';
import {
    axiosReturnInterface,
    apiNoticeResultInterface,
} from 'commonTypes';
import { useDispatch, useSelector } from 'react-redux';
import { getBaseDataAction } from 'modules/redux/base';
import * as Helper from 'lib/Helper';
import _Alert_ from 'lib/_Alert_';
import * as _ from "lodash";
import { RootState } from 'modules';

export default function useBase() {

    // Test Code Start
    // const [count, setCount] = useState(0);
    // const willMount = useRef(true);

    // if (willMount.current) {
    //     console.log('First time load (it runs only once)');
    //     setCount(2);
    //     willMount.current = false;
    // } else {
    //     console.log('Repeated load');
    // }

    // useEffect(() => {
    //     console.log('Component did mount (it runs only once)');
    //     return () => console.log('Component will unmount');
    // }, []);

    // useEffect(() => {
    //     console.log('Component did update');
    // });

    // useEffect(() => {
    //     console.log('Component will receive props');
    // }, [count]);
    // Test Code End

    const dispatch = useDispatch();
    const baseResuxState = useSelector((state: RootState) => state.base.status);
    const [ baseLoading, setBaseLoading ] = useState<'yet' | true | 'success'>('yet');

    // 서버 상태 체크.
    const checkServerStatus = () => {
        return new Promise<axiosReturnInterface<any>>((resolve) => {
            resolve(checkServer());
        })
    }
    // 서버 공지 사항 체크.
    const checkServerNoticeStatus = () => {
        return new Promise<axiosReturnInterface<apiNoticeResultInterface>>((resolve) => {
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
        setBaseLoading(true);
        // Production 버전일 경우만 서버 체크.
        if(process.env.REACT_APP_ENV === 'production') {
            checkServerStatus().then((e: axiosReturnInterface<any>) => {
                if(e.status === true) {
                    checkServerNoticeStatus().then((e: axiosReturnInterface<apiNoticeResultInterface>) => {
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
    }

    // 기본 베이스 스테이트
    // fix 경고 떄문에 이렇게 처리함.
    // FIXME 2020-09-26 18:17 리팩토리 필요.
    const BaseResuxState = useCallback(() => {
        return baseResuxState;
    }, [baseResuxState]);

    // 기본 데이터 체크.
    useEffect(() => {
        const baseStatus = BaseResuxState()
        if(baseStatus === 'success') {
            setBaseLoading('success');
            Helper.COLORLOG(':: App Check End ::', 'info');
        } else if(baseStatus === 'failure') {
            // FIXME Base Data 가지고 오기 실패 하면 어떻게 할껀지?
            Helper.COLORLOG(':: App Start Fail(002) ::', 'error');
        }
    }, [BaseResuxState]);

    useEffect(() => {
        startServerCheck();
    // FIXME 2020-09-26 18:21 경고 수정필요.
    // eslint-disable-next-line
    }, []);

    return {
        startServerCheck,
        baseLoading
    };
}