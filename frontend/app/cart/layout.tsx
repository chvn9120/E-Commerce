import {NavbarWrapper} from "@/components/navbar/navbar";
import React from "react";

export default function CartLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <><NavbarWrapper/>
            <section className="flex items-center dark h-screen justify-center p-4">
                <div className="max-w-8xl h-full w-full px-2 lg:px-24">
                    {children}
                </div>
            </section>
        </>
    );
}
