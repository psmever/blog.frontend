import React from 'react';
import NavbarComponent from 'components/common/NavbarComponent';

export default function LayoutPageComponent() {
    return (
        <>
            <div className="">
                <NavbarComponent />
            </div>
            <div className="h-screen overflow-hidden flex justify-center" style={{ background: '#edf2f7' }}>
                <div className="relative flex w-full h-screen overflow-hidden antialiased bg-gray-200">
                    {/* <!-- left --> */}
                    <div
                        className="relative flex flex-col hidden h-full bg-white border-r border-gray-300 shadow-xl md:block transform transition-all duration-500 ease-in-out"
                        style={{ width: '24rem' }}
                    >
                        <div className="flex justify-between px-3 pt-1 text-white">
                            <div className="flex items-center w-full py-2">
                                <button
                                    aria-haspopup="true"
                                    className="p-2 text-gray-700 rounded-full focus:outline-none hover:text-gray-600 hover:bg-gray-200"
                                >
                                    <svg
                                        className="w-6 h-6 text-gray-600 fill-current"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            fillRule="nonzero"
                                            d="M4,16 L20,16 C20.5522847,16 21,16.4477153 21,17 C21,17.5128358 20.6139598,17.9355072 20.1166211,17.9932723 L20,18 L4,18 C3.44771525,18 3,17.5522847 3,17 C3,16.4871642 3.38604019,16.0644928 3.88337887,16.0067277 L4,16 L20,16 L4,16 Z M4,11 L20,11 C20.5522847,11 21,11.4477153 21,12 C21,12.5128358 20.6139598,12.9355072 20.1166211,12.9932723 L20,13 L4,13 C3.44771525,13 3,12.5522847 3,12 C3,11.4871642 3.38604019,11.0644928 3.88337887,11.0067277 L4,11 Z M4,6 L20,6 C20.5522847,6 21,6.44771525 21,7 C21,7.51283584 20.6139598,7.93550716 20.1166211,7.99327227 L20,8 L4,8 C3.44771525,8 3,7.55228475 3,7 C3,6.48716416 3.38604019,6.06449284 3.88337887,6.00672773 L4,6 Z"
                                        />
                                    </svg>
                                </button>
                                <div className="relative flex items-center w-full pl-2 overflow-hidden text-gray-600 focus-within:text-gray-400">
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-4">
                                        <button type="submit" className="p-1 focus:outline-none focus:shadow-none">
                                            <svg
                                                className="w-6 h-6 fill-current"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    fillRule="nonzero"
                                                    d="M9.5,3 C13.0898509,3 16,5.91014913 16,9.5 C16,10.9337106 15.5358211,12.2590065 14.7495478,13.3338028 L19.7071068,18.2928932 C20.0976311,18.6834175 20.0976311,19.3165825 19.7071068,19.7071068 C19.3466228,20.0675907 18.7793918,20.0953203 18.3871006,19.7902954 L18.2928932,19.7071068 L13.3338028,14.7495478 C12.2590065,15.5358211 10.9337106,16 9.5,16 C5.91014913,16 3,13.0898509 3,9.5 C3,5.91014913 5.91014913,3 9.5,3 Z M9.5,5 C7.01471863,5 5,7.01471863 5,9.5 C5,11.9852814 7.01471863,14 9.5,14 C11.9852814,14 14,11.9852814 14,9.5 C14,7.01471863 11.9852814,5 9.5,5 Z"
                                                />
                                            </svg>
                                        </button>
                                    </span>
                                    <input
                                        type="search"
                                        name="q"
                                        className="w-full py-2 pl-12 text-sm text-white bg-gray-200 border border-transparent appearance-none rounded-tg focus:bg-white focus:outline-none focus:border-blue-500 focus:text-gray-900 focus:shadow-outline-blue"
                                        style={{ borderRadius: '25' }}
                                        placeholder="Search..."
                                        autoComplete="off"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="border-b shadow-bot">
                            <ul className="flex flex-row items-center inline-block px-2 list-none select-none">
                                <li className="flex-auto px-1 mx-1 -mb-px text-center rounded-t-lg cursor-pointer last:mr-0 hover:bg-gray-200">
                                    <a className="flex items-center justify-center block py-2 text-xs font-semibold leading-normal tracking-wide border-b-2 border-blue-500">
                                        All
                                    </a>
                                </li>
                                <li className="flex-auto px-1 mx-1 -mb-px text-center rounded-t-lg cursor-pointer last:mr-0 hover:bg-gray-200">
                                    <a className="flex items-center justify-center block py-2 text-xs font-semibold leading-normal tracking-wide border-b-2 border-transparent">
                                        Work
                                    </a>
                                </li>
                                <li className="flex-auto px-1 mx-1 -mb-px text-center rounded-t-lg cursor-pointer last:mr-0 hover:bg-gray-200">
                                    <a className="flex items-center justify-center block py-2 text-xs font-semibold leading-normal tracking-wide border-b-2 border-transparent">
                                        Private
                                        <span className="flex items-center justify-center w-5 h-5 ml-1 text-xs text-white bg-blue-500 rounded-full">
                                            2
                                        </span>
                                    </a>
                                </li>
                                <li className="flex-auto px-1 mx-1 -mb-px text-center rounded-t-lg cursor-pointer last:mr-0 hover:bg-gray-200">
                                    <a className="flex items-center justify-center block py-2 text-xs font-semibold leading-normal tracking-wide border-b-2 border-transparent">
                                        Groups
                                    </a>
                                </li>
                                <li className="flex-auto px-1 mx-1 -mb-px text-center rounded-t-lg cursor-pointer last:mr-0 hover:bg-gray-200">
                                    <a className="flex items-center justify-center block py-2 text-xs font-semibold leading-normal tracking-wide border-b-2 border-transparent">
                                        Channels
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="relative mt-2 mb-4 overflow-x-hidden overflow-y-auto scrolling-touch lg:max-h-sm scrollbar-w-2 scrollbar-track-gray-lighter scrollbar-thumb-rounded scrollbar-thumb-gray">
                            <ul className="flex flex-col inline-block w-full h-screen px-2 select-none">
                                <li
                                    className="flex flex-no-wrap items-center pr-3 text-black rounded-lg cursor-pointer mt-200 py-65 hover:bg-gray-200"
                                    style={{ paddingTop: '0.65rem', paddingBottom: '0.65rem' }}
                                >
                                    <div className="flex justify-between w-full focus:outline-none">
                                        <div className="flex justify-between w-full">
                                            <div className="relative flex items-center justify-center w-12 h-12 ml-2 mr-3 text-xl font-semibold text-white bg-blue-500 rounded-full flex-no-shrink">
                                                <img
                                                    className="object-cover w-12 h-12 rounded-full"
                                                    src="https://images.unsplash.com/photo-1433588616917-dcbcc63429f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w="
                                                    alt=""
                                                />
                                                <div
                                                    className="absolute bottom-0 right-0 flex items-center justify-center bg-white rounded-full"
                                                    style={{ width: '0.80rem', height: '0.80rem' }}
                                                >
                                                    <div
                                                        className="bg-green-500 rounded-full"
                                                        style={{ width: '0.6rem', height: '0.6rem' }}
                                                    ></div>
                                                </div>
                                            </div>
                                            <div className="items-center flex-1 min-w-0">
                                                <div className="flex justify-between mb-1">
                                                    <h2 className="text-sm font-semibold text-black">Lauri Edmon</h2>
                                                    <div className="flex">
                                                        <svg
                                                            className="w-4 h-4 text-green-500 fill-current"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="19"
                                                            height="14"
                                                            viewBox="0 0 19 14"
                                                        >
                                                            <path
                                                                fillRule="nonzero"
                                                                d="M4.96833846,10.0490996 L11.5108251,2.571972 C11.7472185,2.30180819 12.1578642,2.27443181 12.428028,2.51082515 C12.6711754,2.72357915 12.717665,3.07747757 12.5522007,3.34307913 L12.4891749,3.428028 L5.48917485,11.428028 C5.2663359,11.6827011 4.89144111,11.7199091 4.62486888,11.5309823 L4.54038059,11.4596194 L1.54038059,8.45961941 C1.2865398,8.20577862 1.2865398,7.79422138 1.54038059,7.54038059 C1.7688373,7.31192388 2.12504434,7.28907821 2.37905111,7.47184358 L2.45961941,7.54038059 L4.96833846,10.0490996 L11.5108251,2.571972 L4.96833846,10.0490996 Z M9.96833846,10.0490996 L16.5108251,2.571972 C16.7472185,2.30180819 17.1578642,2.27443181 17.428028,2.51082515 C17.6711754,2.72357915 17.717665,3.07747757 17.5522007,3.34307913 L17.4891749,3.428028 L10.4891749,11.428028 C10.2663359,11.6827011 9.89144111,11.7199091 9.62486888,11.5309823 L9.54038059,11.4596194 L8.54038059,10.4596194 C8.2865398,10.2057786 8.2865398,9.79422138 8.54038059,9.54038059 C8.7688373,9.31192388 9.12504434,9.28907821 9.37905111,9.47184358 L9.45961941,9.54038059 L9.96833846,10.0490996 L16.5108251,2.571972 L9.96833846,10.0490996 Z"
                                                            />
                                                        </svg>
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
                                                        <span className="ml-1 text-xs font-medium text-gray-600">
                                                            12.52
                                                        </span>
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
                                <li
                                    className="flex flex-no-wrap items-center pr-3 text-black rounded-lg cursor-pointer mt-200 py-65 hover:bg-gray-200"
                                    style={{ paddingTop: '0.65rem', paddingBottom: '0.65rem' }}
                                >
                                    <div className="flex justify-between w-full focus:outline-none">
                                        <div className="flex justify-between w-full">
                                            <div className="relative flex items-center justify-center w-12 h-12 ml-2 mr-3 text-xl font-semibold text-white bg-blue-500 rounded-full flex-no-shrink">
                                                <img
                                                    className="object-cover w-12 h-12 rounded-full"
                                                    src="https://images.unsplash.com/photo-1589349133269-183a6c90fbfc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=100"
                                                    alt=""
                                                />
                                                <div
                                                    className="absolute bottom-0 right-0 flex items-center justify-center bg-white rounded-full"
                                                    style={{ width: '0.80rem', height: '0.80rem' }}
                                                >
                                                    <div
                                                        className="bg-green-500 rounded-full"
                                                        style={{ width: '0.6rem', height: '0.6rem' }}
                                                    ></div>
                                                </div>
                                            </div>
                                            <div className="items-center flex-1 min-w-0">
                                                <div className="flex justify-between mb-1">
                                                    <h2 className="text-sm font-semibold text-black">Julian Gruber</h2>
                                                    <div className="flex">
                                                        <svg
                                                            className="w-4 h-4 text-green-500 fill-current"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="19"
                                                            height="14"
                                                            viewBox="0 0 19 14"
                                                        >
                                                            <path
                                                                fillRule="nonzero"
                                                                d="M4.96833846,10.0490996 L11.5108251,2.571972 C11.7472185,2.30180819 12.1578642,2.27443181 12.428028,2.51082515 C12.6711754,2.72357915 12.717665,3.07747757 12.5522007,3.34307913 L12.4891749,3.428028 L5.48917485,11.428028 C5.2663359,11.6827011 4.89144111,11.7199091 4.62486888,11.5309823 L4.54038059,11.4596194 L1.54038059,8.45961941 C1.2865398,8.20577862 1.2865398,7.79422138 1.54038059,7.54038059 C1.7688373,7.31192388 2.12504434,7.28907821 2.37905111,7.47184358 L2.45961941,7.54038059 L4.96833846,10.0490996 L11.5108251,2.571972 L4.96833846,10.0490996 Z M9.96833846,10.0490996 L16.5108251,2.571972 C16.7472185,2.30180819 17.1578642,2.27443181 17.428028,2.51082515 C17.6711754,2.72357915 17.717665,3.07747757 17.5522007,3.34307913 L17.4891749,3.428028 L10.4891749,11.428028 C10.2663359,11.6827011 9.89144111,11.7199091 9.62486888,11.5309823 L9.54038059,11.4596194 L8.54038059,10.4596194 C8.2865398,10.2057786 8.2865398,9.79422138 8.54038059,9.54038059 C8.7688373,9.31192388 9.12504434,9.28907821 9.37905111,9.47184358 L9.45961941,9.54038059 L9.96833846,10.0490996 L16.5108251,2.571972 L9.96833846,10.0490996 Z"
                                                            />
                                                        </svg>
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
                                                        <span className="ml-1 text-xs font-medium text-gray-600">
                                                            20.25
                                                        </span>
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
                                <li
                                    className="flex flex-no-wrap items-center pr-3 text-black rounded-lg cursor-pointer mt-200 py-65 hover:bg-gray-200"
                                    style={{ paddingTop: '0.65rem', paddingBottom: '0.65rem' }}
                                >
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
                                                        <span className="ml-1 text-xs font-medium text-gray-600">
                                                            2.28
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="flex justify-between text-sm leading-none truncate">
                                                    <span>Writing...</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li
                                    className="flex flex-no-wrap items-center pr-3 text-black rounded-lg cursor-pointer mt-200 py-65 hover:bg-gray-200"
                                    style={{ paddingTop: '0.65rem', paddingBottom: '0.65rem' }}
                                >
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
                                                        <span className="ml-1 text-xs font-medium text-gray-600">
                                                            12.52
                                                        </span>
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
                                <li
                                    className="flex flex-no-wrap items-center pr-3 text-black rounded-lg cursor-pointer mt-200 py-65 hover:bg-gray-200"
                                    style={{ paddingTop: '0.65rem', paddingBottom: '0.65rem' }}
                                >
                                    <div className="flex justify-between w-full focus:outline-none">
                                        <div className="flex justify-between w-full">
                                            <div className="relative flex items-center justify-center w-12 h-12 ml-2 mr-3 text-xl font-semibold text-white bg-blue-500 rounded-full flex-no-shrink">
                                                <img
                                                    className="object-cover w-12 h-12 rounded-full"
                                                    src="https://images.unsplash.com/photo-1589127097756-b2750896a728?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=100"
                                                    alt=""
                                                />
                                                <div
                                                    className="absolute bottom-0 right-0 flex items-center justify-center bg-white rounded-full"
                                                    style={{ width: '0.80rem', height: '0.80rem' }}
                                                >
                                                    <div
                                                        className="bg-green-500 rounded-full"
                                                        style={{ width: '0.6rem', height: '0.6rem' }}
                                                    ></div>
                                                </div>
                                            </div>
                                            <div className="items-center flex-1 min-w-0">
                                                <div className="flex justify-between mb-1">
                                                    <h2 className="text-sm font-semibold text-black">Mark Green</h2>
                                                    <div className="flex">
                                                        <span className="ml-1 text-xs font-medium text-gray-600">
                                                            05:41
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="flex justify-between text-sm leading-none truncate">
                                                    <span>I do not remember anything</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* <!-- center --> */}
                    <div className="relative flex flex-col flex-1">
                        <div className="z-20 flex flex-grow-0 flex-shrink-0 w-full pr-3 bg-white border-b">
                            <div className="w-12 h-12 mx-4 my-2 bg-blue-500 bg-center bg-no-repeat bg-cover rounded-full cursor-pointer" />
                        </div>
                        <div className="flex flex-col justify-center flex-1 overflow-hidden cursor-pointer">
                            <div className="overflow-hidden text-base font-medium leading-tight text-gray-600 whitespace-no-wrap">
                                Karen
                            </div>
                            <div className="overflow-hidden text-sm font-medium leading-tight text-gray-600 whitespace-no-wrap">
                                Online
                            </div>
                        </div>
                        <div className="relative hidden w-48 pl-2 my-3 border-l-2 border-blue-500 cursor-pointer lg:block">
                            <div className="text-base font-medium text-blue-500">Pinned message</div>
                            <div className="text-sm font-normal text-gray-800">Today star contest</div>
                        </div>
                    </div>
                </div>

                {/* <!-- right --> */}
                <nav
                    className="right-0 flex flex-col hidden pb-0 bg-white border-l border-gray-300 xl:block"
                    style={{ width: '24rem' }}
                >
                    <div className="flex items-center justify-between w-full p-3">
                        <button className="p-2 text-gray-500 rounded-full focus:outline-none hover:text-gray-600 hover:bg-gray-200">
                            <svg
                                className="w-6 h-6 text-gray-600 fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fillRule="nonzero"
                                    d="M5.20970461,5.38710056 L5.29289322,5.29289322 C5.65337718,4.93240926 6.22060824,4.90467972 6.61289944,5.20970461 L6.70710678,5.29289322 L12,10.585 L17.2928932,5.29289322 C17.6834175,4.90236893 18.3165825,4.90236893 18.7071068,5.29289322 C19.0976311,5.68341751 19.0976311,6.31658249 18.7071068,6.70710678 L13.415,12 L18.7071068,17.2928932 C19.0675907,17.6533772 19.0953203,18.2206082 18.7902954,18.6128994 L18.7071068,18.7071068 C18.3466228,19.0675907 17.7793918,19.0953203 17.3871006,18.7902954 L17.2928932,18.7071068 L12,13.415 L6.70710678,18.7071068 C6.31658249,19.0976311 5.68341751,19.0976311 5.29289322,18.7071068 C4.90236893,18.3165825 4.90236893,17.6834175 5.29289322,17.2928932 L10.585,12 L5.29289322,6.70710678 C4.93240926,6.34662282 4.90467972,5.77939176 5.20970461,5.38710056 L5.29289322,5.29289322 L5.20970461,5.38710056 Z"
                                />
                            </svg>
                        </button>
                        <div className="ml-4 mr-auto text-lg font-medium">Info</div>
                        <button
                            type="button"
                            className="p-2 text-gray-500 rounded-full focus:outline-none hover:text-gray-600 hover:bg-gray-200"
                        >
                            <svg
                                className="w-6 h-6 text-gray-600 fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fillRule="nonzero"
                                    d="M7.70710678,20.7071068 C7.5195704,20.8946432 7.26521649,21 7,21 L4,21 C3.44771525,21 3,20.5522847 3,20 L3,17 C3,16.7347835 3.10535684,16.4804296 3.29289322,16.2928932 L16.5857864,3 C17.3257272,2.26005924 18.5012114,2.22111499 19.2869988,2.88316725 L19.4142136,3 L21,4.58578644 C21.7399408,5.3257272 21.778885,6.50121136 21.1168328,7.28699879 L21,7.41421356 L7.70710678,20.7071068 Z M5,17.4142136 L5,19 L6.58578644,19 L16.5857864,9 L15,7.41421356 L5,17.4142136 Z M18,4.41421356 L16.414,5.99921356 L18,7.58521356 L19.5857864,6 L18,4.41421356 Z"
                                />
                            </svg>
                        </button>
                        <button
                            type="button"
                            className="p-2 ml-1 text-gray-500 rounded-full focus:outline-none hover:text-gray-600 hover:bg-gray-200"
                        >
                            <svg
                                className="w-6 h-6 text-gray-600 fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fillRule="nonzero"
                                    d="M12,16 C13.1045695,16 14,16.8954305 14,18 C14,19.1045695 13.1045695,20 12,20 C10.8954305,20 10,19.1045695 10,18 C10,16.8954305 10.8954305,16 12,16 Z M12,10 C13.1045695,10 14,10.8954305 14,12 C14,13.1045695 13.1045695,14 12,14 C10.8954305,14 10,13.1045695 10,12 C10,10.8954305 10.8954305,10 12,10 Z M12,4 C13.1045695,4 14,4.8954305 14,6 C14,7.1045695 13.1045695,8 12,8 C10.8954305,8 10,7.1045695 10,6 C10,4.8954305 10.8954305,4 12,4 Z"
                                />
                            </svg>
                        </button>
                    </div>
                    <div>
                        <div className="flex justify-center mb-4">
                            <button
                                type="button"
                                className="content-center block w-32 h-32 p-1 overflow-hidden text-center rounded-full focus:outline-none"
                            >
                                <img
                                    className="content-center object-cover w-full h-full border-2 border-gray-200 rounded-full"
                                    src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=50"
                                    alt=""
                                />
                            </button>
                        </div>
                        <p className="text-lg font-semibold text-center text-gray-800">Karen J.</p>
                        <p className="text-sm font-medium text-center text-blue-500">online</p>
                    </div>
                    <div className="flex items-center w-full px-3 mt-6">
                        <div className="px-2 text-gray-500 rounded-full hover:text-gray-600">
                            <svg
                                className="w-6 h-6 text-gray-600 fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fillRule="nonzero"
                                    d="M12,1 C18.0751322,1 23,5.92486775 23,12 C23,18.0751322 18.0751322,23 12,23 C5.92486775,23 1,18.0751322 1,12 C1,5.92486775 5.92486775,1 12,1 Z M12,3 C7.02943725,3 3,7.02943725 3,12 C3,16.9705627 7.02943725,21 12,21 C16.9705627,21 21,16.9705627 21,12 C21,7.02943725 16.9705627,3 12,3 Z M12,11 C12.5128358,11 12.9355072,11.3860402 12.9932723,11.8833789 L13,12 L13,17 C13,17.5522847 12.5522847,18 12,18 C11.4871642,18 11.0644928,17.6139598 11.0067277,17.1166211 L11,17 L11,12 C11,11.4477153 11.4477153,11 12,11 Z M12,6.5 C12.8284271,6.5 13.5,7.17157288 13.5,8 C13.5,8.82842712 12.8284271,9.5 12,9.5 C11.1715729,9.5 10.5,8.82842712 10.5,8 C10.5,7.17157288 11.1715729,6.5 12,6.5 Z"
                                />
                            </svg>
                        </div>
                        <div className="ml-4">
                            <div className="mr-auto text-sm font-semibold text-gray-800">25 y.o traveler</div>
                            <div className="mt-1 mr-auto text-sm font-semibold leading-none text-gray-600">Bio</div>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center w-full px-3 mt-4">
                            <div className="px-2 text-gray-500 rounded-full hover:text-gray-600">
                                <svg
                                    className="w-6 h-6 text-gray-600 fill-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fillRule="nonzero"
                                        d="M12,1 C18.0751322,1 23,5.92486775 23,12 C23,15.2534621 21.3575416,17.4078375 19.0415827,17.5042247 C17.5448049,17.5665187 16.2418767,16.729824 15.5433162,15.3661459 C14.6550197,16.3039294 13.3958222,16.8888889 12,16.8888889 C9.29994122,16.8888889 7.11111111,14.7000588 7.11111111,12 C7.11111111,9.29994122 9.29994122,7.11111111 12,7.11111111 C13.1311057,7.11111111 14.1724943,7.49523561 15.000833,8.14015176 L15,8 C15,7.44771525 15.4477153,7 16,7 C16.5128358,7 16.9355072,7.38604019 16.9932723,7.88337887 L17,8 L17,13 C17,14.5880914 17.9057778,15.5497641 18.9584173,15.5059546 C20.0913022,15.4588053 21,14.2668872 21,12 C21,7.02943725 16.9705627,3 12,3 C7.02943725,3 3,7.02943725 3,12 C3,16.9705627 7.02943725,21 12,21 C12.7993259,21 13.583948,20.8960375 14.3403366,20.6929627 C14.8737319,20.549757 15.4222254,20.8660682 15.5654311,21.3994635 C15.7086368,21.9328588 15.3923256,22.4813523 14.8589303,22.624558 C13.9337959,22.8729377 12.9748353,23 12,23 C5.92486775,23 1,18.0751322 1,12 C1,5.92486775 5.92486775,1 12,1 Z M12,9.11111111 C10.4045107,9.11111111 9.11111111,10.4045107 9.11111111,12 C9.11111111,13.5954893 10.4045107,14.8888889 12,14.8888889 C13.5954893,14.8888889 14.8888889,13.5954893 14.8888889,12 C14.8888889,10.4045107 13.5954893,9.11111111 12,9.11111111 Z"
                                    />
                                </svg>
                            </div>
                            <div>
                                <div className="ml-4 mr-auto text-sm font-semibold text-gray-800">@karen</div>
                                <div className="mt-1 ml-4 mr-auto text-sm font-semibold leading-none text-gray-600">
                                    Username
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
}
