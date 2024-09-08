import type { FormProps } from 'antd'
import { Button, Card, Checkbox, Form, Input } from 'antd'
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
        </Form>
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
        <div className="mt-4 mb-3">
          <Button
            loading={isLoading}
            onClick={() => form.submit()}
            type="primary"
            style={{
              width: '100%',
            }}
            size="large"
          >
            Login
          </Button>
        </div>
      </Card>
    </>
  )
}

export default LoginPage
