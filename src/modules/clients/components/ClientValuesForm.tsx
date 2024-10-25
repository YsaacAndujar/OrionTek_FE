import { Button, Form, Input } from "antd";
import { requiredMsg } from "utils/form";

interface ClientValuesFormProps {
    isView?: boolean
}
export const ClientValuesForm = ({ isView }: ClientValuesFormProps) => {
    return (
        <>
            <Form.Item
                label="Name"
                name="name"
                rules={[{ required: true, message: requiredMsg }]}
            >
                <Input disabled={isView} />
            </Form.Item>
            <Form.List name="directions">
    {(fields, { add, remove }, { errors }) => (
      <>
        {fields.map((field, index) => (
          <Form.Item
            key={field.key}
            label={`Direction ${index + 1}`}
            required={false}
            labelCol={{ span: 5 }}
            wrapperCol={{ span: 15 }}
          >
            <Form.Item
              {...field}
              validateTrigger={['onChange', 'onBlur']}
              rules={[
                {
                  required: true,
                  whitespace: true,
                  message: "Please enter a direction or delete this field",
                },
              ]}
              noStyle
            >
              <Input placeholder="direction name" style={{ width: '80%' }} disabled={isView}/>
            </Form.Item>
            {
          !isView && (<>
          <Button
              danger
              style={{ marginLeft: '8px' }}
              onClick={() => remove(field.name)}
            >
              Remove
            </Button>
          </>)}
            
          </Form.Item>
        ))}
        {
          !isView && (<>
          <Form.Item
          wrapperCol={{
            offset: 5, // Alineación con la etiqueta "Name"
            span: 15,
          }}
        >
          <Button type="dashed" onClick={() => add()} style={{ width: '80%' }}>
            Add Direction
          </Button>
          <Form.ErrorList errors={errors} />
        </Form.Item>
          </>)
        }
        
      </>
    )}
  </Form.List>
        </>
    )
};
