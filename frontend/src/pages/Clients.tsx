/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeEvent, useContext, useEffect, useState } from "react";
import Table from "../components/Table";
import { GeneralContext } from "../context/GeneralContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Client } from "../interfaces/data";
const Clients = () => {

  const { clients, listClients, deleteClient } = useContext(GeneralContext);
  const [show, setShow] = useState<boolean>(false);
  const [dni, setDni] = useState<string>("");
  const [typeForm, setTypeForm] = useState<string>("");
  const [originalList, setOriginalList] = useState<Client[]>([]);
  const [list, setList] = useState<Client[]>([]);

  const column = [
    {
      name: "Dni",
      selector: (row: any) => row.dni,
      sortable: true,
      center:true,
      grow:0.5
    },
    {
      name: "Nombre y apellidos",
      selector: (row: any) => row.lastname +" "+ row.name,
      sortable: true,
      grow:1,
      wrap:true
    },
    {
      name: "Edad",
      selector: (row: any) => row.age,
      sortable: true,
      center:true,
      grow:0.5
    },
    {
      name: "Fecha de cumpleaños",
      selector: (row: any) => row.birthdate,
      sortable: true,
      center:true
    },
    {
      name: "Acciones",
      grow:0.5,
      cell: (row: any) => (
        <div className="d-flex justify-content-center gap-2 mx-auto">
          <Link
            to={`/cliente/${row.dni}`}
            className="btn btn-success"
            style={{ fontSize: "12px" }}
          >
            <FontAwesomeIcon icon={faPenToSquare} title="Editar elemento" />
          </Link>
          <button
            className="btn btn-danger"
            style={{ fontSize: "12px" }}
            onClick={() => handleOpenModalDelete(row.dni)}
          >
            <FontAwesomeIcon icon={faTrashCan} title="Eliminar elemento" />
          </button>
        </div>
      ),
      center: true,
    },
  ];

  useEffect(() => {
    listClients();
  }, []);

  useEffect(() => {
    setList(clients);
    setOriginalList(clients);
  }, [clients]);

  const handleOpenModalDelete = (dni: string) => {
    setDni(dni);
    setTypeForm("");
    setShow(true);
  };

  const handleDelete = async () => {
    await deleteClient(dni);
    await setShow(false);
  };

  const handleFilter = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const searchQuery = value.toLowerCase();
    if (searchQuery === "") {
      setList(originalList);
    }
    const newData = originalList.filter((row) =>
      row.name.toLowerCase().includes(searchQuery) ||
      row.dni.toLowerCase().includes(searchQuery) ||
      row.lastname.toLowerCase().includes(searchQuery)
    );
    setList(newData);
  };

  return (
    <div >
      <div className="d-flex justify-content-center mb-4 bg-primary">
        <h1 className="text-white fw-normal m-2">Lista de Clientes</h1>
      </div>
      <div className="p-0 p-md-5 bg-white border m-3 shadow rounded">
        <Table
          columns={column}
          data={list}
          onChange={handleFilter}
          show={show}
          onConfirm={handleDelete}
          onClose={() => setShow(false)}
          typeModal={typeForm}
          dni={dni}
        />
      </div>
    </div>
  );
};

export default Clients;