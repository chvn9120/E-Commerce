'use client'; // This is a comment

import SwiperComp from "@/components/swiper/swiper";
import Breadcumb from "@/components/breadcrumbs/breadcumb";
import MyCard from "@/components/filterbar/card";
import React from "react";
import Select from "@/components/filterbar/select";
import ButtonGroup from "@/components/filterbar/button-group";
import CardItem from "@/components/product-grid/card-items";
import MyPagination from "@/components/product-grid/Pagination";
import {NavbarWrapper} from "@/components/navbar/navbar";
import {useRouter} from "next/router";


export default function Home() {
    // const router = useRouter();

    return (
        <div
            className={"bg-background bg-radial"}
        >
            <NavbarWrapper/>

            {/*Banner*/}
            <div className="flex items-center justify-center ">
                <SwiperComp/>
            </div>

            {/*Breadcumb*/}
            <div className="ml-40 mt-10">
                <Breadcumb/>
            </div>


            {/*Filter bar*/}
            <div className="flex items-center justify-center mt-6">
                <MyCard>
                    <ButtonGroup/>

                    <Select>
                        {/* You can pass children here */}
                        <p></p>
                    </Select>
                </MyCard>
            </div>

            {/*Grid of Product*/}
            <div className="relative flex min-h-dvh flex-col bg-background bg-radial pt-16">
                <div className="flex items-center h-auto dark justify-center p-4">
                    <div
                        className={"my-auto flex h-full w-full max-w-7xl flex-col gap-2 p-4"}
                    >
                        <div
                            className={"grid w-full grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"}
                        >
                            <CardItem
                                // router={router}
                            >
                                <h1>
                                    Paris
                                </h1>
                                <p>Price: 123$</p>

                            </CardItem>

                            <CardItem
                                // router={router}
                            >
                                <h1>
                                    Paris
                                </h1>
                                <p>Price: 123$</p>

                            </CardItem>

                            <CardItem
                                // router={router}
                            >
                                <h1>
                                    Paris
                                </h1>
                                <p>Price: 123$</p>

                            </CardItem>


                            <CardItem
                                // router={router}
                            >
                                <h1>
                                    Paris
                                </h1>
                                <p>Price: 123$</p>

                            </CardItem>

                            <CardItem
                                // router={router}
                            >
                                <h1>
                                    Paris
                                </h1>
                                <p>Price: 123$</p>

                            </CardItem>

                            <CardItem
                                // router={router}
                            >
                                <h1>
                                    Paris
                                </h1>
                                <p>Price: 123$</p>

                            </CardItem>

                            <CardItem
                                // router={router}
                            >
                                <h1>
                                    Paris
                                </h1>
                                <p>Price: 123$</p>

                            </CardItem>

                            <CardItem
                                // router={router}
                            >
                                <h1>
                                    Paris
                                </h1>
                                <p>Price: 123$</p>

                            </CardItem>
                        </div>

                    </div>

                </div>

            </div>

            <div className="flex items-center justify-center mb-14">
                <MyPagination/>
            </div>
        </div>

    );
}
