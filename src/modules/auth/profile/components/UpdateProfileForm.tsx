import { Button, Col, Form, Input, Row, Typography } from "antd";
import { useUpdateProfile } from "../hooks/useUpdateProfile";
import { requiredMsg } from "utils/form";
const { Title, } = Typography;

export const UpdateProfileForm = () => {

    const { profile, form, isEdit, setIsEdit, onCancelEdit, onSubmit, } = useUpdateProfile()

    return (
        <>
            <Title level={2}>Profile</Title>
            <Form
                name="basic"
                size="large"
                initialValues={profile}
                form={form}
                onFinish={onSubmit}
                style={{ padding: '20px' }}
                labelCol={{ span: 5, offset: 0 }}
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: requiredMsg }]}
                >
                    <Input disabled={!isEdit} />
                </Form.Item>
                <Row justify="end" gutter={16} >
                    {
                        !isEdit &&
                        <>
                            <Col>
                                <Form.Item>
                                    <Button type="primary" size="large" onClick={() => setIsEdit(true)}>
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
}
