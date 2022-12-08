import React, { useState, useRef } from "react";
import { Button, Modal, Input } from "antd";
const DeleteModal = ({ action }) => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const buttonRef = useRef(null);

  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    buttonRef.current.click();
  };
  const handleCancel = () => {
    setOpen(false);
  };

  const onSubmitHandler = (e) => {
    action(e);
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };
  return (
    <>
      <Button size="large" type="primary" onClick={showModal}>
        Delete Data
      </Button>
      <Modal
        title="Delete"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        
          <form
            onSubmit={(e) => {
              onSubmitHandler(e);
            }}
          >
            <Input placeholder="id" type="number" />
            <input style={{ display: "none" }} type="submit" ref={buttonRef} />
          </form>
    
      </Modal>
    </>
  );
};
export default DeleteModal;
