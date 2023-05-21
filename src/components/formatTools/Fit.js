import React, { useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

const FitData = [
  { text: "Fit"},
    { text: "25%"},
    { text: "50%"},
    { text: "75%" },
    { text: "100%" },
    { text: "125%" },
    { text: "150%" },
    { text: "175%" },
    { text: "200%" },
  ];


export default function Fit(props) {

  const [toggle, setToggle] = useState(false)
  const [label, setlabel] = useState('Fit')


  const handleSelect = (text) =>{
    setlabel(text)
    setToggle(false)
  }

    return (
        <div
        className={`mr-2 p-1 relative cursor-pointer hover:bg-slate-200 rounded-md`}
        onClick={() =>
          toggle ? setToggle(false) : setToggle(true)
        }
      >
        <div className="flex items-center">
          <p className="pr-2">{label}</p>
          {toggle ? (
            <ArrowDropUpIcon />
          ) : (
            <ArrowDropDownIcon />
          )}
        </div>

        {toggle && (
          <div
            onMouseLeave={() => setToggle(false)}
            className="w-[70px]  bg-white rounded-sm py-2 font-[500] text-center absolute shadow-2xl"
          >
            {FitData.map(({ text, font }, index) => (
              <p
                key={index + text}
                onClick={()=>handleSelect(text)}
                className={`py-2  hover:bg-slate-100 text-[${font || '14px'}]`}
              >
                {text || ""}
              </p>
            ))}
          </div>
        )}
      </div>
    )
}