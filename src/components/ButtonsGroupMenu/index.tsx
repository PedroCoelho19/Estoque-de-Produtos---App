import { ReactNode } from "react";
import { RenderConditional } from "../../utils";

interface Button {
  action?: () => void;
  title?: string;
  description?: string;
  icon?: ReactNode;

}
interface IButtonsMenu {
  actionsButtons?: Button[];
  oneColun?:boolean;
}

const ButtonsGroupMenu: React.FC<IButtonsMenu> = ({ actionsButtons = [], oneColun }) => {
  const Actions: React.FC = () => {
    return (
      <>
        { 
         actionsButtons?.map((button, index) => {
          if (!button?.action) return null;

          return (
            <button
              type="button"
              key={index}
              className={`bg-opacity-100 hover:bg-gray-900 min-h-[10vh] ${oneColun ? 'w-[100%]' : 'w-[40%]'} flex-grow m-10 flex bg-gray-600 rounded-full justify-between items-center flex-row p-1 border border-solid border-black`}
              onClick={button?.action}
            >

              <div className='action-button-group  flex flex-row justify-between items-center w-full'>
                <div className="w-full h-full items-center justify-start ml-4 flex ">
                  <div className="w-[70%] text-start m-1 justify-center items-center">
                    <p className="font-bold text-lg text-white">{button?.title}</p>
                    <h1 className="font-sans text-sm text-white">{button?.description}</h1>
                  </div>
                </div>
                <div className="w-auto  min-w-[20vw] h-full items-center justify-end flex">
                  <div className="flex bg-yellow-400 min-h-[9vh] w-[80px] items-center justify-center rounded-full border border-solid border-black">
                          {button?.icon}
                  </div>
                </div>
              </div>
            </button>
           ); 
          })
        }
      </>
    );
  };

        return (
          <>
            <RenderConditional istrue={oneColun}>
              <div className="card-group-buttons backdrop-opacity-10 backdrop-invert bg-white/30 flex flex-col mt-14 ml-5 mr-5 pr-20 w-full bg-gray-300 opacity-90 rounded-xl overflow-hidden max-h-[85%] -z-1">
                <div className="list-group-buttons overflow-x-hidden auto  pl-10 pr-10">
                  <Actions />
                  </div>
              </div>
            </RenderConditional>
            <RenderConditional istrue={!oneColun}>
              <div className="flex flex-wrap flex-row ">
                <Actions />
              </div>
            </RenderConditional>
          </>
          
        );
};

export default ButtonsGroupMenu;

