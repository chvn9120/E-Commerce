"use client"

import React from "react";
import {Button} from "@nextui-org/react";


//props
interface CustomButtonProps {
    children: React.ReactNode;
    //className: string;
    className?: string;
}

export default function CustomButton({children, className}: CustomButtonProps) {
    //print
    console.log("CustomButton", children);
    console.log("CustomButton class", className);

    return (
        <Button isIconOnly={true} className={className} >{children}</Button>
    );
}

