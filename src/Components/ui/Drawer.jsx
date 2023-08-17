import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AdminContext } from "../../App";

const Drawer = ({ showDrawer, setShow }) => {
  const { isAdmin, setIsAdmin } = useContext(AdminContext);
  const navigate = useNavigate();

  const navigatePrivate = () => {
    setIsAdmin(true);
    navigate("/private");
  };
  const handleDrawerClose = () => {
    setShow(false);
  };
  let bottomPosition = "w-screen bottom-0 h-[40vh]";
  let rightPosition = "w-[300px] h-screen  right-0 top-0";
  let leftPosition = "w-[300px] h-screen  left-0 top-0";
  //   let position = rightPosition;

  const [position, setPosition] = useState(rightPosition);

  return (
    <div
      className={`fixed top-0 right-0 w-screen h-screen transition-opacity ${
        showDrawer ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`bg-blue-200  p-4 rounded flex flex-col ${position}   fixed transition-transform ${
          showDrawer ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="py-4 space-y-2 flex justify-center items-center flex-col">
          <h6 className="font-bold text-blue-800">Drawer</h6>
          <p className="text-blue-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
            cum ipsa natus provident magni vitae ipsam quis itaque, placeat
            cupiditate, beatae accusantium corrupti illo? Ea dolore odio eius
            consequatur labore.
          </p>
        </div>

        <div className="flex  justify-center items-center gap-4">
          {/* Make  3 buttons that drawer can appear at right,left and bottom */}
          <button
            onClick={() => setPosition(rightPosition)}
            className="text-center text-white py-2 rounded hover:bg-blue-800 hover:text-white transition-colors"
          >
            Right
          </button>
          <button
            onClick={() => setPosition(bottomPosition)}
            className="text-center text-white py-2 rounded hover:bg-blue-800 hover:text-white transition-colors"
          >
            Bottom
          </button>
          <button
            onClick={() => setPosition(leftPosition)}
            className="text-center text-white py-2 rounded hover:bg-blue-800 hover:text-white transition-colors"
          >
            Left
          </button>
        </div>
        <div className="flex flex-col gap-4">
          <button
            onClick={isAdmin ? navigatePrivate : handleDrawerClose}
            className="text-center bg-blue-700 text-white py-2 rounded hover:bg-blue-800 hover:text-white transition-colors"
          >
            Login
          </button>
          <button
            onClick={handleDrawerClose}
            className="text-center bg-blue-200 text-blue-700 py-2 rounded hover:bg-blue-300 hover:text-blue-800 transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
