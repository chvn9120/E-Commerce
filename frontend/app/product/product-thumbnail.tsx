'use client'

import React, {useState} from 'react';
// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

//using style.css
import '@/styles/styles.css';
// import required modules
import {FreeMode, Navigation, Thumbs} from 'swiper/modules';
import {Image} from "@nextui-org/react";

export default function SwiperThumbnail() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    return (
        <div className="relative shadow-black/5 shadow-none rounded-large"
             style={{
                 width: '100%',
                 maxWidth: 'fit-content',
             }
             }
        >
            <Swiper style={{
                width: '100%',
                height: '100%',
                // padding: '10px',
            }}

                    loop={true}
                    spaceBetween={10}
                    navigation={true}
                    thumbs={{swiper: thumbsSwiper}}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper2"
            >
                <SwiperSlide>
                    <Image isZoomed isBlurred src="https://swiperjs.com/demos/images/nature-1.jpg"/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image isBlurred src="https://swiperjs.com/demos/images/nature-2.jpg"/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image isBlurred src="https://swiperjs.com/demos/images/nature-3.jpg"/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image isBlurred src="https://swiperjs.com/demos/images/nature-4.jpg"/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image isBlurred src="https://swiperjs.com/demos/images/nature-5.jpg"/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image isBlurred src="https://swiperjs.com/demos/images/nature-6.jpg"/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image isBlurred src="https://swiperjs.com/demos/images/nature-7.jpg"/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image isBlurred src="https://swiperjs.com/demos/images/nature-8.jpg"/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image isBlurred src="https://swiperjs.com/demos/images/nature-10.jpg"/>
                </SwiperSlide>
            </Swiper>
            <Swiper
                // @ts-ignore
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper "
            >
                <SwiperSlide>
                    <Image src="https://swiperjs.com/demos/images/nature-1.jpg"/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="https://swiperjs.com/demos/images/nature-2.jpg"/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="https://swiperjs.com/demos/images/nature-3.jpg"/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="https://swiperjs.com/demos/images/nature-4.jpg"/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="https://swiperjs.com/demos/images/nature-5.jpg"/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="https://swiperjs.com/demos/images/nature-6.jpg"/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="https://swiperjs.com/demos/images/nature-7.jpg"/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="https://swiperjs.com/demos/images/nature-8.jpg"/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="https://swiperjs.com/demos/images/nature-9.jpg"/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="https://swiperjs.com/demos/images/nature-10.jpg"/>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
