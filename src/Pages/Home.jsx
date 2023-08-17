import React, { useContext, useState } from "react";
import { AdminContext } from "../App";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import Modal from "../Components/ui/Modal";
// export const handleModalOpen = () => setShowModal(true);
const Home = () => {
  // const { isAdmin, setIsAdmin } = useContext(AdminContext);
  // const [showModal, setShowModal] = useState(false);

  // const handleLogin = () => {
  //   setIsAdmin(true);
  // };

  // const handleLogout = () => {
  //   setIsAdmin(false);
  // };

  // const navigate = useNavigate();

  // const navigatePrivate = () => navigate("/private");

  return (
    <>
      {/* <Modal isShow={showModal} /> */}
      <Header></Header>
      <div className="flex flex-col justify-center items-center h-screen w-screen gap-4">
        <div>
          <h1>Home</h1>
        </div>
      </div>
    </>
  );
};

export default Home;
