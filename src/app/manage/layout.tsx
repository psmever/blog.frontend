import React from 'react';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return <main className="flex-1 bg-indigo-50 dark:bg-gray-700">{children}</main>;
}
