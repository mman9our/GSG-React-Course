import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedAuth = ({ children }) => {
    const token = localStorage.getItem('token')
    if (!token) {
        return children
    }
    return <Navigate to='/dashboard' />
}

export default ProtectedAuth