import React from "react";
import { servicesType } from "../assets";

const Services = () => {
  return (
    <div className="flex items-center justify-between h-20 p-8 mb-12">
      {servicesType.map((service) => (
        <div className="flex  flex-row bg-pink-300  rounded-md shadow-lg items-center ">
          <div className="p-4 flex items-center justify-center h-full text-center border-r-4 border-r-white " >
          <service.icon className="flex text-5xl text-pink-700" />

          </div>
        <div className="p-4 bg-pink-100">
            <div>
              <h1>{service.title}</h1>
            </div>
            <div>
              <h1> {service.subTitle}</h1>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;

{
  /* <div className="flex items-center justify-between h-20 bg-white shadow-lg">
        <div className="flex items-center justify-between gap-2">
            <BsTruck className="rounded-full text-blue"/>
          Free Delivery
         
          <h1> Order above $10000 </h1>
        </div>
        <div className="flex items-center justify-between gap-2">
< CiDollar/>            
          Return and Refund 
          <h1>Money Back Guarantee</h1>
        </div>
        <div className="flex items-center justify-between gap-2">
        <AiOutlineCustomerService/>
          Member Discount
          <h1> On every Order</h1>
        </div>
        <div className="flex items-center justify-between gap-2">
        <AiOutlineCustomerService/>
          Customer Support
          <p> 24*7 </p>
        </div>
      </div> */
}
