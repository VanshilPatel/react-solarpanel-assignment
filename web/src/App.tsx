// App.tsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import { Panel } from "./components/interfaces";

const App: React.FC = () => {
  const [panels, setPanels] = useState<Panel[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [fetchErrorCount, setFetchErrorCount] = useState<number>(0);
  const [isServerDown, setIsServerDown] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const BASE_API_ENDPOINT = import.meta.env.VITE_API_ENDPOINT as string;
        // const response = await axios.get(BASE_API_ENDPOINT);
        const response = await axios.get("http://localhost:9000")
        setPanels(response.data);
        setError(null);
        setFetchErrorCount(0); 
        setIsServerDown(false);
      } catch (error) {
        console.error(error);
        if (fetchErrorCount >= 5) {
          setIsServerDown(true);
          clearInterval(interval);
        } 
        setFetchErrorCount(prevCount => prevCount + 1);
        
        setError("Failed to fetch data from the server. Retrying...");
       
        

      }
    };

    const interval = setInterval(fetchData, 5000);

    // Initial fetch
    fetchData();

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
    <Header />
    { error ? (
      <div className="solar-container bg-red-200 p-4 m-4 shadow-[0_8px_30px_rgb(0,0,0,0.06)] rounded-md">
      {error}
    </div>
    ) : (
      <>
        {isServerDown ? (
          
          <div className="solar-container bg-red-200 p-4 m-4 shadow-[0_8px_30px_rgb(0,0,0,0.06)] rounded-md">
          Server is down. Please try again later.
        </div>
        ) : (
          <div className="solar-container">
            <Dashboard panels={panels} />
          </div>
        )}
      </>
    )}
  </div>
  );
};

export default App;
