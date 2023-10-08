import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedDashboard = ({children}) => {
    const token = localStorage.getItem('token')
    if(token){
        return children
    }
  return <Navigate to='/' />
}

export default ProtectedDashboard