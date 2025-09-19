import {React, useEffect, useState } from "react";
import axios from "axios";
import AxiosInstance from "./Axios";

const Products = () => {
  const [product, setProduct] = useState([])
  console.log(product)
  const GetData = () => {
    AxiosInstance.get("products/").then((res) => {
      setProduct(res.data)
    })
  }
useEffect(() =>{
  GetData()
},[])
 return (
  <div>
    <h2>Products</h2>
    <ul>
      {product.map((p) => (
        <li key={p.id}>
          {p.name} - ${p.price}
        </li>
      ))}
    </ul>
  </div>
);

}

export default Products


