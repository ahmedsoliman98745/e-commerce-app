import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

// إنشاء context
export const ApiContext = createContext();

// الـ Provider
const ApiContextProvider = (props) => {
  const [data, setData] = useState([]);

  // استخدام useEffect عشان تجيب الداتا مره واحدة
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://fakestoreapi.com/products");
        setData(res.data);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };
    fetchData();
  }, []);

  return (
    <ApiContext.Provider value={{ data }}>{props.children}</ApiContext.Provider>
  );
};

export default ApiContextProvider;
