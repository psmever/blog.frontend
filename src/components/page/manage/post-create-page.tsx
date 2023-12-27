export default function ManagePostCreatePage() {
    return (
        <div className="flex flex-nowrap w-full items-center justify-center p-0 h-screen">
            <div className="flex flex-col w-full h-screen border-r border-dotted border-gray-500 px-2 space-y-2 py-2">
                <div className="flex w-full">
                    <input type="text" className="block w-full rounded-md bg-gray-700 text-gray-900 text-2xl placeholder:text-gray-400 outline-none dark:text-white" placeholder="제목을 입력해 주세요" />
                </div>
                <div className="flex flex-nowrap w-full gap-2">
                    <div className="bg-transparent hover:bg-blue-500 text-xs text-blue-700 hover:text-white py-1 px-2 border border-gray-400 rounded-full hover:border-transparent inline-flex items-center gap-1 dark:text-white cursor-pointer">
                        Javascript
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3 h-3" onClick={() => console.debug('1')}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </div>
                    <div className="bg-transparent hover:bg-blue-500 text-xs text-blue-700 hover:text-white py-1 px-2 border border-gray-400 rounded-full hover:border-transparent inline-flex items-center gap-1 dark:text-white cursor-pointer">
                        React
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3 h-3" onClick={() => console.debug('1')}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </div>
                    <div className="bg-transparent hover:bg-blue-500 text-xs text-blue-700 hover:text-white py-1 px-2 border border-gray-400 rounded-full hover:border-transparent inline-flex items-center gap-1 dark:text-white cursor-pointer">
                        Nextjs
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3 h-3" onClick={() => console.debug('1')}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </div>
                    <input type="text" className="block w-full rounded-md bg-gray-700 text-gray-900 text-sm placeholder:text-gray-400 outline-none dark:text-white" placeholder="tag를 입력해 주세요" />
                </div>
                <div className="flex flex-nowrap w-full gap-2 h-full">
                    <textarea rows={20} className="block w-full rounded-md bg-gray-700 text-gray-900 text-sm placeholder:text-gray-400 outline-none dark:text-white" />
                </div>
                <div className="flex w-full gap-2 border-t border-dotted border-gray-500">
                    <div className="flex flex-nowrap w-full gap-2 pt-2">
                        <div className="flex w-1/2 items-center justify-start">
                            <button className="bg-transparent text-sm hover:bg-blue-500 text-blue-700 dark:text-gray-400 hover:text-white py-1 px-3 border border-gray-600 hover:border-transparent rounded">게시</button>
                        </div>
                        <div className="flex w-1/2 items-center justify-end gap-2">
                            <button className="bg-transparent text-sm hover:bg-blue-500 text-blue-700 dark:text-gray-400 hover:text-white py-1 px-3 border border-gray-600 hover:border-transparent rounded">임시저장</button>
                            <button className="bg-transparent text-sm hover:bg-blue-500 text-blue-700 dark:text-gray-400 hover:text-white py-1 px-3 border border-gray-600 hover:border-transparent rounded">저장</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden h-screen lg:flex w-full">2</div>
        </div>
    );
}
