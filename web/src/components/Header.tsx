// Header.tsx
import React from "react";

const Header: React.FC = () => {
  return (
    <div className="flex-1 flex flex-col overflow-hidden bg-white shadow-[0_8px_30px_rgb(0,0,0,0.06)]">
      {/* Header */}
      <header>
        <div className="flex items-center justify-between px-6 py-3 border-b">
          <div>
            <h1 className="text-2xl font-semibold text-gray-800">
              Solar Panel Monitoring System
            </h1>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
