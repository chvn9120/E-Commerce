"use client";

import * as React from "react";
import {NextUIProvider} from "@nextui-org/system";

import {useRouter} from 'next/navigation'
import {ThemeProvider as NextThemesProvider} from "next-themes";

import {ThemeProviderProps} from "next-themes/dist/types";


export interface ProvidersProps {
    children: React.ReactNode; // This is the children of the provider
    themeProps?: ThemeProviderProps; // This is the theme provider props
    layout?: React.ComponentType<any> // This is the layout component
}


export function Providers({children, themeProps, layout}: ProvidersProps) {
    const router = useRouter(); // This is the router


    // @ts-ignore
    let nextUIProvider =
        <NextUIProvider>
            <NextThemesProvider defaultTheme="system" attribute="class" {...themeProps}>
                {/*Layout*/}
                {/*{layout ? <layout>{children}</layout> : children}*/}
                {children}

            </NextThemesProvider>
        </NextUIProvider>;
    return nextUIProvider;
}
