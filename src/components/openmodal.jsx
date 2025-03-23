// openmodal component
import {useEffect, useState} from "react";
import Modal from "react-modal";

export default function OpenModal(props) {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    useEffect(() => {
        setModalIsOpen(props.open);
    },[props.open,props]);
    const onCloseFunc = () => {
        setModalIsOpen(false);
         (props.close) && props.close();
    }
    return (
        <>
            {
                <Modal
                    isOpen={modalIsOpen}
                    contentLabel="Resim Modal"
                    className="modal"
                    overlayClassName="overlay"
                >
                    <button onClick={onCloseFunc}>X</button>
                    {props.img && <img src={props.img} alt="Modal Content" className="modal-image" />}
                    {props.text && <p className="modal-text" >{ props.text }</p>}
                    {props.html && <p className="modal-text" dangerouslySetInnerHTML={{ __html: props.html }}></p>}

                </Modal>
            }
        </>
    );
}
