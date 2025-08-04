import React from "react";
import { IoMdClose } from "react-icons/io";

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div onClick={onClose} className="fixed h-full w-full bg-[#00000027] backdrop-blur-3xl flex items-center justify-center z-44 px-4">
      <div className="  bg-white rounded-xl shadow-2xl max-w-md w-full overflow-hidden relative animate-fade-in-up">
        <img src="https://i.pinimg.com/736x/16/27/c5/1627c5a6c344322634d864565b4cb67b.jpg" alt="" className="w-full h-[370px] object-cover" />
        <div className=" p-4 ">
          <h2 className="text-2xl font-bold text-gray-800 mb-3">
           Hello, I am Suvonov Asilbek
          </h2>
          <p className="text-gray-600 mb-5">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat natus rerum perspiciatis repudiandae sint consectetur quas exercitationem, quam soluta incidunt enim aliquid voluptatibus magni error iste molestias. Minima repellat facere voluptate? Tempore molestias fugit unde totam quasi facilis itaque velit.
          </p>

          <button
            onClick={onClose}
            className="bg-blue-600 text-white text-xl w-full hover:bg-blue-500 transition duration-200 mt-10 py-2 px-4 rounded-md"
          >
            Yopish
          </button>
        </div>
        <button
          className="absolute top-3 right-3 text-white bg-opacity-40 rounded-full w- h-8 flex items-center justify-center hover:bg-opacity-70 transition"
          onClick={onClose}
        >
          <IoMdClose size={20} className="cursor-pointer" />
        </button>
      </div>
    </div>
  );
};

export default Modal;
