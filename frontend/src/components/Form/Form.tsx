/* eslint-disable @typescript-eslint/no-explicit-any */
import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useContext, useState } from 'react';
import { GeneralContext } from '../../context/GeneralContext';
import { Client } from "../../interfaces/data";
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFloppyDisk, faRotateLeft } from '@fortawesome/free-solid-svg-icons';

interface ContainerProps{
    dni:string,
    type:string,
}

export const FormComponent: React.FC<ContainerProps> = ({ dni, type }) => {

    const initialClient:Client = {
        id:"",
        dni:"",
        name:"",
        lastname:"",
        age:"",
        birthdate:"",
        status:""
    }

    const { createClient, editClient, detail } = useContext(GeneralContext);
    const [error, setError] = useState<any>({error:""});
    const navigate = useNavigate();

    const validationSchema = Yup.object().shape({
        dni: Yup.string()
        .required('Campo requerido')
        .length(8, 'El DNI debe tener exactamente 8 dígitos')
        .matches(/^\d+$/, 'El DNI debe contener solo números'),
        name: Yup.string().required('Campo requerido'),
        lastname: Yup.string().required('Campo requerido'),
        birthdate: Yup.date()
          .max(new Date('2000-01-01'), 'La fecha de nacimiento no puede ser después de 2000-01-01')
          .required('Campo requerido'),
        age: Yup.number()
          .required('Campo requerido')
          .min(18, 'Debe ser mayor de 18 años')
          .max(90, 'Debe ser menor de 90 años'),
      })

    const handleSubmit = async (values: object) => {
        if (type == 'REGISTRAR') {
          const res = await createClient(values) as any;
           setError(res);
        } else {
            await editClient(dni, values);
        }

        if(error.error == 'El DNI ya está registrado') {
            navigate("/clientes");
        }
    };

    return (
        <>
            <Formik
                initialValues={type == 'REGISTRAR' ? initialClient: detail}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
                enableReinitialize
            >
            {({ isSubmitting, touched, errors }) => (
                <Form className='p-0 p-md-5 mt-0 m-3 m-md-5 border border-2 shadow-sm rounded'>
                    {
                        error.error && (
                            <div className="alert alert-danger" role="alert">
                                {
                                    error.error
                                }
                            </div>
                        )
                    }
                    <section className="form-group mb-5">
                        <label htmlFor="dni" className="mb-2 fw-bold">
                            Dni:
                        </label>
                        <Field
                            id="dni"
                            name="dni"
                            type="text"
                            placeholder="Ingrese dni del cliente"
                            className={`form-control rounded focus-ring focus-ring-light p-1 ${
                                touched.dni && errors.dni ? "is-invalid" : ""}`}
                        />
                        <ErrorMessage
                            name="dni"
                            component="small"
                            className="invalid-feedback"
                        />
                    </section>
                    <section className="form-group mb-5 row g-5">
                        <div className='col-6 col-md-6'>
                            <label htmlFor="name" className="mb-2  fw-bold">
                                Nombres:
                            </label>
                            <Field
                                id="name"
                                name="name"
                                type="text"
                                placeholder="Ingrese nombres del cliente"
                                className={`form-control rounded focus-ring focus-ring-light p-1 ${
                                    touched.name && errors.name ? "is-invalid" : ""}`}
                            />
                            <ErrorMessage
                                name="name"
                                component="small"
                                className="invalid-feedback"
                            />
                        </div>
                        <div className='col-6 col-md-6'>
                            <label htmlFor="lastname" className="mb-2  fw-bold">
                                Apellidos:
                            </label>
                            <Field
                                id="lastname"
                                name="lastname"
                                type="text"
                                placeholder="Ingrese apellidos del cliente"
                                className={`form-control rounded focus-ring focus-ring-light p-1 ${
                                    touched.lastname && errors.lastname ? "is-invalid" : ""}`}
                            />
                            <ErrorMessage
                                name="lastname"
                                component="small"
                                className="invalid-feedback"
                            />
                        </div>
                    </section>
                    <section className="form-group mb-5 row g-5">
                        <div className='col-4'>
                            <label htmlFor="age" className="mb-2  fw-bold">
                                Edad:
                            </label>
                            <Field
                                id="age"
                                name="age"
                                type="number"
                                placeholder="Ingrese los años del cliente"
                                className={`form-control rounded focus-ring focus-ring-light p-1 ${
                                    touched.age && errors.age ? "is-invalid" : ""}`}
                            />
                            <ErrorMessage
                                name="age"
                                component="small"
                                className="invalid-feedback"
                            />
                        </div>
                        <div className='col-8'>
                            <label htmlFor="birthdate" className="mb-2  fw-bold">
                                Fecha de nacimiento:
                            </label>
                            <Field
                                id="birthdate"
                                name="birthdate"
                                type="date"
                                placeholder="Ingrese fecha de cumpleaños del cliente"
                                className={`form-control rounded focus-ring focus-ring-light p-1 ${
                                    touched.birthdate && errors.birthdate ? "is-invalid" : ""}`}
                            />
                            <ErrorMessage
                                name="birthdate"
                                component="small"
                                className="invalid-feedback"
                            />
                        </div>
                    </section><br />
                    <section className="text-center modal-footer d-flex gap-4">
                        <Link to="/clientes" className="btn btn-danger fw-bold d-flex align-items-center gap-1">
                            <FontAwesomeIcon icon={faRotateLeft} />
                            Retroceder
                        </Link>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="btn btn-primary d-flex align-items-center gap-1"
                            >
                            <FontAwesomeIcon icon={faFloppyDisk} />

                            <span className="fw-bold">
                                Guardar
                            </span>
                            {isSubmitting && (
                                <div
                                className="spinner-border spinner-border-sm"
                                role="status"
                                >
                                <span className="visually-hidden">Loading...</span>
                                </div>
                            )}
                        </button>
                    </section>
                </Form>
            )}
            </Formik>
        </>
    )
};