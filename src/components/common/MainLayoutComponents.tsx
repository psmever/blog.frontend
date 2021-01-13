import React from 'react';
import NavbarComponent from './NavbarComponent';
import { LeftMenu, RightMenu } from 'components/common';

interface MainLayoutComponentsProps {
    children: any;
}

export default function MainLayoutComponents({ children }: MainLayoutComponentsProps) {
    return (
        <>
            <div className="">
                <NavbarComponent />
            </div>
            <div className="flex justify-center h-screen overflow-hidden" style={{ background: '#edf2f7' }}>
                {/* <div className="relative flex w-full h-screen overflow-hidden antialiased bg-gray-200"> */}
                {/* <!-- left --> */}
                <LeftMenu />
                {/* <!-- left --> */}
                {children}
                <div className="relative flex flex-col h-full w-full">
                    {/* <!-- center --> */}
                    <div className="2sm:px-0 sm:px-0 md:px-2">
                        <div className="flex flex-wrap">
                            {(function () {
                                return [0, 1, 2, 3, 4, 5, 6, 7].map((e, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className="w-full sm:w-1/1 md:w-1/2 lg:w-1/1 xl:w-1/3 2xl:w-1/4 2sm:my-2 2sm:px-2 sm:my-4 sm:px-4 md:my-2 md:px-1 lg:my-4 lg:px-1"
                                        >
                                            {/* <!-- Article --> */}
                                            <article className="overflow-hidden sm:rounded-none rounded shadow-lg">
                                                <a href="#">
                                                    {' '}
                                                    <img
                                                        className="object-cover object-center w-full"
                                                        src="https://images.unsplash.com/photo-1457282367193-e3b79e38f207?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1654&q=80"
                                                        alt=""
                                                    />{' '}
                                                </a>
                                                <header className="flex items-center justify-between p-2 leading-tight md:p-4">
                                                    <a
                                                        href="#"
                                                        className="block mb-2 text-lg font-semibold text-blue-500 hover:text-blue-600 md:text-base lg:text-lg"
                                                    >
                                                        {' '}
                                                        Woman standing under blue sky{' '}
                                                    </a>
                                                </header>

                                                <div className="flex items-center justify-between p-2 leading-tight md:p-4">
                                                    <div className="block text-sm leading-relaxed text-gray-600 md:text-xs lg:text-sm">
                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                                                        quidem blanditiis unde asperiores? Officia amet perspiciatis ad
                                                        quibusdam incidunt eaque, nobis, eveniet neque porro id commodi
                                                        quisquam debitis!
                                                    </div>
                                                </div>

                                                <footer className="flex items-center p-2 leading-none md:p-4">
                                                    <a
                                                        className="inline px-2 py-1 text-xs text-gray-700 lowercase bg-gray-300 rounded-full"
                                                        href="#"
                                                    >
                                                        {' '}
                                                        #something{' '}
                                                    </a>
                                                    <a
                                                        className="inline px-2 py-1 text-xs text-gray-700 lowercase bg-gray-300 rounded-full"
                                                        href="#"
                                                    >
                                                        {' '}
                                                        #sky{' '}
                                                    </a>
                                                </footer>
                                            </article>
                                            {/* <!-- END Article --> */}
                                        </div>
                                    );
                                });
                            })()}
                        </div>
                    </div>
                    {/* <!-- center --> */}
                </div>

                {/* <!-- right --> */}
                <RightMenu />
                {/* <!-- right --> */}
            </div>
        </>
    );
}
