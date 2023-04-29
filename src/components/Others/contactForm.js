import React, {useState} from 'react';
import '../../index.css'

import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup'
import emailjs from 'emailjs-com';
import useDarkMode from '../../hooks/useDarkMode';



const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email address is required'),
    message: Yup.string().min(10, 'Message must be at least 10 characters').required('Message is required')
})

const SERVICE_ID = 'service_6qi6jf9'
const USER_ID = 'x6mWEOlbuf0iUQA8K'
const TEMPLATE_ID = 'template_smdfsn8'

const ContactForm = ({theme}) => {

    useDarkMode(theme)

    const [isLoading, setIsLoading] = useState(false)

    return (
      <Formik
        initialValues={{
          name: '',
          email: '',
          message: '',
        }}
        validationSchema={validationSchema}
        onSubmit={async (values) => {
          setIsLoading(true);
          await sleep(500);
          emailjs.send(SERVICE_ID, TEMPLATE_ID, {
            to_name: 'Recipient Name',
            from_name: values.name,
            user_email: values.email,
            message: values.message
          }, USER_ID)
          .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            alert('Your message has been sent!');
          }, (error) => {
            console.log('FAILED...', error);
            alert('Email failed to send. Please try again later.')
          })
          setIsLoading(false);
        }}
      >
        {({ values, errors, touched, handleChange, handleBlur, isSubmitting }) => (
          <Form className='flex flex-col gap-4 lg:gap-2 xl:gap-8'>
            <div className='flex flex-col gap-4 sm:gap-8 lg:flex-row lg:gap-16'>
              <div className='w-280 sm:w-380 flex flex-col gap-4 sm:gap-8'>
                <div className='flex flex-col gap-2'>
                  <label className='font-medium' htmlFor='name'>Name</label>
                  <Field className='
                  dark:bg-darkBackground-bgDark dark:border-white/50
                  px-4 h-10 sm:h-12 rounded-button border-1
                  ' id='name' name='name' placeholder='John Darling' />
                  {touched.name && errors.name && <div className='error'>{errors.name}</div>}
                </div>
                <div className='flex flex-col gap-2'>
                  <label className='font-medium' htmlFor='email'>Email</label>
                  <Field className='
                  dark:bg-darkBackground-bgDark dark:border-white/50
                  px-4 h-10 sm:h-12 rounded-button border-1
                  ' id='email' name='email' placeholder='example@mail.com' type='email' />
                  {touched.email && errors.email && <div className='error'>{errors.email}</div>}
                </div>
              </div>
              <div className='w-280 sm:w-380 flex flex-col gap-4'>
                <div className='flex flex-col gap-2'>
                  <label className='font-medium' htmlFor='message'>Message</label>
                  <Field className='
                  dark:bg-darkBackground-bgDark dark:border-white/50
                  px-4 pt-2 sm:pt-4 h-100 sm:h-130 md:h-40 rounded-button border-1
                  ' id='message' name='message' as='textarea' placeholder='Type your message here' />
                  {touched.message && errors.message && <div className='error'>{errors.message}</div>}
                </div>
                  <div className='flex flex-col gap-2 text-gray-600 dark:text-white/80'>
                    <h2 className='text-lg sm:text-2xl font-semibold'>Contact me</h2>
                    <p className='text-sm sm:text-lg'>emilian.lucian18@gmail.com</p>
                  </div>
                </div>
            </div>
            <div className='flex justify-center'>
              <button
              className={`
              dark:border-white/50
              py-2 px-16
              sm:py-4 sm:px-24 rounded-button border-1 text-lg text-gray-100 font-semibold tracking-wider
              ${
                isSubmitting || !(touched.email && touched.message) || Object.keys(errors).length > 0
                  ? ''
                  : 'bg-default-orange2 hover:bg-default-orange'
              }
              ${
                isSubmitting || !(touched.email && touched.message) || Object.keys(errors).length > 0
                  ? 'opacity-50 cursor-not-allowed bg-gray-400'
                  : 'hover:bg-orange-600'
              }`
              }
              type='submit'
              disabled={isSubmitting || !(touched.name && touched.email && touched.message) || Object.keys(errors).length > 0}
            >
              {isLoading ? 'Submitting...' : 'Submit'}
            </button>
            </div>
          </Form>
        )}
      </Formik>
    );
  };

export default ContactForm