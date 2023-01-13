import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Cart from "../components/Cart";
import SingleProduct from "../components/SingleProduct";
import { EcommerceContext } from "../context/ContextProvider";

export default function SingleProductScreen() {
  const prodId = useParams();
  const { cartItems, setCartItems } = useContext(EcommerceContext);

  const [product, setProduct] = useState([]);
  //const [cartItem, setCartItem] = useState([]);

  const handleAddToCart = (item) => {
    //setCartItem([...cartItem, item]);
    setCartItems([...cartItems, product]);
  };

  const handleRemove = (id) => {
    setCartItems(cartItems.filter((i) => i.id !== id));
  };

  useEffect(() => {
    //   axios.get(`http://localhost:3000/products/getProductById/${prodId.id}`)

    //   .then((res) => setProduct(res))
    //   .catch((err) => {
    //    console.log(err.message);
    //  });

    try {
      fetch(`http://localhost:3000/products/getProductById/${prodId.id}`)
        .then((response) => response.json())
        .then((res) => setProduct(res));
    } catch (err) {
      console.log(err.message);
    }
  }, [prodId.id]);
  console.log(product);
  return (
    <div className="store-screen">
      <SingleProduct val={product} onClick={handleAddToCart} />
      <Cart onRemove={handleRemove} />
    </div>
  );
}
