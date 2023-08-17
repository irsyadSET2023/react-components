import React, { useState } from "react";
import Modal, { ModalFooter, ModalHeader } from "../Components/ui/Modal";
import Drawer from "../Components/ui/Drawer";

const Components = () => {
  const [showModal, setShowModal] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false);

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleDrawerOpen = () => {
    setShowDrawer(true);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen gap-4">
      <button
        onClick={handleModalOpen}
        className="bg-blue-700 w-[200px] h-[50px]"
      >
        Modal
      </button>
      <button
        onClick={handleDrawerOpen}
        className="bg-red-700 w-[200px] h-[50px]"
      >
        Drawer
      </button>
      <Modal showModal={showModal} setShow={setShowModal}>
        <ModalHeader title="Log In" subtitle="Insert Credential" />
        <ModalFooter>
          <button
            onClick={handleModalClose}
            className="text-center bg-blue-700"
          >
            Login
          </button>
          <button
            onClick={handleModalClose}
            className="text-center bg-blue-100"
          >
            Cancel
          </button>
        </ModalFooter>
      </Modal>
      <Drawer showDrawer={showDrawer} setShow={setShowDrawer} />
    </div>
  );
};

export default Components;
