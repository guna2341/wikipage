import { Login } from '@/components';
import { Faculty } from '@/pages/faculty/layout';
import React from 'react'

export const PageRoutes = () => {
    const role = "faculty";
    if (role === "faculty") {
        return <Faculty />
    }
    else if (role === "admin") {
        return "admin"
    }
    else if (role === "student") {
        return "student"
    }
    else {
        return <Login />
    }
}

