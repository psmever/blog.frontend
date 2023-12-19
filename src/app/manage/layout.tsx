import React from 'react';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <html suppressHydrationWarning lang="en">
            <head>
                <title>blog.nicepage.pe.kr</title>
            </head>
            <body suppressHydrationWarning={true}>
                <div className="flex flex-col min-h-screen w-full">
                    <main className="flex-1 bg-indigo-50 dark:bg-gray-700">{children}</main>
                </div>
            </body>
        </html>
    );
}
