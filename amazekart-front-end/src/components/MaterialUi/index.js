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
        {props.icon && props.icon}
      </button>
    );
  };

  const MaterialInput = (props) => {
    const [focus, setFocus] = useState(props.value === "" ? false : true);
    const [touch, setTouch] = useState(false);
  
    return (
      <div className="materialInput">
        <label
          className={`label ${focus ? "focus" : ""}`}
          style={{
            top: 0,
            lineHeight: "none",
          }}
        >
          {props.label && `Enter ${props.label}`}
        </label>
        <div
          style={{
            display: "flex",
          }}
        >
          <input
            className="input"
            type={props.type}
            value={props.value}
            onChange={props.onChange}
            onFocus={(e) => {
              setFocus(true);
              setTouch(true);
            }}
            onBlur={(e) => {
              if (e.target.value === "") {
                setFocus(false);
              } else {
                setTouch(false);
              }
            }}
          />
          {props.rightElement ? props.rightElement : null}
        </div>
        {touch && (
          <div
            style={{
              fontSize: "10px",
              color: "red",
              fontWeight: 500,
            }}
          >{`${props.label} is Required`}</div>
        )}
      </div>
    );
  };
  

  const MaterialButton = (props) => {
    const onClick = () => {
      props.onClick && props.onClick();
    };
    return (
      <div
        style={{
          width: "100%",
          ...props.style,
        }}
      >
        <button
          className="materialButton"
          style={{
            backgroundColor: props.bgColor,
            color: props.textColor,
            fontSize: props.fontSize,
            marginBottom: props.marginBottom
          }}
          onClick={onClick}
        >
          {props.icon && props.icon}
          {props.title && props.title}
        </button>
      </div>
    );
  };

  const Breed = (props) => {
    return (
      <div className="breed">
        <ul>
          {props.breed &&
            props.breed.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.name}</a>
                {props.breedIcon}
              </li>
            ))}
        </ul>
      </div>
    );
  };

  export {  DropdownMenu, Anchor, MaterialButton,  MaterialInput,Breed };