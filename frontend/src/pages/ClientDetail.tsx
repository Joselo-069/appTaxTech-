/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from "react-router-dom";
import { FormComponent } from "../components/Form/Form";
import { useContext, useEffect } from "react";
import { GeneralContext } from "../context/GeneralContext";
const ClientDetail = () => {

    const { dni } = useParams();
    const dniParam = dni || '';
    const { getdetailClient } = useContext(GeneralContext);

    useEffect(() => {
        if (dni) {
            const getForm = async () => {
                await getdetailClient(parseInt(dni, 10));
            }
            getForm();
        }
    }, [dni]);

    return (
        <div>
            <div className="d-flex justify-content-center mb-4 bg-primary">
                <h1 className="text-center m-2 text-white fw-normal">Editar Cliente</h1>
            </div>
            <FormComponent dni={dniParam} type="EDITAR" />
        </div>
    )
};

export default ClientDetail;