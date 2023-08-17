import React, { useState } from "react";

const Modal = ({ showModal = false, setShow, children }) => {
  const handleModalClose = () => {
    console.log("Hai");
    console.log("set Show", setShow);
    setShow(false);
  };
  return (
    showModal && (
      <div
        onClick={handleModalClose}
        className="bg-red-700/80  top-0 left-0 w-screen h-screen flex justify-center items-center fixed z-50"
      >
        <div onClick={(e) => e.stopPropagation()}>
          <div className="bg-white w-full md:w-[500px] p-4 rounded flex flex-col">
            {children}
          </div>
        </div>
      </div>
    )
  );
};

export const ModalHeader = ({ title, subtitle }) => {
  return (
    <div className="py-4 space-y-2">
      <h6 className="font-bold">{title}</h6>
      <p>{subtitle}</p>
    </div>
  );
};

export const ModalFooter = ({ children }) => {
  return <div className="space-y-2 flex flex-col ">{children}</div>;
};

// export const Modal

export default Modal;
