import React from 'react';

import '../../index.css'
import TertiaryButton from '../Others/Buttons/TertiaryButton'

const PresentationWidget = () => {

    return (
        <div className={`
        sm:justify-center md:justify-normal py-8 px-10 md:px-12 lg:py-4 lg:px-8 flex flex-col sm:items-center h-full text-sm lg:text-base
        sm:gap-4
        md:gap-4
        lg:gap-8
        xl:gap-4`}>
            <div className='flex flex-col gap-2 sm:text-center sm:gap-4 md:gap-4 lg:gap-8 xl:gap-2'>
                <h1 className='
                font-black tracking-wide text-default-blue
                text-3xl
                sm:text-6xl
                md:text-6xl
                xl:text-5xl
                '>
                    Emilian Pirtea
                </h1>
                <h2 className='
                font-semibold
                text-xl
                sm:text-2xl
                md:text-3xl
                lg:text-2xl
                xl:text-2xl xl:py-1
                '>
                    Creatvie Front-End Developer
                </h2>
                <p className='
                text-md pt-4 sm:pt-0 pb-4 sm:pb-0
                sm:text-lg sm:leading-6
                md:text-lg md:pb-4
                lg:text-lg lg:leading-6 lg:pb-0
                xl:text-md xl:leading-5
                '>
                    Hi, I'm Emi, a self-taught front-end developer passionate about learning and exploring.
                    I'm eager to join a company where I can develop my skills and contribute to its growth.
                </p>
            </div>
            <div className='flex'>
                <TertiaryButton url='projects' text='View Projects'/>
            </div>
        </div>
    )
}

export default PresentationWidget