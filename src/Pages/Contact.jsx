// import React from "react";

// const Contact = () => {
  
//   return (
//     <>

//     <div>
//     <h1 className="text-4xl text-black font-semibold text-center mt-4">Contact page</h1>
    
//     <div className="flex flex-col items-center justify-center mt-8  p-4 m-4 ">
      
//       <input type="text" placeholder="Enter your name here"/>
//       <input type="email" placeholder="Enter your email here"/>
      
//       <input type="phone" placeholder="Enter your phone number here" />
//       <textarea type="message" placeholder="Message" />
//       <button > Send a Message</button>
//     </div>
//     </div>
//     </>
//   );
// };

// export default Contact;
import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center  p-6">
      
      <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-md">
        
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Contact Us</h1>
        
        <form className="space-y-4">
          <input 
            type="text" 
            placeholder="Enter your name" 
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input 
            type="email" 
            placeholder="Enter your email" 
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input 
            type="tel" 
            placeholder="Enter your phone number" 
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <textarea 
            placeholder="Write your message..." 
            className="w-full p-3 h-32 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          />

          <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-all shadow-md">
            Send Message
          </button>
        </form>
      </div>

    </div>
  );
};

export default Contact;
