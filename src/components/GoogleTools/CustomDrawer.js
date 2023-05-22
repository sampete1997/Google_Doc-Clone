import CloseIcon from "@mui/icons-material/Close";
import CircularProgress from "@mui/material/CircularProgress";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { useEffect, useState } from "react";
import { BlackTooltip } from "../../CustomCss/customCss";
import { Divider } from "@mui/material";

const CustomDrawer = (props) => {
  const { handleDrawer, componentToRender, titleAndUrl } = props;
  const [loading, setLoading] = useState(true);

  const handleNewTab = (link) => {
    window.open(link, "_blank")
  }

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 800);
  }, []);
  return (
    <div className="w-[400px] h-full bg-white py-5  shadow-gray-500 shadow-md  ml-2 overflow-y-scroll relative">
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
          <div className="flex justify-between items-center mx-3 text-[#707579] mb-5">
            <p className="text-[14px]">{titleAndUrl.title || ""}</p>
            <div className="flex justify-between items-center  w-[20%] ">
              <div className="cursor-pointer" onClick={()=>handleNewTab(titleAndUrl.linkTo || "https://myaccount.google.com/xyz")}>
                <BlackTooltip title={"Open In New Tab"}>
                  <OpenInNewIcon
                    style={{ fontSize: "20px", color: "#707579" }}
                  />
                </BlackTooltip>
              </div>
              <div className="cursor-pointer" onClick={() => handleDrawer(false)}>
                <BlackTooltip title={"Close"}>
                  <CloseIcon style={{ fontSize: "20px", color: "#707579" }} />
                </BlackTooltip>
              </div>
            </div>
          </div>

          <Divider/>

          <div>{componentToRender || ""}</div>
        </div>
      )}
    </div>
  );
};

export default CustomDrawer;
