import { useDispatch, useSelector } from 'react-redux'
import AuthRouter from './AuthRouter'
import MainRouter from './MainRouter'
import { addAuth, authSelector, AuthState } from '../redux/reducers/auth.reducer'
import { useEffect, useState } from 'react'
import { localDataNames } from '../constants/appInfo'
import { Spin } from 'antd'

const Routers = () => {
  const [isLoading, setIsLoading] = useState(false)
  const dispatch = useDispatch()

  const auth: AuthState = useSelector(authSelector)
  useEffect(() => {
    getData()
  }, [])
  const getData = async () => {
    const resp = localStorage.getItem(localDataNames.authData)
    resp && dispatch(addAuth(JSON.parse(resp)))
  }

  return isLoading ? <Spin /> : !auth.accessToken ? <AuthRouter /> : <MainRouter />
}

export default Routers
