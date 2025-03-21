
import Banner from '../Components/Banner'
import ProductsType from '../Components/ProductsType'
import Services from '../Components/Services'
import TopProducts from '../Components/TopProducts'
import Banner1 from '../Components/Banner1'


import useFetchProduct from '../CustomHooks/useFetchProduct'

const Home = () => {
 
//   useEffect(() => {
//     const addData= async()=>{
//       for(let i=0;i<products.products.length;i++){
//         await addDoc(collection(db,"products"),products.products[i]); 
//       }
      
//     }
//     addData();
// },[]);

const products=useFetchProduct();

  let  topProducts =products.filter((item) => item.rating >4.4);
  topProducts = topProducts.slice(0,10);
  let featuredProducts = products.slice(10,18);
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