import { Form } from "antd";
import { LoadingContext } from "context/loading";
import { postClient } from "helpers/clients";
import { IClientCreate } from "interfaces/clients";
import { useContext } from "react";
import { showModal } from "utils/modal";

export const useClientAdd = () => {
    const [form] = Form.useForm();
    const { setLoading } = useContext(LoadingContext)

    const onSubmit = (values:IClientCreate) =>{
        setLoading(true)
        postClient(values)
        .then(()=>{
            showModal({title: 'Product added', text:'Product added successfully', type:'success'})
            form.resetFields()
        })
        .finally(()=>{
            setLoading(false)
        })
    }

  return { form, onSubmit }
};
