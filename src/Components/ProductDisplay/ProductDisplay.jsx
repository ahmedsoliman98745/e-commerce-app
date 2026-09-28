import React, { useContext, useState } from "react";
import "./ProductDisplay.css";
import star_dull_icon from "../Assets/star_dull_icon.png";
import star_icon from "../Assets/star_icon.png";
import { ShopContext } from "../../Context/ShopContext";
const ProductDisplay = ({ product }) => {
  const { addToCart } = useContext(ShopContext);
  const [size, setSize] = useState();
  return (
    <div className="product-display">
      <div className="product-display-left">
        <div className="product-image-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="product-image-main">
          <img src={product.image} alt="" />
        </div>
      </div>
      <div className="product-display-right">
        <h1>{product.name}</h1>
        <div className="product-rate">
          <div className="product-rate-stars">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_dull_icon} alt="" />
          </div>
          <p>(122)</p>
        </div>
        <div className="product-price">
          <div className="old-price">${product.old_price}</div>
          <div className="new-price">${product.new_price}</div>
        </div>
        <div className="product-desc">
          A lightweight, usually knitted, pullover shirt, close-fitting and with
          a round neckline and short sleeves, worn as an undershirt or outer
          garment.
        </div>
        <div className="product-size">
          <h1>Select Size</h1>
          <div className="sizes">
            {["S", "M", "L", "XL", "XXL"].map((item) => (
              <div
                key={item}
                onClick={() => setSize(item)}
                style={size === item ? { border: "3px solid #ff4141" } : {}}
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={() => {
            addToCart(product.id);
          }}
        >
          ADD TO CART
        </button>
        <p>
          <span>Category : </span>
          {product.category}
        </p>
        <p>
          <span>Tags : </span>
          Modern , Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
