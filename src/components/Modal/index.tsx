import React from "react";
import { XCircle } from 'lucide-react';

interface IModal{
  isOpen?: boolean;
  onClose?: () => void;
  children?: JSX.Element;
  title?: string;
}

 const Modal:React.FC<IModal> = ({ isOpen, onClose, children,title }) => {
  return (
  <>
  {isOpen && (
  <div className="transition ease-in-out delay-700 duration-300 fixed inset-0 flex items-center justify-center bg-teal-100 bg-opacity-10 backdrop-blur-sm shadow-2xl" onClick={onClose}>
   <div className="bg-white w-full h-96 sm:w-96 md:w-1/2 lg:w-2/3 xl:w-1/2 p-8 rounded-lg relative">
    <div className="mb-6 flex justify-center">
      <h2 className="text-1xl font-bold text-center w-full">{title}</h2>
      <button className="text-blue-950 hover:text-red-700" onClick={onClose}>
        {<XCircle />}
      </button>
    </div>
    <div className="flex items-center justify-center">tijuca-est  
      <div>{children}</div>
    </div>
   </div>
  </div>


 )}
 </>
  );
}

export default Modal

