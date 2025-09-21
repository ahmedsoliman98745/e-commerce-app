import React, { useContext, useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart from "../Assets/cart_icon.png";
import { Link, useLocation } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
const Navbar = () => {
  const location = useLocation();
  const [menu, setMenu] = useState(location.pathname);
  const { getTotalCartItems } = useContext(ShopContext);
  return (
    <>
      <div className="navbar">
        <div className="nav-logo">
          <img src={logo} alt="" />
          <p>ShopNow</p>
        </div>

        <ul className="nav-menu">
          <li
            onClick={() => {
              setMenu("shop");
            }}
          >
            <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
              Shop
            </Link>
            {menu === "shop" ? <hr /> : ""}
          </li>
          <li
            onClick={() => {
              setMenu("Men");
            }}
          >
            <Link to={"Men"} style={{ textDecoration: "none", color: "black" }}>
              Men
            </Link>
            {menu === "Men" ? <hr /> : ""}
          </li>
          <li
            onClick={() => {
              setMenu("Women");
            }}
          >
            <Link
              to={"Women"}
              style={{ textDecoration: "none", color: "black" }}
            >
              Women
            </Link>
            {menu === "Women" ? <hr /> : ""}
          </li>
          <li
            onClick={() => {
              setMenu("Kids");
            }}
          >
            <Link
              to={"Kids"}
              style={{ textDecoration: "none", color: "black" }}
            >
              Kids
            </Link>
            {menu === "Kids" ? <hr /> : ""}
          </li>
        </ul>

        <div className="nav-login-cart">
          <Link to={"login"} style={{ textDecoration: "none", color: "black" }}>
            <button
              onClick={() => {
                setMenu("");
              }}
            >
              Login
            </button>
          </Link>
          <Link to={"/cart"}>
            <img src={cart} alt="" />
          </Link>

          <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
