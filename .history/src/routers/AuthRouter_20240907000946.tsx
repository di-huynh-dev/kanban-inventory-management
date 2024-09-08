import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginPage from '../pages/auth/Login'

const authRouter = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage></LoginPage>,
  },

  {
    path: '/sign-up',
    element: <LoginPage></LoginPage>,
  },
])
const AuthRouter = () => {
  return <div>AuthRouter</div>
}

export default AuthRouter
