import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { LoginPage, SignUpPage } from '../pages'

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
  return <RouterProvider router={authRouter} />
}

export default AuthRouter
