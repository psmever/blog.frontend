import Swal from 'sweetalert2';
// import Swal, { SweetAlertOptions } from 'sweetalert2';

interface alertTypeInterface {
    title?: string;
    text: string;
    footer?: string;
    push_router?: string;
    position?:
        | 'top-end'
        | 'top'
        | 'top-start'
        | 'top-left'
        | 'top-right'
        | 'center'
        | 'center-start'
        | 'center-end'
        | 'center-left'
        | 'center-right'
        | 'bottom'
        | 'bottom-start'
        | 'bottom-end'
        | 'bottom-left'
        | 'bottom-right'
        | undefined;
    callBack?: (result: { isConfirmed: boolean; isDenied: boolean; isDismissed: boolean; value: boolean }) => any;
}

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
        });
    },
    defaultInfo: (alertOption: alertTypeInterface): void => {
        Swal.fire({
            text: alertOption.text,
            icon: 'info',
            inputAttributes: {
                autocapitalize: 'off',
            },
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
    test: (alertOption: alertTypeInterface): void => {
        Swal.fire({
            // position: alertOption.position ? alertOption.position : 'top-center',
            icon: 'error',
            text: alertOption.text,
        }).then(result => {
            if (alertOption.callBack) {
                alertOption.callBack({
                    isConfirmed: result.isConfirmed,
                    isDenied: result.isDenied,
                    isDismissed: result.isDismissed,
                    value: result.value,
                });
            }
        });
    },
};

export default _Alert_;
