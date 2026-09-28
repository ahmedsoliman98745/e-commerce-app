import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import dropdown_icon from "../Components/Assets/dropdown_icon.png";
import Item from "../Components/Item/Item";
import "./CSS/ShopCategory.css";
const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  return (
    <div className="shopCategory">
      <img className="shopCategory-banner" src={props.banner} alt="" />
      <div className="shopCategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopCategory-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopCategory-items">
        {all_product
          .filter((item) => item.category === props.category)
          .map((item) => (

              <Item
                key={item.id}
                name={item.name}
                id={item.id}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />

          ))}
      </div>
      <div className="shopCategory-loadmore">Explore more</div>
    </div>
  );
};

export default ShopCategory;
