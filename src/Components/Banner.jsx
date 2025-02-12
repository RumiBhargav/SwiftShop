import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-gradient-to-br from-pink-500 via-white to-pink-500 p-6  shadow-lg  ">
      {/* Left Section */}
      <div className="text-center md:text-left space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          The Best Note Book Collection 2025
        </h1>
        <button className="bg-white text-black  flex  gap-2  items-center   hover:text-white px-6 py-2 rounded-md  hover:bg-pink-700 transition shadow-md">
          Shop Now
          <FaArrowRightLong />
        </button>
      </div>

      {/* Right Section */}
      <div className="flex flex-col items-center   mt-6 md:mt-0 mr-12">
        <img
          src="https://shopie-x.netlify.app/assets/banner-1-rmXk34xv.png"
          alt="img"
          className="w-64 md:w-120"
        />
        <p className="mt-2 text-lg font-semibold text-gray-800 text-center">
          Galaxy Tab Samsung
        </p>
        <p className="text-gray-600 text-center">Dynamic AMOLED 2X · Uniform Brilliance</p>
      </div>
    </div>
  );
};

export default Banner;


// import React from "react";

// const Banner = () => {
//   return (
//     <>
//     <div>
//     <div>
//         <h1> The Best Note Book Collection 2025 </h1>
//         <button>Shop Now</button>
//       </div>
//       <div>
//         <img src="https://shopie-x.netlify.app/assets/banner-1-rmXk34xv.png" alt="img"/>
//         <p>Galaxy Tab Samsung</p>
//         <p>Dynamic AMOLED 2X . Uniform Brillance</p>
//       </div>
//     </div>
      
//     </>
//   );
// };

// export default Banner;
