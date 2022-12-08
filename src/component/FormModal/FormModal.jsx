import React, { useState, useRef } from "react";
import { Input, Button, Modal } from "antd";
import './FormModal.style.css';

const FormModal = ({ action, type, name }) => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const buttonRef = useRef(null);
  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    buttonRef.current.click();
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    action(e);
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <>
      <Button size="large" type="primary" onClick={showModal}>
        {name}
      </Button>
      <Modal
        title={name}
        open={open}
        onOk={(e) => {
          handleOk(e);
        }}
        okText="Submit"
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <div className="Form-wrap">
          <form
            className="Form"
            onSubmit={(e) => {
              onSubmitHandler(e);
            }}
          >
            {type == "update" && <Input placeholder="id" type="number"  min={0}/>}
            <Input placeholder="name" type="text"/>
            <Input placeholder="age" type="number"  min={0}/>
            <Input placeholder="email" type="email" />
            <input style={{ display: "none" }} type="submit" ref={buttonRef} />
          </form>
        </div>
      </Modal>
    </>
  );
};

export default FormModal;
