// PanelSummary.tsx
import React from "react";
import { FiMonitor, FiCheckCircle, FiAlertTriangle } from "react-icons/fi";
import { PanelSummaryProps } from "./interfaces";
import solar from "../../src/assets/solar.png"

const PanelSummary: React.FC<PanelSummaryProps> = ({
  healthyCount,
  weakCount,
}) => {
  return (
    <div className="bg-white p-2 shadow-[0_8px_30px_rgb(0,0,0,0.06)] rounded-md">
      <h2 className="text-2xl font-semibold">Panel Overview</h2>

      <div className="grid grid-cols-1 xl:grid-cols-2  ">
        <div className="flex items-center xl:justify-center">
          <div>
            <p className="flex items-center mb-2 text-xl font-medium">
              <FiCheckCircle className="mr-2 text-green-500" /> Healthy Panels:
              <b className="text-xl ml-2">{healthyCount}</b>
            </p>
            <p className="flex items-center mb-2 text-xl font-medium">
              <FiAlertTriangle className="mr-2 text-red-500" /> Weak Panels:
              <b className="text-xl ml-2">{weakCount}</b>
            </p>


            <p className="flex items-center text-xl font-medium">
            <FiMonitor className="mr-2" />
            Total Panels:
            <b className="text-xl ml-2">{ healthyCount + weakCount}</b>
            </p>



          </div>
        </div>
        <div className='ml-14'>
          <img src={solar} className="ml-2 h-48 w-3/4" ></img>
        </div>
      </div>
    </div>
  );
};

export default PanelSummary;
