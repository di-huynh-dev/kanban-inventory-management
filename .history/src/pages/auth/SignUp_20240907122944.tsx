import type { FormProps } from 'antd'
import { Button, Card, Checkbox, Flex, Form, Input, Space, Typography } from 'antd'
import { useState } from 'react'
import { Link } from 'react-router-dom'

type FieldType = {
  name: string
  email: string
  password: string
  confirmPassword: string
}

const { Title, Paragraph, Text } = Typography

const SignUpPage = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [isRemember, setIsRemember] = useState(false)

  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    console.log('Success:', values)
  }

  return (
    <>
      <Card
        style={{
          width: '70%',
        }}
      >
        <Form
          layout="vertical"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          disabled={isLoading}
          size="large"
        >
          <Form.Item<FieldType> label="Name" name="name" rules={[{ required: true, message: 'Enter your name!' }]}>
            <Input allowClear maxLength={100} placeholder="Enter your name" />
          </Form.Item>

          <Form.Item<FieldType> label="Email" name="email" rules={[{ required: true, message: 'Enter your email!' }]}>
            <Input allowClear maxLength={100} type="email" placeholder="Enter your email" />
          </Form.Item>

          <Form.Item<FieldType>
            label="Password"
            name="password"
            rules={[
              { required: true, message: 'Enter your password!', min: 6 },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('confirmPassword') === value) {
                    return Promise.resolve()
                  }
                  return Promise.reject(new Error('The two passwords that you entered do not match!'))
                },
              }),
            ]}
          >
            <Input.Password placeholder="******" />
          </Form.Item>

          <Form.Item<FieldType>
            label="Confirm Password"
            name="confirmPassword"
            rules={[
              { required: true, message: 'Enter your confirm password!' },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve()
                  }
                  return Promise.reject(new Error('The two passwords that you entered do not match!'))
                },
              }),
            ]}
          >
            <Input.Password placeholder="******" />
          </Form.Item>
          <Form.Item style={{ marginTop: 20 }}>
            <Button type="primary" loading={isLoading} size="large" htmlType="submit" style={{ width: '100%' }}>
              Sign in
            </Button>
          </Form.Item>
        </Form>
        <div className="mt-3 text-center">
          <Space>
            <Text>Don't have an acount? </Text>
            <Link to={'/sign-up'}>Login</Link>
          </Space>
        </div>
      </Card>
    </>
  )
}

export default SignUpPage
