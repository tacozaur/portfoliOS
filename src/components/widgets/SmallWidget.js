import React from 'react';

import '../../index.css'

const SmallWidget = (props) => {

    return (
        <div className={`
        h-full p-8 flex justify-center items-center rounded-apple
        `}>
            {props.content}
        </div>
    )
}

export default SmallWidget