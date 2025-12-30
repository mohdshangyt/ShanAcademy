import React from 'react'
import sktech from '../../assets/sktech.svg'
import SearchBar from './SearchBar'

const Hero = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full md:pt-20 pt-12 px-7 md:px-0 space-y-7 text-center'>
        
        <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 leading-tight max-w-3xl mx-auto'>
          Learn what matters. Become who you<span
         className='text-blue-600 relative inline-block'> want to be !</span><img src={sktech} 
         className='absolute left-0 -bottom-2 w-full h-[3px] bg-blue-400 rounded-full'/></h1>
{/*ONLY FOR DESKTOP SCREENS */}
        <p className='mt-6 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed'>Bringing together expert instructors, hands-on courses, 
          and a supportive learning environment to 
          turn knowledge into real-world skills.</p>
{/**ONLY FOR MOBILE SCREENS */}
        {/*<p className='md:hidden text-gray-500 max-w-sm mx-auto'>Bringing together expert instructors, 
          hands-on courses,  and a supportive learning environment to 
          turn knowledge into real-world skills.</p>*/}  
          <SearchBar/>
          
    </div>
  )
}

export default Hero