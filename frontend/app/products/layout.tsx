"use client";

import {DashboardLayout} from '@/components/layout/dashboard-layout';
import React from "react";

export default function Layout({
                                   children,
                               }: {
    children: React.ReactNode
}) {
    return (
        <DashboardLayout>{children}</DashboardLayout>
    )
}