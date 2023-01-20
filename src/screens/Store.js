import React, { useEffect, useState } from "react";
import axios from "axios";
import Cart from "../components/Cart";
import Filters from "../components/Filters";
import Products from "../components/Products";

export default function Store() {
  const [products, setProducts] = useState([]);
  const [costRange, setCostRange] = useState({ min: 0, max: Infinity });
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);

  const handleTypeCheckboxClick = (filter) => {
    if (selectedFilters.includes(filter)) {
      setSelectedFilters(selectedFilters.filter((f) => f !== filter));
    } else {
      setSelectedFilters([...selectedFilters, filter]);
    }
  };

  const handleColorCheckboxClick = (color) => {
    if (selectedColors.includes(color)) {
      setSelectedColors(selectedColors.filter((f) => f !== color));
    } else {
      setSelectedColors([...selectedColors, color]);
    }
  };
  useEffect(() => {
    fetch("http://localhost:3000/products/getProducts")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleCostCheckboxClick = (max, min) => {
    setCostRange({ min: min, max: max });
  };

  const handleFilter = () => {
    fetch("http://localhost:3000/products/getProducts")
      .then((response) => response.json())
      .then((data) => {
        if (selectedColors.length > 0 && selectedFilters.length > 0) {
          setProducts(
            data.filter(
              (product) =>
                selectedColors.includes(product.color) &&
                selectedFilters.includes(product.type)
            )
          );
        } else if (
          selectedColors.length === 0 &&
          selectedFilters.length === 0
        ) {
          setProducts(data);
        } else {
          setProducts(
            data.filter(
              (product) =>
                selectedColors.includes(product.color) ||
                selectedFilters.includes(product.type)
            )
          );
        }
       
      })
      .catch((error) => console.log(error));
  };

  
  console.log();
  return (
    <div className="store-screen">
      <Filters
        handleCostCheckboxClick={handleCostCheckboxClick}
        handleTypeCheckboxClick={handleTypeCheckboxClick}
        handleColorCheckboxClick={handleColorCheckboxClick}
        onClick={handleFilter}
      />
      <Products items={products} />
      
      <Cart />
      
      
    </div>
  );
}
