import { data } from 'jquery';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

type ModalProps = {
    show:boolean,
    handleOK: React.MouseEventHandler<HTMLButtonElement>,
    handleCancel: React.MouseEventHandler<HTMLButtonElement> ,
    handleHide: ()=>void,
    data:any
}


function Modalwebank({show, handleOK, handleCancel, handleHide, data}:ModalProps) {
 
    return (
      <>
        <Modal show={show} onHide={handleHide}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>DEL l'id  : {JSON.stringify(data)}</Modal.Body>
          {data.img && <img src={data.img} />}
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCancel}>
              Close
            </Button>
            <Button variant="primary" onClick={handleOK}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}

export default Modalwebank;
export type {ModalProps};