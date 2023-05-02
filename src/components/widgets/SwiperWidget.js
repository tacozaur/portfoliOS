import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css/pagination";
import 'swiper/css';
import SwiperCore, { Autoplay } from 'swiper';


SwiperCore.use([Autoplay]); // Initialize Swiper Pagination module


const SwiperWidget = (props) => {

    return (
        <>
        <Swiper
            spaceBetween={0}
            slidesPerView={1}
            className='rounded-apple'
            autoplay={{ delay: 6000, disableOnInteraction: false}}
        >
            <SwiperSlide>
                <img className='rounded-apple object-cover' src={props.firstImg} alt='Image 1'/>
            </SwiperSlide>
            <SwiperSlide>
                <img className='rounded-apple object-cover' src={props.secondImg} alt='Image 2'/>
            </SwiperSlide>
            <SwiperSlide>
                <img className='rounded-apple object-cover' src={props.thirdImg} alt='Image 3'/>
            </SwiperSlide>
        </Swiper>
        </>
    )
}

export default SwiperWidget;