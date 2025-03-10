import React from 'react'
import { NotFoundImage ,icons} from '../assets'
import { Link } from 'react-router-dom'


const NotFound = () => {
  return (
    <div className='flex items-center justify-center relative w-screen h-screen bg-[#011f41]'>
      {/* <h1> OOPs !! Something Went Wrong</h1> */}
     
     <img src={NotFoundImage} alt="Not Found" className='h-full'/>
     <Link  to="/" className='absolute bottom-30 bg-white shadow-md rounded-4xl cursor-pointer px-4 py-2  flex items-center gap-2'><icons.FaArrowLeft/> Go Back to Home Page </Link>
    </div>
  )
}

export default NotFound
