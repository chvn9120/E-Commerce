'use client'; // This is a comment

import Swiper from "@/components/swiper/swiper";
import Breadcumb from "@/components/breadcrumbs/breadcumb";
import MyCard from "@/components/filterbar/card";
import React from "react";
import Select from "@/components/filterbar/select";
import ButtonGroup from "@/components/filterbar/button-group";
import CardItem from "@/components/product-grid/card-items";
import MyPagination from "@/components/product-grid/Pagination";
import {NavbarWrapper} from "@/components/navbar/navbar";
import SwiperComp from "@/components/swiper/swiper";


export default function Home() {
    return (
        <div>
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
                        {/*<MySelectItem>*/}
                        {/*    /!* You can pass children here *!/*/}
                        {/*    <p>Child content</p>*/}
                        {/*</MySelectItem>*/}
                    </Select>
                </MyCard>
            </div>

            {/*Grid of Product*/}
            <div className="flex place-content-center mt-6">
                <div className="grid grid-cols-4 grid-rows-2 gap-5">
                    <CardItem>
                        <h1>
                            Paris
                        </h1>
                        <p>Price: 123$</p>

                    </CardItem>

                    <CardItem>
                        <p>Product 2</p>
                    </CardItem>

                    <CardItem>
                        <p>Product 3</p>
                    </CardItem>

                    <CardItem>
                        <p>Product 4</p>

                    </CardItem>

                    <CardItem>
                        <p>Product 5</p>

                    </CardItem>

                    <CardItem>
                        <p>Product 6</p>
                    </CardItem>
                </div>

            </div>

            <div className="flex items-center justify-center"
                 style={{marginTop: '20px'}}
            >
                <MyPagination/>
            </div>

        </div>
    );
}
