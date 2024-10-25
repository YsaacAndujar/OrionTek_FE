import { LoadingContext } from "context/loading"
import { postRequestPasswordRecovery } from "helpers/auth"
import { IForgotPasswordRequest } from "interfaces/auth"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { showModal } from "utils/modal"

export const useForgotPassword = () => {
    const { setLoading } = useContext(LoadingContext)

    const navigate = useNavigate()

    const onSended = () => {
        navigate('/auth')
    }

    const onSubmit = (values: IForgotPasswordRequest) => {
        setLoading(true)
        postRequestPasswordRecovery(values)
            .then(() => {
                showModal({ title: 'Pasword recovery request completed', text: "An email was sent to your email with instructions on how to recover your password", type: 'success' })
                    .then(onSended)
            }).finally(() => {
                setLoading(false)
            })
    }
    return { onSubmit }
}
