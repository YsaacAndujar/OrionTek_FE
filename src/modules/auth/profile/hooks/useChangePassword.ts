import { IPasswordRequest } from './../../../interfaces/profile';
import { Form } from "antd";
import { LoadingContext } from "context/loading";
import { updatePassword } from "helpers/profile";
import { useContext } from "react";
import { showModal } from "utils/modal";

export const useChangePassword = () => {
    const [form] = Form.useForm();
    const { setLoading } = useContext(LoadingContext)

    const onSubmit = ({ confirm, ...values }: any) =>{
        setLoading(true)
        updatePassword(values as IPasswordRequest)
        .then(()=>{
            showModal({title: 'Password updated', text:'Password updated successfully', type:'success'})
            form.resetFields()
        })
        .finally(()=>{
            setLoading(false)
        })
    }


  return { form, onSubmit, }
}
