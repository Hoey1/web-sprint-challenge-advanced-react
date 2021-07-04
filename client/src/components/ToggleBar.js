import React, { useState } from "react";
import { useDarkMode } from "../hooks/useDarkMode";

const ToggleBar = (props) => {
  return (
    <nav className="navbar">
      <div className="dark-mode__toggle">
        <div
          onClick={props.toggleMode}
          className={props.darkMode ? "toggle toggled" : "toggle"}
        />
      </div>
    </nav>
  );
};

export default ToggleBar;
