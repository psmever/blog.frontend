import React from 'react';

export default function RightMenuComponent() {
    return (
        <nav
            className="right-0 flex flex-col hidden pb-0 transition-all duration-500 ease-in-out transform bg-white border-l border-gray-300  shadow-xl lg:block"
            style={{ width: '24rem' }}
        >
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
    );
}
