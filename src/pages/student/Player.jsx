import humanizeDuration from 'humanize-duration';
import React, { useContext, useEffect, useState } from 'react';
import { assets } from '../../assets/assets';
import { AppContext } from '../../context/AppContext';
import { useParams } from 'react-router-dom';
import blue_tick_icon from '../../assets/blue_tick_icon.svg'
import play_icon from '../../assets/play_icon.svg'
import down_arrow_icon from '../../assets/down_arrow_icon.svg'
import Youtube from 'react-youtube';
import Footer from '../../components/student/Footer.jsx';
import Rating from '../../components/student/Rating.jsx';

const Player = () => {
  const {enrolledCourses, calculateChapterTime} = useContext(AppContext);
  const {courseId} = useParams()
  const [courseData, setCourseData] = useState(null)
  const [openSection, setOpenSection] = useState({})
  const [playerData, setPlayerData] = useState(null)

  const getCourseData = ()=>{
    enrolledCourses.map((course)=> {
      if(course._id===courseId){
        setCourseData(course)
      }
    })
  }
   const toggleSection = (index) => {
    setOpenSection((prev) => ({
    ...prev, 
      [index]: !prev[index],  
    }

 ))
 };
useEffect(()=>{
  getCourseData()
},[enrolledCourses])

  return (
    <>
    <div className='p-4 sm:p=10 flex flex-col reverse md:grid 
    md:grid-cols-2 gap-10 md:px-36'>
      {/**LEFT COLUMN */}
        <div className='text-gray-800 pt-4'>
          <h2 className='text-3xl font-semibold'> Course Structure</h2>
          <div className='pt-5'>
              { courseData && courseData.courseContent.map((chapter, index)=> (
                <div key={index} className='border border-gray-300 bg-white mb-2 rounded'> 
                  <div className='flex items-center justify-between px-4 py-3 cursor-pointer select-none' onClick={
                    ()=> toggleSection(index)} >
                    <div className='flex items-center gap-2'>
                      <img className={`transform transition-transform ${
                        openSection[index] ? 'rotate-180' : ''
                      }`}
                      src= {down_arrow_icon} alt='arrow icon' />
                      <p className='font-medium md:text-base text-sm'> {chapter.chapterTitle} </p>
                    </div>
                    <p className='text-sm md:text-default'> {chapter.chapterContent.length} lectures - 
                      {calculateChapterTime(chapter)} </p>
                    </div> 
                    <div className= {`overflow-hidden transition-all duration-300 ${openSection[index] ? 'max-h-96' : 'max-h-0'  }`} >
    

                      <ul className='list-disc md:pl-10 pl-4 pr-4 py-2 text-gray-600 
                         border-t border-gray-300'>
                        {chapter.chapterContent.map((lecture, i)=> (
                          <li key={i} className='flex-items-start gap-2 py-1'>
                            {/**FALSE written in img src next line will be replaced when doing backend */}
                            <img src= {false ?  blue_tick_icon : play_icon } alt='play icon' className='w-4 h-4 mt-1' />
                            <div className='flex items-center justify-between w-full text-gray-800 
                            text-xs md:text-default'>
                              <p> {lecture.lectureTitle} </p> 
                              <div className='flex gap-2'>
                                {lecture.lectureUrl && <p 
                                onClick={()=> setPlayerData({
                                  ...lecture, chapter : index + 1 , lecture: i + 1
                                })}
                                 className='text-blue-500 cursor-pointer'>Watch</p>}
                                <p> {humanizeDuration(lecture.lectureDuration * 60 * 1000, {units: 
                                  ['h', 'm']
                                })} </p> 
                                
                                <div>
                                  {lecture.isPreviewFree}
                                </div>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>

                </div>
              ))}
            </div>
            <div className='flex items-center gap-2 py-3 mt-10'>
              <h1 className='text-xl font-bold'>Rate this course</h1>
              <Rating initialRating={0}/>
            </div>
        </div>
      {/**RIGHT COLUMN */}  
      <div className='md:mt-10'>
        { playerData ? (
          <div>
            <Youtube videoId={playerData.lectureUrl.split('/').pop()} 
             iframeClassName= 'w-full aspect-video'/> 
             <div className='flex justify-between items-center mt-1'>
              <p> {playerData.chapter}.{playerData.lecture} {playerData.lectureTitle} </p>
              <button className='text-blue-600'>
                {false? 'Completed' : 'Mark Complete '}
              </button>
             </div>
          </div>
        )
        : 
        <img src= {courseData ? courseData.courseThumbnail : ''} alt='' />
        }
         
       
       </div>
       
    </div>
    <Footer/>

  </>
  )
}

export { Player as default};