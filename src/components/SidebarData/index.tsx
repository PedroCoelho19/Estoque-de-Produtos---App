import { datas } from "../../components/Datas/index";
import { IAnimationBar } from "../../@types";
import React from "react";
interface ITooltipProps {
  children: React.ReactNode;
  tooltip?: string;
}
const SidebarData:React.FC<IAnimationBar> = ({ toggle }) => {
  const lastItemIndex = datas.length - 1;

  return (
    <div className="">
      {datas.map((data, index) => (
        <div
          className={` group ${toggle ? "last:w-[3.4rem] last:-m-1" : "last:w-[16rem] last:-m-1"} flex items-center mt-2 p-3  rounded-lg cursor-pointer transition-all duration-500 ${index === lastItemIndex ? "last:hover:bg-red-500" : ""} last:absolute left-3 bottom-4 hover:bg-gray-500`}
          key={data?.id}>
          <div className="items-center justify-center text-[10px] text-gray-100 ml-1">
            { 
            !toggle ? data?.icon : 
              <Tooltip tooltip={data?.text}>
                 {data?.icon}
              </Tooltip>
            }
          </div>
          <div
            className={`${toggle ? "opacity-0 delay-100" : "delay-100"} text-[1rem] text-gray-100 whitespace-pre ml-5`}
          >            
           {toggle ? null : data?.text}
          </div>
          <div />
        </div>
      ))}
    </div>
  );
};




const Tooltip:React.FC<ITooltipProps> = ({children,tooltip}) => {
  return (
    <div className="tooltip relative inline-block">
      {children}
      <div className="tooltiptext bg-gray-700 text-white text-center rounded-md p-2 opacity-0 transition-opacity duration-300 absolute z-10 bottom-8 left-1/2 transform -translate-x-1/2 text-sm">
        {tooltip}
      </div>
    </div>
  );
};


export default SidebarData;



