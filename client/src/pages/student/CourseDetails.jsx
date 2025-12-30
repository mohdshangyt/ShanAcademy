import React, { use } from 'react'
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import { useEffect } from 'react';
import { useState } from 'react';
import Footer from '../../components/student/Footer';
import Loading from '../../components/student/Loading';
import time_left_clock_icon from '../../assets/time_left_clock_icon.svg'
import star_dull_icon from '../../assets/star_dull_icon.svg'
import lesson_icon from '../../assets/lesson_icon.svg'
import YouTube from 'react-youtube'
import down_arrow_icon from '../../assets/down_arrow_icon.svg'



import { assets } from '../../assets/assets';
import humanizeDuration from 'humanize-duration';

const CourseDetails = () => {
  
  const {id} = useParams()

  const [courseData, setCourseData] = useState(null)
  const [openSection, setOpenSection] = useState({})
  const [isAlreadyEnrolled, setIsAlreadyEnrolled] = useState(false)
  const [playerData, setPlayerData] = useState(null)


  
    


  const {allCourses, calculateRating, calculateNoOfLectures
        , calculateChapterTime, calculateCourseDuration, currency } = useContext(AppContext)

  const fetchCourseData = async()=>{
    const findCourse = allCourses.find(course=> course._id === id)
    setCourseData(findCourse || null);
  }

  useEffect(() => {
    console.log("URL ID", id)
    if(allCourses.length > 0){
      fetchCourseData()
    }
  }, [allCourses])
  
 const toggleSection = (index) => {
    setOpenSection((prev) => ({
    ...prev, 
      [index]: !prev[index],  
    }

 ))
 };
  
  return  courseData ? (
    <> 
    <div className='relative md:px-36 px-8 pt-20'>
      {/**FOR BG GRADIENT */}
      <div className='absolute top-0 left-0 w-full h-[500px] z-0
  bg-gradient-to-b
  from-sky-200
  via-sky-100
  to-white' />
   <div className="relative z-10 flex flex-col lg:flex-row  gap-12">

        {/*LEFT COLUMN */}
        <div className='relative z-10 flex-1'>
          <h1 className=' text-[28px] md:text-[42px]
    font-bold
    text-slate-800'
              >{courseData.courseTitle}</h1>
          <p className=' mt-3
      text-[15px] md:text-[17px]
      leading-relaxed
      text-slate-700' 
          dangerouslySetInnerHTML={{__html: courseData.courseDescription.slice(0,200)}}></p>
          
          {/**REVIEW AND RATING */}
          <div className='flex items-center space-x-2 pt-3 pb-1 text-sm'>
            <p> {calculateRating(courseData)} </p>
            <div className='flex'> {[...Array(5)].map((_, i)=>(< img key={i} src={i < Math.floor(
              calculateRating(courseData))? assets.star : assets.star_blank} alt=''
            className='w-3.5 h-3.5'/>
            ))} 
            </div>
            <p className='text-blue-600'>
              {courseData.courseRatings.length} {courseData.courseRatings.length
              >1 ? 'ratings' : 'rating'}
            </p>
            <p> {courseData.enrolledStudents.length} {courseData.enrolledStudents.length
              >1 ? 'students' : 'student'} </p>
           
           </div>
           <p className='text-sm'>Course by <span className='text-blue-600 underline'>Mohd_Shan</span> </p>
           <div className='pt-8 text-gray-800'>
            <h2>Course Structure</h2>
            <div className='pt-5'>
              {courseData.courseContent.map((chapter, index)=> (
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
                            <img src= {assets.play_icon} alt='play icon' className='w-4 h-4 mt-1' />
                            <div className='flex items-center justify-between w-full text-gray-800 
                            text-xs md:text-default'>
                              <p> {lecture.lectureTitle} </p> 
                              <div className='flex gap-2'>
                                {lecture.isPreviewFree && <p 
                                onClick={()=> setPlayerData({
                                  videoId: lecture.lectureUrl.split('/').pop()
                                })}
                                 className='text-blue-500 cursor-pointer'>Preview</p>}
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
            <div className='py-20 text-sm md:text-default'>
              <h3 className='text-xl font-semibold text-gray-800' >Course Description</h3>
              <p className='pt-3 mt-3 rich-text'
       
      
       
          dangerouslySetInnerHTML={{__html: courseData.courseDescription}}></p>
            </div> 

           </div>

        </div>
        {/**RIGHT COLUMM */}
        <div className='z-10 shadow-custom-card lg:w-1/3'>

        {
           playerData ? 
           <YouTube videoId={playerData.videoId} 
            opts={{playerVars:{
            autoplay : 1
                
           }}} iframeClassName= 'w-full aspect-video'/>   
              : <img src={courseData.courseThumbnail} alt=''/>
        }
          
          
          <div className='pt-5'>
            <div className='flex items-center gap-2'>

              <img className='w-3.5' src={time_left_clock_icon} alt='icon'/>
              <p className='text-red-500' 
              ><span className='font-medium'>5 Days </span>left at this price</p>
            </div>
            
            <div className='flex gap-3 items-center pt-2'>
              <p className='text-gray-800
              md:text-4xl text-2xl font-semibold'> {currency}{(courseData.coursePrice - courseData.discount *
               courseData.coursePrice / 100).toFixed(2) } </p>
               <p className='md:text-lg text-gray-500 line-through'> {currency}{courseData.coursePrice} </p>
               <p className='md:text-lg text-gray-500'> {courseData.discount}% Off ! </p>
            </div>
            <div className='flex items-center text-sm md:text-default gap-4 pt-2
            md:pt-4 text-gray-500'>

              <div className='flex items-center gap-1'>
                <img src={star_dull_icon}/>
                <p> {calculateRating(courseData)} </p>
              </div>
              <div className='h-4 w-px bg-gray-500/40'></div>

              
                <div className='flex items-center gap-1'>
                  <img src={time_left_clock_icon}/>
                <p> {calculateCourseDuration(courseData)} </p>

                </div>
                 <div className='h-4 w-px bg-gray-500/40'></div>

                <div className='flex items-center gap-1'>
                  <img src={lesson_icon}/>
                <p> {calculateNoOfLectures(courseData)} lessons </p>

                </div>
              
             </div>
             <button className='md:mt-6 mt-4 w-full py-3 rounded bg-blue-600
             text-white font-medium'> {isAlreadyEnrolled ? 'Already Enrolled' : 'Enroll Now' } </button>
             <div className='pt-6'>
              <p className='md:text-xl text-lg font-medium text-gray-800'>What you explore in the Course? </p>
              <ul className='ml-4 pt-2 text-sm md:text-default list-disc text-gray-500'>
                <li>Lifetime access with free updates</li>
                <li>Step-by-step, hands-on project guidance</li>
                <li>Downloadable resources and source code</li>
                <li>Quizzes to test your knowledge</li>
                <li>Free membership to Mohd Shan's "Code-On-Fingers" WebCamp </li>
                <li>Certificate of Completion</li>
              </ul>
             </div>
          </div>
        </div>
        
        </div>
         
        
    
    </div>
    <Footer/>
    </> 
  ) : <Loading/>
}

export { CourseDetails as default };