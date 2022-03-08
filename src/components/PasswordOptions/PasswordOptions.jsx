import "./PasswordOptions.css";
import React from "react";

function PasswordOptions() {
  return (
    <div className="flex">
      <div className="mr-5">
        <input type="checkbox" className="mr-1"/>
        <label className="text-lg">Alphabetical Characters</label>
      </div>

      <div className="mr-5">
        <input type="checkbox" className="mr-1"/>
        <label className="text-lg">Numbers</label>
      </div>

      <div>
        <input type="checkbox" className="mr-1"/>
        <label className="text-lg">Special Characters</label>
      </div>
    </div>
  );
};

export default PasswordOptions;
