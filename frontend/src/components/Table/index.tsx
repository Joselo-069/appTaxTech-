import { faCirclePlus, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ChangeEvent } from "react";
import DataTable, { TableStyles, defaultThemes } from "react-data-table-component";
import { ModalDelete } from "../Modals/Delete";
import { Client } from "../../interfaces/data";
import { Link } from "react-router-dom";

interface ContainerProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  columns: any[];
  data:Client[];
  show: boolean;
  typeModal:string;
  dni:string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onConfirm?: () => void;
  onClose: () => void;
}

const Table: React.FC<ContainerProps> = ({ columns, data, show, onConfirm, onClose, onChange, typeModal}) => {

  const customStyles: TableStyles = {
    header: {
      style: {
        minHeight: "56px",
      },
    },
    headRow: {
      style: {
        borderTop: "1px solid " + defaultThemes.default.divider.default,
        fontWeight: "bold",
        fontSize: "14px"
      },
    },
    headCells: {
      style: {
        "&:not(:last-of-type)": {
          borderRight: "1px solid " + defaultThemes.default.divider.default,
        },
      },
    },
    cells: {
      style: {
        "&:not(:last-of-type)": {
          borderRight: "1px solid " + defaultThemes.default.divider.default,
          fontSize: "14px",
          color:"#636B6F",
          fontWeight: "500"
        },
      },
    },
  };

  return (
    <main>
      <section className="row d-flex justify-content-between align-items-center bg-white">
        <div className="col col-md-4 d-flex align-items-center gap-2">
          <Link to="/registrar" className="btn btn-sm btn-primary d-flex align-items-center gap-2 text-decoration-none">
            <span>Crear</span>
            <FontAwesomeIcon icon={ faCirclePlus } />
          </Link>
        </div>
        <div className="col col-md-8 input-group flex-nowrap w-25">
          <span className="input-group-text bg-white border shadow-sm">
            <FontAwesomeIcon icon={ faMagnifyingGlass } />
          </span>
          <input
            name="search"
            type="search"
            onChange={onChange}
            className="form-control focus-ring focus-ring-light border border-start-0 shadow-sm"
            placeholder="Buscar por dni, nombre o apellido"
            autoComplete="off"
          />
        </div>
      </section><br /><br />
      <section className="shadow-sm">
        <DataTable
          responsive
          columns={ columns }
          data={ data }
          pagination
          highlightOnHover
          pointerOnHover
          customStyles={ customStyles }/>
      </section>
      {
        (show && !typeModal) && (
          <ModalDelete
            open={show}
            close={onClose}
            onConfirm={onConfirm}
          />
        )
      }
    </main>
  );
};

export default Table;