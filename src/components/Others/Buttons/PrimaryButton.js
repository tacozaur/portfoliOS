import React from 'react';
import { Link } from 'react-router-dom';

const PrimaryButton = (props) => {

    return (
        <>
        <button
        className='
        tracking-wider
        text-xs py-3 px-4
        sm:text-14 sm:py-3 sm:px-6
        md:text-16
        lg:text-16 lg:py-4 lg:px-6
        bg-default-orange2 border-gray-500 text-white font-semibold rounded-3xl transition-all duration-300
        hover:bg-default-orange
        '
        >
           <Link to={`/${props.url}`}>{props.text}</Link>
        </button>
        </>
    )
}

export default PrimaryButton