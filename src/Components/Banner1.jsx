import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

const Banner1 = () => {
  return (
    <>
    <div className='px-4 py-5 bg-gradient-to-r from-black via-pink-700  to-black mt-8 flex justify-between '>
<div className="mt-8 px-4 py-3 ml-15">
<h2 className='text-2xl font-bold text-white'>LATEST TECHNOLOGY ADDED</h2>
<h4 className='text-6xl font-semibold text-white'>Apple ipad 10.9 10th Gen 2023</h4>
<p className='text-2xl  text-white mt-8'> $ 481.18</p>
<button className='text-lg  bg-black text-white px-4 py-2 flex gap-2 items-center rounded-md shadow-md cursor-pointer mt-8'>Shop Now <FaArrowRightLong /></button>

</div>

<div>
  <img src="https://shopie-x.netlify.app/assets/banner-2-CeS-52yM.png" className=' mr-4'/>
</div>
    </div>
    </>

    
  )
}

export default Banner1

