import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import { useState } from "react";

const iconStyle = { color: "#47484A", fontSize: "19px" };
const wrapperStyle =
  "hover:bg-slate-200 p-1.5 mx-0.5 rounded-md cursor-pointer";

const Aligners = () => {
  const [selectedComp, setSelectedComp] = useState(
    <FormatAlignLeftIcon style={iconStyle} />
  );
  const [showOptions, setshowOptions] = useState(false);


  const handleSelect = (component) => {
    setSelectedComp(component);
    setshowOptions(false);
  };
  const components = [
    <FormatAlignLeftIcon style={iconStyle} />,
    <FormatAlignCenterIcon style={iconStyle} />,
    <FormatAlignRightIcon style={iconStyle} />,
    <FormatAlignJustifyIcon style={iconStyle} />,
  ];

  return (
    <div className="mx-2 flex relative">
      <div>
        <div
          className={`relative ${wrapperStyle}`}
          onClick={() => setshowOptions(true)}
        >
          {selectedComp}

          <ArrowDropDownIcon />
        </div>

        {showOptions && (
          <div
            onMouseLeave={() => setshowOptions(false)}
            className="flex items-center  mx-2 absolute bg-[#EDF2FA] border border-1 left-0"
          >
            {components.map((component) => {
              return (
                <div
                  className={wrapperStyle} 
                  onClick={() => handleSelect(component)}
                >
                  {component}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Aligners;
