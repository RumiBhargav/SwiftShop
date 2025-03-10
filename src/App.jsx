import React, { useEffect } from "react";
import Navbar from "./Components/Navbar";

import Footer from "./Components/Footer";
import TopProducts from "./Components/TopProducts";
import Aos from "aos";
import "aos/dist/aos.css";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Layout from "./Pages/Layout";
import Products from "./Pages/Products";
import Login from "./Pages/Login";

import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import NotFound from "./Pages/NotFound";
import About from "./Pages/About";
import SignUp from "./Pages/SignUp";
const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000, // Animation duration (default is 400)
      // once: true, // Animation runs only once
      mirror: false, // Disable repeating animation when scrolling back
    });
  }, []);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement:<NotFound/>,
      children: [
        {
         index:true,
          element: <Home/>,
        },
        {
          path: "/product",
          element: <Products />,
        },
        {
          path: "/about",
          element: <About/>,
        },
        {
          path: "/contact",
          element: <Contact/>,
        },
        {
          path: "/login",
          element: <Login/>,
        },
        {
          path: "/signup",
          element: <SignUp/>,
        },
      ],
    },
  ]);
  return (
    <>
    <RouterProvider router={router}/>
     
    </>
  );
};

export default App;
