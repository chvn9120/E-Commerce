'use client'; // <===== REQUIRED

import React from "react";
import {Breadcrumbs, BreadcrumbItem} from "@nextui-org/react";

export default () => {
    return (
        <Breadcrumbs>
            <BreadcrumbItem>Trang chủ</BreadcrumbItem>
            <BreadcrumbItem>Nhà cửa và đời sống</BreadcrumbItem>
            <BreadcrumbItem>Nhà bếp</BreadcrumbItem>
        </Breadcrumbs>
    );
}