import { ClientsAddScreen, ClientsDetailsScreen, ClientsListScreen } from "modules/clients";
import { Navigate, Route, Routes } from "react-router-dom";

export const ClientsRouter = () => {
    return (
        <Routes>
            <Route index element={ <ClientsListScreen />} />
            <Route path="/:id" element={ <ClientsDetailsScreen />} />
            <Route path="/add" element={ <ClientsAddScreen />} />
            <Route path="/*" element={ <Navigate to="/"/> }/>
        </Routes>
      )
};
