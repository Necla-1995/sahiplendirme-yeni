import React from 'react';
import { useContext, useState, useEffect } from 'react';
import Hayvan from './Hayvan';
import AddForm from './AddForm';
import { HayvanContext } from '../context/HayvanContext';
import { Button, Modal, Alert } from 'react-bootstrap';

// Ana Component
const HayvanListesi = () => {
    const { hayvanlar } = useContext(HayvanContext)

    const [showAlert, setShowAlert] = useState(false); //alert ilk açıldığında çalışmayacak
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false);  //form kapatma formu
    const handleShow = () => setShow(true)  //form açma komutu
    const handleShowAlert = () => setShowAlert(true) //alert çalıştırma komutu

    useEffect(() =>{
        handleClose();

        return() =>{handleShowAlert()}
    }, [hayvanlar])

    return (
        <div>
            <div className="card-group">
                <div className="card-body">
                    <nav>
                        <Button onClick={handleShow} className="btn" id="hayvanEkle" data-toggle="modal">Hayvan Ekle</Button>
                    </nav>
                </div>
            </div>
            <Alert show={showAlert} variant="warning" onClose={() => setShowAlert(false)} dismissible>
                İşleminiz başarılı bir şekilde yapılmıştır.
            </Alert>

            <p>
                <Hayvan hayvanlar={hayvanlar} />
            </p>

            

            <Modal show={show} onHide={handleClose}>
                <Modal.Header className="modal-header">
                    <Modal.Title>Hayvan Ekle</Modal.Title>
                </Modal.Header>
                <Modal.Body><AddForm /></Modal.Body>
            </Modal>
        </div>

    )
}













export default HayvanListesi;

