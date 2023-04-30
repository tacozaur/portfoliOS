import React from 'react';
import '../../index.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css/pagination";
import 'swiper/css';
import SwiperCore, { Pagination, Autoplay } from 'swiper';

import myFavSongImg from '../../assets/songs/nirvana-come-as-you-are.jpg'
import myFavSongImg2 from '../../assets/songs/travis-scott-nightcrawler.jpg'

import spotifyLogo from '../../assets/logos/spotify-logo.png'

SwiperCore.use([Pagination, Autoplay]); // Initialize Swiper Pagination module


const SpotifyWidget = () => {

    return (
        <>
        <Swiper
           spaceBetween={0}
           slidesPerView={1}
           pagination={{ dynamicBullets: true }}
           autoplay={{delay: 8000, disableOnInteraction: false }}
        >
            <SwiperSlide>
                <div className='
                justify-center w-280 mx-auto my-0 md:w-auto
                p-8 flex lg:flex-col gap-8 h-full text-sm lg:text-base
                '>
                    <div className='
                    items-center
                    flex-col sm:gap-16
                    md:gap-28
                    flex lg:flex-row lg:gap-8
                    '>
                        <div className='flex-1 overflow-hidden justify-center'>
                            <img className='
                            w-40 sm:w-80 sm:h-60
                            md:h-auto md:w-40
                            xl:h-12.75rem xl:w-12.75rem rounded-2xl
                            ' src={myFavSongImg2} alt='Favorite Song Image'/>
                        </div>
                        <div className='
                        flex-1 flex flex-col justify-between
                        '>
                            <div className='hidden md:block'>
                                <img className='h-12 w-12' src={spotifyLogo} alt='spotify logo image'/>
                            </div>
                            <div>
                                <div className='flex items-center gap-2 md:flex-1'>
                                <div className="boxContainer">
                                    <div className="box box1"></div>
                                    <div className="box box2"></div>
                                    <div className="box box3"></div>
                                    <div className="box box4"></div>
                                    <div className="box box5"></div>
                                </div>
                                    <h2 className='text-spotify-spotify tracking-wide font-medium text-lg'>Favorite Song</h2>
                                </div>
                                <div>
                                    <h2 className='font-extrabold text-2xl'>Nightcrawler</h2>
                                    <p className='font-medium tracking-wide'>TRAVIS SCOTT</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='
                justify-center w-280 mx-auto my-0 md:w-auto
                p-8 flex lg:flex-col gap-8 h-full text-sm lg:text-base
                '>
                    <div className='
                    items-center
                    flex-col sm:gap-16
                    md:gap-28
                    flex lg:flex-row lg:gap-8
                    '>
                        <div className='flex-1 overflow-hidden justify-center'>
                            <img className='
                            w-40 sm:w-80 sm:h-60
                            md:h-auto md:w-40
                            xl:h-12.75rem xl:w-12.75rem rounded-2xl
                            ' src={myFavSongImg} alt='Favorite Song Image'/>
                        </div>
                        <div className='
                        flex-1 flex flex-col justify-between
                        '>
                            <div className='hidden md:block'>
                                <img className='h-12 w-12' src={spotifyLogo} alt='spotify logo image'/>
                            </div>
                            <div>
                                <div className='flex items-center gap-2 md:flex-1'>
                                <div className="boxContainer">
                                    <div className="box box1"></div>
                                    <div className="box box2"></div>
                                    <div className="box box3"></div>
                                    <div className="box box4"></div>
                                    <div className="box box5"></div>
                                </div>
                                    <h2 className='text-spotify-spotify tracking-wide font-medium text-lg'>Last Played</h2>
                                </div>
                                <div>
                                    <h2 className='font-extrabold text-2xl'>Come As You Are</h2>
                                    <p className='font-medium tracking-wide'>NIRVANA</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
        </>
    )
}

export default SpotifyWidget