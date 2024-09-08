import type { FormProps } from 'antd'
import { Button, Card, Checkbox, Flex, Form, Input } from 'antd'
import { useState } from 'react'
import { Link } from 'react-router-dom'

type FieldType = {
  email?: string
  password?: string
  remember?: string
}

const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [isRemember, setIsRemember] = useState(false)

  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    console.log('Success:', values)
  }

  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }
  return (
    <>
      <Card
        style={{
          width: '50%',
        }}
      >
        <Form
          layout="vertical"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          disabled={isLoading}
          size="large"
        >
          <Form.Item<FieldType> label="Email" name="email" rules={[{ required: true, message: 'Enter your email' }]}>
            <Input />
          </Form.Item>

          <Form.Item<FieldType> label="Password" name="password" rules={[{ required: true, message: '**********' }]}>
            <Input.Password />
          </Form.Item>

          <div className="row">
            <div className="col">
              <Checkbox checked={isRemember} onChange={(val) => setIsRemember(val.target.checked)}>
                Remember for 30 days
              </Checkbox>
            </div>
            <div className="col text-right">
              <Link to={'/'}>Forgot password?</Link>
            </div>
          </div>

          <Flex vertical gap="small" className="site-button-ghost-wrapper">
            <Form.Item>
              <Button type="primary" loading={isLoading} size="large" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Flex>
        </Form>
      </Card>
    </>
  )
}

export default LoginPage
