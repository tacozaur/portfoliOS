import React from 'react';
import '../../index.css'
import image from '../../assets/projects/myportfolio-project.PNG'


const ProjectPage = (props) => {
    return (
        <>
        <section className='grid justify-center'>
            <div className={`
                text-center rounded-apple
                col-span-2
                sm:col-span-2
                md:col-span-3
                lg:col-span-4
                xl:col-span-4
            `}>
                <div className='flex flex-col gap-6 py-28'>
                    <h1 className='text-5xl font-bold'>{props.title}</h1>
                    <h2 className='text-2xl'>{props.subtitle}</h2>
                <div className='pt-4'>
                    <a
                        className='
                        hover:bg-default-royalBlue hover:px-10 hover:py-5 hover:sm:px-14 hover:sm:py-7 transition-all duration-200
                        bg-default-blue rounded-apple px-8 py-4 sm:px-12 sm:py-6 text-white text-lg font-semibold
                        '
                        href={props.demoLink}
                        target='_blank'
                        rel='noreferrer'>
                            Check Demo
                    </a>
                </div>
                </div>
                <div className='flex flex-col gap-12 pb-28'>
                    <h1 className='text-3xl font-bold'>Built & Deployed Using:</h1>
                    <div className='flex flex-col items-center sm:flex-row sm:justify-center gap-4'>
                        {props.logos.map((image, index) => (
                            <img key={index} className='w-12 h-auto sm:w-auto sm:h-12' src={image} alt={`logo image ${props.title}`}/>
                        ))}
                    </div>
                </div>
                <div className='my-0 mx-auto max-w-600 pb-28 flex flex-col gap-8 font-light'>
                    {props.description.map((paragraph, index) => (
                        <p className='leading-7' key={index}>{paragraph}</p>
                    ))}
                </div>
                <div>
                    <div className='pb-28'>
                        <div className='flex flex-col items-center gap-16'>
                            {props.images.map((image, index) => (
                                <img key={index} className='rounded-apple border-1 border-black/30' src={image} alt={`logo image ${props.title}`}/>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default ProjectPage;