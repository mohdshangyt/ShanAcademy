import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../../context/AppContext'
import CourseCard from './CourseCard'

const CoursesSection = () => {

  const { allCourses} = useContext(AppContext)
  return (
    <div className="py-16 md:px-40 px-8 text-center">
      <h2 className="text-3xl font-medium text-gray-800">
        Learn from the best
      </h2>

      <p className="text-sm md:text-base text-gray-500 mt-3 mb-8">
        Discover our top-rated courses across various categories. From coding
        and design to <br/> Business and Wellness, our courses are created to deliver
        results
      </p>

      <div className='grid grid-cols-auto sm:grid-cols-2 md:grid-cols-4 gap-6'>
        {allCourses.slice(0,4).map((course, index)=><CourseCard key={index} course={course}/> )}
      </div>


      <Link
        to="course-list"
        onClick={() => scrollTo(0, 0)}
        className="
          inline-block
    text-gray-600
    border border-gray-400/30
    px-10 py-3
    rounded-full
    mt-6
    outline-none
    focus:outline-none
    focus:ring-0
    focus-visible:outline-none
    hover:text-blue-600
    hover:border-blue-500/50
    transition
        "
      >
        Show all courses
      </Link>
    </div>
  )
}

export default CoursesSection 