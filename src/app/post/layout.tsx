import Image from 'next/image';
import React from 'react';

export default function PostLayout({ children }: { children: React.ReactNode }) {
    return (
        <html suppressHydrationWarning lang="en">
            <head>
                <title>blog.nicepage.pe.kr</title>
            </head>
            <body suppressHydrationWarning={true}>
                <div className="flex flex-col min-h-screen w-full">
                    <header className="flex w-full p-0 sticky top-0 z-50">
                        <nav className="flex w-full border border-gray-200 bg-indigo-200 dark:bg-gray-800 dark:border-gray-700 items-center justify-center">
                            <div className="flex flex-wrap w-full md:max-w-7xl items-center justify-between p-4">
                                <div className="flex">
                                    <div className="flex items-center space-x-3 rtl:space-x-reverse">
                                        <Image src="./logo.png" width="32" height="32" className="h-8" alt="Flowbite Logo" />

                                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">NicePage</span>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex">
                                        <button
                                            type="button"
                                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                        >
                                            <span className="sr-only">Open main menu</span>
                                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="hidden w-full md:flex md:w-auto gap-2">
                                        <button className="flex py-1 px-2 bg-blue-500 dark:bg-blue-600 hover:dark:bg-gray-700 dark:dark:bg-transparent hover:bg-blue-700 text-white font-semibold rounded gap-1 items-center justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                                                />
                                            </svg>
                                            포스트
                                        </button>
                                        <button className="flex py-1 px-2 bg-blue-500 dark:bg-blue-600 hover:dark:bg-gray-700 dark:dark:bg-transparent hover:bg-blue-700 text-white font-semibold rounded gap-1 items-center justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            일상
                                        </button>
                                        <button className="flex py-1 px-2 bg-blue-500 dark:bg-blue-600 hover:dark:bg-gray-700 dark:dark:bg-transparent hover:bg-blue-700 text-white font-semibold rounded gap-1 items-center justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                                                />
                                            </svg>
                                            블로그
                                        </button>
                                        <button className="flex py-1 px-2 bg-blue-500 dark:bg-blue-600 hover:dark:bg-gray-700 dark:dark:bg-transparent hover:bg-blue-700 text-white font-semibold rounded gap-1 items-center justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                                                />
                                            </svg>
                                            로그인
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </header>

                    <main className="flex-1 bg-indigo-50 dark:bg-gray-700 p-2">{children}</main>

                    <footer className="flex border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                        <div className="flex flex-nowrap w-full items-center justify-center">
                            <span className="block py-5 text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023</span>
                            <span className="block py-5 text-sm text-gray-500 sm:text-center dark:text-gray-400">
                                <div className="hover:underline">NicePage™.</div>
                            </span>
                            <span className="block py-5 text-sm text-gray-500 sm:text-center dark:text-gray-400">All Rights Reserved.</span>
                        </div>
                    </footer>
                </div>
            </body>
        </html>
    );
}
