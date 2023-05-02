import React from 'react';

const QuarternaryButton = (props) => {

    return (
        <>
        <button
        className='
        tracking-wider
        text-xs py-3 px-4
        sm:text-14 sm:py-3 sm:px-6
        md:text-16
        lg:text-16 lg:py-4 lg:px-6
      bg-white border-1 font-semibold text-black rounded-3xl transition-all duration-300
      hover:bg-slate-300
        '>
            <a href={props.externalUrl} target='_blank' rel="noopener noreferrer">
                {props.text}
                </a>
        </button>
        </>
    )
}

export default QuarternaryButton