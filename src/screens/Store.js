import React, { useEffect, useState } from "react";

import axios from "axios";
import Cart from "../components/Cart";
import Filters from "../components/Filters";
import Products from "../components/Products";

export default function Store() {
  const [products, setProducts] = useState([]);
  const [costRange, setCostRange] = useState({ min: 0, max: Infinity });
  const [selectedFilters, setSelectedFilters] = useState([]);
  const[selectedColors, setSelectedColors] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([products]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/products/getProducts")

      .then((res) => setProducts(res.data))
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const handleCostCheckboxClick = (max, min) => {
    setCostRange({ min: min, max: max });
  };

  const handleTypeCheckboxClick = (filter) => {
    if (selectedFilters.includes(filter)) {
      setSelectedFilters(selectedFilters.filter((f) => f !== filter));
    } else {
      setSelectedFilters([...selectedFilters, filter]);
    }
    //setSelectedFilters([...selectedFilters, filter]);
  };

  const handleColorCheckboxClick = (color) => {
    if(selectedColors.includes(color)){
      setSelectedColors(selectedColors.filter((f) => f !== color) );
    }else{
      setSelectedColors([...selectedColors, color])
    }
  }

  const handleFilter = () => {
    axios
      .get("http://localhost:3000/products/getProducts")

      .then((res) =>
        setProducts(
          res.data.filter((product) =>
            //  ( product.price >= costRange.min  &&  product.price <= costRange.max)
            selectedColors.every((filter) => product.color.includes(filter))
            &&
            selectedFilters.every((filter) => product.type.includes(filter))
          )
        )
      )
      .catch((err) => {
        console.log(err.message);
      });

    // setProducts(
    //   products.filter((product) =>
    //     // ( product.price >= `${costRange.min}` && product.price <= `${costRange.max}`)
    //     // &&
    //     selectedFilters.every((filter) => product.type.includes(filter))
    //   )
    // );
  };
  // const handleFilter
  console.log(products);
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
