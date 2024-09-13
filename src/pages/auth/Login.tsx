import type { FormProps } from 'antd'
import { Button, Card, Checkbox, Form, Input, message, Space, Typography } from 'antd'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import SocialLogin from './components/SocialLogin'
import { appInfo, localDataNames } from '../../constants/appInfo'
import handleApis from '../apis/handleApis'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { addAuth } from '../../redux/reducers/auth.reducer'

type FieldType = {
  email?: string
  password?: string
  remember?: string
}

const { Title, Paragraph, Text } = Typography

const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [isRemember, setIsRemember] = useState(false)
  const dispatch = useDispatch()

  const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
    try {
      const resp: any = await handleApis('/auth/login', values, 'post')

      if (resp.data) {
        dispatch(addAuth(resp.data.metadata))
        toast.success(resp.data.message)
        if (isRemember) {
          localStorage.setItem(localDataNames.authData, JSON.stringify(resp.data.metadata))
        }
      }
    } catch (error: any) {
      toast.error(error.message)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <Card
        style={{
          width: '70%',
        }}
      >
        <div className="text-center">
          <img src={appInfo.logo} alt="Logo" style={{ width: '48px', height: '48px' }} />
          <Title level={2}>Log in to your account</Title>
          <Paragraph type="secondary">Welcome back! Please enter your details.</Paragraph>
        </div>
        <Form
          layout="vertical"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          disabled={isLoading}
          size="large"
        >
          <Form.Item<FieldType> label="Email" name="email" rules={[{ required: true, message: 'Enter your email!' }]}>
            <Input allowClear maxLength={100} type="email" />
          </Form.Item>

          <Form.Item<FieldType>
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Enter your password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <div className="row">
            <div className="col">
              <Checkbox checked={isRemember} onChange={(val) => setIsRemember(val.target.checked)}>
                Remember for 30 days
              </Checkbox>
            </div>
            <div className="col" style={{ textAlign: 'right' }}>
              <Link to={'/'}>Forgot password</Link>
            </div>
          </div>

          <Form.Item style={{ marginTop: 20 }}>
            <Button type="primary" loading={isLoading} size="large" htmlType="submit" style={{ width: '100%' }}>
              Get started
            </Button>
          </Form.Item>
        </Form>
        <SocialLogin isRemember={isRemember} />
        <div className="mt-3 text-center">
          <Space>
            <Text>Don't have an acount? </Text>
            <Link to={'/sign-up'}>Sign up</Link>
          </Space>
        </div>
      </Card>
    </>
  )
}

export default LoginPage
