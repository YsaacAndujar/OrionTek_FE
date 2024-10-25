import { useNavigate } from "react-router-dom";
import { useClientAdd } from "../hooks/useClientAdd";
import { Button, Col, Form, Row, Typography } from "antd";
import { ClientValuesForm } from "../components/ClientValuesForm";
const { Title, } = Typography;

export const ClientsAddScreen = () => {
  const { form, onSubmit } = useClientAdd()
    const navigate = useNavigate()
  return (
    <>
      <Title level={2}>Add</Title>
      <Form
        name="basic"
        size="large"
        form={form}
        initialValues={{ name: '', directions: [] }}
        onFinish={onSubmit}
        style={{ padding: '20px' }}
        labelCol={{ span: 5 }}
        wrapperCol={{ span: 15 }}
      >
        <ClientValuesForm/>

        <Row justify="end"gutter={16} >
              <Col>
                <Form.Item>
                  <Button size="large" onClick={() =>{navigate('/clients')}}>
                    Cancel
                  </Button>
                </Form.Item>
              </Col>
              <Col>
                <Form.Item>
                  <Button type="primary" size="large" htmlType="submit">
                    Add
                  </Button>
                </Form.Item>
              </Col>
        </Row>
      </Form>
    </>
  )
};
