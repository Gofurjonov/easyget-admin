import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
const PrivateRoute = ({ path, element, isAuthenticated }) => {
    return isAuthenticated ? (
      <>
            <Routes>
             <Route path={path} element={element} />
            </Routes>
      </>
      ) : (
        <Navigate to="/login" />
      );
    
}

export default PrivateRoute;
