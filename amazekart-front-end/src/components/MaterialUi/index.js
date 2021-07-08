import React, { useState } from "react";
import "./style.css";



const DropdownMenu = (props) => {
    return (
      <div className="headerDropdownContainer">
        {props.menu}
        <div className="dropdown">
          <div className="upArrowContainer">
            <div className="upArrow"></div>
          </div>
          <div className="dropdownMenu">
            {props.firstMenu}
            <ul className="headerDropdownMenu">
              {props.menus &&
                props.menus.map((item, index) => (
                  <li key={index}>
                    <a
                      onClick={(e) => {
                        if (item.onClick) {
                          e.preventDefault();
                          item.onClick && item.onClick();
                        }
                      }}
                      href={`${item.href}`}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    );
  };
  
  const Anchor = (props) => {
    return (
      <button {...props} className="anchorButton">
        {props.name}
      </button>
    );
  };
  export {  DropdownMenu, Anchor };