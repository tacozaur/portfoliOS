import React from 'react';

import '../../index.css'
import PrimaryButton from '../Others/Buttons/PrimaryButton';
import QuarternaryButton from '../Others/Buttons/QuarternaryButton';


const Widget = (props) => {

    const { title, images, projectImage, titleColor, url, externalUrl } = props

    return (
        <div className='p-8 gap-4 flex flex-col justify-between h-full text-sm lg:text-base'>
            <div className='flex'>
            <div className='flex-1'>
                <p className='text-gray-300 font-semibold'>PROJECT</p>
                <h1 className={`font-bold text-${titleColor} text-xl sm:text-3xl`}>
                    {title}
                    </h1>
            </div>
            <div className='
            md:hidden
            lg:block
            '>
                <p className='text-gray-300 font-semibold text-right pb-2 sm:text-left'>WHAT I USED</p>
                <div className='flex gap-1'>
                    {images.map((image, index) => (
                        <img key={index} className='w-auto sm:h-8 h-6' src={image} alt={`logo image ${index}`}/>
                    ))}
                </div>
            </div>
            </div>
            <div className='
            max-w-30rem max-h-20rem overflow-hidden self-center border-2 border-white/10
            '>
                <img src={projectImage} alt='project image'/>
            </div>
            <div className='flex flex-row justify-center items-center gap-8'>
                <QuarternaryButton externalUrl={externalUrl} text='Check Project'/>
                <PrimaryButton url={url} text='More Details'/>
            </div>
        </div>
    )
}

export default Widget