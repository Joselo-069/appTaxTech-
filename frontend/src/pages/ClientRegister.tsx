/* eslint-disable react-hooks/exhaustive-deps */
import { FormComponent } from "../components/Form/Form";

const ClientRegister = () => {
    return (
        <div>
            <div className="d-flex justify-content-center mb-4 bg-primary">
                <h1 className="text-center m-2 text-white fw-normal">Registrar Cliente</h1>
            </div>
            <FormComponent dni={""} type="REGISTRAR" />
        </div>
    )
};

export default ClientRegister;