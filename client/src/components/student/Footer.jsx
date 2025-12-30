import React from 'react'
import shanacadlogo from '../../assets/shanacadlogo.svg'

const Footer = () => {
  return (
    <div>
        <footer className='bg-gray-900 md:px-36 text-left w-full mt-10'>
          <div className='flex flex-col md:flex-row items-start px-8 md:px-0
          justify-center gap-10 md:gap-32 py-10 border-b border-white/30'>
            <div className='flex flex-col md:items-start items-center w-full'>
              <img src={shanacadlogo} alt='logo'/>
              <p className='text-white'>ShanAcademy 
                is a modern learning platform focused on practical skills, real-world projects, and expert mentorship.</p>
            </div>
            <div className='flex flex-col md:items-start items-center w-full'>
              <h2 className='font-semibold text-white mb-5'>Company</h2>
              <ul className='flex md:flex-col w-full justify-between text-sm text-white/80
               md:space-y-2'>
                  <li><a href='#'>Home</a></li>
                  <li><a href='#'>About Us</a></li>
                  <li><a href='#'>Contact Us</a></li>
                  <ul><a href='#'>Privacy policy</a></ul>

              </ul>
            </div>
            <div className='hidden md:flex flex-col items-start w-full'>
              <h2 className='font-semibold text-white mb-5'> Subscribe to our Newletter</h2>
              <p className='text-sm text-white/80'>The latest news, articles and resources, sent to your 
                inbox directly </p>
                <div className='flex items-center gap-2 pt-4'>
                  <input type='email' placeholder='Enter your email'
                  className='border border-gray-500/30 bg-gray-800 text-gray-500
                  placeholder-gray-500 outline-none w-64 h-9 rounded px-2 text-sm'/>
                  <button className='bg-blue-600 w-24 h-9 text-white rounded'>Subscribe</button>
                </div>
 

            </div>
            

          </div>
          <div className='py-6 text-center px-4'>
          <p className='text-white text-sm leading-relaxed'> Copyright 2026 © ShanAcademy. All Rights Reserved. </p>
        </div>
        </footer>
    </div>
  )
}

export default Footer 