import {NavbarWrapper} from "@/components/navbar/navbar";
import React from "react";

export default function ProductLayout({
                                          children,
                                      }: {
    children: React.ReactNode;
}) {
    return (
        <><NavbarWrapper/>
            <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
                <div className="text-center justify-center">
                    {children}
                </div>
            </section>
        </>
    );
}
