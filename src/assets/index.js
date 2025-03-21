// all products
import products from "./products.json";

//icons
import { FaTruck, FaXTwitter } from "react-icons/fa6";
import { BsTruck, BsBoxArrowInRight } from "react-icons/bs";
import { CiDollar, CiHeart } from "react-icons/ci";
import { AiOutlineCustomerService ,AiOutlineShoppingCart} from "react-icons/ai";
import { MdOutlineShoppingBag } from "react-icons/md";
import { IoBagCheckOutline,IoEyeOutline } from "react-icons/io5";
import { FaInstagram, FaFacebookSquare, FaArrowLeft } from "react-icons/fa";

import { TbBrandYoutube } from "react-icons/tb";


import NotFoundImage from "./Images/NotFoundImage.jpg";
import {
  FcBusinessman,
  FcBusinesswoman,
  FcElectricalSensor,
} from "react-icons/fc";
import { GrPowerReset } from "react-icons/gr";
import { GiJewelCrown } from "react-icons/gi";
import { PiSignOutFill  } from "react-icons/pi";
import { IoIosHeartEmpty } from "react-icons/io";


const icons = {
  FaTruck,
  BsTruck,
  CiDollar,
  AiOutlineCustomerService,
  MdOutlineShoppingBag,
  IoBagCheckOutline,
  CiHeart,
  FaXTwitter,
  TbBrandYoutube,
  FaFacebookSquare,
  FaInstagram,
  FaArrowLeft,
  BsBoxArrowInRight,
  FcBusinessman,
  FcBusinesswoman,
  GrPowerReset,
  GiJewelCrown,
  FcElectricalSensor,
  PiSignOutFill ,
  AiOutlineShoppingCart,
  IoEyeOutline,
  IoIosHeartEmpty,
};

const servicesType = [
  {
    id: 1,
    title: "Free Delivery",
    subTitle: " Order above $10000 ",
    icon: icons.BsTruck,
  },
  {
    id: 2,
    title: "Return and Refund",
    subTitle: "Money Back Guarantee ",
    icon: icons.CiDollar,
  },
  {
    id: 3,
    title: "Member Discount",
    subTitle: " On Every Order ",
    icon: icons.FaTruck,
  },
  {
    id: 4,
    title: " Customer Support",
    subTitle: " 24*7 ",
    icon: icons.AiOutlineCustomerService,
  },
];
const categories = [
  "smartphones",

  "laptops",

  "fragrances",

  "skincare",

  "groceries",

  "home-decoration",

  "furniture",

  "tops",

  "womens-dresses",

  "womens-shoes",

  "mens-shirts",

  "mens-shoes",

  "mens-watches",

  "womens-watches",

  "womens-bags",

  "womens-jewellery",

  "sunglasses",

  "automotive",
 

  "motorcycle",

  "lighting",
  "reset",
];

export { icons, products, servicesType, NotFoundImage, categories };
