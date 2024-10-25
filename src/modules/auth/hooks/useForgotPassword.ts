import { LoadingContext } from "context/loading"
import { postForgotPassword } from "helpers/auth"
import { IForgotPasswordRequest } from "interfaces/auth"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { showModal } from "utils/modal"

export const useForgotPassword = () => {
    const { setLoading } = useContext(LoadingContext)

    const navigate = useNavigate()

    const onSended = () =>{
        navigate('/auth/recover-password')
    }

    const onSubmit = (values: IForgotPasswordRequest) =>{
        setLoading(true)
        postForgotPassword(values)
        .then(()=>{
            showModal({title: 'Link sended', text:"Link sended successfully", type:'success'})
            .then(onSended)
        }).finally(()=>{
            setLoading(false)
        })
    }
  return { onSubmit }
}
