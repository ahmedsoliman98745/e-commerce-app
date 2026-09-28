import React, { useContext } from "react";
import Item from "../Item/Item";
import data_product from "../Assets/data";
import "./Popular.css";
const Popular = () => {
  return (
    <div className="popular">
      <h1>Popular In Women</h1>
      <hr />
      <div className="popular-item">
        {data_product.map((item) => {
          return (
            <Item
              key={item.id}
              name={item.name}
              id={item.id}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
