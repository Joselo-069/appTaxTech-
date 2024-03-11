import { faRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="text-center pt-5"><br /><br /><br /><br />
            <h1 className="mt-5">Sucedio un error</h1><br />
            <Link to="/clientes" className="btn btn-danger fw-bold">
                <FontAwesomeIcon icon={faRotateLeft} />
                Retroceder
            </Link>
        </div>
    )
};

export default NotFound;