import React, { useState } from "react";
import Modal from "./Modal";

const App = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200 p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Men haqimda ma'lumot</h1>

      <button
        onClick={() => setShowModal(true)}
        className="px-10 py-2 bg-orange-500 hover:bg-orange-700 text-white rounded-md shadow-lg font-semibold text-lg transition duration-200 cursor-pointer"
      >
       About
      </button>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
};

export default App;
