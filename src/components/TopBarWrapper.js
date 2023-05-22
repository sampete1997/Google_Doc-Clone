import MenuLayout from "./MenuLayout";
import TitleBar from "./TitleBar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import VideoCameraBackOutlinedIcon from "@mui/icons-material/VideoCameraBackOutlined";
import HistoryIcon from "@mui/icons-material/History";
import { useContext, useState } from "react";
import Modal from "@mui/material/Modal";
import PublicIcon from "@mui/icons-material/Public";
import ShareModalContent, { options } from "./ShareModalContent";
import { ShareDocContext } from "./GlobalContext/DocShareContext";
import { openLinkNewTab } from "./GoogleTools";

const TopBarWrapper = () => {
  const [toggle, setToggle] = useState(false);
  const {accessValue} = useContext(ShareDocContext)

  const handleShareModal = () => {
    setToggle(!toggle);
  };

  return (
    <div className="flex justify-between py-1 items-center">
      <div className="flex items-center ml-2 ">
        <div className="w-6 h-6 mb-2">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/01/Google_Docs_logo_%282014-2020%29.svg"
            alt="#"
          ></img>
        </div>
        <div className="mx-2">
          <TitleBar />
          <MenuLayout />
        </div>
      </div>

      <div className="flex justify-around items-center w-[300px] truncate cursor-pointer">

       <div className="hover:bg-slate-200 rounded-full p-2"><HistoryIcon style={{ fontSize: "25px", color: "#444746" }} /></div>

        <div className="hover:bg-slate-200 rounded-full p-2"><CommentOutlinedIcon style={{ fontSize: "25px", color: "#444746" }} /></div>

        <div onClick={()=>openLinkNewTab("https://meet.google.com/")} className="hover:bg-slate-200 rounded-full px-5 py-2">   <VideoCameraBackOutlinedIcon
          style={{ fontSize: "25px", color: "#444746" }}
        />
</div>
        <div
          onClick={handleShareModal}
          className="cursor-pointer shadow hover:shadow-slate-800 w-[105px] px-1 py-2.5 bg-[#C1E7FE] rounded-full   flex font-[500] text-[14px] items-center justify-center"
        >
          {accessValue === options[0].text ? <LockOutlinedIcon style={{ fontSize: "18px" }} /> : <PublicIcon
                style={{ fontSize: "18px", backgroundColor: "#C3EED0" }}
              />}
          <p className="pl-2 text-sm">Share</p>
        </div>
      </div>
      <Modal open={toggle} onClose={handleShareModal}>
        <ShareModalContent handleShareModal={handleShareModal} />
      </Modal>
    </div>
  );
};

export default TopBarWrapper;
