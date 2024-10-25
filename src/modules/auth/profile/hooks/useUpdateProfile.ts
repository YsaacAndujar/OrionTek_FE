import { Form } from "antd";
import { LoadingContext } from "context/loading";
import { getProfile, updateProfile } from "helpers/profile";
import { IProfile } from "interfaces/profile";
import { useContext, useEffect, useState } from "react";
import { showModal } from "utils/modal";

export const useUpdateProfile = () => {
    const [form] = Form.useForm();
    const [profile, setProfile] = useState<IProfile>()
    const { setLoading } = useContext(LoadingContext)

    useEffect(() => {
        form.resetFields()
    }, [profile])
    const [isEdit, setIsEdit] = useState(false)
    useEffect(() => {
        setLoading(true)
        getProfile()
            .then((result) => {
                setProfile(result)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    const onCancelEdit = () => {
        setIsEdit(false)
        form.resetFields()
    }

    const onSubmit = (values: IProfile) => {
        setLoading(true)
        updateProfile(values)
            .then(() => {
                showModal({ title: 'Profile edited', text: 'Profile edited successfully', type: 'success' })
                setProfile((prev) => ({ ...prev, ...values }))
            })
            .finally(() => {
                setLoading(false)
            })
    }


    return { profile, isEdit, form, setIsEdit, onCancelEdit, onSubmit, }
}
