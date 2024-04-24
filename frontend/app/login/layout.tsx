import {NavbarWrapper} from "@/components/navbar/navbar";
import React from "react";

export default function PricingLayout({
                                          children,
                                      }: {
    children: React.ReactNode;
}) {
    return (
        <><NavbarWrapper/>
            {children}
        </>
    );
}