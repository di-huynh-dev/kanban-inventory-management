import axios from 'axios'
import { appInfo, localDataNames } from '../../constants/appInfo'
import queryString from 'query-string'

const axiosClient = axios.create({
  baseURL: appInfo.base_url,
  paramsSerializer: (params) => queryString.stringify(params),
})

const getAssetToken = () => {
  const res = localStorage.getItem(localDataNames.authData)

  if (res) {
    const auth = JSON.parse(res)
    return auth && auth.token ? auth.token : ''
  } else {
    return ''
  }
}

axiosClient.interceptors.request.use(async (config: any) => {
  const accesstoken = getAssetToken()

  config.headers = {
    Authorization: accesstoken ? `Bearer ${accesstoken}` : '',
    Accept: 'application/json',
    ...config.headers,
  }

  return { ...config, data: config.data ?? null }
})

axiosClient.interceptors.response.use(
  (res) => {
    if (res.data && res.status >= 200 && res.status < 300) {
      return res
    } else {
      return Promise.reject(res.data)
    }
  },
  (error) => {
    const { response } = error
    return Promise.reject(response.data)
  },
)

export default axiosClient
