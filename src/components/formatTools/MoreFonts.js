import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { useState } from "react";

export const moreFonts = [
    { text: "Arial", font: "14px" },
    { text: "sans", font: "14px" },
    { text: "cursive", font: "14px" },
    { text: "Geogia", font: "15px" },
    { text: "Lora", font: "14px" },
    { text: "Impact", font: "18px" },
  ];

const MoreFonts = (props) => {

  const [toggle, setToggle] = useState(false)
  const [label, setlabel] = useState('Arial')


  const handleSelect = (text) =>{
    setlabel(text)
    setToggle(false)
  }

    return(
        <div
        className={`w-[80px]  mx-2 p-1 relative cursor-pointer hover:bg-slate-200 rounded-md`}
        onClick={() =>
          toggle ? setToggle(false) : setToggle(true)
        }
      >
        <div className={`flex items-center`}>
          <p className="pr-2">{label || ''}</p>
          {toggle ? (
            <ArrowDropUpIcon />
          ) : (
            <ArrowDropDownIcon />
          )}{" "}
        </div>

        {toggle && (
          <div
            onMouseLeave={() => setToggle(false)
            }
            className="w-[200px] py-2 bg-white rounded-sm font-[500] text-center absolute shadow-2xl right-0"
          >
            {moreFonts.map(({ text, font }, index) => (
              <p
                key={index + text}
                onClick={()=>handleSelect(text)}
                className={`py-2  hover:bg-slate-100 text-[${font}]`}
              >
                {text || ""}
              </p>
            ))}
          </div>
        )}
      </div>
    )
}


export default MoreFonts;