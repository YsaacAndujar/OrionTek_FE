import { Button, Col, Form, Input, Layout, Row, theme, Typography } from "antd";
import { Content } from "antd/es/layout/layout";
import { useNavigate } from "react-router-dom";
import { contentStyle, divContainerStyle, layoutStyle } from "../styles/layoutStyles";
import { useForgotPassword } from "../hooks/useForgotPassword";
import { requiredMsg } from "utils/form";
const { Title,Text } = Typography;

export const ForgotPasswordScreen = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
      } = theme.useToken();
      const navigate = useNavigate()
      const { onSubmit } = useForgotPassword()
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
      <Title level={2}>Forgot password</Title>
      <Text style={{color:'red'}}>I'm supposed to send you a link to your email to recover the password, but for now I'll just do an example because I can't send emails.</Text>
      <Form
        name="basic"
        initialValues={{ remember: true }}
        style={{ padding: '20px' }}
        labelCol={{ span: 5, offset: 0 }}
        onFinish={onSubmit}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: requiredMsg }]}
        >
          <Input />
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
                Recover
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
