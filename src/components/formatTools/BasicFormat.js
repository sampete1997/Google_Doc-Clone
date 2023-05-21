import FormatBoldSharpIcon from "@mui/icons-material/FormatBoldSharp";
import FormatItalicSharpIcon from "@mui/icons-material/FormatItalicSharp";
import FormatUnderlinedSharpIcon from "@mui/icons-material/FormatUnderlinedSharp";
import TextFormatSharpIcon from "@mui/icons-material/TextFormatSharp";
import BrushSharpIcon from "@mui/icons-material/BrushSharp";
import { useEffect, useRef, useState } from "react";

const iconStyle = { color: "#47484A", fontSize: "19px"};
const wrapperStyle = "hover:bg-slate-200 p-1.5 mx-0.5 rounded-md cursor-pointer";
const iDs = ["bold", "sharp", "italic", "underline", "brush"];

const BasicFormat = () => {

  const ref = useRef(null);

  const handleSeleced = (event) => {

    if (iDs.includes(event.target.parentElement.id)) {
      let style = event.target.parentElement.style;

      if (style.backgroundColor === "rgb(211, 226, 253)") {
        style.backgroundColor = "";
      } else {
        style.backgroundColor = "rgb(211, 226, 253)";
      }
    }
  };

  return (
    <div
      className="flex items-center w-[180px]  justify-between mx-2"
      ref={ref}
      onClick={handleSeleced}
    >
      <div className={wrapperStyle} id="bold">
        <FormatBoldSharpIcon style={iconStyle} />
      </div>

      <div className={wrapperStyle} id="italic">
        <FormatItalicSharpIcon style={iconStyle} />
      </div>

      <div className={wrapperStyle} id="underline">
        <FormatUnderlinedSharpIcon style={iconStyle} />
      </div>

      <div className={wrapperStyle} id="sharp">
        <TextFormatSharpIcon style={iconStyle} />
      </div>

      <div className={wrapperStyle} id="brush">
        <BrushSharpIcon style={iconStyle} />
      </div>
    </div>
  );
};

export default BasicFormat;
