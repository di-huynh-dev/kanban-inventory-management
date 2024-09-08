import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginPage from '../pages/auth/Login'
import SignUpPage from '../pages/auth/SignUp'

const authRouter = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage></LoginPage>,
  },

  {
    path: '/sign-up',
    element: <SignUpPage></SignUpPage>,
  },
])
const AuthRouter = () => {
  return <div>AuthRouter</div>
}

export default AuthRouter
