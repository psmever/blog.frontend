import React, {useEffect} from 'react';
import { BodyLoading } from 'components/elements';
import { useDispatch, useSelector } from 'react-redux';
import { attemptLogoutAction } from 'modules/redux/authenticate';
import _Alert_ from 'lib/_Alert_';
import { RootState } from 'modules';

export default function LogoutPage() {

    const dispatch = useDispatch();
    const logout_state = useSelector((state: RootState) => state.authenticate.logout.status);

    useEffect(() => {
        dispatch(attemptLogoutAction());
        // FIXME 2020-10-06 13:44  리팩토리
        // eslint-disable-next-line
    }, []);


    useEffect(() => {
        if(logout_state === 'success') {
            _Alert_.thenGoHome({text:'로그아웃 되었습니다.'});
        }
    }, [logout_state]);

    return (
        <>
            <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <BodyLoading/>
            </div>
       </>
    );
}