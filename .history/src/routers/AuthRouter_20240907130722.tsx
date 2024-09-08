import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { LoginPage, SignUpPage } from '../pages'
import { Typography } from 'antd'
import { appInfo } from '../constants/appInfo'
const { Title } = Typography

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
        <div className="col d-none d-lg-block text-center" style={{ marginTop: '15%' }}>
          <div className="mb-4">
            <img
              style={{
                width: 256,
                objectFit: 'cover',
              }}
              src={appInfo.logo}
              alt="Logo"
            />
          </div>
          <div>
            <Title className="text-primary">{appInfo.title}</Title>
          </div>
        </div>
        <div className="col content-center">
          <RouterProvider router={authRouter} />
        </div>
      </div>
    </div>
  )
}

export default AuthRouter
