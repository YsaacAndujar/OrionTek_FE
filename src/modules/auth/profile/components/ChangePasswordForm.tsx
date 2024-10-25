import { Button, Col, Form, Input, Row, Typography } from "antd";
import { useChangePassword } from "../hooks/useChangePassword";
import { passwordMatchMsg, requiredMsg } from "utils/form";
const { Title, } = Typography;

export const ChangePasswordForm = () => {
  const { form, onSubmit, } = useChangePassword()

  return (
    <>
      <Title level={2}>Change password</Title>
      <Form
        name="basic"
        size="large"
        form={form}
        onFinish={onSubmit}
        style={{ padding: '20px' }}
        labelCol={{ span: 5, offset: 0 }}
      >
        <Form.Item
          label="Old password"
          name="oldPassword"
          rules={[{ required: true, message: requiredMsg }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="New password"
          name="newPassword"
          rules={[{ required: true, message: requiredMsg }]}
        >
          <Input.Password />
        </Form.Item>
        
        <Form.Item
          label="Confirm password"
          name="confirm"
          dependencies={['newPassword']}
          rules={[
            { required: true, message: requiredMsg },
            ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('newPassword') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error(passwordMatchMsg));
            },
          }),]}
        >
          <Input.Password />
        </Form.Item>
        <Row justify="end" gutter={16} >
              <Col>
                <Form.Item>
                  <Button type="primary" size="large" htmlType="submit">
                    Save
                  </Button>
                </Form.Item>
              </Col>
        </Row>
      </Form>
    </>
  )
}
