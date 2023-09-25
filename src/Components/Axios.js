import React, { useEffect, useState } from "react";
import Hero from "./Hero";
import axios from "axios";

const Axios = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState([]);
  useEffect(() => {
    getProducts();
    // axios
    //   .get("https://dummyjson.com/products")
    //   .then((response) => {
    //     setProducts(response.data.products);
    //   })
    //   .catch((error) => setError(error.message));
  }, []);
  async function getProducts() {
    try {
      const response = await axios.get("https://dummyjson.com/products");
      setProducts(response.data.products);
    } catch (error) {
      setError(error.message);
    }
  }
  return (
    <>
      <div>
        <Hero text="Axios HTTP" />
      </div>
      <div>
        {error !== "" && error}
        {products.map((products, index) => {
          return (
            <ul key={index}>
              <li>
                {products.title} - {products.price}
              </li>
            </ul>
          );
        })}
      </div>
    </>
  );
};

export default Axios;
