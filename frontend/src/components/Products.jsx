<<<<<<< HEAD
import { React, useEffect, useState } from "react";
import AxiosInstance from "./Axios";
import "./Products.scss";

const Products = () => {
    const [product, setProduct] = useState([])
    console.log(product)
    const GetData = () => {
        AxiosInstance.get("products/").then((res) => {
            setProduct(res.data)
        })
    }
    useEffect(() => {
        GetData()
    }, [])
    return (
        <><h1>Fish Selling Website</h1><div className="products-container">
            {product.map((p) => (
                <div key={p.id} className="product-card">
                    <div className="product-image">
                        <img src={`http://127.0.0.1:8000${p.image}`} alt={p.name} />
                        <div className="overlay">
                            <span>{p.name}</span>
                        </div>
                    </div>
                    <div className="product-info">
                        <h3>{p.name}</h3>
                        <p>${p.price}</p>
                        <button>Add to Cart</button>
                    </div>
                </div>
            ))}
        </div></>
    );

}

export default Products
=======
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


>>>>>>> 371ce00d7f23e58ef8125bf5eb2c797254b06f90
