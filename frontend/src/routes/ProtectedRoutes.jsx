import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
export const ProtectedRoutes = ({user, children}) => {
    if (!user){
        return <Navigate to={'/'} />
    }
    return children ? children : <Outlet/>
 
}
