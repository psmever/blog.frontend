'use client';
import React from 'react';
import { AuthProvider } from '@/Provider';

export default function ManagePostLayout({ children }: { children: React.ReactNode }) {
    return <AuthProvider>{children}</AuthProvider>;
}
