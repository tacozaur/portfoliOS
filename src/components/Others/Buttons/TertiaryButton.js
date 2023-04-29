import React from 'react';
import { Link } from 'react-router-dom';


const TertiaryButton = (props) => {

    return (
        <>
        <button
        className='
        tracking-wide py-4 px-6
        sm:py-4 sm:px-12 sm:text-lg md:text-md text-16 font-semibold
        lg:py-3 lg:px-8
        bg-default-orange2 text-white rounded-3xl transition-colors
        hover:bg-default-orange
        '>
            <Link to={`${props.url}`}>{props.text}</Link>
        </button>
        </>
    )
}

export default TertiaryButton