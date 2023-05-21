import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { useState } from "react";


export const normalText = [
    { text: "Normal Text", font: "14px" },
    { text: "Heading-1", font: "14px" },
    { text: "Title", font: "32px" },
    { text: "Heading-2", font: "18px" },
    { text: "Random Text", font: "20px" },
  ];

const NormalText = (props) => {
  const [toggle, setToggle] = useState(false)
  const [label, setlabel] = useState('Normal Text')


  const handleSelect = (text) =>{
    setlabel(text)
    setToggle(false)
  }
    return(
        <div
        className={`w-[120px] mx-2 p-1 relative cursor-pointer hover:bg-slate-200 rounded-md`}
        onClick={() =>
          toggle ? setToggle(false) : setToggle(true)
        }
      >
        <div className="flex items-center">
          <p className="pr-2">{label || ''}</p>
          {toggle ? (
            <ArrowDropUpIcon />
          ) : (
            <ArrowDropDownIcon />
          )}
        </div>

        {toggle && (
          <div
            onMouseLeave={() => setToggle(false)}
            className="w-[200px]  bg-white rounded-sm font-[500] text-center absolute shadow-2xl left-0"
          >
            {normalText.map(({ text, font }, index) => (
              <p
                key={index + text}
                onClick={()=> handleSelect(text)}
                className={`py-8 border border-b-0 hover:bg-slate-100 text-[${font}]`}
              >
                {text || ""}
              </p>
            ))}
          </div>
        )}
      </div>
    )
}

export default NormalText;