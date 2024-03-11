import { useState } from "react";
import { Modal } from "react-bootstrap";

interface ContainerProps{
    open:boolean,
    close: () => void,
    onConfirm?: () => void,
}

export const ModalDelete: React.FC<ContainerProps> = ({ open, close, onConfirm }) => {
    const [show] = useState<boolean>(open);
    return (
        <Modal
            show={show}
            onHide={close}
            centered
            style={{ zIndex: "100000" }}
        >
            <Modal.Header closeButton className="border-0 mt-1">
                <Modal.Title className="fw-bold fs-5 text-center mx-auto pb-2">
                    ¿Está seguro que desea eliminarlo?
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="d-flex flex-column gap-3 justify-content-center align-items-center p-2 border-top py-3">
                <p className="text-center fw-light mb-0" style={{ fontSize: "17px" }}>
                    Se eliminará el cliente de nuestros registros.
                </p>
            </Modal.Body>
            <Modal.Footer className="d-flex justify-content-end border-top">
                <button onClick={close} className="btn btn-secondary">NO</button>
                <button className="btn btn-danger px-3" onClick={onConfirm}>SI</button>
            </Modal.Footer>
        </Modal>
    )
};