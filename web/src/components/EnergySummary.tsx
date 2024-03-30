import React from "react";
import { FiMonitor, FiBattery, FiBatteryCharging } from "react-icons/fi";
import { EnergySummaryProps } from "./interfaces";
import solar from "../../src/assets/solar.png"

const EnergySummary: React.FC<EnergySummaryProps> = ({
  totalEnergy,
  averageVoltage,
  averageWattage,
}) => {
  return (
    <div className="bg-white p-2 shadow-[0_8px_30px_rgb(0,0,0,0.06)] rounded-md">
      <h2 className="text-2xl font-semibold">Energy Overview</h2>
      <div className="grid grid-cols-1 xl:grid-cols-2  ">
        <div className="flex items-center xl:justify-center w-full">
          <div className='w-full'>
            <p className="flex items-center mb-2 text-xl font-medium">
              <FiBattery className="mr-2 text-green-500" />
              Average Wattage:
              <b className="text-xl ml-2">{averageWattage} W</b>
            </p>

            <p className="flex items-center text-xl font-medium mb-1 ">
              <FiBatteryCharging className="mr-2 text-red-500" />
              Average Voltage:
              <b className="text-xl ml-2">{averageVoltage} V</b>
            </p>

            <p className="flex items-center text-xl font-medium ">
            <FiMonitor className="mr-2" />
             
            
             Total Energy Generated:
             
              <b className="text-xl ml-2">{totalEnergy}  KWh</b>
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

export default EnergySummary;
