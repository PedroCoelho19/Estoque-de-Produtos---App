import React from "react";
import RenderConditional from "../../utils/RenderConditional";

interface Button {
  action?: () => void;
  title?: string;
}

interface ModalButtonsOptProps {
  isOpen: boolean;
  onClose: () => void;
  actionsButtons?: Button[];
}

const ButtonsGroup: React.FC<ModalButtonsOptProps> = ({ isOpen, onClose, actionsButtons = [] }) => {

  const Actions: React.FC = () => {
    return (
      <>
        {actionsButtons?.map((button, index) => {
          if (!button?.action) return null;

          return (
            <button
              key={index}
              onClick={button?.action}
              type="button"
              className="w-full text-white bg-gray-900 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-700 "
            >
              <div className="w-full">
                <p className="font-semibold text-1xl">{button?.title}</p>
              </div>
            </button>
          );
        })}
      </>
    );
  };

  return (
    <>
      <RenderConditional istrue={isOpen}>
        <div
          className="fixed inset-0 flex items-center justify-center bg-white-500 bg-opacity-10 backdrop-blur-sm shadow-2xl "
          onClick={onClose}
        >
          <div className=" bg-slate-300 w-96 h-auto p-2 rounded-lg relative">
            <div className="w-full h-full p-2 flex-col space-y-3 items-center">
              <Actions />
            </div>
          </div>
        </div>
      </RenderConditional>
    </>
  );
}

export default ButtonsGroup;
