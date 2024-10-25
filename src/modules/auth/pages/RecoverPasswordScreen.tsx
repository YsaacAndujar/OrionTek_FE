import { Button, Col, Form, Input, Layout, Row, theme, Typography } from "antd";
import { Content } from "antd/es/layout/layout";
import { useNavigate } from "react-router-dom";
import { useRecoverPassword } from "../hooks/useRecoverPassword";
import { contentStyle, divContainerStyle, layoutStyle } from "../styles/layoutStyles";
import { passwordMatchMsg, requiredMsg } from "utils/form";
const { Title,Text } = Typography;

export const RecoverPasswordScreen = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
      } = theme.useToken();
      const navigate = useNavigate()
      const { onSubmit } = useRecoverPassword()
  return (
    <Layout style={layoutStyle}>
      <Content style={contentStyle}>
        <div
          style={{
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
            ...divContainerStyle
          }}
        >
      <Title level={2}>Recover password</Title>
      <Text style={{color:'red'}}>The code will always be 0000</Text>
      <Form
        name="basic"
        initialValues={{ remember: true }}
        style={{ padding: '20px' }}
        labelCol={{ span: 5, offset: 0 }}
        onFinish={onSubmit}
      >
        <Form.Item
          label="User"
          name="username"
          rules={[{ required: true, message: requiredMsg }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Code"
          name="code"
          rules={[{ required: true, message: requiredMsg }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="New password"
          name="password"
          rules={[{ required: true, message: requiredMsg }]}
        >
          <Input.Password />
        </Form.Item>
        
        <Form.Item
          label="Confirm password"
          name="confirm"
          dependencies={['password']}
          rules={[
            { required: true, message: requiredMsg },
            ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error(passwordMatchMsg));
            },
          }),]}
        >
          <Input.Password />
        </Form.Item>
        <Row justify="end" gutter={16}>
          <Col>
            <Form.Item>
              <Button size="large" onClick={() => { navigate('/auth') }}>
                Cancel
              </Button>
            </Form.Item>
          </Col>
          <Col>
            <Form.Item>
              <Button type="primary" htmlType="submit" size="large">
                Change password
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
        </div>
      </Content>
    </Layout>
  )
}
