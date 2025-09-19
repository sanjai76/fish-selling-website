import { React, useEffect, useState } from "react";
import AxiosInstance from "./Axios";
import "./Products.scss";

const Products = () => {
    const [product, setProduct] = useState([]);
    console.log(product);

    const GetData = () => {
        AxiosInstance.get("products/").then((res) => {
            setProduct(res.data);
        });
    };

    useEffect(() => {
        GetData();
    }, []);

    return (
        <>
            {/* HERO SECTION */}
            <section className="hero-section">
                <div className="hero-content">
                    <h1>Fresh Fish, Delivered Daily!</h1>
                    <p>Explore our wide range of fresh and high-quality seafood, straight from the market to your kitchen.</p>
                    <button>Shop Now</button>
                </div>
            </section>

            {/* PRODUCTS SECTION */}
            <section className="products-section">
                <h2>Our Products</h2>
                <div className="products-container">
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
                </div>
            </section>

            {/* ABOUT SECTION */}
            <section className="about-section">
                <h2>About Us</h2>
                <p>
                    We are a family-owned fish-selling business committed to providing fresh, sustainable seafood.
                    With years of experience, we ensure the highest quality and fastest delivery for our customers.
                </p>
                <p>
                    Join our community of seafood lovers and enjoy a delicious and healthy lifestyle with our fresh catches.
                </p>
            </section>
        </>
    );
};

export default Products;
