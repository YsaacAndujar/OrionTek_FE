import { LoadingContext } from "context/loading"
import { postRecoverPassword } from "helpers/auth"
import { IRecoverPasswordRequest } from "interfaces/auth"
import { useContext } from "react"
import { useAuth } from "./useAuth"

export const useRecoverPassword = () => {
    const { setLoading } = useContext(LoadingContext)

    const { login } = useAuth()
    const onSubmit = ({confirm, ...values}: any) =>{
        setLoading(true)
        postRecoverPassword(values as IRecoverPasswordRequest)
        .then(({token})=>{
            login({remember:false,token})
        }).finally(()=>{
            setLoading(false)
        })
    }
  return { onSubmit }
}
