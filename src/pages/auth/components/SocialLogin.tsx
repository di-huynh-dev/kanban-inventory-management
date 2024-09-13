import { Button } from 'antd'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import handleApis from '../../apis/handleApis'
import { addAuth } from '../../../redux/reducers/auth.reducer'
import { toast } from 'react-toastify'
import { localDataNames } from '../../../constants/appInfo'
import { auth } from '../../../firebase/firebase.config'

const provider = new GoogleAuthProvider()
provider.addScope('https://www.googleapis.com/auth/contacts.readonly')

interface Props {
  isRemember?: boolean
}

const SocialLogin = (props: Props) => {
  const { isRemember } = props

  const [isLoading, setIsLoading] = useState(false)

  const dispatch = useDispatch()

  const handleLoginWithGoogle = async () => {
    setIsLoading(true)
    try {
      const result = await signInWithPopup(auth, provider)

      if (result) {
        const user = result.user

        if (user) {
          const data = {
            name: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
          }

          const api = `/auth/google-login`

          try {
            const resp: any = await handleApis(api, data, 'post')
            console.log(resp.data)

            toast.success(resp.data.message)
            dispatch(addAuth(resp.data.metadata))

            if (isRemember) {
              localStorage.setItem(localDataNames.authData, JSON.stringify(resp.data))
            }
          } catch (error: any) {
            console.log(error)
            toast.error(error.message)
          } finally {
            setIsLoading(false)
          }
        }
      } else {
        console.log('Can not login with google')
      }
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Button
      loading={isLoading}
      onClick={handleLoginWithGoogle}
      style={{
        width: '100%',
      }}
      size="large"
      icon={<img width={24} height={24} src="https://img.icons8.com/color/48/google-logo.png" alt="google-logo" />}
    >
      Google
    </Button>
  )
}

export default SocialLogin
