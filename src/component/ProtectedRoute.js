import React from "react";
import { Navigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
const ProtectedRoute = ({ children }) => {
  const { user } = useUserAuth();
  // console.log("User:", user); // Check the value of user
  if (!user) {
    return <Navigate to="/" />;
  }
  return children;
};

export default ProtectedRoute;



