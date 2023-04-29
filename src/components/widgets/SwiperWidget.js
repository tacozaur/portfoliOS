import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css/pagination";
import 'swiper/css';
import SwiperCore, { Pagination, Autoplay } from 'swiper';


SwiperCore.use([Pagination, Autoplay]); // Initialize Swiper Pagination module


const SwiperWidget = (props) => {

    return (
        <>
        <style>
            {`
            /* Style for Swiper active bullet */
            .swiper-pagination-bullet-active {
                background-color: rgba(255, 255, 255, .9); /* Change this color to customize the active bullet */
            }
            .swiper-pagination-bullet {
                background-color: rgba(255, 255, 255, 1);
            }
            `}
        </style>
        <Swiper
            spaceBetween={0}
            slidesPerView={1}
            pagination={{ dynamicBullets: true }}
            className='rounded-apple'
            autoplay={{ delay: 6000, disableOnInteraction: false}}
        >
            <SwiperSlide>
                <img src={props.firstImg} alt='Image 1'/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={props.secondImg} alt='Image 2'/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={props.thirdImg} alt='Image 3'/>
            </SwiperSlide>
        </Swiper>
        </>
    )
}

export default SwiperWidget;