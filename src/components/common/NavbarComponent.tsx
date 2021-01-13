import React from 'react';
import { NavbarStyle } from '@styles';

const NavbarComponent = () => {
    return (
        <nav className={NavbarStyle.NavbarNav}>
            <div className={NavbarStyle.MainWapper}>
                <div className={NavbarStyle.NavBox}>
                    <div className={NavbarStyle.MobileButtonBox}>
                        {/* <!-- Mobile menu button--> */}
                        <button className={NavbarStyle.MobileButton} aria-expanded="false">
                            <span className={NavbarStyle.SrOly}>Open main menu</span>
                            {/* <!-- Icon when menu is closed. --> */}
                            {/* <!--
                                Heroicon name: menu

                                Menu open: "hidden", Menu closed: "block"
                            --> */}
                            <svg
                                className="block w-6 h-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                            {/* <!-- Icon when menu is open. --> */}
                            {/* <!--
                                Heroicon name: x

                                Menu open: "block", Menu closed: "hidden"
                            --> */}
                            <svg
                                className="hidden w-6 h-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className={NavbarStyle.LogoMenuBox}>
                        <div className={NavbarStyle.LogoBox}>
                            {/* <img
                                className="block w-auto h-8 lg:hidden"
                                src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                                alt="Workflow"
                            /> */}
                            <img
                                className={NavbarStyle.MobileLogoImage}
                                src={process.env.PUBLIC_URL + `/assets/images/image_logo.png`}
                                alt="NicePage"
                            />
                            {/* <img
                                className="hidden w-auto h-8 lg:block"
                                src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                                alt="Workflow"
                            /> */}
                            <img
                                className={NavbarStyle.LogoImage}
                                src={process.env.PUBLIC_URL + `/assets/images/image_logo.png`}
                                alt="NicePage"
                            />
                            <img
                                className={NavbarStyle.TextLogoImage}
                                src={process.env.PUBLIC_URL + `/assets/images/text_logo.png`}
                                alt="NicePage"
                            />

                            {/* <p className="hidden w-auto h-8 lg:block px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white">
                                PHP - NicePage
                            </p> */}
                        </div>
                        <div className={NavbarStyle.MenuBox}>
                            <div className={NavbarStyle.MenuBox}>
                                {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                                <a href="#" className={NavbarStyle.ActiveTextMenu}>
                                    Home
                                </a>
                                <a href="#" className={NavbarStyle.TextMenu}>
                                    Tag
                                </a>
                                <a href="#" className={NavbarStyle.TextMenu}>
                                    About
                                </a>
                                <a href="#" className={NavbarStyle.TextMenu}>
                                    Calendar
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className={NavbarStyle.LeftButtonBox}>
                        <button className={NavbarStyle.NotiButton}>
                            <span className={NavbarStyle.SrOly}>View notifications</span>
                            {/* <!-- Heroicon name: bell --> */}
                            <svg
                                className="w-6 h-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                                />
                            </svg>
                        </button>

                        <div className={NavbarStyle.PHPButtonBox}>
                            <button className={NavbarStyle.PHPButton} id="user-menu" aria-haspopup="true">
                                <span className={NavbarStyle.SrOly}>Open user menu</span>
                                <img
                                    className="w-8 h-8 rounded-full"
                                    src="https://media.nicepage.pe.kr/assets/blog/images/main_php.svg"
                                    alt=""
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!--
                Mobile menu, toggle classes based on menu state.

                Menu open: "block", Menu closed: "hidden"
            --> */}
            <div className={NavbarStyle.MobileMenuBox}>
                <div className={NavbarStyle.MobileMenu}>
                    {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                    <a href="#" className={NavbarStyle.MobileActiveMenu}>
                        Dashboard
                    </a>
                    <a href="#" className={NavbarStyle.MobileNonActiveMenu}>
                        Team
                    </a>
                    <a href="#" className={NavbarStyle.MobileNonActiveMenu}>
                        Projects
                    </a>
                    <a href="#" className={NavbarStyle.MobileNonActiveMenu}>
                        Calendar
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default NavbarComponent;
