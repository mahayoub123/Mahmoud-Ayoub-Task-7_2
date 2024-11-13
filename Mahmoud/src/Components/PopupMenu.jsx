import React, { useState } from "react";

const PopupMenu = (isOpen) => {
  return (
    <div>
      {isOpen && (
        <div className="menu">
          <ul>
            <li>Option 1</li>
            <li>Option 2</li>
            <li>Option 3</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default PopupMenu;
