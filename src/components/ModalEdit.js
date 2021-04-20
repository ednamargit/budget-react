import React from 'react'
import { Modal } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react';
import NewEntryForm from './NewEntryForm';

export default function ModalEdit({ isOpen, setIsOpen }) {
  return (
    <Modal open={isOpen}>
      <Modal.Header>Edit Entry</Modal.Header>
      <Modal.Content>
        <NewEntryForm />
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={()=>setIsOpen(false)}>Close</Button>
      </Modal.Actions>
    </Modal>
  )
}
