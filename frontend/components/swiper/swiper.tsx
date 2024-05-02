"use client"; // <===== REQUIRED

import React from "react";


// import Swiper core and required modules
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import SwiperComponent from "@/components/swiper/swiper-components";

//Image array of local image
let images = [
    '/src/anh-1-phong-tro-nho.jpg',
    '/src/anh-2-phong-tro-rong.jpg',
    '/src/anh-3-phan-loai-theo-cong-nang.jpg',
]

export default () => {
    return (
        <div className="p-2 z-30 ">
            <SwiperComponent images={images}/>
        </div>
    );
};