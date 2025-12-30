import { createBrowserRouter, RouterProvider, useMatch } from 'react-router-dom'
import React from 'react'
import Home from './pages/student/Home'
import CoursesList from './pages/student/CoursesList';
import CourseDetails from './pages/student/CourseDetails';
import MyEnrollments from './pages/student/MyEnrollments';
import Player from './pages/student/Player';
import Loading from './components/student/Loading';
import Layout from './pages/student/Layout';
import Educator from './pages/educator/Educator';
import Dashboard from './pages/educator/Dashboard';
import AddCourse from './pages/educator/AddCourse';
import MyCourses from './pages/educator/MyCourses';
import StudentsEnrolled from './pages/educator/StudentsEnrolled';
import Navbar from './components/student/Navbar';
import { Link } from 'react-router-dom';
import LayoutEdu from './pages/educator/LayoutEdu';
import "quill/dist/quill.snow.css";


const router = createBrowserRouter([
  {
    
    path: "/",
    element: <Layout/>, //layout parent Layout-Student wala
    children:[
      {
        index: true,
        element: <Home/>
      },
      {
    path: "course-list",
      element: <CoursesList/> ,
      },
      {
         path: 'course-list/:input',
        element: <CoursesList/>
      },
      {
         path: "course/:id",
         element: <CourseDetails/>
},
      {
        path: "my-enrollments",
        element: <MyEnrollments/> 
      },
      {
        path: "player",
        element: <Player/>
      },
      {
        path: "player/:courseId",
        element: <Player/>
      },
      {
        path: "loading",
        element: <Loading/>
      },
    ]

  },
  {
        path: '/educator',
        element: <Educator/>, //parent
        children:[
          {
            index: true,
            element: <Dashboard/>
          },
          {
            path: "add-course",
            element: <AddCourse/>
          },
          {
            path: 'my-courses',
            element: <MyCourses/>
          },
          {
            path: 'students-enrolled',
            element: <StudentsEnrolled/>
          }
        ],
      },


]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;