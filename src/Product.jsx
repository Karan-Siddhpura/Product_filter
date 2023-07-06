import axios from "axios";
import React, { useState } from "react";
import Items from "./Items";
import cate from "./category";

function Product({ data, setData, setFilterChange, allProducts }) {
  const handleChange = (e) => {
    const category = e.target.value;
    console.log(category);
    if (category == "category") {
      setData(data);
      setFilterChange((prevState) => !prevState);
    } else {
      const allproducts = allProducts;
      const filterByCategotory = allproducts.filter((item) => {
        if (item.category.toLowerCase().includes(category.toLowerCase())) {
          return item;
        }
      });
      console.log(filterByCategotory);
      setData(filterByCategotory);
    }
  };

  return (
    <div className="container ">
      <div className="container select">
        <select
          className="form-select"
          aria-label="Default select example"
          onChange={handleChange}
        >
          <option value="category" selected>
            Categories
          </option>
          ;
          {cate.map((val) => {
            return (
              <option key={val.id} value={val.name}>
                {val.name}
              </option>
            );
          })}
        </select>
      </div>
      <div className="container products">
        {data.map((item) => {
          return (
            <Items
              key={item.id}
              image={item.image}
              title={item.title.slice(0, 100)}
              description={item.description.slice(0, 100)}
              price={item.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Product;
