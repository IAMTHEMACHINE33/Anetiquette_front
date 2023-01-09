import {Navigate} from "react-router-dom";
import React from 'react';

function AdminPrivateRoute({children}){
    var isAuth;
    if(localStorage.getItem("admin_token")){
        isAuth = true
    }
    else{
        isAuth = false
    }
    return isAuth ? children : <Navigate to ="/login"/>;
}

export default AdminPrivateRoute;