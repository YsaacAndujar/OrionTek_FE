import { Button, Col, Form, Row, Typography } from "antd";
import { ClientValuesForm } from "../components/ClientValuesForm";
import { useNavigate, useParams } from "react-router-dom";
import { useClientDetails } from "../hooks/useClientDetails";
const { Title } = Typography
export const ClientsDetailsScreen = () => {
  const { id } = useParams();
    const navigate = useNavigate();
    if (!id) {
        navigate('/clients')
    }
    const { client, form, isEdit, setIsEdit, onCancelEdit, onSubmit, onDeleteClick } = useClientDetails(id||'0')
    
  return (
    <>
      <Title level={2}>Details</Title>
      <Form
        name="basic"
        size="large"
        initialValues={client}
        form={form}
        onFinish={onSubmit}
        style={{ padding: '20px' }}
        labelCol={{ span: 5, offset: 0 }}
      >
        <ClientValuesForm isView={!isEdit}/>

        <Row justify="end"gutter={16} >
          {
            !isEdit && 
            <>
              <Col>
                <Form.Item>
                  <Button size="large" danger onClick={onDeleteClick}>
                    Delete
                  </Button>
                </Form.Item>
              </Col>
              <Col>
                <Form.Item>
                  <Button size="large" onClick={() =>{navigate('/products')}}>
                    Cancel
                  </Button>
                </Form.Item>
              </Col>
              <Col>
                <Form.Item>
                  <Button type="primary" size="large" onClick={()=> setIsEdit(true)}>
                    Edit
                  </Button>
                </Form.Item>
              </Col>
            </>
          }
          {
            isEdit && 
            <>
              <Col>
                <Form.Item>
                  <Button size="large" htmlType="reset" onClick={onCancelEdit}>
                    Cancel
                  </Button>
                </Form.Item>
              </Col>
              <Col>
                <Form.Item>
                  <Button type="primary" size="large" htmlType="submit">
                    Save
                  </Button>
                </Form.Item>
              </Col>
            </>
          }
        </Row>
      </Form>
    </>
  )
};
