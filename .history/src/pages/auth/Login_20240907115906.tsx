import type { FormProps } from 'antd'
import { Button, Card, Checkbox, Form, Input } from 'antd'
import { Link } from 'react-router-dom'

type FieldType = {
  email?: string
  password?: string
  remember?: string
}

const LoginPage = () => {
  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    console.log('Success:', values)
  }

  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }
  return (
    <>
      <Card>
        <Form
          layout="vertical"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
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
              <Form.Item<FieldType> name="remember" valuePropName="checked">
                <Checkbox>Remember for 30 days</Checkbox>
              </Form.Item>
            </div>

            <div className="col text-right">
              <Link to={'/'}>Forgot password?</Link>
            </div>
          </div>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </>
  )
}

export default LoginPage
