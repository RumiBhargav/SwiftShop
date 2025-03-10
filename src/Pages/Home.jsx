import React from 'react'
import Banner from '../Components/Banner'
import ProductsType from '../Components/ProductsType'
import Services from '../Components/Services'
import TopProducts from '../Components/TopProducts'
import Banner1 from '../Components/Banner1'
import { products } from '../assets'

const Home = () => {
  let  topProducts =products.products.filter((item) => item.rating >4.4);
  topProducts = topProducts.slice(0,10);
  let featuredProducts = products.products.slice(10,18);
  return (
    <>
    <Banner/>
    <ProductsType/>
    <Services/>
    <TopProducts  products={topProducts} title={"Top Products"}/>
    <TopProducts  products={featuredProducts} title={"Featured Products"}/>
    <Banner1/>
    </>
  )
}

export default Home