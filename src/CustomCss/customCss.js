import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import styled from "@emotion/styled";


export const BlackTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: "black",
      padding: "2px 10px 2px 10px",
      borderRadius: "5px",
      fontSize:"13px"
    },
  }));


  export const GrayTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: "#444746",
      padding: "2px 10px 2px 10px",
      borderRadius: "5px",
      fontSize:"13px"
    },
  }));