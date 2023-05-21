import React, {useState} from "react";
import CustomDropDown from "../CustomDropDown";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
const fontSizeOption = [
    {text: 8},
    {text: 10},
    {text: 16},
    {text: 24},
    {text: 38},
    {text: 52},
    {text: 76},
    {text: 96}
]

const AdjustFontSize = () => {

    const [size, setSize] = useState(16);
    const sizeDown = () => {
      size <= 8 ? setSize(8) : setSize(size - 1);
    };
  
    const sizeUp = () => {
      size >= 96 ? setSize(96) : setSize(size + 1);
    };

    const getSelectedValue = (value) => {
        setSize(value)
    }

    return (
        <div className=" flex justify-evenly items-center mr-2 w-[90px]">
    
        <div className="p-1 cursor-pointer hover:bg-slate-200 rounded-md" onClick={sizeDown}><RemoveIcon style={{color: "#444746", fontSize: "18px"}}/> </div>
        <CustomDropDown
          options={fontSizeOption}
          labelStyle={"p-0 border border-1 border-gray-500 rounded-md px-2  "}
          wrapperClass={"mx-1 p-0"}
          defaultValue={8}
          value={size}
          onSelectOption={getSelectedValue}
          labelSize={"14px"}
          sx={"text-[16px]"}
          className={"w-[45px] text-sm font-[300]"}
          hideIcon={true}
          hideCheckIcon={true}
        />
        <div onClick={sizeUp} className="p-1 rounded-md cursor-pointer hover:bg-slate-200"><AddIcon style={{color: "#444746", fontSize: "18px"}}/> </div>
      </div>
    )
}

export default AdjustFontSize;