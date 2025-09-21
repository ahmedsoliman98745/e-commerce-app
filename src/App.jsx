import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
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
import ApiContextProvider from "./Context/APIContext";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Shop /> },
        {
          path: "men",
          element: <ShopCategory banner={men_banner} category="Men" />,
        },
        {
          path: "women",
          element: <ShopCategory banner={women_banner} category="Women" />,
        },
        {
          path: "kids",
          element: <ShopCategory banner={kid_banner} category="Kids" />,
        },
        { path: "product/:productId", element: <Product /> },
        { path: "cart", element: <Cart /> },
        { path: "login", element: <LoginSignup /> },
      ],
    },
  ]);

  return (
    <ShopContextProvider>
      <ApiContextProvider>
        <RouterProvider router={router} />
      </ApiContextProvider>
    </ShopContextProvider>
  );
}
export default App;
