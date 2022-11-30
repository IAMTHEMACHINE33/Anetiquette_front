import {Navigate} from "react-router-dom";
import React from 'react';

function PrivateRoute({children}){
    var isAuth;
    if(localStorage.getItem("ticket")){
        isAuth = true
    }
    else{
        isAuth = false
    }
    return isAuth ? children : <Navigate to ="/login"/>;
}

export default PrivateRoute;