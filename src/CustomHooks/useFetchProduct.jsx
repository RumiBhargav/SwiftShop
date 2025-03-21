import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebaseInit";

const useFetchProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProductData = onSnapshot(
      collection(db, "products"),
      (snapshot) => {
        // const products = snapshot.docs.map((doc) => ({id:doc.id,...doc.data()}));
        setProducts(
          snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
      }
    );
    console.log("subscribed");
    return () =>{
        console.log("unsubscribed");
        fetchProductData();
    }
  }, []);
  return products;
};
export default useFetchProduct;
