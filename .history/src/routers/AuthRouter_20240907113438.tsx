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
  return (
    <div className="container">
      <div className="row">
        <div className="col">1</div>
        <div className="col">2</div>
      </div>
    </div>
  )
}

export default AuthRouter
