'use client'; // <===== REQUIRED

import React from "react";
import {BreadcrumbItem, Breadcrumbs} from "@nextui-org/react";

//add displat name
const BreadcrumbComponent = () => {
    return (
        <Breadcrumbs>
            <BreadcrumbItem>Trang chủ</BreadcrumbItem>
            <BreadcrumbItem>Nhà cửa và đời sống</BreadcrumbItem>
            <BreadcrumbItem>Nhà bếp</BreadcrumbItem>
        </Breadcrumbs>
    );
}

BreadcrumbComponent.displayName = 'BreadcrumbComponent';

export default BreadcrumbComponent;