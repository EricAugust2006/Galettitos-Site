import React from "react";

interface Props {
  message: string;
  onClose: () => void;
}

const ErroComponent: React.FC<Props> = ({ message, onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded shadow-md p-4 w-1/2">
        <h2 className="text-red-500 text-lg mb-2">Erro</h2>
        <p className="text-gray-600">{message}</p>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={onClose}>
          Fechar
        </button>
      </div>
    </div>
  );
};

export default ErroComponent;
