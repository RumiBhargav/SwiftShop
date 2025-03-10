import React from "react";

const ProductPage = () => {
  return (
    <div>
      <div>
        <h2 className="text-2xl text-blue-500"># PRODUCTS</h2>
        <h3>Home-Products</h3>
      </div>
      <div>
        <h1 className="text-black">CATEGORIES</h1>
        <ul>
          <li>Men's Clothes</li>
          <li> Women's Clothes</li>
          <li>Jewellery</li>
          <li>Electronics</li>
          <li>Reset</li>
        </ul>
      </div>
    </div>
  );
};

export default ProductPage;
