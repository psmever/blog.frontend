import Image from 'next/image';
import React from 'react';

export default function PostPage() {
    return (
        <div className="mb-20">
            <div className="max-w-screen-2xl mx-auto md:p-5">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 gap-3">
                    {[...Array(20)].map(() => {
                        return (
                            <div className="rounded overflow-hidden shadow-lg" key={(Math.random() + 1).toString(36).substring(7)}>
                                <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                    <div className="flex w-full">
                                        <Image className="object-cover rounded-lg w-full" src="https://loremflickr.com/320/240" width={320} height={240} alt="" />
                                    </div>

                                    <div className="p-5">
                                        <a href="#">
                                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                                        </a>
                                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
