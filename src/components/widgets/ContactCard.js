import React from 'react';

import '../../index.css'
import ContactForm from '../Others/contactForm';

const ContactCard = ({theme}) => {

    return (
        <div className={`
        h-full p-8 flex flex-col sm:gap-8 lg:gap-4 xl:gap-12 justify-center items-center
        `}>
          <div>
            <h1 className='text-4xl md:text-5xl xl:text-6xl font-semibold'>Let's Talk!</h1>
          </div>
          <div className='flex gap-32 items-start'>
            <ContactForm theme={theme}/>
          </div>
        </div>
    )
}

export default ContactCard