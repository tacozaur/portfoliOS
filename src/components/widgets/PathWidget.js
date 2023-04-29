import React from 'react';

import '../../index.css'

import { FaHtml5, FaCss3Alt, FaJs, FaReact } from 'react-icons/fa';
import FaFigma from '../../assets/logos/figma-logo.png'
import useDarkMode from '../../hooks/useDarkMode';


const PathWidget = ({theme}) => {

    useDarkMode(theme)

    return (
        <div className={`
        overflow-hidden
        gap-6
        sm:gap-10
        md:gap-4
        lg:gap-8 p-8 flex flex-col h-full text-sm lg:text-base
        `}>
            <div>
                <h1 className='font-bold text-26 pb-4 sm:pb-0'>Learning Route</h1>
            </div>
            <div className='flex flex-col gap-4 sm:gap-1 sm:text-center border-neutral-300 pb-2 xl:pb-6 border-b-1'>
                <div className='flex gap-2'>
                    <div className='w-12 h-auto text-3xl'>
                        <FaJs className='text-yellow-400'/>
                        <FaReact className='text-default-teal'/>
                    </div>
                    <div className='
                    text-lg
                    sm:text-lg sm:leading-4.5
                    md:text-md md:leading-4.5 text-left font-medium
                    '>
                        META Front-End Developer Professional Certificate
                    </div>
                </div>
                <div className='
                sm:text-md
                md:text-xs text-gray-500 font-bold
                '>
                    <p className='dark:text-default-orange2'>BADGE AQUIRED</p>
                </div>
            </div>
            <div className='flex flex-col gap-4 sm:gap-1 sm:text-center border-neutral-300 pb-2 xl:pb-6 border-b-1'>
                <div className='flex gap-2'>
                    <div className='w-12 h-auto text-3xl'>
                        <FaHtml5 className='text-orange-600'/>
                        <FaCss3Alt className='text-blue-600'/>
                    </div>
                    <div className='
                    text-lg
                    sm:text-lg sm:leading-4.5
                    md:text-md md:leading-4.5 text-left font-medium
                    '>
                        Build Responsive Websites with HTML and CSS
                    </div>
                </div>
                <div className='
                sm:text-md
                md:text-xs text-gray-500 font-bold
                '>
                    <p className='dark:text-default-orange2'>BADGE AQUIRED</p>
                </div>
            </div>
            <div className='flex flex-col gap-4 sm:gap-1 sm:text-center border-neutral-300 pb-2 xl:pb-6'>
                <div className='flex gap-2'>
                    <div className='w-16 md:w-24 h-auto'>
                        <img src={FaFigma} alt='figma-logo-image'/>
                    </div>
                    <div className='
                    text-lg
                    sm:text-lg sm:leading-4.5
                    md:text-md md:leading-4.5 text-left font-medium
                    '>
                        Complete Web & Mobile UI/UX Design by ZTM Academy
                    </div>
                </div>
                <div className='
                sm:text-md
                md:text-xs text-gray-500 font-bold
                '>
                    <p className='dark:text-default-orange2'>BADGE AQUIRED</p>
                </div>
            </div>
        </div>
    )
}

export default PathWidget