// const Swal = require('sweetalert2');
import Swal from 'sweetalert2';
import { alertTypeInterface } from 'commonTypes';
// import * as Helper from './Helper';

const _Alert_ = {
    // 서버 상태 체크 에러 얼럿.
    serverStatusError: function (alertOption: alertTypeInterface): void {
        Swal.fire({
            title: '',
            text: alertOption.text ? alertOption.text : '서버 점검 중입니다.',
            icon: 'warning',
        });
    },
    // 기본 얼럿.
    default: (alertOption: alertTypeInterface): void => {
        Swal.fire({
            text: alertOption.text,
            icon: 'info',
        });
    },
    // 얼럿 띄우고 페이지 이동.
    thenHistoryPush: (alertOption: alertTypeInterface): void => {
        // FIXME : 이동할 페이지 어떻게 할껀지?
        // const push_target = alertOption.push_router ? alertOption.push_router : '/';
        Swal.fire({
            text: alertOption.text,
        }).then(() => {
            // history.push(process.env.PUBLIC_URL + push_target);
        });
    },
    // 얼럿 띄우고 홈으로 이동.
    thenGoHome: (alertOption: alertTypeInterface): void => {
        // FIXME : 이동할 페이지 어떻게 할껀지?
        // const push_target = alertOption.push_router ? alertOption.push_router : '/';
        Swal.fire({
            text: alertOption.text,
            icon: 'info',
        }).then(() => {
            window.location.href = '/';
        });
    },
    // 얼럿 띄우고 페이지 새로 고침.
    thenLocationReload: (alertOption: alertTypeInterface): void => {
        Swal.fire({
            text: alertOption.text,
        }).then(() => {
            window.location.reload();
        });
    },
    // 기본 에러 얼럿.
    error: (alertOption: alertTypeInterface): void => {
        Swal.fire({
            icon: 'error',
            text: alertOption.text,
        });
    },
};

export default _Alert_;
