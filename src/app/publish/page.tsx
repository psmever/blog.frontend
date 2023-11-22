"use client";
import Image from "next/image";

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col">
            <header className="p-0">
                <nav className="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                        <a
                            href="#"
                            className="flex items-center space-x-3 rtl:space-x-reverse"
                        >
                            <Image
                                src="https://flowbite.com/docs/images/logo.svg"
                                width="32"
                                height="32"
                                className="h-8"
                                alt="Flowbite Logo"
                            />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                                NicePage
                            </span>
                        </a>
                        <button
                            data-collapse-toggle="navbar-solid-bg"
                            type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            aria-controls="navbar-solid-bg"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className="w-5 h-5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 17 14"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M1 1h15M1 7h15M1 13h15"
                                />
                            </svg>
                        </button>
                        <div
                            className="hidden w-full md:block md:w-auto"
                            id="navbar-solid-bg"
                        >
                            <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
                                <li>
                                    <a
                                        href="#"
                                        className="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
                                        aria-current="page"
                                    >
                                        포스트
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                    >
                                        일상
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                    >
                                        블로그
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            <main className="flex-1 bg-indigo-50 dark:bg-gray-700 p-2">
                <div className="mb-20">
                    <div className="max-w-screen-2xl mx-auto p-5 sm:p-10 md:p-5">
                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 gap-3">
                            {[...Array(20)].map(() => {
                                return (
                                    <div
                                        className="rounded overflow-hidden shadow-lg"
                                        key={(Math.random() + 1)
                                            .toString(36)
                                            .substring(7)}
                                    >
                                        <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                            <div className="flex w-full p-1">
                                                <Image
                                                    className="object-cover rounded-lg w-full"
                                                    src="https://loremflickr.com/320/240"
                                                    width={320}
                                                    height={240}
                                                    alt=""
                                                />
                                            </div>

                                            <div className="p-5">
                                                <a href="#">
                                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                                        Noteworthy technology
                                                        acquisitions 2021
                                                    </h5>
                                                </a>
                                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                                    Here are the biggest
                                                    enterprise technology
                                                    acquisitions of 2021 so far,
                                                    in reverse chronological
                                                    order.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </main>

            <footer className="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                Footer
            </footer>
        </div>
    );
}

/*
return (
    <section className="bg-gray-100 dark:bg-gray-900 py-10 px-12">
      <div className="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div className="my-8 rounded shadow-lg shadow-gray-200 dark:shadow-gray-900 bg-white dark:bg-gray-800 duration-300 hover:-translate-y-1">
          <a href="#" className="cursor-pointer">
            <figure>
              <Image
                src="https://loremflickr.com/320/240"
                alt=""
                width={320}
                height={240}
              />

              <figcaption className="p-4">
                <p className="text-lg mb-4 font-bold leading-relaxed text-gray-800 dark:text-gray-300"></p>

                <small className="leading-5 text-gray-500 dark:text-gray-400"></small>
              </figcaption>
            </figure>
          </a>
        </div>
      </div>
    </section>
  );
 */
