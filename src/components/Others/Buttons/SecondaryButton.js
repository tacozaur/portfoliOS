import React from 'react';

const SecondaryButton = (props) => {

    return (
        <>
        <button
        type='submit'
        className='bg-default-blue/20 text-default-blue font-semibold py-3 px-5 rounded-button transition-colors hover:bg-default-blue/10'>{props.text}</button>
        </>
    )
}

export default SecondaryButton