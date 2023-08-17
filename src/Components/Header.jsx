import React, { useContext, useState } from "react";

import { AdminContext } from "../App";
import { useNavigate } from "react-router-dom";
import Modal, { ModalFooter, ModalHeader } from "./ui/Modal";
import Drawer from "./ui/Drawer";
const Header = () => {
  const { isAdmin, setIsAdmin } = useContext(AdminContext);
  const [showModal, setShowModal] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false);
  const handleModalOpen = () => setShowModal(true);
  const handleModalClose = () => setShowModal(false);
  const navigate = useNavigate();

  const navigatePrivate = () => navigate("/private");
  const navigatePublic = () => navigate("/");
  const handleLogin = () => {
    handleModalOpen();
    setIsAdmin(true);
  };

  const handleLogout = () => {
    handleModalClose();
    setIsAdmin(false);
    navigatePublic();
  };

  const handleshowDrawer = () => {
    setShowDrawer(true);
  };

  return (
    <>
      <Modal showModal={showModal} setShow={setShowModal}>
        <ModalHeader title="Log In" subtitle="Insert Credential" />
        <ModalFooter>
          <button onClick={navigatePrivate} className="text-center bg-blue-700">
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
      <div className="sticky top-0 bg-white flex justify-between w-screen py-6 px-8 border border-gray-500">
        <h5>Logo</h5>
        <button
          onClick={isAdmin ? handleLogout : handleLogin}
          className="bg-blue-600 w-[100px]"
        >
          {isAdmin ? "Logout" : "Login"}
        </button>
        <button onClick={handleshowDrawer}>Drawer</button>
        <Drawer showDrawer={showDrawer} setShow={setShowDrawer}></Drawer>
      </div>
    </>
  );
};

export default Header;
