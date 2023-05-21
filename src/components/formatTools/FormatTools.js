import { useReducer } from "react";
import { Divider } from "@mui/material";
import Fit from "./Fit";
import NormalText from "./NormalText";
import MoreFonts from "./MoreFonts";


const FormatTools = () => {

  return (
    <div className="bg-[#EDF2FA] px-3 py-1 my-3 w-full rounded-full text-[#47484A] text-sm">
      <div className="flex">

        <Fit
        />

        <Divider orientation="vertical" flexItem />

        <NormalText
        />

        <MoreFonts
        />
      </div>
    </div>
  );
};
export default FormatTools;
