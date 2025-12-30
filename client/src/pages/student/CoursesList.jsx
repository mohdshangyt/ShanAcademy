import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Searchbar from '../../components/student/SearchBar.jsx'
import { useContext } from 'react'
import { AppContext } from '../../context/AppContext.jsx'
import CourseCard from '../../components/student/CourseCard.jsx'
import { useEffect } from 'react'
import { useState   } from 'react'
import Footer from '../../components/student/Footer.jsx'

const CoursesList = () => {
  
  const navigate = useNavigate()
  const {input} = useParams()
  const {allCourses} = useContext(AppContext) 
  const [filteredCourse, setFilteredCourse] = useState([])

  useEffect(()=> {
    if(allCourses && allCourses.length > 0){
      const tempCourses = allCourses.slice()

      input ? setFilteredCourse(tempCourses.filter(
        item => item.courseTitle.toLowerCase().includes(input.toLowerCase())

      )
    ) : setFilteredCourse(tempCourses)
    }

  }, [allCourses, input])
 
  return (
    <>
    <div className='relative md:px-36 px-8 pt-20 text-left'>
      <div className='flex md:flex-row flex-col gap-6 items-start
      justify-between w-full'>
        <div>
          <h1 className='text-4xl font-semibold text-gray-800'>Course List</h1>
          <p className='text-gray-500'>
          <span onClick={()=> navigate('/') } 
          className='text-blue-600 cursor-pointer'
          > Home </span> / <span> Course List </span></p>

        </div>
        <Searchbar data={input} />
       </div>
       <div className='grid grid:cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
       my-16 gap-3 px-2 md:p-0' >
        {filteredCourse.map((course)=> (
          <CourseCard key={course._id || course.courseTitle }
          course= {course} />
          
        ))}
       </div>
    </div>
    <Footer/>
    </>
  )
}

export { CoursesList as default };