// PanelCell.tsx
import React from "react";
import { PanelCellProps } from "./interfaces";
import { FiArrowDown, FiArrowUp, FiSun } from "react-icons/fi";

const PanelCell: React.FC<PanelCellProps> = ({ panel }) => {
  const isWeak = panel.voltage < 10 && panel.wattage < 200;

  return (
    <div
      className={`justify-between border rounded-md p-2 flex `}
    >
      <div>
      <div className="flex flex-row justify-between items-center space-x-1">
      <div className='mr-1'><FiSun/></div>
           <span className="text-xs">
          
         Panel:<span className="font-semibold mb-1">#{panel.id}</span>  
   
  </span>
  <div>
  {isWeak ? 
    <span className='bg-red-300 px-2 ml-5 border rounded-md text-xs'>Weak</span> : 
    <span className='bg-green-300 px-2 ml-5 border rounded-md text-xs'>Healthy</span>
  }
  </div>
</div>
<hr className="w-full border-b-1 border-gray-500"/>
       
        
        <p className="text-xs">
          Voltage: <span className="font-semibold">{panel.voltage}V</span>
        </p>
        <p className="text-xs">
          Wattage: <span className="font-semibold"> {panel.wattage}W</span>
        </p>
      </div>
     
    </div>
  );
};

export default PanelCell;
