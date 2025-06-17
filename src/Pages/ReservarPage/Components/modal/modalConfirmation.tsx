import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
interface Props {
  isOpen: boolean;
  onClose: () => void;
  message: string;
}

export default function ModalConfirmation({ isOpen, onClose, message }: Props) {
  const navigate = useNavigate();
  const closeModal = () => {
    navigate("/");
  };
  if (!isOpen) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      exit={{ opacity: 0, x: -20 }}
      className="fixed top-0 left-0 w-full h-full bg-black/80 flex justify-center items-center"
    >
      <div className="bg-white rounded shadow-md flex flex-col items-center gap-4 py-8 px-4 md:px-8 md:py-4">
        <div>
          <h2 className="text-green-500 text-center font-bold text-lg mb-2">
            Pedido Confirmado!
          </h2>
          <p className="text-gray-600">{message}</p>
        </div>
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          onClick={closeModal}
        >
          Fechar
        </button>
      </div>
    </motion.div>
  );
}
