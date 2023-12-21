'use client';
import React from 'react';
import { ManageLayoutStyle } from '@/Style';

const { MainContainer } = ManageLayoutStyle;

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return <MainContainer>{children}</MainContainer>;
}
