// import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffect, useState } from "react";
import ShopCategory from "./Pages/ShopCategory";
import Shop from "./Pages/Shop";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import Layout from "./Components/Layout/Layout";
import ShopContextProvider from "./Context/ShopContext";
import men_banner from "./Components/Assets/banner_mens.png";
import women_banner from "./Components/Assets/banner_women.png";
import kid_banner from "./Components/Assets/banner_kids.png";
import { jwtDecode } from "jwt-decode";
import Protectedroute from "./Components/Protectedroute/Protectedroute";

function App() {
  const [userData, setuserData] = useState(null);
  const [loading, setLoading] = useState(true);

  const saveUserToken = () => {
    let encodedToken = localStorage.getItem("userToken");
    if (encodedToken) {
      let decodedToken = jwtDecode(encodedToken);
      setuserData(decodedToken);
      console.log("Decoded Token:", decodedToken);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("userToken")) {
      saveUserToken();
    }
    setLoading(false);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const router = createBrowserRouter([
    {
      path: "/login",
      element: <LoginSignup saveUserToken={saveUserToken} />,
    },
    {
      path: "/",
      element: (
        <Protectedroute>
          <Layout userData={userData} setuserData={setuserData} />
        </Protectedroute>
      ),
      children: [
        {
          index: true,
          element: <Shop />,
        },
        {
          path: "shop",
          element: <Shop />,
        },
        {
          path: "men",
          element: <ShopCategory banner={men_banner} category={"Men"} />,
        },
        {
          path: "women",
          element: <ShopCategory banner={women_banner} category={"Women"} />,
        },
        {
          path: "kids",
          element: <ShopCategory banner={kid_banner} category={"Kids"} />,
        },
        {
          path: "product/:productId",
          element: <Product />,
        },
        {
          path: "cart",
          element: <Cart />,
        },
      ],
    },
  ]);

  return (
    <ShopContextProvider>
      <RouterProvider router={router} />
    </ShopContextProvider>
  );
}

export default App;
