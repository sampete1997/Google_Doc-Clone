import React, { useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import DoneIcon from '@mui/icons-material/Done';
const CustomDropDown = (props) => {
  const { options, className, defaultValue, onSelectOption, sx, labelSize } = props;

  const [toggle, setToggle] = useState(false);
  const [label, setlabel] = useState(defaultValue);

  const handleSelect = (text) => {
    setlabel(text);
    onSelectOption(text);
    setToggle(false);
  };

  return (
    <div
      className={`mr-2 p-1 relative cursor-pointer hover:bg-slate-200 rounded-md`}
      onClick={() => (toggle ? setToggle(false) : setToggle(true))}
    >
      <div className="flex items-center">
        <p className={`pr-2 text-[${labelSize}]`}>{label}</p>
        {toggle ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
      </div>

      {toggle && (
        <div
          onMouseLeave={() => setToggle(false)}
          className={`w-[100px]  bg-white rounded-sm py-2 font-[500] text-center absolute shadow-2xl ${
            className || ""
          }`}
        >
          {options.map(({ text, font }, index) => (
            <div
              key={index + text}
              onClick={() => handleSelect(text)}
              className={`flex justify-start mx-4 py-2 items-center hover:bg-slate-100 text-[${font || "14px"}] ${sx || ""}`}
            >
              {label === text ? <DoneIcon style={{color: "#0957D0", marginRight: "20px" }}/> : <div className="mx-[22px]"></div>}
              <p>{text || ""}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropDown;
