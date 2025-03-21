// import React from 'react'

// const SignUp = () => {
//   return (
// <>
// <div className='flex items-center justify-between'>


// <h1 className='text-black text-4xl  text-center font-bold  italic'>Sign up</h1>
// <div className='mr-2'>
// <form className=''>
//     <input type="" placeholder='Enter your first name'/>
  
//     <input type="text" placeholder='Enter email address here'/>
// <input type="text" placeholder='Enter phone number  here'/>


//     <input type="password" placeholder='Enter your password name'/>
//     <input type="password" placeholder='Enter your confirm password here name'/>
//     <input type="checkbox" />
//     <p>Please accept our term and conditions</p>
//     <button>Join</button>
// </form>

// <p>
//   Hey you are already in our team ,please login <a href="">here</a>
// </p>
// <div>
//   <img src=""/>
//   <h1>Connect with Google</h1>
// </div>
// </div>
// <div className='px-4 py-2'>
//   <img src="https://shopie-x.netlify.app/assets/signup-dSTKl2nS.jpg"/>
// </div>
// </div>
// </>
//   )
// }

// export default SignUp


import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { registerUser } from '../redux/reducers/AuthReducer';


const SignUp = () => {
  const  navigate=useNavigate();
  const dispatch=useDispatch();
  const [userData,setUserData]=useState({
    firstName:'',
    lastName:'',
    email:'',
    phone:'',
    password:'',
      confirmPassword:'',
  });
  const handleChange=(e)=>{
    setUserData({...userData,[e.target.name]:e.target.value})
  }
  const handleSubmit=async(e)=>{
  e.preventDefault();
  const response=await dispatch(registerUser(userData));
  if (response.type === "auth/register/fulfilled") {
    setUserData({
      firstName:'',
      lastName:'',
      email:'',
      phone:'',
      password:'',
      confirmPassword:'',
    })
    navigate("/");
  }
  // setUserData({
  //   firstName:'',
  //   lastName:'',
  //   email:'',
  //   phone:'',
  //   password:'',
  //   confirmPassword:'',
  // })
  }

  
  return (
    <div className='flex flex-row items-center justify-center min-h-screen bg-gray-100 p-6 gap-12'>
     

      {/* Form Section */}
      <div className='w-full max-w-sm bg-white p-6 shadow-xl rounded-lg'>
        <h1 className='text-gray-800 text-3xl font-semibold italic mb-6 text-center'>Create an Account</h1>
        <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
          <input onChange={handleChange} value={userData.firstName} name="firstName" type='text' placeholder='First Name' className='border border-gray-300 rounded-lg p-3 text-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-500' />
          <input onChange={handleChange} value={userData.lastName} name="lastName" type='text' placeholder='Last Name' className='border border-gray-300 rounded-lg p-3 text-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-500' />
          <input onChange={handleChange} value={userData.email} name="email"type='email' placeholder='Email Address' className='border border-gray-300 rounded-lg p-3 text-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-500' />
          <input onChange={handleChange} value={userData.phone} name="phone" type='tel' placeholder='Phone Number' className='border border-gray-300 rounded-lg p-3 text-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-500' />
          <input onChange={handleChange} value={userData.password} name="password" type='password' placeholder='Password' className='border border-gray-300 rounded-lg p-3 text-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-500' />
          <input onChange={handleChange} value={userData.confirmPassword} name="confirmPassword" type='password' placeholder='Confirm Password' className='border border-gray-300 rounded-lg p-3 text-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-500' />
          
          <div className='flex items-center gap-2'>
            <input type='checkbox' className='w-4 h-4' />
            <p className='text-sm text-gray-600'>I accept the terms and conditions</p>
          </div>
          
          <button type="submit" className='bg-blue-600 text-white py-3 rounded-lg text-sm font-medium hover:bg-blue-700 transition'>Join Now</button>
        </form>
        
        <p className='text-sm text-center mt-4 text-gray-600'>
          Already a member? <Link to="/login" href='#' className='text-blue-500 font-semibold underline'>Login here</Link>
        </p>
        
        {/* Google Signup */}
        <div className='flex items-center justify-center gap-2 mt-6 border p-3 rounded-lg cursor-pointer hover:bg-gray-100 transition'>
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png' alt='Google' className='w-5 h-5' />
          <h1 className='text-sm text-gray-700 font-medium'>Sign up with Google</h1>
        </div>
      </div>
       {/* Image Section */}
       <div className='hidden md:block w-1/3'>
        <img src='https://shopie-x.netlify.app/assets/signup-dSTKl2nS.jpg' alt='Signup' className='rounded-lg shadow-lg' />
      </div>
    </div>
  );
};

export default SignUp;
