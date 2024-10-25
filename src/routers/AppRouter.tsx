import { AuthContext } from "context/auth";
import { useContext } from "react";
import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { AuthRouter, OnlyPublicRoute, PrivateRoute, ProfileRouter } from "./index";
import { ClientsRouter } from "./ClientsRouter";

export const AppRouter = () => {
  const { isLogged } = useContext(AuthContext)
  return (
    <Router>
      <Routes>
        <Route element={<PrivateRoute isAuthenticated={isLogged} />}>
          <Route path="/clients" element={<ClientsRouter />} />
          <Route path="/profile/*" element={<ProfileRouter />} />

        </Route>
        <Route element={<OnlyPublicRoute isAuthenticated={isLogged} />}>
          <Route path="/auth/*" element={<AuthRouter />} />
        </Route>
        <Route path="*" element={<Navigate to="/clients"/>} />
      </Routes>
    </Router>
  )
}