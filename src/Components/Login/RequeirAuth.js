
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';

const RequireAuth = ({ children }) => {
    const[user,loading] = useAuthState(auth);
    const location = useLocation()


  

    if(loading){
        return  <progress className="progress progress-warning w-56" value="70" max="100"></progress>
    }

 
 if(!user){
    return <Navigate to="/login" state={{ from: location }} replace />;
 }


    return children;
  
};

export default RequireAuth;