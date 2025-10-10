import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const Protectedroute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem("userToken");
      if (token && token.trim() !== "") {
        setIsAuth(true);
      } else {
        setIsAuth(false);
      }
      setLoading(false);
    };

    checkAuth();
  }, []);

  // Listen for storage changes (when user logs in from another tab)
  useEffect(() => {
    const handleStorageChange = () => {
      const token = localStorage.getItem("userToken");
      if (token && token.trim() !== "") {
        setIsAuth(true);
      } else {
        setIsAuth(false);
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  if (loading) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        fontSize: '18px'
      }}>
        Loading...
      </div>
    );
  }

  if (!isAuth) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default Protectedroute;
