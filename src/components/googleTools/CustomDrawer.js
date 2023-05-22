import CloseIcon from "@mui/icons-material/Close";
import CircularProgress from "@mui/material/CircularProgress";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { useEffect, useState } from "react";
import { BlackTooltip } from "../../CustomCss/customCss";

const CustomDrawer = (props) => {
  const { handleDrawer, title, componentToRender, linkTo } = props;
  const [loading, setLoading] = useState(true);

  const handleNewTab = (link) => {
    window.open(link, "_blank")
  }

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);
  return (
    <div className="w-[400px] h-full bg-white py-5 shadow-md  ml-2 overflow-y-scroll relative">
      {loading ? (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          {" "}
          <CircularProgress />
        </div>
      ) : (
        <div>
          <div className="flex justify-between items-center mx-3 text-[#707579]">
            <p className="text-[14px]">{title || ""}</p>
            <div className="flex justify-between items-center  w-[20%] ">
              <div className="cursor-pointer" onClick={()=>handleNewTab("https://www.google.com/maps/place/Bengaluru,+Karnataka/@12.9537893,77.3005824,10z/data=!3m1!4b1!4m6!3m5!1s0x3bae1670c9b44e6d:0xf8dfc3e8517e4fe0!8m2!3d12.9715987!4d77.5945627!16zL20vMDljMTc")}>
                <BlackTooltip title={"Open In New Tab"}>
                  <OpenInNewIcon
                    style={{ fontSize: "20px", color: "#707579" }}
                  />
                </BlackTooltip>
              </div>
              <div className="cursor-pointer" onClick={() => handleDrawer()}>
                <BlackTooltip title={"Close"}>
                  <CloseIcon style={{ fontSize: "20px", color: "#707579" }} />
                </BlackTooltip>
              </div>
            </div>
          </div>

          <div>{componentToRender || ""}</div>
        </div>
      )}
    </div>
  );
};

export default CustomDrawer;
