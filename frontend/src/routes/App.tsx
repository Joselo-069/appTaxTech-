import { BrowserRouter, Route, Routes } from "react-router-dom";
import '../styles/Global.css';
import Clients from "../pages/Clients";
import { GeneralProvider } from "../context/GeneralContext";
import NotFound from "../pages/NotFound";
import ClientDetail from "../pages/ClientDetail";
import ClientRegister from "../pages/ClientRegister";

const App = () => {

  return (
    <GeneralProvider>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Clients />} />
                <Route path="/registrar" element={<ClientRegister />} />
                <Route path="/clientes" element={<Clients />} />
                <Route path="/cliente/:dni" element={<ClientDetail/>} />
                <Route path="*" element={<NotFound/>} />
            </Routes>
        </BrowserRouter>
    </GeneralProvider>
  );
};

export default App;