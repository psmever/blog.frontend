import React from 'react';

export default function LeftMenuComponent() {
    return (
        <div className="relative flex flex-col hidden h-full transition-all duration-500 ease-in-out transform bg-white border-r border-gray-300 shadow-xl sm:block w-96">
            <div className="relative mt-2 mb-4 overflow-x-hidden overflow-y-auto scrolling-touch lg:max-h-sm scrollbar-w-2 scrollbar-track-gray-lighter scrollbar-thumb-rounded scrollbar-thumb-gray">
                <ul className="flex flex-col inline-block w-full h-screen px-2 select-none">
                    <li className="flex flex-no-wrap items-center pr-3 text-black rounded-lg cursor-pointer mt-200 py-65 hover:bg-gray-200">
                        <div className="flex justify-between w-full focus:outline-none">
                            <div className="flex justify-between w-full">
                                <div className="relative flex items-center justify-center w-12 h-12 ml-2 mr-3 text-xl font-semibold text-white bg-blue-500 rounded-full flex-no-shrink">
                                    <img
                                        className="object-cover w-12 h-12 rounded-full"
                                        src="https://images.unsplash.com/photo-1433588616917-dcbcc63429f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w="
                                        alt=""
                                    />
                                    <div className="absolute bottom-0 right-0 flex items-center justify-center bg-white rounded-full">
                                        <div className="bg-green-500 rounded-full w-2.5 h-2.5"></div>
                                    </div>
                                </div>
                                <div className="items-center flex-1 min-w-0">
                                    <div className="flex justify-between mb-1">
                                        <h2 className="text-sm font-semibold text-black">Lauri Edmon</h2>
                                        <div className="flex">
                                            <span className="ml-1 text-xs font-medium text-gray-600">12.52</span>
                                        </div>
                                    </div>
                                    <div className="flex justify-between text-sm leading-none truncate">
                                        <span>Writing...</span>
                                        <span
                                            v-else="true"
                                            className="flex items-center justify-center w-5 h-5 text-xs text-right text-white bg-green-500 rounded-full"
                                        >
                                            2
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="flex flex-no-wrap items-center pr-3 text-black rounded-lg cursor-pointer mt-200 py-65 hover:bg-gray-200 py-2.5">
                        <div className="flex justify-between w-full focus:outline-none">
                            <div className="flex justify-between w-full">
                                <div className="relative flex items-center justify-center w-12 h-12 ml-2 mr-3 text-xl font-semibold text-white bg-blue-500 rounded-full flex-no-shrink">
                                    <img
                                        className="object-cover w-12 h-12 rounded-full"
                                        src="https://images.unsplash.com/photo-1589349133269-183a6c90fbfc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=100"
                                        alt=""
                                    />
                                    <div className="absolute bottom-0 right-0 flex items-center justify-center bg-white rounded-full w-3.5 h-3.5">
                                        <div className="bg-green-500 rounded-full w-3.5 h-3.5"></div>
                                    </div>
                                </div>
                                <div className="items-center flex-1 min-w-0">
                                    <div className="flex justify-between mb-1">
                                        <h2 className="text-sm font-semibold text-black">Julian Gruber</h2>
                                        <div className="flex">
                                            <svg
                                                className="w-4 h-4 fill-current"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="19"
                                                height="14"
                                                viewBox="0 0 19 14"
                                                style={{ color: 'transparent' }}
                                            >
                                                <path
                                                    fillRule="nonzero"
                                                    d="M7.96833846,10.0490996 L14.5108251,2.571972 C14.7472185,2.30180819 15.1578642,2.27443181 15.428028,2.51082515 C15.6711754,2.72357915 15.717665,3.07747757 15.5522007,3.34307913 L15.4891749,3.428028 L8.48917485,11.428028 C8.2663359,11.6827011 7.89144111,11.7199091 7.62486888,11.5309823 L7.54038059,11.4596194 L4.54038059,8.45961941 C4.2865398,8.20577862 4.2865398,7.79422138 4.54038059,7.54038059 C4.7688373,7.31192388 5.12504434,7.28907821 5.37905111,7.47184358 L5.45961941,7.54038059 L7.96833846,10.0490996 L14.5108251,2.571972 L7.96833846,10.0490996 Z"
                                                />
                                            </svg>
                                            <span className="ml-1 text-xs font-medium text-gray-600">20.25</span>
                                        </div>
                                    </div>
                                    <div className="flex justify-between text-sm leading-none truncate">
                                        <span>Send audio...</span>
                                        <span
                                            v-else="true"
                                            className="flex items-center justify-center w-5 h-5 text-xs text-right text-white bg-green-500 rounded-full"
                                        >
                                            2
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="flex flex-no-wrap items-center pr-3 text-black rounded-lg cursor-pointer mt-200 py-65 hover:bg-gray-200 py-2.5">
                        <div className="flex justify-between w-full focus:outline-none">
                            <div className="flex justify-between w-full">
                                <div className="relative flex items-center justify-center w-12 h-12 ml-2 mr-3 text-xl font-semibold text-white bg-blue-500 rounded-full flex-no-shrink">
                                    <img
                                        className="object-cover w-12 h-12 rounded-full"
                                        src="https://images.unsplash.com/photo-1589222331438-0511a448dbc2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=100"
                                        alt=""
                                    />
                                </div>
                                <div className="items-center flex-1 min-w-0">
                                    <div className="flex justify-between mb-1">
                                        <h2 className="text-sm font-semibold text-black">Karlien Nihen</h2>
                                        <div className="flex">
                                            <span className="ml-1 text-xs font-medium text-gray-600">2.28</span>
                                        </div>
                                    </div>
                                    <div className="flex justify-between text-sm leading-none truncate">
                                        <span>Writing...</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="flex flex-no-wrap items-center pr-3 text-black rounded-lg cursor-pointer mt-200 py-65 hover:bg-gray-200 py-2.5">
                        <div className="flex justify-between w-full focus:outline-none">
                            <div className="flex justify-between w-full">
                                <div className="relative flex items-center justify-center w-12 h-12 ml-2 mr-3 text-xl font-semibold text-white bg-blue-500 rounded-full flex-no-shrink">
                                    <img
                                        className="object-cover w-12 h-12 rounded-full"
                                        src="https://images.unsplash.com/photo-1589351189946-b8eb5e170ba6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=100"
                                        alt=""
                                    />
                                </div>
                                <div className="items-center flex-1 min-w-0">
                                    <div className="flex justify-between mb-1">
                                        <h2 className="text-sm font-semibold text-black">Meg Rigden</h2>
                                        <div className="flex">
                                            <span className="ml-1 text-xs font-medium text-gray-600">12.52</span>
                                        </div>
                                    </div>
                                    <div className="flex justify-between text-sm leading-none truncate">
                                        <span>Washington D.C.</span>
                                        <span
                                            v-else="true"
                                            className="flex items-center justify-center w-5 h-5 text-xs text-right text-white bg-green-500 rounded-full"
                                        >
                                            2
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}
