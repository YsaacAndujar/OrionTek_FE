import { AuthScreen, ForgotPasswordScreen, RecoverPasswordScreen } from "modules/auth"
import { Navigate, Route, Routes } from "react-router-dom"

export const AuthRouter = () => {
  return (
    <Routes>
        <Route index element={ <AuthScreen />} />
        <Route path="/forgot-password" element={ <ForgotPasswordScreen />} />
        <Route path="/recover-password" element={ <RecoverPasswordScreen />} />
        <Route path="*" element={ <Navigate to="/auth"/> }/>
    </Routes>
  )
}