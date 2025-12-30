import React from 'react'
import shanacadlogo from '../../assets/shanacadlogo.svg'
import facebook_icon from '../../assets/facebook_icon.svg'
import twitter_icon from '../../assets/twitter_icon.svg'
import instagram_icon from '../../assets/instagram_icon.svg'

const Footer = () => {
  return (
    <footer className='bg-gray-900 md:px-36 text-left w-full mt-10'>
      
      {/* Top Section */}
      <div className='flex flex-col md:flex-row items-start px-8 md:px-0
        justify-center gap-10 md:gap-32 py-10 border-b border-white/30'>

        {/* Brand */}
        <div className='flex flex-col md:items-start items-center w-full'>
          <img src={shanacadlogo} alt='logo' className='mb-3'/>
          <p className='text-white text-sm leading-relaxed max-w-sm'>
            ShanAcademy empowers educators to create, manage, and grow impactful
            courses while reaching learners worldwide.
          </p>

          {/* Social Icons */}
          <div className='flex items-center gap-3 mt-4'>
            <a href='#'>
              <img src={facebook_icon} alt='facebook' />
            </a>
            <a href='#'>
              <img src={twitter_icon} alt='twitter' />
            </a>
            <a href='#'>
              <img src={instagram_icon} alt='instagram' />
            </a>
          </div>
        </div>

        {/* Educator Links */}
        <div className='flex flex-col md:items-start items-center w-full'>
          <h2 className='font-semibold text-white mb-5'>Educator</h2>
          <ul className='flex md:flex-col w-full justify-between text-sm text-white/80 md:space-y-2'>
            <li><a href='/educator'>Dashboard</a></li>
            <li><a href='/educator/add-course'>Add Course</a></li>
            <li><a href='/educator/my-courses'>My Courses</a></li>
            <li><a href='/educator/students-enrolled'>Students Enrolled</a></li>
          </ul>
        </div>

        {/* Newsletter (Desktop Only) */}
        <div className='hidden md:flex flex-col items-start w-full'>
          <h2 className='font-semibold text-white mb-5'>
            Educator Updates
          </h2>
          <p className='text-sm text-white/80'>
            Platform updates, tips, and resources for instructors.
          </p>
          <div className='flex items-center gap-2 pt-4'>
            <input
              type='email'
              placeholder='Enter your email'
              className='border border-gray-500/30 bg-gray-800 text-gray-500
              placeholder-gray-500 outline-none w-64 h-9 rounded px-2 text-sm'
            />
            <button className='bg-blue-600 w-24 h-9 text-white rounded'>
              Subscribe
            </button>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className='py-6 text-center px-4'>
        <p className='text-white text-sm leading-relaxed'>
          Copyright 2026 © ShanAcademy. All Rights Reserved.
        </p>
      </div>

    </footer>
  )
}

export default Footer

