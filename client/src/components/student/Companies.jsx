import React from 'react'
import microsolft_logo from '../../assets/microsoft_logo.svg'
import walmart_logo from '../../assets/walmart_logo.svg'
import adobe_logo from '../../assets/adobe_logo.svg'
import accenture_logo from '../../assets/accenture_logo.svg'
import paypal_logo from '../../assets/paypal_logo.svg'

const Companies = () => {
  return (
    <div className='pt-16'>
        <p className='text-base text-gray-500'>Trusted by learners from</p>
        <div className='flex flex-wrap items-center justify-center gap-6
        md:gap-16 md:mt-10 mt-5'>
          <img src={microsolft_logo} alt='microsoft' className=' w-20 md:w-28'/>
          <img src={walmart_logo} alt='microsoft' className=' w-20 md:w-28'/>
          <img src={accenture_logo} alt='microsoft' className=' w-20 md:w-28'/>
          <img src={adobe_logo} alt='microsoft' className=' w-20 md:w-28'/>
          <img src={paypal_logo} alt='microsoft' className=' w-20 md:w-28'/>
        </div>
    </div>
  )
}

export default Companies