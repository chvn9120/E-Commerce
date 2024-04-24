"use client"; // <===== REQUIRED

import React from "react";


// import Swiper core and required modules
import {Navigation, Pagination, Scrollbar, A11y} from 'swiper/modules';

import {Swiper, SwiperSlide} from 'swiper/react';

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
        // <Swiper
        //     // install Swiper modules
        //     modules={[Navigation, Pagination, Scrollbar, A11y]}
        //     spaceBetween={50}
        //     slidesPerView={3}
        //     navigation
        //     pagination={{clickable: true}}
        //     scrollbar={{draggable: true}}
        //     onSwiper={(swiper) => console.log(swiper)}
        //     onSlideChange={() => console.log('slide change')}
        // >
        //     <SwiperSlide>Slide 1</SwiperSlide>
        //     <SwiperSlide>Slide 2</SwiperSlide>
        //     <SwiperSlide>Slide 3</SwiperSlide>
        //     <SwiperSlide>Slide 4</SwiperSlide>
        //
        // </Swiper>

        <div className="overflow-visible p-2">
            <SwiperComponent images={images}/>
        </div>
    );
};