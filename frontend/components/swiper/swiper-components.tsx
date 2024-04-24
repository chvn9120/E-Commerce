import React from "react";
import {Navigation, Pagination, Scrollbar, A11y} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {Image} from "@nextui-org/react";

interface SwiperComponentProps {
    images: string[];
}

const SwiperComponent: React.FC<SwiperComponentProps> = ({images}) => {
    return (
        <Swiper
            className="z-20"
            style={{width: '800px', height: '300px'}}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{clickable: true}}
            scrollbar={{draggable: true}}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            {images.map((image, index) => (
                <SwiperSlide className="" key={index}>
                    <Image
                        className="overflow-visible"
                        isBlurred
                        isZoomed
                        // width={240}
                        src={image}
                        alt="NextUI Album Cover"
                        // className="m-5"
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default SwiperComponent;