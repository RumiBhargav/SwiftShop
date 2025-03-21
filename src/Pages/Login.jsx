// import React from 'react'

// const Login = () => {
//   return (
//     <div className='flex  items-center justify-between px-4 py-2'>
//       <h1 > LOGIN</h1>
//       <div className='p-4 flex flex-col justify-between gap-4  border '>

//         <input type="text" required placeholder="Enter email address here" className='border'/>
//         <input type="password"  required  placeholder="Enter your password here" className='border ' />

//       </div>
//       <input type="checkbox" />
//       <h4>Rememeber Me</h4>
//       <button type="submit">Login</button>

//       <div>
//         <img src="https://shopie-x.netlify.app/assets/login-f-1eBonK.avif"/>
//       </div>
//     </div>
//   )
// }

// export default Login;
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../redux/reducers/AuthReducer";
import { authSelector } from "../redux/store";
import ButtonLoader from "../Components/ButtonLoader";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const { loading } = useSelector(authSelector);
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await dispatch(loginUser(userData));
    if (response.type === "auth/login/fulfilled") {
      setUserData({
        email: "",
        password: "",
      });
      navigate("/");
    }
    console.log(response);
    // setUserData({
    //   email: "",
    //   password: "",
    // });
  };
  return (
    <div className="flex items-center justify-center min-h-screen  p-6 gap-12">
      {/* Form Section */}
      <div className="w-full max-w-sm bg-white p-6 shadow-xl rounded-lg">
        <h1 className="text-gray-800 text-3xl font-semibold  mb-6 text-center">
          LOGIN
        </h1>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            name="email"
            value={userData.email}
            onChange={handleChange}
            type="email"
            required
            title="Email must be valid"
            placeholder="Enter email address here"
            className="border border-gray-300 rounded-lg p-3 text-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            name="password"
            value={userData.password}
            onChange={handleChange}
            type="password"
            required
            title="Password must contain at least 8 characters, including UPPER/lowercase and numbers"
            placeholder="Enter your password here"
            className="border border-gray-300 rounded-lg p-3 text-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <div className="flex items-center gap-2">
            <input type="checkbox" className="w-4 h-4" />
            <p className="text-sm text-gray-600">Remember Me</p>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white py-3 rounded-lg text-sm font-medium hover:bg-blue-700 transition"
          >
            {loading ? <ButtonLoader/> : "Login"}
           
          </button>
          <p className="text-sm text-center mt-4 text-gray-600">
            New member here?{" "}
            <Link
              to="/signup"
              href="#"
              className="text-blue-500 font-semibold underline"
            >
              {" "}
              Sign up here
            </Link>
          </p>
        </form>
      </div>
      {/* Image Section */}
      <div>
        <img
          src="https://shopie-x.netlify.app/assets/login-f-1eBonK.avif"
          alt="Login"
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default Login;
