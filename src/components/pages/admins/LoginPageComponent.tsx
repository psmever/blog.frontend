import React, { KeyboardEvent, useRef } from 'react';
import useLogin from 'hooks/useLogin';
import { LoginButtonLoading } from 'components/elements';

export default function LoginPage() {
    // focus 용 Ref.
    const inputPasswordRef = useRef<HTMLInputElement | null>(null);

    const {
        inputEmail,
        inputPassword,

        loginAttemptState,

        _handleInputEmailChange,
        _handleInputPasswordChange,
        _handleLoginButtonClick,
    } = useLogin();

    // 엔터키 처리.
    const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key !== 'Enter') return;

        const target_id: string = (e.target as HTMLElement).id;

        if (target_id === 'Email') {
            inputPasswordRef.current?.focus();
        }

        if (target_id === 'Password') {
            _handleLoginButtonClick();
        }
    };

    return (
        <div className="flex justify-center min-h-screen px-4 py-48 top-2.5 bg-blue-200 sm:px-6 lg:px-8">
            <div className="w-full max-w-xs space-y-8">
                <div>
                    <img
                        className="w-auto h-12 mx-auto"
                        src={`${process.env.PUBLIC_URL}/logo512.png`}
                        alt="Nicepage BLog"
                    />
                    <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900">NicePage Blog</h2>
                </div>
                {/* <form className="mt-8 space-y-6" action="#" method="POST"> */}
                <input type="hidden" name="remember" value="true" />
                <div className="-space-y-px rounded-md shadow-sm">
                    <div>
                        <label htmlFor="Email" className="sr-only">
                            로그인 이메일
                        </label>
                        <input
                            id="Email"
                            name="Email"
                            type="email"
                            autoComplete="email"
                            required
                            className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 bg-blue-100 border rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="로그인 이메일"
                            value={inputEmail}
                            onKeyPress={e => onEnter(e)}
                            onChange={e => _handleInputEmailChange(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="Password" className="sr-only">
                            비밀번호
                        </label>
                        <input
                            id="Password"
                            name="Password"
                            type="password"
                            autoComplete="current-password"
                            required
                            className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 bg-blue-100 border rounded-none appearance-none rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="비밀번호"
                            onKeyPress={e => onEnter(e)}
                            value={inputPassword}
                            ref={inputPasswordRef}
                            onChange={e => _handleInputPasswordChange(e.target.value)}
                        />
                    </div>
                </div>

                <div>
                    {loginAttemptState === 'attempt' ? (
                        <LoginButtonLoading />
                    ) : (
                        <button
                            type="submit"
                            className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md group hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            onClick={() => _handleLoginButtonClick()}
                        >
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                {/* <!-- Heroicon name: lock-closed --> */}
                                <svg
                                    className="w-5 h-5 text-indigo-500 group-hover:text-indigo-400"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </span>
                            로그인
                        </button>
                    )}
                </div>
                {/* </form> */}
            </div>
        </div>
    );
}
