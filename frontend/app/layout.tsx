import "@/styles/globals.css";
import {Metadata, Viewport} from "next";
import {siteConfig} from "@/config/site";
import {Providers} from "./providers";
import React from "react";


export const metadata: Metadata = {
    title: {
        default: siteConfig.name,
        template: `%s - ${siteConfig.name}`,
    },
    description: siteConfig.description,
    // icons: {
    //     icon: "/favicon.ico",
    //     shortcut: "/favicon-16x16.png",
    //     apple: "/apple-touch-icon.png",
    // },
};
export const viewport: Viewport = {
    themeColor: [
        {media: "(prefers-color-scheme: light)", color: "white"},
        {media: "(prefers-color-scheme: dark)", color: "black"},
    ],
}


export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
        <head><title>

        </title></head>
        <body>


        <Providers>
            {children}
        </Providers>
        </body>
        </html>
    );
}
